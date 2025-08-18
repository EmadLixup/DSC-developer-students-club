import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold">DSC Developer Students Club</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
