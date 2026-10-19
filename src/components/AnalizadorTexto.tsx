export const AnalizadorTexto = () => {
    const contarPalabras = (texto: string): number => {
        return texto.trim().split(/\s+/).length;
    }
    const contarVocales = (texto: string): number => {
        const encontradas = texto.match(/[aeiouáéíóú]/gi);
        return encontradas ? encontradas.length : 0;
    }

    const invertirTexto = (texto: string): string => {
        return texto.split('').reverse().join('');
    }


    const texto = "Hola mundo desde TypeScript";

    return (
        <>
            <h3 className="text-xl text-cyan-950 font-bold">Analizador de Texto </h3>
            <p>texto: "{texto}"</p>
            <p>Palabras: {contarPalabras(texto)}</p>
            <p>Vocales: {contarVocales(texto)} </p>
            <p>Invertido: {invertirTexto(texto)} </p>
        </>
    )
}
