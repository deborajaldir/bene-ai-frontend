import Layout from "../components/Layout" 

function Relatorios() {
    return (
        <Layout>

            <div className="max-w-[1400px] mx-auto">

                <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[36px] p-8">

                    <h1 className="text-4xl font-bold text-[#4B4B4B]">
                        📊 Relatórios
                    </h1>

                    <p className="text-[#5B5B5B] mt-3 text-lg">
                        Um resumo gentil da sua evolução financeira.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mt-6">

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <p className="text-gray-500">
                            Gastos do mês
                        </p>

                        <h2 className="text-4xl font-bold text-[#4B4B4B] mt-3">
                            R$ 2.300
                        </h2>

                    </div>

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <p className="text-gray-500">
                            Economia do mês
                        </p>

                        <h2 className="text-4xl font-bold text-green-600 mt-3">
                            R$ 430
                        </h2>

                    </div>

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <p className="text-gray-500">
                            Avanço nas metas
                        </p>

                        <h2 className="text-4xl font-bold text-blue-600 mt-3">
                            +12%
                        </h2>

                    </div>

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <p className="text-gray-500">
                            Categoria principal
                        </p>

                        <h2 className="text-3xl font-bold text-[#4B4B4B] mt-3">
                            🍔 Alimentação
                        </h2>

                    </div>

                </div>

                <section className="mt-8">

                    <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                        🌱 Destaques do mês
                    </h2>

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <div className="flex flex-col gap-4">

                            <div className="bg-white/60 rounded-2xl p-4">
                                ✨ Você economizou R$430 este mês
                            </div>

                            <div className="bg-white/60 rounded-2xl p-4">
                                🎯 Sua meta principal avançou 12%
                            </div>

                            <div className="bg-white/60 rounded-2xl p-4">
                                🌱 Você manteve seus gastos abaixo do planejado
                            </div>

                        </div>

                    </div>

                </section>

            </div>

        </Layout>
    )
}

export default Relatorios