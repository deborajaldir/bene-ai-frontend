import { Link } from "react-router-dom"
import Layout from "../components/Layout"

function Dashboard() {
    return (
        <Layout>

            <div className="max-w-[1400px] mx-auto flex gap-6">

                {/* CONTEÚDO */}

                <main className="flex-1">

                    {/* HEADER */}

                    <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[36px] p-8">

                        <h1 className="text-4xl font-bold text-[#4B4B4B]">
                            Olá, Débora 👋
                        </h1>

                        <p className="text-[#5B5B5B] mt-3 text-lg">
                            Você economizou R$430 este mês.
                            Continue assim 🌱
                        </p>

                    </div>

                    {/* CARDS */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">

                        <div className="bg-white/60 rounded-[30px] p-6">
                            <p className="text-gray-500">
                                Saldo disponível
                            </p>

                            <h2 className="text-4xl font-bold text-[#4B4B4B] mt-3">
                                R$ 3.250
                            </h2>
                        </div>

                        <div className="bg-white/60 rounded-[30px] p-6">
                            <p className="text-gray-500">
                                Economia do mês
                            </p>

                            <h2 className="text-4xl font-bold text-green-600 mt-3">
                                +R$ 430
                            </h2>
                        </div>

                        <div className="bg-white/60 rounded-[30px] p-6">
                            <p className="text-gray-500">
                                Meta principal
                            </p>

                            <h2 className="text-4xl font-bold text-blue-600 mt-3">
                                82%
                            </h2>
                        </div>

                    </div>

                    {/* METAS */}

                    <section className="mt-8">

                        <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                            🎯 Suas metas
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                            {/* META 1 */}

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
                                    Faltam R$ 1.800
                                </p>

                            </div>

                            {/* META 2 */}

                            <div className="bg-white/60 rounded-[30px] p-6">

                                <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                    ✈️ Viagem
                                </h3>

                                <p className="text-[#5B5B5B] mt-4">
                                    R$ 3.000 de R$ 5.000
                                </p>

                                <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                                    <div className="w-[60%] h-full bg-blue-500 rounded-full"></div>

                                </div>

                                <p className="mt-4 text-sm text-[#5B5B5B]">
                                    Faltam R$ 2.000
                                </p>

                            </div>

                            {/* META 3 */}

                            <div className="bg-white/60 rounded-[30px] p-6">

                                <h3 className="font-semibold text-[#4B4B4B] text-lg">
                                    💻 Notebook
                                </h3>

                                <p className="text-[#5B5B5B] mt-4">
                                    R$ 900 de R$ 3.000
                                </p>

                                <div className="w-full h-3 bg-white rounded-full mt-4 overflow-hidden">

                                    <div className="w-[30%] h-full bg-violet-500 rounded-full"></div>

                                </div>

                                <p className="mt-4 text-sm text-[#5B5B5B]">
                                    Faltam R$ 2.100
                                </p>

                            </div>

                        </div>

                    </section>

                    {/* PRÓXIMAS CONTAS */}

                    <section className="mt-8">

                        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

                            <div className="bg-white/60 rounded-[30px] p-6">
                                <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                                    🧾 Próximas contas
                                </h2>

                                <div className="flex flex-col gap-5">

                                    {/* CONTA 1 */}

                                    <div className="flex justify-between items-center border-b border-white/50 pb-4">

                                        <div>

                                            <h3 className="font-semibold text-[#4B4B4B]">
                                                Internet
                                            </h3>

                                            <p className="text-sm text-[#5B5B5B]">
                                                Vence amanhã
                                            </p>

                                        </div>

                                        <span className="font-bold text-[#4B4B4B]">
                                            R$ 89
                                        </span>

                                    </div>

                                    {/* CONTA 2 */}

                                    <div className="flex justify-between items-center border-b border-white/50 pb-4">

                                        <div>

                                            <h3 className="font-semibold text-[#4B4B4B]">
                                                Energia
                                            </h3>

                                            <p className="text-sm text-[#5B5B5B]">
                                                Vence em 5 dias
                                            </p>

                                        </div>

                                        <span className="font-bold text-[#4B4B4B]">
                                            R$ 120
                                        </span>

                                    </div>

                                    {/* CONTA 3 */}

                                    <div className="flex justify-between items-center">

                                        <div>

                                            <h3 className="font-semibold text-[#4B4B4B]">
                                                Cartão Nubank
                                            </h3>

                                            <p className="text-sm text-[#5B5B5B]">
                                                Vence em 7 dias
                                            </p>

                                        </div>

                                        <span className="font-bold text-[#4B4B4B]">
                                            R$ 450
                                        </span>

                                    </div>

                                </div>

                            </div>

                            <div className="bg-white/50 rounded-[32px] p-8">

                                <h2 className="text-3xl font-bold text-[#4B4B4B] mb-6">
                                    ✨ Pequenas conquistas
                                </h2>

                                <div className="bg-white/50 rounded-[30px] p-6">

                                    <div className="flex flex-col gap-4">

                                        <div className="bg-white/60 rounded-2xl p-4">
                                            <p className="text-green-600 font-semibold">
                                                ✨ Você economizou R$430 este mês
                                            </p>
                                        </div>

                                        <div className="bg-white/60 rounded-2xl p-4">
                                            <p className="text-blue-600 font-semibold">
                                                🌱 Sua reserva cresceu R$350
                                            </p>
                                        </div>

                                        <div className="bg-white/60 rounded-2xl p-4">
                                            <p className="text-purple-600 font-semibold">
                                                🎯 Você alcançou 82% da meta principal
                                            </p>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </main>

            </div>

        </Layout>
    )
}

export default Dashboard