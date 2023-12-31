import React from "react"
import "./index.scss"

// Import components
import Header from "./components/header/Header.jsx"

// Import Home sections
import About from "./pages/Home/About/about.jsx"
import Banner from "./pages/Home/Banner/banner.jsx"
import Offers from "./pages/Home/Offers/offers.jsx"
import Banner1 from "./pages/Home/Banner1/banner1.jsx"
import Banner2 from "./pages/Home/Banner2/banner2.jsx"
import Trend from "./pages/Home/Trending/trend.jsx"
import Dessert from "./pages/Home/Dessert/dessert.jsx"
import Gallery from "./pages/Home/Gallery/gallery.jsx"
import Feedback from "./pages/Home/Feedback/feedback.jsx"

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Offers />
      <Banner1 />
      <Banner2 />
      <Trend />
      <Dessert />
      <Gallery />
      <Feedback />
    </>
  )
}

export default App
