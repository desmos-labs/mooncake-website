import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import HomePageContent from "@/app/components/HomePageContent";
import DefaultSEO from "@/app/seo";

export const metadata = {
  ...DefaultSEO,
};

export default function Home() {
  return (
    <div className="flex h-dvh flex-col">
      <div className="bg-home-hero-mobile md:bg-home-hero-tablet flex flex-grow flex-col bg-cover lg:bg-home-hero-desktop">
        <header>
          <Header />
        </header>
        <main>
          <HomePageContent />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
