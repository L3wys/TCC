
import PagMod from './PageHome/PagMod';
import sobre from '/PageSobre/sobre'

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="./PageHome/PagMod.jsx" element={<PagMod />} />
        <Route path="./PageSobre/sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
