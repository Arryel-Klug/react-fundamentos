//Sempre importar o React nos arquivos que são de componentes

import React from "react";
import Post from "./Post";
import Header from './Header';

const posts = [
  { title: 'Title#01', subtitle: 'Sub01', likes:20 },
  { title: 'Title#02', subtitle: 'Sub02', likes:30 },
  { title: 'Title#03', subtitle: 'Sub03', likes:40 },
  { title: 'Title#04', subtitle: 'Sub04', likes:50 },
  
];

function App() {
  return (
  // <React.Fragment> ou <> 
  // Entre chaves o JSX identifica como JS

  //Props (properties)
  <>
    <Header> 
      <h2>Posts da semana</h2>  
    </Header>
    <hr />   

    {posts.map(post => (
      <Post 
        key={post.title}
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
