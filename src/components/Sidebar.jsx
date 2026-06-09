import { Link } from "react-router-dom"

function Sidebar({ mobile = false }) {
    return (
        <aside
            className={
                mobile
                    ? "flex flex-col"
                    : "hidden lg:flex w-[260px] bg-white/30 backdrop-blur-xl rounded-[36px] border border-white/30 p-6 flex-col"
            }
        >
            <h1 className="text-3xl font-extrabold text-[#4B4B4B]">
                ✨ Benê
            </h1>

            <nav className="mt-12 flex flex-col gap-3">

                <Link
                    to="/dashboard"
                    className="rounded-2xl p-4 text-[#5B5B5B]"
                >
                    🏠 Dashboard
                </Link>

                <Link
                    to="/despesas"
                    className="rounded-2xl p-4 text-[#5B5B5B]"
                >
                    💸 Despesas
                </Link>

                <Link
                    to="/metas"
                    className="rounded-2xl p-4 text-[#5B5B5B]"
                >
                    🎯 Metas
                </Link>

                <Link
                    to="/relatorios"
                    className="rounded-2xl p-4 text-[#5B5B5B]"
                >
                    📊 Relatórios
                </Link>

                <Link
                    to="/configuracoes"
                    className="rounded-2xl p-4 text-[#5B5B5B]"
                >
                    ⚙️ Configurações
                </Link>

            </nav>

        </aside>
    )
}

export default Sidebar