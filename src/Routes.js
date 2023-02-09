import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Cabecalho from "./componentes/Cabecalho/Cabecalho";
import Banner from "./componentes/Banner/Banner";
import Produtos from "./componentes/Produtos/Produtos";
import Rodape from "./componentes/Rodape/Rodape";
import ProdutosCatalogo from "./componentes/Catalogo/Catalogo";
import ViewProduto from "./componentes/Detalhes/Detalhes";


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
    return (
        <div className="App">
                <ViewProduto/>
        </div>
       );
}




export default Routers;