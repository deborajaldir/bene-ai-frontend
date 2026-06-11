function DespesasForm({
    indexEditando,
    nomeDespesa,
    setNomeDespesa,
    categoria,
    setCategoria,
    valor,
    setValor,
    adicionarDespesa
}) {
    return (
        <div className="bg-white/60 rounded-[30px] p-6 mt-6">

            <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                {indexEditando !== null
                    ? "Editar Despesa"
                    : "Nova Despesa"}
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
                {indexEditando !== null
                    ? "Atualizar"
                    : "Salvar"}
            </button>

        </div>
    )
}

export default DespesasForm