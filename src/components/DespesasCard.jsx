function DespesaCard({
    despesa,
    index,
    editarDespesa,
    excluirDespesa
}) {
    return (
        <div className="bg-white/60 rounded-[30px] p-6">

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
                onClick={() => editarDespesa(index)}
                className="mt-4 mr-4 text-blue-500 text-sm font-semibold hover:underline"
            >
                ✏️ Editar
            </button>

            <button
                onClick={() => excluirDespesa(index)}
                className="mt-4 text-red-500 text-sm font-semibold hover:underline"
            >
                🗑 Excluir
            </button>

        </div>
    )
}

export default DespesaCard