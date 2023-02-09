import React,{Component,useRef, useState} from 'react';
import Api from '../Api';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Produtos.css"


// import required modules
import { Pagination } from "swiper";


class Produtos extends Component{

    state = {
        items:[],
    }

    async componentDidMount(){
        const response = await Api.get('');
       // console.log(response.data.products);
        this.setState({items: response.data.products});
    }

    render(){
        const { items } = this.state;

        console.log(items);
        return (

            <div className="container">

            <div className="Produtos">
                <h1 className="headerProduto">Produtos</h1>

                <>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        slides-per-view="3"
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="Lista-Produtos"
                    >

                        {items.map(item => (
                            <SwiperSlide>

                            <div className="card">

                                <div className="card-body flex-item">

                                    <figure>
                                        <img className="img-fluid" src={item.thumbnail} alt={item.title}/>
                                    </figure>

                                    <h2>

                                        <Link
                                            to={{
                                                pathname: "/detalhes/"+ item.id +"",
                                            }}
                                        >

                                            {item.title}
                                        </Link>
                                    </h2>

                                    <div className="preco">
                                       R$ {item.price.toFixed(2)}

                                    </div>
                                    <div className="botao">
                                        <Link
                                            to={{
                                                pathname: "/detalhes/"+ item.id +"",
                                            }}
                                        >

                                            Adicionar ao Carrinho
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            </SwiperSlide>
                        ) )}


                    </Swiper>
                </>

            </div>
            </div>

        );
    }






}

export default Produtos;