import {useState,useEffect,useRef} from "react"

function useHover(){
    // Challenge:
    // Keep track of hover state in this hook
    const [hovered,setHovered]=useState(false)
    const ref=useRef(null)
    // Challenge:
    // Create a couple of functions (enter, leave) that set the hovered
    // state accordingly (true when entered, false when left)
    function enter(){
        setHovered(true)
    }
    
    function leave(){
        setHovered(false)      
    }
    
    /**
     * Challenge:
     * 
     * Using useEffect and useRef, make it so when this hook first loads,
     * it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
     * 
     * Remember: the ref.current will represent the DOM node, which is where you can
     * do imperative commands like `.addEventListener` and `removeEventListener`.
     */
    useEffect(() => {
        ref.current.addEventListener("mouseenter",enter)
        ref.current.addEventListener("mouseleave",leave) 
        
            //cleanup function(for removing side effects),because when Photo.js unmounts it will cleanup the events for that and also when Cart.js unmounts it will cleanup the events for that
        // return ()=>{
        //     ref.current.removeEventListener("mouseenter",enter)
        //     ref.current.removeEventListener("mouseleave",leave)
        // }  
        ////////////////////////////(Facing Error if I am adding this "cleanup" function Cannot read properties of null (reading 'removeEventListener')  so commenting it   
    },[])
    
    
    return [hovered,ref]//custom Hook return statement
}

export default useHover