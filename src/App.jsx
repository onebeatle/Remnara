import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Explorer from './pages/Explorer'
import LocationDetail from './pages/LocationDetail'
import Library from './pages/Library'
import Spark from './pages/Spark'
import Navigation from './components/Navigation'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-remnara-bg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explorer" element={<Explorer />} />
          <Route path="/explorer/:id" element={<LocationDetail />} />
          <Route path="/library" element={<Library />} />
          <Route path="/spark" element={<Spark />} />
        </Routes>
        <Navigation />
      </div>
    </BrowserRouter>
  )
}

export default App
