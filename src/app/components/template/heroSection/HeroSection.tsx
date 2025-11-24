function HeroSection() {
  return (
    <section className="mt-10">
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-semibold leading-tight">
          amir <br /> hossein
        </h1>

        <h2 className="text-xl font-medium  leading-relaxed">
          frontend developer <br />
          17 years old, Qom – IR
        </h2>

        <div className="flex items-center">
          <p className="rotate-90 text-sm font-medium tracking-wide">EN | FA</p>
        </div>
      </div>
      <div className="relative mt-5 w-full sm:h-64 border">
        {/* <Image src="" fill alt="amirhossein" /> */}
      </div>
    </section>
  );
}

export default HeroSection;
