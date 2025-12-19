import { useState, useEffect } from "react";
import Product from "./Product";
import useFetch from "./useFetch";

function ProductList(){
    const { data: fetchedProducts, loading } = useFetch("https://fakestoreapi.com/products");
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    useEffect(() => {
        if (fetchedProducts.length > 0) {
            setProducts(fetchedProducts);
        }
    }, [fetchedProducts]);
    
    function handleSearch(event){
        setSearchTerm(event.target.value);
    }
    
    function handleDelete(id){
        const newProducts = products.filter((product)=> product.id != id);
        setProducts(newProducts);
    }

    function sortProductshtol(){
        const sortedProducts = [...products].sort((x,y)=> x.price - y.price);
        setProducts(sortedProducts);
    }

    function sortProductsltoh(){
        const sortedProducts = [...products].sort((x,y)=> y.price - x.price);
        setProducts(sortedProducts);
    }

    if (loading) return <p>Loading...</p>;

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