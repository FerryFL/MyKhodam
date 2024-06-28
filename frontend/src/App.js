import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';
import AddIdea from './pages/AddIdea';

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
          <Route
            path='/idea'
            element={<AddIdea/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
