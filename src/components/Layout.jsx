import Sidebar from "./Sidebar"

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#E8DEAF] via-[#ECE2B8] to-[#E3D6A2] p-4 lg:p-8">

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