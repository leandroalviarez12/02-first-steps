import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MundialApp } from "./Mundialapp";
//import { FirstStepsApp } from './FirstStepsApp';
//import { MyAwesomeApp } from './MyAwesomeApp';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MundialApp />
    {/*<FirstStepsApp />*/}
    {/* <MyAwesomeApp/> */}
  </StrictMode>, //el modo (stictMode) sirve para regresar varios componentes de react. Todo lo que esta dentro del strictMode o modo estricto es un componente de react
);
  