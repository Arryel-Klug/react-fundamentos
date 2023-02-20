//Sempre importar o React nos arquivos que são de componentes

import React from "react";

const category = 'Posts da Semana';

//Render

function App() {
  return (
  // <React.Fragment> ou <> 
  // Entre chaves o JSX identifica como JS
  <>
    <h1>JStacks</h1>    
    <h2>{`${category} de 2023`}</h2>    
  </>
  );
};

export default App;
