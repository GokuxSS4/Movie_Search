import './App.css'
import MainRoutes from './routes/MainRoutes'
import Navbar from './components/Navbar/Navbar'
function App() {
  return (
    <div id='app-wrapper'>
    <Navbar/>
    <MainRoutes/>
    </div>
  )
}

export default App
