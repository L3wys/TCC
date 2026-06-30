import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import PagMod from "../PageHome/PagMod"

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<PagMod />}
                />
                <Route
                    path="/sobre"
                    element={<h1>Sobre</h1>}
                />
                <Route
                    path="*"
                    element={<h1>404</h1>}
                />
                    
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes