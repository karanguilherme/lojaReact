
import React from "react";
import Cabecalho from "../Cabecalho/Cabecalho";
import Banner from "../Banner/Banner";
import Produtos from "../Produtos/Produtos";
import Rodape from "../Rodape/Rodape";

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


export default Home;