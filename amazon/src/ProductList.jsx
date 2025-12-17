import { useEffect, useState } from "react";
import Product from "./Product";

function ProductList(){
    const  [products,setProducts] =useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products").then((response)=>{
            return response.json() ;
        }).then((data)=>setProducts(data));
    },[]);
    
    const  [searchTerm,setSearchTerm] = useState("");
    function handleSearch(event){
        setSearchTerm(event.target.value);
    }
    const filteredProducts = products.filter((product)=> product.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const productlist = filteredProducts.map((product)=>(
        <Product 
        key={product.id} 
        id={product.id} 
        title={product.title} 
        description={product.description} 
        image={product.image} 
        price={product.price} 
        delete={handleDelete}/>
    ));

    function handleDelete(id){
        const newProducts = products.filter((product)=> product.id != id);
        setProducts(newProducts);
    }

    function sortProductshtol(order){
        const sortedProducts = [...products].sort((x,y)=> x.price - y.price);
        setProducts(sortedProducts);
    }

    function sortProductsltoh(order){
        const sortedProducts = [...products].sort((x,y)=> y.price - x.price);
        setProducts(sortedProducts);
    }

    const productsList = products.map((product)=>(
        <Product 
        key={product.id} 
        id={product.id} 
        title={product.title} 
        description ={product.description} 
        image={product.image} 
        price={product.price} 
        delete={handleDelete}/>
    ))
   
    return(
        <>
        <input type = "text" placeholder="search products" value={searchTerm} onChange={handleSearch}/>
        <button onClick={sortProductshtol}>Sort Products Low to High</button>
        <button onClick={sortProductsltoh}>Sort Products High to Low</button>
        <p> shwoing {filteredProducts.length} products</p>
        <div className="products-container">
        {productlist}
      </div>
        </>
    )
}
export default ProductList ;