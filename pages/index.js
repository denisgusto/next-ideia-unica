import { useState } from "react";

/**
 * Renderização da página
 */
function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <h3>Contador</h3>
            <Contador />
        </div>
    )
}

/**
 * Componente de Contador
 */
function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;