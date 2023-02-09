import "./rodape.css";
function Rodape()
{
    return (

        <footer className="rodape">

            <div className="container ">

                <div className="row">
                    <div className="col-2 col-md-4 col-sm-2">
                        <h2>Institucional</h2>
                        <ul>
                            <li> Quem Somos</li>
                            <li> Contato</li>
                        </ul>
                    </div>
                    <div className="col-2 col-md-4 col-sm-2 text-center">
                        <h2>Formas de Pagamento</h2>
                        <img src="/imagens/cartoes.png" alt="" className="images-footer"/>
                        <h2>Segurança</h2>
                        <img src="/imagens/googlesafe.png" alt="" className="images-footer" />
                    </div>
                    <div className="col-2 col-md-4 col-sm-2 text-end">
                        <h2>Formas de Envio</h2>
                        <img src="/imagens/correio.png" alt="" className="images-footer"/>

  

                    </div>
                </div>
            </div>

            <div className="container-fluid ">

                <div className="row">
                    <div className="criadopor">
                        <div>Desenvolvido por:</div>
                        Guilherme Karan Barbosa
                        <div>Desenvolvido com React</div>
                    </div>
                 </div>
            </div>

        </footer>

    );
}


export default Rodape;