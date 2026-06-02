function MetaCard({
    titulo,
    progresso,
    valorAtual,
    valorMeta,
    cor,
    faltam
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
                Faltam {faltam}
            </p>

        </div>
    )
}

export default MetaCard