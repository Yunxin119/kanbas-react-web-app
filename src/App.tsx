import Labs from "./Labs";
import Kanbas from "./Kanbas";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

const App = () => {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* We can make any component the default screen by forcing navigation with the Navigate component. */}
          <Route path='/' element={<Navigate to="/Labs" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>

  )
}

export default App
