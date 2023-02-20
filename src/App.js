//Sempre importar o React nos arquivos que são de componentes

import React from "react";
import Post from './Post'

function App() {
  return (
  // <React.Fragment> ou <> 
  // Entre chaves o JSX identifica como JS

  //Props (properties)
  <>
    <h1>JStacks</h1>    
    <h2>Posts da semana</h2>       
    <hr />

    <Post
      post={{
        title:'Título da noticia 01',
        subtitle:'Subtitulo da Noticia 01'
     }}     
    />
    <Post
      post={{
        title:'Título da noticia 02',
        subtitle:'Subtitulo da Noticia 02'
     }}     
    /> 
    <Post 
      post={{
        title:'Título da noticia 03',
        subtitle:'Subtitulo da Noticia 03'
    }}
    />
  </>
  );
};

export default App;
