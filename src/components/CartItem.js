import React,{useState,useContext} from "react"
import PropTypes from "prop-types"
import {tempContext} from "../Context"
import useHover from "../hooks/useHover"

function CartItem({item}) {
    // const [hovered,SetHovered]=useState(false)
    const [hovered,ref]=useHover()////see the "Custom Hook"(hooks/useHover)
    const {removeFromCart}=useContext(tempContext)
    // console.log(hovered)
    return (
        <div className="cart-item">
            <i 
                className={hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"} 
                onClick={() => removeFromCart(item.id)}
                ref={ref}////see the "Custom Hook"(hooks/useHover)
            >
            </i>
            <img src={item.url} width="130px" />
            <p>₹100</p>
        </div>
    )    
}

CartItem.propTypes={
    item : PropTypes.shape({
        url : PropTypes.string.isRequired
    })
}

export default CartItem