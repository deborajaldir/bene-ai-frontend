import { useEffect, useState } from "react"
import Layout from "../components/Layout"
import { despesasMock } from "../data/mockData"
import DespesasCard from "../components/DespesasCard"
import DespesasForm from "../components/DespesasForm"

function Despesas() {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)
    
    const [nomeDespesa, setNomeDespesa] = useState("")
    const [categoria, setCategoria] = useState("")
    const [valor, setValor] = useState("")
    const [despesas, setDespesas] = useState(() => {
        try {
            const despesasSalvas = localStorage.getItem("despesas")

            return despesasSalvas
                ? JSON.parse(despesasSalvas)
                : despesasMock
        } catch {
            return despesasMock
        }
    })

    const [indexEditando, setIndexEditando] = useState(null)

    useEffect(() => {
        localStorage.setItem(
            "despesas",
        JSON.stringify(despesas)
        )
    }, [despesas])

    function adicionarDespesa() {

        if (
            !nomeDespesa.trim() ||
            !categoria.trim() ||
            !valor.trim()
        ) {
            return
        }

        if (indexEditando !== null) {

            const despesasAtualizadas = [...despesas]

            despesasAtualizadas[indexEditando] = {
                nome: nomeDespesa,
                categoria,
                valor
            }

            setDespesas(despesasAtualizadas)

            setIndexEditando(null)

        } else {

            const novaDespesa = {
                nome: nomeDespesa,
                categoria,
                valor
            }

            setDespesas([
                ...despesas,
                novaDespesa
            ])

        }

        setNomeDespesa("")
        setCategoria("")
        setValor("")

        setMostrarFormulario(false)
    }

    function excluirDespesa(indexDespesa) {

        const despesasAtualizadas = despesas.filter(
            (_, index) => index !== indexDespesa
        )

        setDespesas(despesasAtualizadas)
    }

    function editarDespesa(index) {

        const despesa = despesas[index]

        setNomeDespesa(despesa.nome)
        setCategoria(despesa.categoria)
        setValor(despesa.valor)
        setIndexEditando(index)
        setMostrarFormulario(true)
    }

    return (
        <Layout>

            <div className="max-w-[1400px] mx-auto">

                <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[36px] p-8">

                    <h1 className="text-4xl font-bold text-[#4B4B4B]">
                        💸 Despesas
                    </h1>

                    <p className="text-[#5B5B5B] mt-3 text-lg">
                        Acompanhe seus gastos do dia a dia.
                    </p>

                    <div className="mt-6 flex justify-center">

                        <button
                            onClick={() => setMostrarFormulario(!mostrarFormulario)}
                            className="bg-[#4B4B4B] text-[#F7EDC3] px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                        >
                            + Nova Despesa
                        </button>

                    </div>

                    {
                        mostrarFormulario && (
                            <DespesasForm
                                indexEditando={indexEditando}
                                nomeDespesa={nomeDespesa}
                                setNomeDespesa={setNomeDespesa}
                                categoria={categoria}
                                setCategoria={setCategoria}
                                valor={valor}
                                setValor={setValor}
                                adicionarDespesa={adicionarDespesa}
                            />
                        )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

                        {despesas.map((despesa, index) => (

                            <DespesasCard
                                key={index}
                                despesa={despesa}
                                index={index}
                                editarDespesa={editarDespesa}
                                excluirDespesa={excluirDespesa}
                            />

                        ))}

                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Despesas