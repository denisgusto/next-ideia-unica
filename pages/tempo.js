/**
 * Página 'Tempo'
 * Utilizando 'getStaticProps'
 */
function Tempo(props) {
    console.log('> Passando pelo Frontend.');

    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático)</div>
        </div>
    )
}

export async function getStaticProps() {
    console.log('> Passando pelo getStaticProps().');

    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        },
        revalidate: 5 // Quantidade em segundos para revalidar os dados
    }
}

export default Tempo;