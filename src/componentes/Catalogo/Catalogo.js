import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Api from '../Api';
import "./Catalogo.css"

class Catalogo extends Component{

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

        return (

            <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                            <h2>Catalogo</h2>

                        </div>
                                {items.map(item => (
                                            <div className="col-md-4">
                                                <div className="card-body  box">
                                                    <figure>
                                                        <img className="img-fluid" src={item.thumbnail} alt={item.title}/>
                                                    </figure>
                                                    <h2>
                                                        {item.title}
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
                                ) )}
                    </div>
            </div>

        );
    }






}

export default Catalogo;