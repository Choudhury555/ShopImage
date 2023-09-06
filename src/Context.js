import React,{useState,useEffect} from "react"
import data from "./data"

const tempContext=React.createContext()

function ContextProvider(props){
    const [allPhotos,setAllPhotos]=useState([])
    const [cartItems,setCartItems]=useState([])
    
//    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
//////this link is not working so I created one "data.js" file using those data
    useEffect(() => {
        setAllPhotos(data)
    }, [])
    
    // console.log(allPhotos)
    
    
    function toggleFavorite(id){//"id" of specific image(coming from "Image" Component)
        const updatedArr=allPhotos.map(photo => {
            if(photo.id === id){
                console.log(id)
                console.log(!photo.isFavorite)
                return {
                    ...photo,
                    isFavorite: !photo.isFavorite
                }
            }
            return photo //it is the else condition(in case of all other photo)
        })
        
        setAllPhotos(updatedArr)//set the "updatedArr"
    }
    
    
    function addToCart(newImgitem){
        setCartItems(prevImgitems => [...prevImgitems,newImgitem])
    }
    
    function removeFromCart(id){
        const afterRemoveArr=cartItems.filter(item => {
            return item.id !== id
        })
        setCartItems(afterRemoveArr)
    }
     
    // console.log(cartItems)
    
    function emptyCart(){
        setCartItems([])
    }
    
    
    return (
        <tempContext.Provider value={{
            allPhotos,
            toggleFavorite,
            addToCart,
            removeFromCart,
            cartItems,
            emptyCart
        }}>
            {props.children}  {/*we are receiving "App" component from "index.js" as "props.children"*/}
        </tempContext.Provider>    
    )
    
}

export {ContextProvider , tempContext}