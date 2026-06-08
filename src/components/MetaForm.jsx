function MetaForm({
    nomeMeta,
    setNomeMeta,
    valorMeta,
    setValorMeta,
    adicionarMeta
}) {
    return (
        <div className="bg-white/60 rounded-[30px] p-6 mt-6 max-w-xl mx-auto">

            <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                Nova Meta
            </h2>

            <input
                type="text"
                placeholder="Nome da meta"
                value={nomeMeta}
                onChange={(e) => setNomeMeta(e.target.value)}
                className="w-full p-4 rounded-2xl mb-4 border border-white/40"
            />

            <input
                type="number"
                placeholder="Valor objetivo"
                value={valorMeta}
                onChange={(e) => setValorMeta(e.target.value)}
                className="w-full p-4 rounded-2xl mb-4 border border-white/40"
            />

            <button
                onClick={adicionarMeta}
                className="bg-green-600 text-white px-6 py-3 rounded-2xl font-semibold"
            >
                Salvar Meta
            </button>

        </div>
    )
}

export default MetaForm