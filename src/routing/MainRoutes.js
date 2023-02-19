import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import ProductionInHouseDisplay from "../pages/ProductionInHouseDisplay";
import RawMaterialDisplay from "../pages/RawMaterialDisplay";
import MeltingInput from "../pages/MeltingInput";
import RawMaterialInput from "../pages/RawMaterialInput";
import WasherInventory from "../pages/WasherInventory";
import ScrapInventory from "../pages/ScrapInventory";
import ProductionInHouseInput from "../pages/ProductionInHouseInput";
import ProductionSubContractorDisp from "../pages/ProductionSubContractorDisp";
import ShearingDisplay from "../pages/ShearingDisplay";
import ScrapDisplay from "../pages/ScrapDisplay";
import ProductionSubContractorInbo from "../pages/ProductionSubContractorInbo";
import ProductionSubContractorOutb from "../pages/ProductionSubContractorOutb";
import ShearingSubContractorInput from "../pages/ShearingSubContractorInput";
import ShearingInHouseInput from "../pages/ShearingInHouseInput";

const MainRoutes = () => {
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
};

export default MainRoutes;
