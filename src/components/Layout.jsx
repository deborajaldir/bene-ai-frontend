import { useState } from "react"

import Sidebar from "./Sidebar"

function Layout({ children }) {

    const [menuAberto, setMenuAberto] = useState(false)

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8DEAF] via-[#ECE2B8] to-[#E3D6A2] p-4 lg:p-8">

            <div className="lg:hidden mb-4">

                <button
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="bg-white/60 backdrop-blur-xl rounded-2xl px-4 py-3 text-2xl"
                >
                    ☰
                </button>
                {
                    menuAberto && (

                        <div className="lg:hidden bg-white/60 backdrop-blur-xl rounded-[30px] p-4 mb-4">

                            <Sidebar  mobile />

                        </div>

                    )
                }

            </div>

            <div className="max-w-[1400px] mx-auto flex gap-6">

                <Sidebar />

                <main className="flex-1">
                    {children}
                </main>

            </div>

        </div>
    )
}

export default Layout