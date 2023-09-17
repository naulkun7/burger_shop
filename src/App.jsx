import React from "react"
import "./index.scss"

// Import components
import Header from "./components/header/header.jsx"

// Import pages
import About from "./pages/Home/About/about.jsx"
import Offers from "./pages/Home/Offers/offers.jsx"
import Banner1 from "./pages/Home/Banner1/banner1.jsx"
import Banner2 from "./pages/Home/Banner2/banner2.jsx"
import Trend from "./pages/Home/Trending/trend.jsx"
import Dessert from "./pages/Home/Dessert/dessert.jsx"
import Gallery from "./pages/Home/Gallery/gallery.jsx"

function App() {
  return (
    <>
      <Header />
      <div className="page">
        <About />
        <Offers />
        <Banner1 />
        <Banner2 />
        <Trend />
        <Dessert />
        <Gallery />
      </div>
    </>
  )
}

export default App
