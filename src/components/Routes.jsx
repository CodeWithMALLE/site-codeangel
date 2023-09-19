import { Routes, Route } from "react-router-dom";

import About from './pages/About';
import Acceuil from '../components/pages/Accueil'
import NoPage from "./pages/NoPage"
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function LesRoutes() {

    return (
        <Routes>
            <Route path='/' element={<Acceuil />} />
            <Route path='/acceuil/' element={<Acceuil />} />
            <Route path='/a-propos/' element={<About />} />
            <Route path='/cv/' element={<Resume />} />
            <Route path='/portfolio/' element={<Portfolio />} />
            <Route path='/blog/' element={<Blog />} />
            <Route path='/contact/' element={<Contact />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    )
}
export default LesRoutes 