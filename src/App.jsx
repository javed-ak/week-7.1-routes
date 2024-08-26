import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/Dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <>
  <div style={{border: "2px solid black"}}>
      <button onClick={() => {
        navigate("/")
      }}>Landing Page</button>
      <button onClick={() => {
        navigate("/dashboard")
      }}>Dashboard Page</button>
    </div>
  </>
}

export default App
