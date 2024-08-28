import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

const Landing = React.lazy(() => import("./components/Landing"));
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const About = React.lazy(() => import("./components/About"))

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/Dashboard" element={<Suspense fallback={"Loading..."}><Dashboard /></Suspense>} />
        <Route path="/" element={<Suspense fallback={"Loading..."}><Landing /></Suspense>} />
        <Route path="/About" element={<Suspense fallback={"Loading..."}><About /></Suspense>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <>
  <div style={{border: "2px solid black", display:"flex", justifyContent: "center", alignItems: "center"}}>
      <h1 style={{padding: "10px", margin: "10px"}}>React Route</h1>
      <div>
      <button style={{padding: "10px", margin: "10px"}} onClick={() => {
        navigate("/")
      }}>Landing Page</button>
      <button style={{padding: "10px", margin: "10px"}} onClick={() => {
        navigate("/dashboard")
      }}>Dashboard Page</button>
      <button style={{padding: "10px", margin: "10px"}} onClick={() => {
        navigate("/about")
      }}>About Us</button>
      </div>
    </div>
  </>
}

export default App
