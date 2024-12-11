import { NavLink } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className='navbar'>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">Chi Siamo</NavLink></li>
        <li><NavLink to="/prodotti">Prodotti</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>

      </ul>
    </nav>
  );
}
