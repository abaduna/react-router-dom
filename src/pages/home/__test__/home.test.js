import {getByText, render}  from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Home from "../home"
import { renderWithRouterContect } from "../../../../__test__/wrappedContex"
describe("Productos",()=>{
    test('should render product', () => { 
        const {getByText} = render( renderWithRouterContect(<Home></Home>))
        getByText(/Home Page/i)

     })
})