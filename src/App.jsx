import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Values from "./sections/Values";

function App() {
  return (
    <>
      <Navbar />
      <main className=" grid items-center justify-center bg-gray-50">
        {/* <h1 className="text-4xl font-bold">DSC Developer Students Club</h1> */}
        <Values />
      
      </main>
      <Footer />
    </>
  );
}

export default App;
