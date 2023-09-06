import React from "react"
import Header from "./components/Header"
import {Routes,Route} from "react-router-dom"//using <Routes> in palce of <Switch>
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import "./App.css"
function App() {    
    return (
        <div>
            <Header />
            
            <Routes>
            <Route exact path="/" element={<Photos/>}/>
                {/* <Route exact path="/">////////////////Above syntax is the new in react-router-dom V6
                    <Photos />
                </Route> */}
            
                <Route exact path="/cart" element={<Cart/>}/>
                {/* <Route path="/cart">
                    <Cart />
                </Route> */}
                
            </Routes>
            
        </div>
    )
}

export default App