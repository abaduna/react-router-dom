import { BrowserRouter as Router } from "react-router-dom";

export const renderWithRouterContect = (children)=>{
    return (
        <Router>
            {children}
        </Router>
    )
}
export const renderWithUserContect = (children,props)=>{
    return (
        <UserContext {...props}>
            {children}
        </UserContext>
    )
}