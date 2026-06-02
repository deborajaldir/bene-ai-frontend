function ResumoCard({ titulo, valor, cor = "text-[#4B4B4B]" }) {
    return (
        <div className="bg-white/60 rounded-[30px] p-6">

            <p className="text-gray-500">
                {titulo}
            </p>

            <h2 className={`text-4xl font-bold mt-3 ${cor}`}>
                {valor}
            </h2>

        </div>
    )
}

export default ResumoCard