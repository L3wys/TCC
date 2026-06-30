import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom"
import PagMod from "../PageHome/PagMod"

const AppRoutes = () =>{
    return(
        
            <Routes>
                <Route>
                    path="/"
                    element={<PagMod/>}
                </Route>
            </Routes>
      
    )
}

export default AppRoutes