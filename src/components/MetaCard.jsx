function MetaCard({
    titulo,
    progresso,
    valorAtual,
    valorMeta,
    cor,
    destaque,
    aoDestacar,
    aoEditar
}) {
    return (
        <div className="bg-white/60 rounded-[30px] p-6">

            <h3 className="font-semibold text-[#4B4B4B] text-lg">
                {titulo}
            </h3>

            <p className="text-[#5B5B5B] mt-4">
                {valorAtual} de {valorMeta}
            </p>

            <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                <div
                    className={`h-full rounded-full ${cor}`}
                    style={{ width: `${progresso}%` }}
                />

            </div>

            <p className="mt-4 text-sm text-[#5B5B5B]">
                {progresso}% concluído
            </p>

            <button
                onClick={aoDestacar}
                className="mt-4 text-sm font-semibold text-amber-600 hover:underline"
            >
                {destaque ? "📌 Meta em foco" : "📍 Destacar meta"}
            </button>

            <button
                onClick={aoEditar}
                className="mt-2 text-blue-500 text-sm font-semibold hover:underline"
            >
                ✏️ Editar
            </button>

        </div>
    )
}

export default MetaCard