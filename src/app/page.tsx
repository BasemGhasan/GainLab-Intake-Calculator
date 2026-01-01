import Navbar from "../components/navbar";
import Hero from "../components/hero";
import HowItWorks from "../components/howItWorks";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
      </main>
    </>
  );
}
