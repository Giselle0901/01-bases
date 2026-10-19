
// import BasicFunctions from './typescript/BasicFunctions'
// import ObjectLiterals from './typescript/ObjectLiterals'
// import { BasicTypes } from './typescript/BasicTypes'

// import ConversorTemperatura from "./components/ConversorTemperatura"
// import Calculadora from "./components/Calculadora"
// import { CalculadoraIMC } from "./components/CalculadoraIMC"
// import { AnalizadorTexto } from "./components/AnalizadorTexto"
import { AplicadorDescuentos } from "./components/AplicadorDescuentos"
import { CarritoCompras } from "./components/CarritoCompras"
import { SistemaCalificaciones } from "./components/SistemaCalificaciones"
// import { EstadisticasArreglo } from "./components/EstadisticasArreglo"
// import { GeneradorPassword } from "./components/GeneradorPassword"

// import { ValidadorEdad } from "./components/ValidadorEdad"


// import { Counter } from "./components/Counter"

function App() {


  return (
    <div className="flex flex-col justify-center items-center min-h-svh bg-sky-100">
      <h1 className="text-3xl font-bold underline bg-sky-800">React + TS</h1>

      {/* <BasicTypes /> */}
      {/* <ObjectLiterals /> */}
      {/* <BasicFunctions /> */}
      {/* <Counter /> */}


      {/* <Calculadora />
      <ConversorTemperatura />
      <CalculadoraIMC /> */}
      {/* <ValidadorEdad />
      <AnalizadorTexto />
      <EstadisticasArreglo />
      <GeneradorPassword /> */}
      <AplicadorDescuentos />
      <SistemaCalificaciones />
      <CarritoCompras />
    </div>
  )
}

export default App
