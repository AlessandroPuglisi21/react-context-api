import axios from "axios";
import { BASE_URI } from "../config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  title: '',
  image: '',
  content: '',
  categories: ''
};

export default function PostCreate() {
  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();

  function handleFormData(e) {
    const key = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormData({
      ...formData,
      [key]: value
    });
  }

  function savePost(e) {
    e.preventDefault();

    console.log('Salvo i dati');

    const body = {
      ...formData
    };
    console.log(body);

    axios.post(`${BASE_URI}/blog`, body)
      .then(res => {
        const newPost = res.data;
        console.log(newPost);

        navigate(`/blog/${newPost.id}`);
      })
      .catch(err => {
        console.error('Errore durante il salvataggio del post:', err);
      });
  }

  return (
    <main  className="mainCreate">
      <section>
        <div className='titleFormContainer'>
          <h1 className='title'>Nuovo Post</h1>
        </div>
        <div className="formContainer">
          <form onSubmit={savePost}>
            <p className='form-group'>
              <label htmlFor="title">Titolo</label>
              <input
                onChange={handleFormData}
                type="text"
                id="title"
                name="title"
                placeholder="Titolo del post"
                value={formData.title}
              />
            </p>
            <p className='form-group'>
              <label htmlFor="image">Immagine</label>
              <input
                onChange={handleFormData}
                type="text"
                id="image"
                name="image"
                placeholder="URL immagine del post"
                value={formData.image}
              />
            </p>
            <p className='form-group'>
              <label htmlFor="content">Contenuto</label>
              <textarea
                onChange={handleFormData}
                id="content"
                name="content"
                placeholder="Contenuto del post"
                value={formData.content}
              />
            </p>
            <p className='form-group'>
              <label htmlFor="categories">Categorie</label>
              <input
                onChange={handleFormData}
                type="text"
                id="categories"
                name="categories"
                placeholder="Categorie del post"
                value={formData.categories}
              />
            </p>
            <button>Salva</button>
          </form>
        </div>
      </section>
    </main>
  );
}
