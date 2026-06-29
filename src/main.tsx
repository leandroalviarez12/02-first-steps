import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import { MundialApp } from "./Mundialapp";

import { GrupoDetalle } from './Grupos-Mundial/GrupoDetalles';

//import { FirstStepsApp } from './FirstStepsApp';
//import { MyAwesomeApp } from './MyAwesomeApp';

/*createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <FirstStepsApp />
      <MyAwesomeApp/>

      <Routes>
        <Route path='' element={<MundialApp />} />
        <Route path='grupo-detalle' element={<GrupoDetalle />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>, //el modo (stictMode) sirve para regresar varios componentes de react. Todo lo que esta dentro del strictMode o modo estricto es un componente de react
);/
  
tip Ctrl y (.) en algun error */

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MundialApp />}>
          <Route path="grupo-detalle" element={<GrupoDetalle />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);