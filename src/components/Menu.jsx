import './Menu.css'

function App() {

    return (
        <>
            <nav className='menu__nav'>
                <ul className='menu__list'>
                    <li className='menu__item'><button>Dashboard</button></li>
                    <li className='menu__item'><button>Produtos</button></li>
                    <li className='menu__item'><button>Clientes</button></li>
                    <li className='menu__item'><button>Pedidos</button></li>
                </ul>
            </nav>
        </>
    )
}

export default App
