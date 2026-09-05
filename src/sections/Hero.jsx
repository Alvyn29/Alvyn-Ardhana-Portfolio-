function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-81px)]"
    >
      <div className="mx-auto grid min-h-[calc(100vh-81px)] max-w-[1600px] items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10">

        {/* Text */}
        <div>
          <p className="font-body mb-5 text-sm font-medium uppercase tracking-[0.18em] text-[#d86f52]">
            Hello, I'm Alvyn Ardhana
          </p>

          <h1 className="font-display max-w-3xl text-5xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#171717] sm:text-6xl lg:text-7xl">
            I build digital products that{" "}
            <span className="text-[#d86f52]">
              actually work.
            </span>
          </h1>

          <p className="font-body mt-7 max-w-2xl text-base leading-7 text-[#6f6f6a] sm:text-lg">
            Informatics Engineering student focused on software development,
            data, computer vision, and quality assurance.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="font-body rounded-full bg-[#171717] px-6 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-[#d86f52]"
            >
              View my work →
            </a>

            <a
              href="#about"
              className="font-body rounded-full border border-[#cfcac1] px-6 py-3.5 text-sm font-medium text-[#171717] transition duration-300 hover:border-[#171717]"
            >
              More about me
            </a>
          </div>
        </div>


        {/* Visual */}
        <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[600px]">

          {/* Organic background */}
          <div className="absolute h-72 w-72 rounded-[48%_52%_60%_40%] bg-[#ead9d2] sm:h-96 sm:w-96 lg:h-[430px] lg:w-[430px]" />

          {/* Small blue accent */}
          <div className="absolute bottom-12 right-8 h-20 w-20 rounded-full bg-[#7896aa] opacity-70 lg:right-16" />

          {/* Photo */}
          <div className="relative z-10 h-[390px] w-[290px] overflow-hidden rounded-[45%_45%_8%_8%] bg-[#e9e2d8] sm:h-[480px] sm:w-[350px] lg:h-[550px] lg:w-[410px]">

            <img
              src="/images/alvyn.jpeg"
              alt="Alvyn Ardhana"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;