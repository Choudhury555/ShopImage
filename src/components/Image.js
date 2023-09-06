import React ,{useState,useContext}from "react"
import {tempContext} from "../Context"
import PropTypes from "prop-types"
import useHover from "../hooks/useHover"

function Image({className,img}){
    // const [hovered,SetHovered]=useState(false)
    const [hovered,ref]=useHover()////see the "Custom Hook"(hooks/useHover)
    const {toggleFavorite,addToCart,cartItems,removeFromCart}=useContext(tempContext)
    // console.log(hovered)
    
    function heartIcon(){
        if(img.isFavorite){
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
        else if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    } 
    
    // const cartIcon = hovered && 
    //         <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i>
    
    function cartIcon(){
        const alreadyInCart=cartItems.some(cartPhoto => {
            return img.id===cartPhoto.id
        })
        
        if(alreadyInCart){
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        }
        else if(hovered){
            return <i className="ri-add-circle-line cart" onClick={()=>addToCart(img)}></i>
        }
    }
    
    return(
        <div 
            className={`${className} image-container`}
            ref={ref}////see the "Custom Hook"(hooks/useHover)
        >
            <img src={img.url} className="image-grid" />
            
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes={
    className : PropTypes.string,
    img : PropTypes.shape({
        id : PropTypes.string.isRequired,
        url : PropTypes.string.isRequired,
        isFavorite : PropTypes.bool
    })
}

export default Image

{/*className is either "wide" or "big"*/}