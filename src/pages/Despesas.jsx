import { useState } from "react"
import Layout from "../components/Layout"
import { despesasMock } from "../data/mockData"

function Despesas() {

    const [mostrarFormulario, setMostrarFormulario] = useState(false)

    const [nomeDespesa, setNomeDespesa] = useState("")
    const [categoria, setCategoria] = useState("")
    const [valor, setValor] = useState("")

    const [despesas, setDespesas] = useState(despesasMock)

    function adicionarDespesa() {

        if (
            !nomeDespesa.trim() ||
            !categoria.trim() ||
            !valor.trim()
        ) {
            return
        }

        const novaDespesa = {
            nome: nomeDespesa,
            categoria,
            valor
        }

        setDespesas([
            ...despesas,
            novaDespesa
        ])

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

                            <div className="bg-white/60 rounded-[30px] p-6 mt-6">

                                <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                                    Nova Despesa
                                </h2>

                                <input
                                    type="text"
                                    placeholder="Nome da despesa"
                                    value={nomeDespesa}
                                    onChange={(e) => setNomeDespesa(e.target.value)}
                                    className="w-full p-4 rounded-2xl mb-4"
                                />

                                <input
                                    type="text"
                                    placeholder="Categoria"
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    className="w-full p-4 rounded-2xl mb-4"
                                />

                                <input
                                    type="number"
                                    placeholder="Valor"
                                    value={valor}
                                    onChange={(e) => setValor(e.target.value)}
                                    className="w-full p-4 rounded-2xl mb-4"
                                />

                                <button
                                    onClick={adicionarDespesa}
                                    className="bg-green-600 text-white px-6 py-3 rounded-2xl"
                                >
                                    Salvar
                                </button>

                            </div>

                        )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

                        {despesas.map((despesa, index) => (

                            <div
                                key={index}
                                className="bg-white/60 rounded-[30px] p-6"
                            >

                                <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                    {despesa.nome}
                                </h3>

                                <p className="text-[#5B5B5B] mt-2">
                                    {despesa.categoria}
                                </p>

                                <h2 className="text-3xl font-bold text-[#4B4B4B] mt-4">
                                    R$ {despesa.valor}
                                </h2>

                                <button
                                    onClick={() => excluirDespesa(index)}
                                    className="mt-4 text-red-500 text-sm font-semibold hover:underline"
                                >
                                    🗑 Excluir
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Despesas