import './Navbar.css'

function App() {

    return (
        <>
            <nav className='navbar__nav'>
                <ul className='navbar__list'>
                    <li className='navbar__item'>Sistemas de Encomendas</li>
                    <li className='navbar__item'>Produtor</li>
                    <li className='navbar__item'>Usuário</li>
                    <li className='navbar__item'><button>Sair</button></li>
                </ul>
            </nav>
        </>
    )
}

export default App
