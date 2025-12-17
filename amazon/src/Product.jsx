import PropTypes from 'prop-types' ; 

function Product(props){
    return(
        props.id && 
        <div className='card'>
            <img src={props.image} alt=""></img>
            <h3>{props.title}</h3>
            <p id="price">Price{props.price}</p>
            <p>{props.description}</p>
            <button onClick={()=>props.delete(props.id)}>Delete</button>
        </div>
    )
        
}
Product.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number
  
};

export default Product ;

