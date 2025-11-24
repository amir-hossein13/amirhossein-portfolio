import Container from "./components/ui/Container";
import HeroSection from "./components/template/heroSection/HeroSection";
import SkillsSection from "./components/template/skills/SkillsSection";
import AboutmeSection from "./components/template/skills/AboutmeSection";
import PortfolioSection from "./components/template/PortfolioSection";
import ContactMe from "./components/template/ContanctMe/ContactMe";

function HomePage() {
  return (
    <>
      <Container>
        <HeroSection />
      </Container>
      <AboutmeSection />
      <Container>
        <SkillsSection />
      </Container>
      <section className="bg-[#F6F6F6] py-20 w-full mt-10">
        <Container>
          <PortfolioSection />
        </Container>
      </section>
      <ContactMe/>
    </>
  );
}

export default HomePage;
