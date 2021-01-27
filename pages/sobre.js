import Link from 'next/link';

/**
 * Página 'Sobre'
 */
function Sobre() {
    return (
        <div>
            <h1>Sobre</h1>

            <Link href="/">
                <a>Acessar página Home</a>
            </Link>
        </div>
    )
}

export default Sobre;