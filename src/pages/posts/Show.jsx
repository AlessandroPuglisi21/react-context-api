import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URI } from "../config";
import DeletePost from "../../../components/DeletePost";

export default function PostsShow() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${BASE_URI}/posts/${id}`)
      .then((res) => {
        setPost(res.data);
      })
      .catch((err) => {
        console.error("Errore nel recupero del post:", err);
      });
  }, [id]);

  const navigate = useNavigate();

  return (
    
    <main className="mainShow">
      <section className="showContainer">
        {post ? (
          <>
           <div className="buttonSection">
        <button  className= 'backButton' onClick={() => navigate(-1)}>Indietro</button>
        <button  className= 'nextButton' onClick={() => navigate(`/blog/${+id + 1}`)}>Avanti</button> 
        {post && <DeletePost id={post.id} onDelete={() => { navigate('/blog') }}/>}
      </div>
            <div>
              <img src={post.image} alt={post.title} />
            </div>
            <div>
              <h1>{post.title}</h1>
              <p>{post.content}</p>
              <p>{post.categories}</p>
            </div>
          </>
        ) : (
          <p>LOADING...</p>
        )}
      </section>
    </main>
  );
}
