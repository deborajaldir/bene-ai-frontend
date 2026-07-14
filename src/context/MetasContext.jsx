import { createContext, useEffect, useState } from "react";
import { buscarMetas } from "../services/metaService";

export const MetasContext = createContext()

export function MetasProvider({ children }) {

    const [metas, setMetas] = useState([]);

    useEffect(() => {
        async function carregarMetas() {
            try {
                const dados = await buscarMetas();
                setMetas(dados);
            } catch (error) {
                console.error("Erro ao carregar metas:", error);
            }
        }

        carregarMetas();
    }, []);

    return (
        <MetasContext.Provider value={{ metas, setMetas }}>
            {children}
        </MetasContext.Provider>
    )
}