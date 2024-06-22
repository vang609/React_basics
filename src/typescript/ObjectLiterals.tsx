interface Person {
  firstName: string;
  lastName: string;
  age: number;
  address: Address;
  isAlive?: boolean;
}

interface Address {
  country: string;
  houseNo: number;
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 40,
    firstName: "Enrique",
    lastName: "Vargas",
    address: {
      country: "USA",
      houseNo: 2023,
    },
  };

  return (
    <>
      <h3>Objetos literales</h3>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
};
