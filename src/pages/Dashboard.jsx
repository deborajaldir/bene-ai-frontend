import { Link } from "react-router-dom"
import Layout from "../components/Layout"
import ResumoCard from "../components/ResumoCard"
import MetaCard from "../components/MetaCard"
import ContaCard from "../components/ContaCard"
import ConquistaCard from "../components/ConquistaCard"
import { metas } from "../data/metas"
import { contas } from "../data/contas"
import { conquistas } from "../data/conquistas"
import { resumo } from "../data/resumo"

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

                        {resumo.map((item) => (
                            <ResumoCard
                                key={item.titulo}
                                titulo={item.titulo}
                                valor={item.valor}
                                cor={item.cor}
                            />
                        ))}

                    </div>

                    {/* METAS */}

                    <section className="mt-8">

                        <h2 className="text-2xl font-bold text-[#4B4B4B] mb-5">
                            🎯 Suas metas
                        </h2>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                            {
                                metas.map((meta) => (
                                    <MetaCard
                                        key={meta.titulo}
                                        titulo={meta.titulo}
                                        valorAtual={meta.valorAtual}
                                        valorMeta={meta.valorMeta}
                                        progresso={meta.progresso}
                                        faltam={meta.faltam}
                                        cor={meta.cor}
                                    />
                                ))
                            }

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

                                    {
                                        contas.map((conta) => (
                                            <ContaCard
                                                key={conta.nome}
                                                nome={conta.nome}
                                                vencimento={conta.vencimento}
                                                valor={conta.valor}
                                            />
                                        ))
                                    }

                                </div>

                            </div>

                            <div className="bg-white/50 rounded-[32px] p-8">

                                <h2 className="text-3xl font-bold text-[#4B4B4B] mb-6">
                                    ✨ Pequenas conquistas
                                </h2>

                                <div className="bg-white/50 rounded-[30px] p-6">

                                    <div className="flex flex-col gap-4">

                                        {
                                            conquistas.map((conquista, index) => (
                                                <ConquistaCard
                                                    key={index}
                                                    mensagem={conquista.mensagem}
                                                    cor={conquista.cor}
                                                />
                                            ))
                                        }

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