import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AimToAchieve from "./sections/AimToAchieve";
import Targets from "./sections/Targets.jsx";

function App() {
  return (
    <>
      <Navbar />
      <AimToAchieve />
      <Targets />
      <Footer />
    </>
  );
}

export default App;
