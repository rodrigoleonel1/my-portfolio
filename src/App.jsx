import { Home } from "./components/Home.jsx";
import { Projects } from "./components/Projects.jsx";
import { Footer } from "./components/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <>
      <BrowserRouter>
        <main className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0 mt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects home={false} quantity={"5"}/>} />
          </Routes>
        </main>
        <Footer />
        <Toaster richColors />
      </BrowserRouter>
    </>
  );
}

export default App;
