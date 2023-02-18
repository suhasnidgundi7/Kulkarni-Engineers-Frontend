import { AuthProvider } from "./context/AuthContext";
import CustomRoutes from "./routing/CustomRoutes";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <AuthProvider>
      <CustomRoutes />
    </AuthProvider>
  );
}

export default App;
