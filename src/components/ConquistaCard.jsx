function ConquistaCard({
    mensagem,
    cor
}) {
    return (
        <div className="bg-white/60 rounded-2xl p-4">

            <p className={`font-semibold ${cor}`}>
                {mensagem}
            </p>

        </div>
    )
}

export default ConquistaCard