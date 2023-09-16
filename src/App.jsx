import React from "react"
import "./index.scss"

// Import components
import Header from "./components/header/header.jsx"

// Import pages
import About from "./pages/Home/About/about.jsx"
import Offers from "./pages/Home/Offers/offers.jsx"

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <About />
        <Offers />
      </div>
    </>
  )
}

export default App
