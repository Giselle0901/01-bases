// const addTwoNumbers = (a: number, b: number): string => {
//     return `${a + b}`;
// }

const calcularTriple = (num: number): number => {
    return num * 3;
}

export default function BasicFunctions() {

    return (
        <>
            <h3>Funciones Basicas</h3>
            <span>El resultado de calcular triple = {calcularTriple(5)}</span>
        </>
    )
}
