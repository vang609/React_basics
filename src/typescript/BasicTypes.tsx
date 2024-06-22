export const BasicTypes = () => {
  const name: string = "En - Vang";
  const age: number = 40;
  const isActive: boolean = true;

  const skills: string[] = ["React", "ReactNative", "Angular", "Vue", "Qwik"];

  // powers.push('Next')

  return (
    <>
      <h3>Tipos básicos</h3>
      <ul>
        <li>Name: {name}</li>
        <li>Age: {age}</li>
        <li>Active: {isActive ? "true" : "false"}</li>
      </ul>
      <br />
      Skill: {skills.join(", ")}
    </>
  );
};
