import React,{useContext}from "react"
import {tempContext} from "../Context"
import Image from "../components/Image"
//double dots(..)because first "dot(.)" is to go out side of our "pages" folder and second "dot(.)" is normal
import {getClass} from "../utils"

function Photos() {
    const {allPhotos}=useContext(tempContext)
    // console.log(allPhotos)
    
    
    const imgArray=allPhotos.map((img,index)=> (
        <Image key={img.id} img={img} className={getClass(index)}/>//here we are calling the "getClass" method(inside "utils") then passing that className as props to "Image" component
    ))
    
    
    return (
        <main className="photos">
            {imgArray}
        </main>
    )
}

export default Photos