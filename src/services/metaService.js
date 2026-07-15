const API_URL = "http://localhost:8080/metas";

export async function buscarMetas() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Erro ao buscar metas.");
    }

    return await response.json();
}

export async function criarMeta(meta) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(meta)
    });

    if (!response.ok) {
        throw new Error("Erro ao criar meta.");
    }

    return await response.json();
}

export async function excluirMeta(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Erro ao excluir meta.");
    }
}

export async function atualizarMeta(id, meta) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(meta)
    });

    if (!response.ok) {
        throw new Error("Erro ao atualizar meta.");
    }

    return await response.json();
}