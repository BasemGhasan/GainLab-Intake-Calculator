import Navbar from "../components/navbar";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";
import CalculateNutrition from "../components/calculateNutrition";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <CalculateNutrition />
      </main>
    </>
  );
}
