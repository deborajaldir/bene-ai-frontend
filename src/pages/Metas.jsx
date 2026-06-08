import { useState } from "react"
import Layout from "../components/Layout"
import MetaForm from "../components/MetaForm"

function Metas() {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    const [nomeMeta, setNomeMeta] = useState("")
    const [valorMeta, setValorMeta] = useState("")
    const [metas, setMetas] = useState([
        {
            titulo: "🛟 Reserva de emergência",
            valorAtual: "R$ 8.200",
            valorMeta: "R$ 10.000",
            progresso: 82,
            cor: "bg-green-500"
        },
        {
            titulo: "✈️ Viagem",
            valorAtual: "R$ 3.000",
            valorMeta: "R$ 5.000",
            progresso: 60,
            cor: "bg-blue-500"
        },
        {
            titulo: "💻 Notebook",
            valorAtual: "R$ 900",
            valorMeta: "R$ 3.000",
            progresso: 30,
            cor: "bg-violet-500"
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
            cor: "bg-pink-500"
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

                        <div
                            key={index}
                            className="bg-white/60 rounded-[30px] p-6"
                        >

                            <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                {meta.titulo}
                            </h3>

                            <p className="text-[#5B5B5B] mt-4">
                                {meta.valorAtual} de {meta.valorMeta}
                            </p>

                            <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                                <div
                                    className={`h-full rounded-full ${meta.cor}`}
                                    style={{ width: `${meta.progresso}%` }}
                                />

                            </div>

                            <p className="mt-4 text-sm text-[#5B5B5B]">
                                {meta.progresso}% concluído
                            </p>

                            <button
                                onClick={() => excluirMeta(index)}
                                className="mt-4 text-red-500 text-sm font-semibold hover:underline"
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