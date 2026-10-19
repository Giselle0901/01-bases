export const GeneradorPassword = () => {
    const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = "0123456789";
    const simbolos = "!@#$%^&*()_+";

    const generarPassword = (longitud: number, incluirNumeros: boolean, incluirSimbolos: boolean): string => {
        let caracteres = letras;
        if (incluirNumeros) {
            caracteres += numeros;
        }
        if (incluirSimbolos) {
            caracteres += simbolos;
        }
        let resultado = "";
        for (let i = 0; i < longitud; i++) {
            const pos = Math.floor(Math.random() * caracteres.length);
            resultado += caracteres[pos];
        }
        return resultado;
    }
    return (
        <>
            <h3 className="text-xl text-cyan-950 font-bold">Generador de Contraseñas</h3>
            <p>Basica (8): {generarPassword(8, false, false)}</p>
            <p>Media (12): {generarPassword(12, true, false)}</p>
            <p>Fuerte (16): {generarPassword(16, true, true)}</p>

        </>
    )
}
