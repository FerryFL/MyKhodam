import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import AboutMore from './pages/AboutMore';
import ComingSoon from './pages/ComingSoon';
import NotFound from './pages/NotFound';
import AddIdea from './pages/AddIdea';
import Review from './pages/Review';
import Login from './pages/Login';
import Register from './pages/Register';
import { auth } from './firebase';

function App() {
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      // Handle authentication state changes
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/coming-soon' element={<ComingSoon />} />
          <Route path='/about-more' element={<AboutMore />} />
          <Route path='/about' element={<About />} />
          <Route path='/idea' element={<AddIdea />} />
          <Route path='/review' element={<Review />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
