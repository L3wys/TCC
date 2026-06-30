import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import PagMod from "../PageHome/PagMod"
import PagSobre from "../PageSobre/PagSobre"

const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<PagMod />}
                />
                <Route
                    path="/PageHome/PagMod"
                    element={<PagMod />}
                />
                <Route
                    path="/PageSobre/PagSobre"
                    element={<PagSobre/>}
                />
                    
                
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes