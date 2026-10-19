export const ValidadorEdad = () => {
  const esMayorDeEdad = (edad: number): boolean => {
    if (edad >= 18) return true;
    return false;
  };
  const obtenerMensaje = (edad: number): string => {
    if (esMayorDeEdad(edad)) return "Puede Votar";
    return `Le faltan ${18 - edad} años`
  }

  const edades = [15, 18, 25, 12];

  return (
    <>
      <h3 className="text-xl text-emerald-950 font-bold">Validador de Edad</h3>
      {edades.map((edad, i) => (
        <p key={i}>Edad: {edad} : {obtenerMensaje(edad)} </p>
      ))}
    </>
  )
}