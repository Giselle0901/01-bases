export const SistemaCalificaciones = () => {

    const calcularPromedio = (calificaciones: number[]): number => {
        const suma = calificaciones.reduce((acumulado, numero) => acumulado + numero, 0);
        return suma / calificaciones.length;
    }

    const obtenerLetra = (promedio: number): string => {
        if (promedio >= 90) return "A";
        if (promedio >= 80) return "B";
        if (promedio >= 70) return "C";
        if (promedio >= 60) return "D";
        return "F";
    }

    const estaAprobado = (promedio: number): boolean => promedio >= 70;

    const alumnos = [
        { nombre: "Ana", califs: [95, 88, 92] },
        { nombre: "Luis", califs: [70, 65, 72] },
        { nombre: "María", califs: [85, 90, 88] },
    ];

    return (
        <>
            <h3 className="text-xl text-emerald-950 font-bold">Sistema de Calificaciones</h3>
            {alumnos.map((alumno, i) => {
                const promedio = calcularPromedio(alumno.califs);
                const letra = obtenerLetra(promedio);
                const aprobado = estaAprobado(promedio);
                return (
                    <p key={i}>
                        {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} - {aprobado ? "Aprobado" : "Reprobado"}
                    </p>
                );
            })}
        </>
    )
}