function Login() {
    return (
        <div className="relative min-h-screen bg-gradient-to-br from-[#F3E4BA] via-[#E6D09A] to-[#D8BE7A] flex items-center justify-center p-4 lg:p-8 overflow-hidden">

            {/* GLOWS */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                {/* glow topo esquerdo */}
                <div className="
        absolute
        top-[-40px]
        left-[-40px]
        w-[220px]
        h-[220px]
        rounded-full
        bg-white
        opacity-80
        blur-[55px]
    "></div>

                {/* glow centro */}
                <div className="
        absolute
        top-[35%]
        left-[32%]
        w-[260px]
        h-[260px]
        rounded-full
        bg-[#FFF7D8]
        opacity-70
        blur-[65px]
    "></div>

                {/* glow direita */}
                <div className="
        absolute
        top-[8%]
        right-[-60px]
        w-[260px]
        h-[260px]
        rounded-full
        bg-[#FFF1B8]
        opacity-80
        blur-[60px]
    "></div>

                {/* glow inferior */}
                <div className="
        absolute
        bottom-[-60px]
        right-[10%]
        w-[240px]
        h-[240px]
        rounded-full
        bg-white
        opacity-60
        blur-[55px]
    "></div>

            </div>
            {/* CONTAINER */}

            <div className="
relative
z-10
w-full
max-w-[1180px]
rounded-[40px]
border
border-white/30
bg-white/20
backdrop-blur-xl
shadow-[0_40px_80px_rgba(60,60,60,0.22)] flex
flex-col
lg:flex-row
overflow-hidden
">
                {/* ESQUERDA */}

                <div className="w-full lg:w-1/2 flex items-center justify-center px-8 lg:px-16 py-12">

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-lg">

                        <div className="w-20 h-20 bg-[#4B4B4B] rounded-full flex items-center justify-center text-4xl shadow-[0_10px_40px_rgba(0,0,0,0.18)] mb-8">
                            ✨
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#4B4B4B] leading-[0.95] tracking-[-1.8px]">
                            Organizar sua vida financeira pode ser leve.
                        </h1>

                        <p className="text-[#5B5B5B] text-base md:text-lg mt-6 leading-relaxed max-w-md">
                            A Benê ajuda você a entender seus gastos, criar metas e construir uma relação mais tranquila com seu dinheiro.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full">

                            <div className="bg-white/60 backdrop-blur-md p-5 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex-1">

                                <p className="text-sm text-gray-500">
                                    Meta de emergência
                                </p>

                                <h2 className="text-3xl font-bold text-[#4B4B4B] mt-2">
                                    82%
                                </h2>

                            </div>

                            <div className="bg-white/60 backdrop-blur-md p-5 rounded-[28px] shadow-[0_10px_40px_rgba(0,0,0,0.06)] flex-1">

                                <p className="text-sm text-gray-500">
                                    Economia este mês
                                </p>

                                <h2 className="text-3xl font-bold text-[#4B4B4B] mt-2">
                                    +R$ 350
                                </h2>

                            </div>

                        </div>

                    </div>

                </div>

                {/* DIREITA */}

                <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-10 py-12">

                    <div className="bg-[#4B4B4B] w-full max-w-[430px] p-8 md:p-9 rounded-[36px] shadow-[0_20px_60px_rgba(0,0,0,0.18)]">

                        <h2 className="text-3xl md:text-4xl font-bold text-[#F7EDC3] leading-tight">
                            Bem-vindo(a) ✨
                        </h2>

                        <p className="text-[#F3E8BE] mt-3 mb-8 text-lg">
                            Continue com a Benê
                        </p>

                        <div className="flex flex-col gap-4">

                            <input
                                type="email"
                                placeholder="E-mail"
                                className="bg-[#F5F5F4] p-4 rounded-2xl outline-none text-base placeholder:text-gray-400"
                            />

                            <input
                                type="password"
                                placeholder="Senha"
                                className="bg-[#F5F5F4] p-4 rounded-2xl outline-none text-base placeholder:text-gray-400"
                            />

                            <button
                                className="
bg-gradient-to-b
from-[#F7E7B8]
to-[#E7CD87]
text-[#4B4B4B]
p-4
rounded-2xl
font-bold
text-base
shadow-[0_10px_25px_rgba(120,100,40,0.22)]
hover:brightness-[1.03]
hover:shadow-[0_14px_30px_rgba(120,100,40,0.28)]
active:scale-[0.99]
transition-all
duration-300
"                            >
                                Entrar
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Login