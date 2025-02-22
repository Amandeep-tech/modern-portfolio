import Navbar from "./components/Navbar/navbar";
import HomePageHeroLayout from "./components/HomePageHero/layout";
import HomePageHero from "./components/HomePageHero/homePageHero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomePageHeroLayout>
        <HomePageHero />
      </HomePageHeroLayout>
    </div>
  );
}
