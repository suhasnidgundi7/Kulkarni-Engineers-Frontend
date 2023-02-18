import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductionInHouseInput from "./pages/ProductionInHouseInput";
import RawMaterialInput from "./pages/RawMaterialInput";
import RawMaterialDisplay from "./pages/RawMaterialDisplay";
import WasherInventory from "./pages/WasherInventory";
import ScrapInventory from "./pages/ScrapInventory";
import ProductionSubContractorDisp from "./pages/ProductionSubContractorDisp";
import ProductionInHouseDisplay from "./pages/ProductionInHouseDisplay";
import ShearingDisplay from "./pages/ShearingDisplay";
import ScrapDisplay from "./pages/ScrapDisplay";
import ProductionSubContractorInbo from "./pages/ProductionSubContractorInbo";
import ProductionSubContractorOutb from "./pages/ProductionSubContractorOutb";
import ShearingSubContractorInput from "./pages/ShearingSubContractorInput";
import ShearingInHouseInput from "./pages/ShearingInHouseInput";
import MeltingInput from "./pages/MeltingInput";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/production-inhouse-input":
        title = "";
        metaDescription = "";
        break;
      case "/raw-material-input":
        title = "";
        metaDescription = "";
        break;
      case "/raw-material-display":
        title = "";
        metaDescription = "";
        break;
      case "/washer-inventory":
        title = "";
        metaDescription = "";
        break;
      case "/scrap-inventory":
        title = "";
        metaDescription = "";
        break;
      case "/production-subcontractor-display":
        title = "";
        metaDescription = "";
        break;
      case "/production-inhouse-display":
        title = "";
        metaDescription = "";
        break;
      case "/shearing-display":
        title = "";
        metaDescription = "";
        break;
      case "/scrap-display":
        title = "";
        metaDescription = "";
        break;
      case "/production-subcontractor-inbound":
        title = "";
        metaDescription = "";
        break;
      case "/production-subcontractor-outbound":
        title = "";
        metaDescription = "";
        break;
      case "/shearing-subcontractor-input":
        title = "";
        metaDescription = "";
        break;
      case "/shearing-inhouse-input":
        title = "";
        metaDescription = "";
        break;
      case "/melting-input":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route
        path="/production-inhouse-input"
        element={<ProductionInHouseInput />}
      />

      <Route path="/raw-material-input" element={<RawMaterialInput />} />

      <Route path="/raw-material-display" element={<RawMaterialDisplay />} />

      <Route path="/washer-inventory" element={<WasherInventory />} />

      <Route path="/scrap-inventory" element={<ScrapInventory />} />

      <Route
        path="/production-subcontractor-display"
        element={<ProductionSubContractorDisp />}
      />

      <Route
        path="/production-inhouse-display"
        element={<ProductionInHouseDisplay />}
      />

      <Route path="/shearing-display" element={<ShearingDisplay />} />

      <Route path="/scrap-display" element={<ScrapDisplay />} />

      <Route
        path="/production-subcontractor-inbound"
        element={<ProductionSubContractorInbo />}
      />

      <Route
        path="/production-subcontractor-outbound"
        element={<ProductionSubContractorOutb />}
      />

      <Route
        path="/shearing-subcontractor-input"
        element={<ShearingSubContractorInput />}
      />

      <Route
        path="/shearing-inhouse-input"
        element={<ShearingInHouseInput />}
      />

      <Route path="/melting-input" element={<MeltingInput />} />
    </Routes>
  );
}
export default App;
