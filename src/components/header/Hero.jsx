import { HeroContent, HeroBackground } from "./AllComponents";

function Hero() {
  return (
    <header className="flex p-6 md:px-12 lg:px-32 xl:px-48 2xl:px-72 relative h-[95vh] md:h-[80vh] bg-primary">
      <HeroContent />
      <HeroBackground />
    </header>
  );
}

export default Hero;