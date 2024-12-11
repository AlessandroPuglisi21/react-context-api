import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BlankLayout from "./layouts/BlankLayout";
import PostsIndex from "./pages/posts";
import PostsShow from "./pages/posts/Show";
import PostCreate from "./pages/posts/Create";
import GlobalContext from "../context/GlobalContext";
import { BASE_URI } from "./pages/config";
import { useState } from "react";
import axios from "axios";
import PostPage from "./pages/posts/PostPage";

function App() {
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
      axios.get(`${BASE_URI}/posts`)
          .then(res => {
              setPosts(res.data);
          })
          .catch(err => {
              console.error(err);
              setPosts([])
          });
  }
  return (
    <GlobalContext.Provider value={{ posts, fetchPosts }}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<PostPage />}></Route>
            <Route path="/blog">
              <Route index element={<PostsIndex />} />
              <Route path=":id" element={<PostsShow />} />
              <Route path="create" element={<PostCreate />} />
            </Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
