import styles from "./style";
import { Navbar, Footer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Servicos from "./Pages/servicos/Servicos";
import GalaxyBackground from "react-animated-stars";
import Studio from "./Pages/studio/Studio";
import Portfolio from "./Pages/portfolio/Portfolio";
import Blog from "./Pages/blog/Blog";

const App = () => {
  return (
    <BrowserRouter>
      <GalaxyBackground starCount={50} key={"akfsifs"}>
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/studiosbmouse" element={<Studio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </GalaxyBackground>
    </BrowserRouter>
  );
};

export default App;
