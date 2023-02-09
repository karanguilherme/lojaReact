import axios from 'axios';


const DetalhesApi = axios.create({

    baseURL: 'https://dummyjson.com/products/'

});


export default DetalhesApi;


