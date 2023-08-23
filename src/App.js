import "./style.css";
import HeaderCompo from "./Components/HeaderCompo";
import HomePage from "./Pages/HomePage";
import RoutesCompo from "./Routes/RoutesCompo";
function App() {
  return (
    <>
      <RoutesCompo>
        <HeaderCompo />
        <HomePage />
      </RoutesCompo>
    </>
  );
}

export default App;
