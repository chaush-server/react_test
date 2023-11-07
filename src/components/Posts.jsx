import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, []);

  return (
    <div>
      <h1>Список постов и комментариев</h1>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

function Post({ post }) {
    const [newComment, setNewComment] = useState({ name: '', text: '' });
    const [comments, setComments] = useState([]);
  
    const handleCommentSubmit = () => {
      // Добавляем новый комментарий в список комментариев на странице
      setComments([...comments, newComment]);
      // Сбрасываем форму
      setNewComment({ name: '', text: '' });
    };
  
    return (
      <div>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Comments comments={comments} />
        <CommentForm
          newComment={newComment}
          onCommentChange={(e) =>
            setNewComment({ ...newComment, [e.target.name]: e.target.value })
          }
          onCommentSubmit={handleCommentSubmit}
        />
      </div>
    );
  }
  
  function Comments({ comments }) {
    return (
      <div>
        <h3>Комментарии</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              {comment.name}: {comment.text}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  function CommentForm({ newComment, onCommentChange, onCommentSubmit }) {
    return (
      <div>
        <h3>Добавить комментарий</h3>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={newComment.name}
          onChange={onCommentChange}
        />
        <textarea
          name="text"
          placeholder="Текст комментария"
          value={newComment.text}
          onChange={onCommentChange}
        />
        <button onClick={onCommentSubmit}>Отправить</button>
      </div>
    );
  }
  
export default Posts;