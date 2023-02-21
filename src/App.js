//Sempre importar o React nos arquivos que são de componentes

import React, { useState } from "react";
import Post from "./Post";
import Header from './Header';


function App() {
  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub01', likes:20 },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub02', likes:30 },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub03', likes:40 },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub04', likes:50 },
    
  ]);
  function handleRefresh(){  
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(), 
        title: `Title#0${prevState.length+1}`, 
        subtitle: `Sub#0${prevState.length+1}`, 
        likes:50,
      } 
    ]);
    
  }
  return (
  // <React.Fragment> ou <> 
  // Entre chaves o JSX identifica como JS

  //Props (properties)
  <>
    <Header> 
      <h2>
        Posts da semana
        <button onClick={handleRefresh}>Atualizar</button>
      </h2>  
    </Header>
    <hr />   

    {posts.map(post => (
      <Post 
        key={post.id}
        likes={post.likes}
        post ={{
          title: post.title,
          subtitle: post.subtitle,
        }}
      />
    ))} 
    
  </>
  );
};

export default App;
