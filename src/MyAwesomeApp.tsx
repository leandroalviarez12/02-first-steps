const firstName ='zandroid';
const lastName ='Natsuki';

const favoriteGames= ['minecraft', 'fornite', 'gta 5', 'brawl',]
const isActive = true;

const address = {
  zipcode: 1234,
  country: 'start park',
};

export function MyAwesomeApp() {
  return (
    <>
      <h1> {firstName} </h1>
      <h5> {lastName} </h5>

      <p
        style={{
          backgroundColor: "red",
          borderRadius: 10,
          padding: 10,
          marginTop: 30,
        }}
      >
        {" "}
        {favoriteGames.join(", ")}{" "}
      </p>

      <h1>{isActive ? "Activo" : "No activo"}</h1>

      <p>{JSON.stringify(address)}</p>
    </>
    //JSON.stringify(address): Es una función nativa de JavaScript que toma el objeto address y lo convierte en una cadena de texto (un string) con formato JSON.
    //estudiar que es un terniario react
  );
}