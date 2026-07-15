import { useContext, useState } from "react"
import Layout from "../components/Layout"
import MetaForm from "../components/MetaForm"
import MetaCard from "../components/MetaCard"
import { MetasContext } from "../context/MetasContext"
import { buscarMetas, criarMeta, excluirMeta as excluirMetaAPI, atualizarMeta } from "../services/metaService";

function Metas() {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [nomeMeta, setNomeMeta] = useState("")
    const [valorMeta, setValorMeta] = useState("")
    const [indexEditando, setIndexEditando] = useState(null)
    const { metas, setMetas } = useContext(MetasContext)

    async function adicionarMeta() {

        if (!nomeMeta || !valorMeta) {
            return
        }

        if (indexEditando !== null) {

            const meta = metas[indexEditando];

            const metaAtualizada = {
                ...meta,
                titulo: nomeMeta,
                valorMeta: Number(valorMeta)
            };

            await atualizarMeta(meta.id, metaAtualizada);

            const metasAtualizadas = await buscarMetas();
            setMetas(metasAtualizadas);

            setIndexEditando(null);

        } else {

            const novaMeta = {
                titulo: nomeMeta,
                valorAtual: 0,
                valorMeta: Number(valorMeta),
                progresso: 0,
                cor: "bg-pink-500",
                destaque: false
            }

            await criarMeta(novaMeta)

            const metasAtualizadas = await buscarMetas()
            setMetas(metasAtualizadas)
        }

        setNomeMeta("")
        setValorMeta("")
        setMostrarFormulario(false)
    }

    async function excluirMeta(indexMeta) {

        const id = metas[indexMeta].id;

        await excluirMetaAPI(id);

        const metasAtualizadas = await buscarMetas();
        setMetas(metasAtualizadas);
    }

    function editarMeta(index) {
        const meta = metas[index]

        setNomeMeta(meta.titulo)
        setValorMeta(String(meta.valorMeta))

        setIndexEditando(index)
        setMostrarFormulario(true)
    }

    function destacarMeta(indexMeta) {

        const metasAtualizadas = metas.map((meta, index) => ({
            ...meta,
            destaque: index === indexMeta
        }))

        setMetas(metasAtualizadas)
    }

    console.log(metas)

    return (
        <Layout>

            <div className="max-w-[1400px] mx-auto">

                <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[36px] p-8">

                    <h1 className="text-4xl font-bold text-[#4B4B4B]">
                        🎯 Suas Metas
                    </h1>

                    <p className="text-[#5B5B5B] mt-3 text-lg">
                        Acompanhe seus objetivos financeiros.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">

                    {metas.map((meta, index) => (

                        <div key={index}>

                            <MetaCard
                                titulo={meta.titulo}
                                valorAtual={meta.valorAtual}
                                valorMeta={meta.valorMeta}
                                progresso={meta.progresso}
                                cor={meta.cor}
                                destaque={meta.destaque}
                                aoDestacar={() => destacarMeta(index)}
                                aoEditar={() => editarMeta(index)}
                            />

                            <button
                                onClick={() => excluirMeta(index)}
                                className="mt-3 text-red-500 text-sm font-semibold hover:underline"
                            >
                                🗑 Excluir
                            </button>

                        </div>

                    ))}

                </div>

                <div className="mt-8 flex justify-center">

                    <button
                        onClick={() => setMostrarFormulario(!mostrarFormulario)}
                        className="bg-[#4B4B4B] text-[#F7EDC3] px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                    >
                        + Nova Meta
                    </button>

                </div>

                {
                    mostrarFormulario && (
                        <MetaForm
                            nomeMeta={nomeMeta}
                            setNomeMeta={setNomeMeta}
                            valorMeta={valorMeta}
                            setValorMeta={setValorMeta}
                            adicionarMeta={adicionarMeta}
                        />
                    )
                }

            </div>

        </Layout>
    )
}

export default Metas