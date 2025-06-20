import './Dashboard.css'

function App() {

    return (
        <>
            <div className='dashboard'>
                <nav>
                    <h1>Dashboard</h1>
                </nav>

                <div className='dashboard__menu'>
                    <ul className='dashboard__menu__list'>
                        <li><h1>1</h1>Produtos Cadastrados</li>
                        <li><h1>1</h1>Clientes Ativos</li>
                        <li><h1>1</h1>Pedidos Ativos</li>
                        <li><h1>1</h1>Itens Pedidos</li>
                    </ul>
                </div>
 
                <div className='dashboard__content'>
                    <div className='dashboard__content__card'>
                        <h2>Pedidos Pendentes</h2>
                        <p>Itens que precisam ser pedidos.</p>

                        <div className='dashboard__content__card__info'>
                            <section>
                                <h3>Fernanda Lima</h3>
                                <p>Produto: Camiseta</p>
                                <p>Quantidade: 2</p>
                            </section>
                            <aside>
                                <p className='status' id='active'>Pendente</p>
                                <p>Solicitado: 17/06/2025</p>
                            </aside>
                        </div>
                    </div>
                    <div className='dashboard__content__card'>
                        <h2>Solicitações ao Fornecedor</h2>
                        <p>Itens a caminho.</p>

                        <div className='dashboard__content__card__info'>
                            <section>
                                <h3>Camiseta</h3>
                                <p>Solicitado: 20/06/2025</p>
                                <p>Previsão: 02/02/2025</p>
                                <p>Quantidade: 2</p>
                            </section>
                            <aside>
                                <p className='status' id='waiting'>Solicitado</p>
                                <p>Cliente: 17/06/2025</p>
                            </aside>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default App
