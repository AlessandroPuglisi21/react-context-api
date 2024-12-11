import { Link } from 'react-router-dom';

export default function NotFound () {
    return(
        <main>
            <section>
                <h1>ERROR 404</h1>
                <p>Pagina non trovata</p>
                <Link to='/' className='back-home-button'> Torna allla home</Link>
            </section>
        </main>
    )
}