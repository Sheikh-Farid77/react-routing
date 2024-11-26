import { useLocation } from "react-router-dom"


const ProductDetails = () => {
    const {state} = useLocation();
    console.log(state)
  return (
    <div className="text-center">
        <h2 className="text-3xl font-bold text-center mb-5">Details</h2>
       <img className="w-96 mx-auto" src={state.images} alt="" />
            <h2 className="text-xl font-bold py-3">{state.title}</h2>
            <p>{state.description}</p>
            <p className="mb-5"><b>Price: {state.price}</b></p>
    </div>
  )
}

export default ProductDetails
