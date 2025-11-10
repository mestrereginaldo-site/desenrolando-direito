import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const [isDark] = useDarkMode()

  return (
    <Router>
      <div className={`min-h-screen flex flex-col ${isDark ? 'dark' : ''}`}>
        <div className="flex-grow bg-warm-white dark:bg-neutral-bg transition-colors duration-300">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
