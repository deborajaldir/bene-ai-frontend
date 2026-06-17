import { useState } from "react"
import Layout from "../components/Layout"
import MetaForm from "../components/MetaForm"
import MetaCard from "../components/MetaCard"

function Metas() {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [nomeMeta, setNomeMeta] = useState("")
    const [valorMeta, setValorMeta] = useState("")
    const [indexEditando, setIndexEditando] = useState(null)
    const [metas, setMetas] = useState([
        {
            titulo: "🛟 Reserva de emergência",
            valorAtual: "R$ 8.200",
            valorMeta: "R$ 10.000",
            progresso: 82,
            cor: "bg-green-500",
            destaque: false
        },
        {
            titulo: "✈️ Viagem",
            valorAtual: "R$ 3.000",
            valorMeta: "R$ 5.000",
            progresso: 60,
            cor: "bg-blue-500",
            destaque: false
        },
        {
            titulo: "💻 Notebook",
            valorAtual: "R$ 900",
            valorMeta: "R$ 3.000",
            progresso: 30,
            cor: "bg-violet-500",
            destaque: false
        }
    ])
    function adicionarMeta() {

        if (!nomeMeta || !valorMeta) {
            return
        }

        const novaMeta = {
            titulo: nomeMeta,
            valorAtual: "R$ 0",
            valorMeta: `R$ ${valorMeta}`,
            progresso: 0,
            cor: "bg-pink-500",
            destaque: false
        }

        setMetas([...metas, novaMeta])

        setNomeMeta("")
        setValorMeta("")
        setMostrarFormulario(false)
    }

    function excluirMeta(indexMeta) {

        const metasAtualizadas = metas.filter(
            (_, index) => index !== indexMeta
        )

        setMetas(metasAtualizadas)
    }

    function editarMeta(index) {
        const meta = metas[index]

        setNomeMeta(meta.titulo)
        setValorMeta(meta.valorMeta.replace("R$ ", ""))

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