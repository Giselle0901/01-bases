export const BasicTypes = () => {

  const name: string = 'Juan';
  const age: number = 20;
  const isStudent: boolean = true;

  const superheroes: string[] = ["Ironman", "Batman", "Capitan america", "Superman"];

  return (
    <>
      <h3>Tipos Basicos</h3>
      {name} - {age} - {isStudent ? "Es un estudiante" : "No es estudiante"}

      <p>
        {superheroes.join(', ')}

      </p>


    </>
  );
}
/*  ?: Operador ternario para comparar si la persona es estudiante o no es estudiante
    join: metodo join sirve para separar los elementos
*/