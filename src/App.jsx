import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogFeed from './pages/BlogFeed';
import BlogPage from './pages/Blog';
import About from './pages/About';
import Services from './pages/Services';
import EventsFeed from './pages/EventsFeed';
import NotFound from './pages/NotFound';
import Partner from './pages/Partner';

function App() {
  console.log("App loaded!");
  return (
    
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<BlogFeed />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          <Route path="/events" element={<EventsFeed />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partner" element={<Partner />} />
          {/* Add more routes as needed */}

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    
  );
}

export default App;
