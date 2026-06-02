import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import ResumoCard from "../components/ResumoCard"
import MetaCard from "../components/MetaCard"
import ContaCard from "../components/ContaCard"
import ConquistaCard from "../components/ConquistaCard"

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

                        <ResumoCard
                            titulo="Saldo disponível"
                            valor="R$ 3.250"
                        />

                        <ResumoCard
                            titulo="Economia do mês"
                            valor="+R$ 430"
                            cor="text-green-600"
                        />

                        <ResumoCard
                            titulo="Meta principal"
                            valor="82%"
                            cor="text-blue-600"
                        />

                    </div>

                    {/* METAS */}

                    <section className="mt-8">

                        <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                            🎯 Suas metas
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                            <MetaCard
                                titulo="🛟 Reserva de emergência"
                                valorAtual="R$ 8.200"
                                valorMeta="R$ 10.000"
                                progresso={82}
                                faltam="R$ 1.800"
                                cor="bg-green-500"
                            />

                            <MetaCard
                                titulo="✈️ Viagem"
                                valorAtual="R$ 3.000"
                                valorMeta="R$ 5.000"
                                progresso={60}
                                faltam="R$ 2.000"
                                cor="bg-blue-500"
                            />

                            <MetaCard
                                titulo="💻 Notebook"
                                valorAtual="R$ 900"
                                valorMeta="R$ 3.000"
                                progresso={30}
                                faltam="R$ 2.100"
                                cor="bg-violet-500"
                            />

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

                                    <ContaCard
                                        nome="Internet"
                                        vencimento="Vence amanhã"
                                        valor="R$ 89"
                                    />

                                    <ContaCard
                                        nome="Energia"
                                        vencimento="Vence em 5 dias"
                                        valor="R$ 120"
                                    />

                                    <ContaCard
                                        nome="Cartão Nubank"
                                        vencimento="Vence em 7 dias"
                                        valor="R$ 450"
                                    />

                                </div>

                            </div>

                            <div className="bg-white/50 rounded-[32px] p-8">

                                <h2 className="text-3xl font-bold text-[#4B4B4B] mb-6">
                                    ✨ Pequenas conquistas
                                </h2>

                                <div className="bg-white/50 rounded-[30px] p-6">

                                    <div className="flex flex-col gap-4">

                                        <ConquistaCard
                                            mensagem="✨ Você economizou R$430 este mês"
                                            cor="text-green-600"
                                        />

                                        <ConquistaCard
                                            mensagem="🌱 Sua reserva cresceu R$350"
                                            cor="text-blue-600"
                                        />

                                        <ConquistaCard
                                            mensagem="🎯 Você alcançou 82% da meta principal"
                                            cor="text-purple-600"
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    </section>

                </main>

            </div>

        </Layout >
    )
}

export default Dashboard