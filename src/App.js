import { Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import BlogPage from "./Pages/BlogPage";
import ContactModal from "./components/ContactModal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App bg-secondary">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
      </Routes>
      <ContactModal/>
      <Footer/>
    </div>
  );
}

export default App;
