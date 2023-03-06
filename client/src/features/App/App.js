import "./App.css";
import Logo from "../../components/Logo/Logo";
import PrivateRoute from "../../components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <PrivateRoute>
      <Logo />
    </PrivateRoute>
  );
}

export default App;
