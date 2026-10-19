export default function ObjectLiterals() {

  interface person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address;

  }

  interface Address {
    country: string;
    houseNo: string;
    street?: string;
  }

  const person: person = {
    firstName: 'Giselle',
    lastName: 'Morales',
    age: 19,
    address: {
      country: 'Mexico',
      houseNo: '310'
    }
  };


  return (
    <>
      <h3>Objetos Literales</h3>

      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>

    </>
  )
}

//el obejct no se puede imprimir,
// tenemos que ocupar json para que
// pueda imprimir el object
//street? indica si es opcional el signo de ?


