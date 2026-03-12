import Home from "./pages/home"
import {Routes, Route} from 'react-router'
import NotFound from "./pages/notFound"
import News from "./pages/news"
import FoodChoice from "./pages/foodChoice"
import DesertsChoice from "./pages/desertsChoice"
import Card from "./pages/card"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/tea' element={<Home />} />
        <Route path='/food' element={<FoodChoice />} />
        <Route path='/deserts' element={<DesertsChoice />} />
        <Route path='/card' element={<Card />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>  
  )
}

export default App
