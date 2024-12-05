import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Collapse from './pages/Collapse/Collapse'
import MainLayout from './shared/MainLayout'
import Drawer from './pages/Drawer/Drawer'
import Tabs from "./pages/Tabs/Tabs"
import CoinFlip from "./pages/CoinFlip/CoinFlip"
import BmiCalculator from "./pages/BmiCalculator/BmiCalculator"

function App() {


  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path='/'  element={<MainLayout/>}>
      <Route path='/' index element={<Collapse/>}></Route>
      <Route path='/drawer'  element={<Drawer/>}></Route>
      <Route path='/tabs'  element={<Tabs/>}></Route>
      <Route path='/coin-flip'  element={<CoinFlip/>}></Route>
      <Route path='/bmi-calculator'  element={<BmiCalculator/>}></Route>
      </Route>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
