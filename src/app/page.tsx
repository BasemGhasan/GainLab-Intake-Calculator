import Navbar from "../components/navbar";
import Home from "../components/homeSection";
import About from "../components/aboutSection";
import CalculateNutrition from "../components/calculateNutrition";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <CalculateNutrition />
      </main>
    </>
  );
}
