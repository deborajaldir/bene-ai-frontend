import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "../pages/Login"
import Register from "../pages/Register"
import Dashboard from "../pages/Dashboard"
import Metas from "../pages/Metas"
import Despesas from "../pages/Despesas"
import Relatorios from "../pages/Relatorios"
import Configuracoes from "../pages/Configuracoes"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/metas" element={<Metas />} />
        <Route path="/despesas" element={<Despesas />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/configuracoes" element={<Configuracoes />}
/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes