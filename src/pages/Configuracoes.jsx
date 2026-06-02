import Layout from "../components/Layout"

function Configuracoes() {
    return (
        <Layout>
            <div className="max-w-[1400px] mx-auto">

                {/* HEADER */}

                <div className="bg-white/30 backdrop-blur-xl border border-white/30 rounded-[36px] p-8">

                    <h1 className="text-4xl font-bold text-[#4B4B4B]">
                        ⚙️ Configurações
                    </h1>

                    <p className="text-[#5B5B5B] mt-3 text-lg">
                        Gerencie suas informações e preferências.
                    </p>

                </div>

                {/* PERFIL */}

                <section className="mt-8">

                    <div className="bg-white/60 rounded-[30px] p-8">

                        <h2 className="text-2xl font-bold text-[#4B4B4B] mb-6">
                            👤 Perfil
                        </h2>

                        <div className="flex flex-col gap-5">

                            <div>
                                <p className="text-sm text-[#5B5B5B]">
                                    Nome
                                </p>

                                <p className="text-lg font-semibold text-[#4B4B4B]">
                                    Débora
                                </p>
                            </div>

                            <div>
                                <p className="text-sm text-[#5B5B5B]">
                                    E-mail
                                </p>

                                <p className="text-lg font-semibold text-[#4B4B4B]">
                                    debora@email.com
                                </p>
                            </div>

                        </div>

                        <button
                            className="mt-8 bg-[#4B4B4B] text-[#F7EDC3] px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                        >
                            Editar perfil
                        </button>

                    </div>

                </section>

                {/* CONTA */}

                <section className="mt-6">

                    <div className="bg-white/60 rounded-[30px] p-8">

                        <h2 className="text-2xl font-bold text-[#4B4B4B] mb-6">
                            🚪 Conta
                        </h2>

                        <button
                            className="bg-red-500 text-white px-6 py-4 rounded-2xl font-semibold hover:opacity-90 transition"
                        >
                            Sair da conta
                        </button>

                    </div>

                </section>

            </div>

        </Layout>
    )
}

export default Configuracoes