import Layout from "../components/Layout"

function Despesas() {
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
                            className="bg-[#4B4B4B] text-[#F7EDC3] px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                        >
                            + Nova Despesa
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-8">

                        <div className="bg-white/60 rounded-[30px] p-6">

                            <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                🛒 Mercado
                            </h3>

                            <p className="text-[#5B5B5B] mt-2">
                                Alimentação
                            </p>

                            <h2 className="text-3xl font-bold text-[#4B4B4B] mt-4">
                                R$ 180
                            </h2>

                        </div>

                        <div className="bg-white/60 rounded-[30px] p-6">

                            <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                🛜 Internet
                            </h3>

                            <p className="text-[#5B5B5B] mt-2">
                                Assinaturas
                            </p>

                            <h2 className="text-3xl font-bold text-[#4B4B4B] mt-4">
                                R$ 89
                            </h2>

                        </div>

                        <div className="bg-white/60 rounded-[30px] p-6">

                            <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                💪 Academia
                            </h3>

                            <p className="text-[#5B5B5B] mt-2">
                                Saúde
                            </p>

                            <h2 className="text-3xl font-bold text-[#4B4B4B] mt-4">
                                R$ 89
                            </h2>

                        </div>

                        <div className="bg-white/60 rounded-[30px] p-6">

                            <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                🚗 Uber
                            </h3>

                            <p className="text-[#5B5B5B] mt-2">
                                Transporte
                            </p>

                            <h2 className="text-3xl font-bold text-[#4B4B4B] mt-4">
                                R$ 120
                            </h2>

                        </div>

                    </div>

                </div>

            </div>

        </Layout>
    )
}

export default Despesas