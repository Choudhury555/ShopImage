import React ,{useState,useContext} from "react"
import {tempContext} from "../Context"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText,setButtonText]=useState("Place Order")
    const {cartItems,emptyCart}=useContext(tempContext)
    
    const totalCost=100 * cartItems.length
    const totalCostDisplay=totalCost.toLocaleString("en-IN", {style: "currency", currency: "INR"})
    // console.log(cartItems)
    
    const cartArray=cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    
    
    function placeOrder(){
        setButtonText("Ordering...")
        setTimeout(() => {
            console.log("Order Placed")
            setButtonText("Place Order")
            emptyCart()
        },3000)
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartArray}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            
            {
                cartItems.length > 0 
                ?
                <div className="order-button">
                    <button onClick={placeOrder}>{buttonText}</button>
                </div>
                :
                <p>You have no items in your cart.</p>
            }
            
        </main>
    )
}

export default Cart