import Nav from "./Navbar";

export default function Header() {
    return (
        <header className="header">
            <a href="http://localhost:5173"><img src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/050_f2.png" alt="" /></a>
            <h1>DIGLETT S.p.A</h1>
            <Nav></Nav>
        </header>
    )
}