import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<Home/>}
          />
          <Route
            path='/coming-soon'
            element={<ComingSoon/>}
          />
          <Route
            path='*'
            element={<NotFound/>}
          />
          <Route
            path='/about'
            element={<About/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
