import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />

            {/* <Route
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

            <Route path="/melting-input" element={<MeltingInput />} /> */}
        </Routes>
    );
};

export default MainRoutes;
