import Layout from "../components/Layout"

function Metas() {
    return (
        <Layout>

            <div className="max-w-[1400px] mx-auto">

                <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[36px] p-8">

                    <h1 className="text-4xl font-bold text-[#4B4B4B]">
                        🎯 Suas Metas
                    </h1>

                    <p className="text-[#5B5B5B] mt-3 text-lg">
                        Acompanhe seus objetivos financeiros.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-6">

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <h3 className="font-semibold text-[#4B4B4B] text-lg">
                            🛟 Reserva de emergência
                        </h3>

                        <p className="text-[#5B5B5B] mt-4">
                            R$ 8.200 de R$ 10.000
                        </p>

                        <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                            <div className="w-[82%] h-full bg-green-500 rounded-full"></div>

                        </div>

                        <p className="mt-4 text-sm text-[#5B5B5B]">
                            82% concluído
                        </p>

                        <button className="mt-5 text-sm font-semibold text-[#4B4B4B] hover:underline">
                            Ver progresso →
                        </button>

                    </div>

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <h3 className="font-semibold text-[#4B4B4B] text-lg">
                            ✈️ Viagem
                        </h3>

                        <p className="text-[#5B5B5B] mt-4">
                            R$ 3.000 de R$ 5.000
                        </p>

                        <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                            <div className="w-[82%] h-full bg-blue-500 rounded-full"></div>

                        </div>

                        <p className="mt-4 text-sm text-[#5B5B5B]">
                            60% concluído
                        </p>

                        <button className="mt-5 text-sm font-semibold text-[#4B4B4B] hover:underline">
                            Ver progresso →
                        </button>

                    </div>

                    <div className="bg-white/60 rounded-[30px] p-6">

                        <h3 className="font-semibold text-[#4B4B4B] text-lg">
                            💻 Notebook
                        </h3>

                        <p className="text-[#5B5B5B] mt-4">
                            R$ 900 de R$ 3.000
                        </p>

                        <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                            <div className="w-[82%] h-full bg-violet-500 rounded-full"></div>

                        </div>

                        <p className="mt-4 text-sm text-[#5B5B5B]">
                            30% concluído
                        </p>

                        <button className="mt-5 text-sm font-semibold text-[#4B4B4B] hover:underline">
                            Ver progresso →
                        </button>


                    </div>

                </div>

                <div className="mt-8 flex justify-center">

                    <button
                        className="bg-[#4B4B4B] text-[#F7EDC3] px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                    >
                        + Nova Meta
                    </button>

                </div>

            </div>

        </Layout>
    )
}

export default Metas