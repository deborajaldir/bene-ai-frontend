import { createContext, useEffect, useState } from "react"

export const MetasContext = createContext()

const metasIniciais = [
    {
        titulo: "🛟 Reserva de emergência",
        valorAtual: "R$ 8.200",
        valorMeta: "R$ 10.000",
        progresso: 82,
        cor: "bg-green-500",
        destaque: true
    },
    {
        titulo: "✈️ Viagem",
        valorAtual: "R$ 3.000",
        valorMeta: "R$ 5.000",
        progresso: 60,
        cor: "bg-blue-500",
        destaque: false
    },
    {
        titulo: "💻 Notebook",
        valorAtual: "R$ 900",
        valorMeta: "R$ 3.000",
        progresso: 30,
        cor: "bg-violet-500",
        destaque: false
    }
]

export function MetasProvider({ children }) {
    const [metas, setMetas] = useState(() => {
        const metasSalvas = localStorage.getItem("metas")

        return metasSalvas
            ? JSON.parse(metasSalvas)
            : metasIniciais
    })

    useEffect(() => {
        localStorage.setItem(
            "metas",
            JSON.stringify(metas)
        )
    }, [metas])

    return (
        <MetasContext.Provider value={{ metas, setMetas }}>
            {children}
        </MetasContext.Provider>
    )
}