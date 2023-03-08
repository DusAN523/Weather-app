import "./App.css";
import Logo from "../../components/Logo/Logo";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";
import ForecastPage from "../../components/ForecastPage/ForecastPage";

function App() {
  return (
    <PrivateRoute>
      <Logo />
      <ForecastPage />
    </PrivateRoute>
  );
}

export default App;
