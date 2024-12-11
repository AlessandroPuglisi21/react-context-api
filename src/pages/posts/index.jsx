import { useContext, useEffect, useState } from "react";
import CardBlog from "../../../components/CardBlog";
import { Link } from "react-router-dom";
import GlobalContext from "../../../context/GlobalContext";

export default function PostsIndex() {

    const {posts,fetchPosts} = useContext(GlobalContext)


    useEffect(() => {
        console.log("Context data:", posts);
        fetchPosts();
      }, []);
      

    return (
        <main>
            <Link to='create'><button className="buttonNewRecipe"> CREA UNA NUOVA RICETTA!</button></Link>
            <section>
                <ul className="card-container">
                    {posts.map(post => (
                        <li key={post.id}>
                            <CardBlog onDelete={() => fetchPosts()} post={post} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    );
}
