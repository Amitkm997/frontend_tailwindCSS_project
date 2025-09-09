const ProductCard = ({ product }) => {
    return (
      <div className="border w-1/5 m-2 text-center bg-blue-80">
        <img className="w-full h-64" src={product.image} alt={product.name}  />
        <h2 className="font-bold text-2xl item-center">
          {product.name}
        </h2>
        <p >{product.description}</p>
        <p className="font-bold" >
          ₹{product.price}
        </p>
        <div className="p-4 mt-auto">
        <button className=" w-full border px-4 bg-blue-300">
          View Details..
        </button>
        </div>
        
      </div>
    );
  };
  
  export default ProductCard;