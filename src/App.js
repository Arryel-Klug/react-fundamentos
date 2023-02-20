//Sempre importar o React nos arquivos que são de componentes

import React from "react";
import Post from "./Post";
import Header from './Header';

function App() {
  return (
  // <React.Fragment> ou <> 
  // Entre chaves o JSX identifica como JS

  //Props (properties)
  <>
    <Header title='JStackss'> 
      <h2>Posts da semana</h2>  
    </Header>
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
