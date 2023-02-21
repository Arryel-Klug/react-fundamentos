import React from 'react';
import PropTypes, { bool } from 'prop-types';

export default function Post(props){  
  return(
    <>
    {props.post.read 
      ? <h2>{props.post.title} Já foi lido</h2> 
      : <>
        <article>
          <strong>
            {(
              props.post.read 
              ? <s>{props.post.title}</s> 
              : props.post.title)}        
          </strong>
          <button onClick={() => props.onRemove(props.post.id)}>
            Remover
          </button>
          <br />      
          <small>{props.post.subtitle}</small>
          <br />

          Likes:{props.post.likes / 2}
      </article>
      <br />
      </>
    }
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,  
    read: bool.isRequired,
  }).isRequired,
};