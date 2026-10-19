export const EstadisticasArreglo = () => {

    const calcularPromedio = (nums: number[]): number => {
        const suma = nums.reduce((total, numero) => total + numero, 0);
        return suma / nums.length;
    }

    const encontrarMaximo = (nums: number[]): number => {
        return Math.max(...nums);
    }

    const encontrarMinimo = (nums: number[]): number => {
        return Math.min(...nums);
    }

    const numeros = [8, 3, 15, 7, 22, 11, 4];



    return (
        <>
            <h3 className="text-xl text-cyan-950 font-bold">Estadisticas</h3>
            <p>Números: [{numeros.join(", ")}]</p>

            <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>

            <p>Máximo: {encontrarMaximo(numeros)}</p>

            <p>Mínimo: {encontrarMinimo(numeros)}</p>
        </>
    )
}
