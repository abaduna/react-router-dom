import {getByText, render}  from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom"
import Product  from "../../Product/Product"
import { renderWithRouterContect } from "../../../../__test__/wrappedContex"
describe("Productos",()=>{
    test('should render product', () => { 
        const {getByText} = render( renderWithRouterContect(<Product></Product>))
        getByText(/Products Page/i)
        getByText(/product 1</i)
        getByText(/product 2</i)
        getByText(/product 3</i)
     })
})