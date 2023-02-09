import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Routes, useParams} from 'react-router-dom';
import Cabecalho from "../Cabecalho/Cabecalho";
import Rodape from "../Rodape/Rodape";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./Detalhes.css";

// import required modules
import { Navigation } from "swiper";

function ViewProduto() {
    const parametros = useParams();
    const [data, setData] = useState({hits: []});


    useEffect(() => {
        const getData = async () => {
            const result = await axios(
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


                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                                    <li className="breadcrumb-item" aria-current="page">{data.category}</li>
                                    <li className="breadcrumb-item active" aria-current="page">{data.title}</li>
                                </ol>
                            </nav>


                        </div>
                        <div className="col-md-5">



                            <>
                                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                                    {data.images.map(name => (
                                        <SwiperSlide> <img src={name} alt=""/></SwiperSlide>
                                    ))}
                                </Swiper>
                            </>
                        </div>
                        <div className="col-md-7">
                            <h2 className="title">{data.title} </h2>
                            <div className="brand">Marca: {data.brand} </div>
                            <div className="price">R$ {data.price.toFixed(2)} </div>

                            <div className="botao">
                                Adicionar ao Carrinho

                            </div>
                        </div>

                        <div className="col-md-12">
                            <h2 className="headerProduto">Descrição do Produto</h2>
                           <div className="descricao">
                               {data.description}
                           </div>

                        </div>
                    </div>
                </div>
                <Rodape/>
            </div>
        </>
    );

}

export default ViewProduto;