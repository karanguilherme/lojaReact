import "./Cabecalho.css"

function Cabecalho()
{
    return (

        <div className="cabecalho">
        <header>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-md-2 col-sm-4 logo">
                        <img src="/imagens/logo-eficaz.svg" alt="Loja Virtual Eficaz" className="img-fluid"/>
                    </div>
                    <div className="col-4 col-md-9 col-sm-4">
                        <nav>
                            <ul className="menu-flex">
                                <li>
                                    <a href="/">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a href="/catalogo">
                                        Catalogo
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-4 col-md-1 col-sm-4 cart">


                        <a href='/cart'>
                            <img src="/imagens/cart.svg" alt=""/>
                            <div className="count">0</div>
                        </a>



                    </div>
                </div>
            </div>
        </header>
        </div>

    );
}


export default Cabecalho;