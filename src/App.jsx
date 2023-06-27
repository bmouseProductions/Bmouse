import styles from "./style";
import { Navbar, Footer } from "./components";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/home/Home";
import Servicos from "./Pages/servicos/Servicos";
import Studio from "./Pages/studio/Studio";
import Portfolio from "./Pages/portfolio/Portfolio";
import Blog from "./Pages/blog/Blog";
import Sobre from "./Pages/sobre/Sobre";
import Page_blog from "./Pages/page_single_blog/page_blog";
import PetsMellon from "./Pages/Portfolio_single/PetsMellon/PetsMellon";
import Sorriso from "./Pages/Portfolio_single/Sorriso/Sorriso";
import Casa from "./Pages/Portfolio_single/Casa/Casa";
import Cafe from "./Pages/Portfolio_single/Cafe/Cafe";
import Giolaser from "./Pages/Portfolio_single/Giolaser/giolaser";
import Sorridents from "./Pages/Portfolio_single/Sorridents/Sorridents";
import Acessoria from "./Pages/Single_page_service/Acessoria/Index";
import Anuncio from "./Pages/Single_page_service/Anuncio/Index";
import Bmouse from "./Pages/Single_page_service/Bmouse/Index";
import Endomarketing from "./Pages/Single_page_service/Endomarketing/Index";
import FotoVideo from "./Pages/Single_page_service/Foto-video/Index";
import Identidade from "./Pages/Single_page_service/Identidade-visual";
import Marketing from "./Pages/Single_page_service/mkt-digital/Index";
import Sites from "./Pages/Single_page_service/Sites";
import View from "./Pages/View/View";
import Empresa from "./Pages/Portfolio_single/Empresa-do-bem/Empresa";
import Mirian from "./Pages/Portfolio_single/Mirian-gontijo/Mirian";
import Homenagem from "./Pages/Portfolio_single/Homenagem/Homenagem";
import Haras from "./Pages/Portfolio_single/Haras/Haras";
import Dra from "./Pages/Portfolio_single/Dra-eli/Dra";
import Zoomies from "./Pages/Portfolio_single/Zoomies/Zoomies";
import Leoni from "./Pages/Portfolio_single/Leoni/Leoni";
import Clenio from "./Pages/Portfolio_single/Clenio/Clenio";
import Pocah from "./Pages/Portfolio_single/Pocahontas/Pocahontas";
import Jose from "./Pages/Portfolio_single/Jose/Jose";
import Historia from "./Pages/Portfolio_single/Historia/Historia";
import Whats from "./components/Whats";
import Back from "./components/Back-to-top";
import Trabalhe from "./Pages/trabalhe/trabalhe";
import Video from "./Pages/Video/Video";
import WHG from "./Pages/Portfolio_single/WHG/WHG";
import MID from "./Pages/Portfolio_single/MID/mid";
import DrLuis from "./Pages/Portfolio_single/Dr-Luis/dr-luis";
import Cardeal from "./Pages/Portfolio_single/Cardeal/Cardeal";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="bg-primary w-full overflow-hidden">
          <div className="star-field">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
          </div>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/servicos" element={<Servicos />} />
                <Route path="/studiosbmouse" element={<Studio />} />
                <Route path="/portfolio" element={<Portfolio />} />
                {/*                 <Route path="/trabalhe-conosco" element={<Trabalhe />} /> */}
                {/*                 <Route path="/blog" element={<Blog />} /> */}
                <Route path="/video" element={<Video />} />
                <Route path="/pets-mellon" element={<PetsMellon />} />
                <Route path="/sorriso" element={<Sorriso />} />
                <Route
                  path="/sem-limites-uma-historia-do-grupo-patense"
                  element={<Historia />}
                />
                <Route path="/casa" element={<Casa />} />
                <Route path="/empresa-do-bem" element={<Empresa />} />
                <Route path="/mirian-gontijo" element={<Mirian />} />
                <Route path="/homenagem" element={<Homenagem />} />
                <Route path="/cafe-nova-geracao" element={<Cafe />} />
                <Route path="/giolaser" element={<Giolaser />} />
                <Route path="/sorridentes" element={<Sorridents />} />
                <Route path="/sorriden" element={<Pocah />} />
                <Route path="/zoomies" element={<Zoomies />} />
                <Route path="/whg" element={<WHG />} />
                <Route path="/mid" element={<MID />} />
                <Route path="/dr-luiz" element={<DrLuis />} />
                <Route path="/cardeal" element={<Cardeal />} />
                <Route
                  path="/patense-50-anos-jose-borges-malheiros"
                  element={<Jose />}
                />
                <Route path="/haras-nimbus-de-prata" element={<Haras />} />
                <Route path="/Dra" element={<Dra />} />
                <Route path="/leoni-alimentos" element={<Leoni />} />
                <Route path="/clenio" element={<Clenio />} />
                <Route path="/acessoria" element={<Acessoria />} />
                <Route path="/anuncio" element={<Anuncio />} />
                <Route path="/bmouse" element={<Bmouse />} />
                <Route path="/endomarketing" element={<Endomarketing />} />
                <Route path="/foto-video" element={<FotoVideo />} />
                <Route path="/identidade-visual" element={<Identidade />} />
                <Route path="/marketing" element={<Marketing />} />
                <Route path="/sites" element={<Sites />} />
                <Route path="/view" element={<View />} />

                {/* <Route path="/pageblog" element={<Page_blog />} /> */}
                <Route path="/pageblog" element={<Outlet />}>
                  <Route path=":friendly_url" element={<Page_blog />} />
                </Route>
                {/*  <Route path="/:friendly_url" element={< [news].jsx />} /> */}
              </Routes>
              <Whats />
              <Back />
              <Footer />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
