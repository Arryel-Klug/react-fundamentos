//Sempre importar o React nos arquivos que são de componentes

import React, { useState } from "react";
import Post from "./Post";
import Header from './Header';
import { ThemeProvider } from './ThemeContext'



function App() {
  

  const [posts, setPosts] = useState([
    { id: Math.random(), title: 'Title#01', subtitle: 'Sub01', likes:20, read: false },
    { id: Math.random(), title: 'Title#02', subtitle: 'Sub02', likes:30, read: true },
    { id: Math.random(), title: 'Title#03', subtitle: 'Sub03', likes:40, read: false },
    { id: Math.random(), title: 'Title#04', subtitle: 'Sub04', likes:50, read: true },
    
  ]);

  

  function handleRefresh(){  
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(), 
        title: `Title#0${prevState.length+1}`, 
        subtitle: `Sub#0${prevState.length+1}`, 
        likes: 50,
        read: false,
      } 
    ]);
    
  }

  function handleRemovePost(postId){
    setPosts((prevState) => (
      prevState.filter(post => post.id != postId)
    ));
  }
  return (
  // <React.Fragment> ou <> 
  // Entre chaves o JSX identifica como JS

  //Props (properties)
  <ThemeProvider>
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
        onRemove={handleRemovePost}
        post ={post}        
      />
    ))} 
    
  </ThemeProvider>
  );
};

export default App;
