const temperatura = 25;

export default function ConversorTemperatura() {

    const celsiusAFahrenheit = (c: number): number => { return (c * 9 / 5) + 32 }
    const fahrenheitACelsius = (f: number): number => { return (f - 32) * 5 / 9 }



    return (
        <>
            <h3 className="text-xl text-fuchsia-950 font-bold">Conversor de Temperatura</h3>
            <p>{temperatura} °C = {celsiusAFahrenheit(temperatura)} °F </p>
            <p> 100 °F = {fahrenheitACelsius(100).toFixed(2)} °C</p>
        </>
    )
}
