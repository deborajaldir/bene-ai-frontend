function ContaCard({
    nome,
    vencimento,
    valor
}) {
    return (
        <div className="flex justify-between items-center border-b border-white/50 pb-4">

            <div>

                <h3 className="font-semibold text-[#4B4B4B]">
                    {nome}
                </h3>

                <p className="text-sm text-[#5B5B5B]">
                    {vencimento}
                </p>

            </div>

            <span className="font-bold text-[#4B4B4B]">
                {valor}
            </span>

        </div>
    )
}

export default ContaCard