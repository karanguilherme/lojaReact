import {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Banner from "./componentes/Banner/Banner";
import Produtos from "./componentes/Produtos/Produtos";
import Rodape from "./componentes/Rodape/Rodape";
import ProdutosCatalogo from "./componentes/Catalogo/Catalogo";



function Routers() {


    return (

        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/detalhes/:id" element={<Detalhes />} />

            </Routes>

        </Router>

    );


}
function Home() {

    return (
        <div className="App">
            <Cabecalho/>
            <Banner/>
            <Produtos/>
            <Rodape/>
        </div>
    );

}
function Catalogo() {
    return (
        <div className="App">
            <Cabecalho/>

            <ProdutosCatalogo/>
            <Rodape/>
        </div>
    );
}

function Detalhes() {

    const parametros = useParams();
    const [data,setData] = useState({ hits: [] });



             useEffect(() => {
                const getData = async () => {
                    const  result = await axios(
                        `https://dummyjson.com/products/${parametros.id}`
                    );
                setData(result.data)
                };
                 getData();
            }, []);


            return (

                <>
                <div className="App">
                    <Cabecalho/>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                {data.category} > {data.title}
                            </div>
                            <div className="col-md-5">

                                <img src={data.thumbnail} alt=""/>



                            </div>
                            <div className="col-md-7">
                                <h2>{data.title} </h2>
                                <h1>{data.price} </h1>

                                <div className="botao">
                                        Adicionar ao Carrinho

                                </div>
                            </div>

                            <div className="col-md-12">
                                <h2>Descrição do Produto</h2>
                                {data.description}

                            </div>
                        </div>
                    </div>
                    <Rodape/>
                </div>
                    </>
            );
}




export default Routers;