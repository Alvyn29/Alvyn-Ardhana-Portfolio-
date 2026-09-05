function About() {
  const approach = [
    {
      number: "01",
      title: "Solve",
      description:
        "Break problems into smaller parts and look for practical solutions.",
    },
    {
      number: "02",
      title: "Build",
      description:
        "Turn ideas and requirements into functional digital products.",
    },
    {
      number: "03",
      title: "Test",
      description:
        "Check whether the system works as intended and identify what needs attention.",
    },
    {
      number: "04",
      title: "Improve",
      description:
        "Learn from the result, refine the solution, and keep moving forward.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-[#dcdcd6] bg-[#f7f7f4] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* SECTION HEADER */}
        <div className="flex items-center gap-4">
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#686863]">
            About Me
          </span>

          <div className="h-px flex-1 bg-[#dcdcd6]" />

          <span className="hidden font-body text-[11px] text-[#999993] sm:block">
                     </span>
        </div>


        {/* INTRO */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:mt-16">

          {/* IDENTITY */}
          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#d96c4f]">
            </p>

            <h2 className="font-display mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.055em] text-[#171717] sm:text-5xl lg:text-6xl">
              Alvyn
              <br />
              <span className="text-[#d96c4f]">Ardhana.</span>
            </h2>

            <p className="font-body mt-5 max-w-xs text-sm leading-6 text-[#686863]">
              Final-year Informatics Engineering student at Institut
              Teknologi Nasional Malang.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#d96c4f]" />

              <span className="font-body text-xs text-[#686863]">
                Malang, Indonesia
              </span>
            </div>
          </div>


          {/* MAIN DESCRIPTION */}
          <div>
            <p className="font-display max-w-4xl text-3xl font-medium leading-[1.08] tracking-[-0.04em] text-[#171717] sm:text-4xl lg:text-5xl">
              I'm interested in building digital products that are useful,
              functional, and actually work.
            </p>

            <p className="font-body mt-7 max-w-3xl text-base leading-7 text-[#686863] sm:text-lg sm:leading-8">
              As a final-year Informatics Engineering student, I've explored
              different areas of technology through academic projects,
              practical work, and independent development. My experience
              covers software development, data, computer vision, quality
              assurance, game development, and IT support.
            </p>

            <p className="font-body mt-5 max-w-3xl text-base leading-7 text-[#686863] sm:text-lg sm:leading-8">
              Working across these areas has taught me to look beyond simply
              making something work. I also care about how a system is
              structured, how users interact with it, how it behaves under
              testing, and what can be improved.
            </p>
          </div>

        </div>


        {/* PROFILE SNAPSHOT */}
        <div className="mt-16 grid border-y border-[#dcdcd6] sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">

          {/* EDUCATION */}
          <div className="border-b border-[#dcdcd6] px-5 py-7 sm:border-r lg:border-b-0">
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-[#999993]">
              Education
            </p>

            <p className="font-display mt-3 text-lg font-medium tracking-[-0.02em] text-[#171717]">
              ITN Malang
            </p>

            <p className="font-body mt-1 text-sm text-[#686863]">
              Informatics Engineering
            </p>
          </div>


          {/* STATUS */}
          <div className="border-b border-[#dcdcd6] px-5 py-7 lg:border-b-0 lg:border-r">
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-[#999993]">
              Status
            </p>

            <p className="font-display mt-3 text-lg font-medium tracking-[-0.02em] text-[#171717]">
              Final Year
            </p>

            <p className="font-body mt-1 text-sm text-[#686863]">
              2023 — 2026
            </p>
          </div>


          {/* PRIMARY FOCUS */}
          <div className="border-b border-[#dcdcd6] px-5 py-7 sm:border-r lg:border-b-0">
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-[#999993]">
              Primary Focus
            </p>

            <p className="font-display mt-3 text-lg font-medium tracking-[-0.02em] text-[#171717]">
              Software
            </p>

            <p className="font-body mt-1 text-sm text-[#686863]">
              Development & QA
            </p>
          </div>


          {/* EXPLORING */}
          <div className="px-5 py-7">
            <p className="font-body text-[10px] uppercase tracking-[0.15em] text-[#999993]">
              Exploring
            </p>

            <p className="font-display mt-3 text-lg font-medium tracking-[-0.02em] text-[#171717]">
              Data & AI
            </p>

            <p className="font-body mt-1 text-sm text-[#686863]">
              Computer Vision
            </p>
          </div>

        </div>


        {/* BEYOND THE CODE */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:mt-28">

          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#d96c4f]">
              Beyond the Code
            </p>
          </div>

          <div className="max-w-4xl">
            <p className="font-display text-2xl leading-9 tracking-[-0.025em] text-[#44423e] sm:text-3xl sm:leading-10">
              I don't see development as simply writing code. For me, it's
              about understanding the problem, building the solution,
              checking whether it works, and being willing to improve it.
            </p>
          </div>

        </div>


        {/* HOW I WORK */}
        <div className="mt-20 border-t border-[#dcdcd6] pt-12 lg:mt-28">

          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">

            <div>
              <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#d96c4f]">
                How I Work
              </p>

              <h3 className="font-display mt-4 max-w-sm text-3xl font-medium leading-tight tracking-[-0.04em] text-[#171717]">
                From problem to solution.
              </h3>
            </div>


            <div className="grid border-t border-[#dcdcd6] sm:grid-cols-2">

              {approach.map((item, index) => (
                <div
                  key={item.number}
                  className={`group px-5 py-7 ${
                    index >= 2 ? "border-t" : ""
                  } ${
                    index % 2 === 1 ? "sm:border-l" : ""
                  } border-[#dcdcd6]`}
                >

                  <div className="flex items-center justify-between">
                    <span className="font-body text-[10px] text-[#999993]">
                      {item.number}
                    </span>

                    <span className="font-body text-sm text-[#b4b4ad] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>

                  <h4 className="font-display mt-7 text-xl font-medium capitalize tracking-[-0.025em] text-[#171717]">
                    {item.title}
                  </h4>

                  <p className="font-body mt-3 max-w-xs text-sm leading-6 text-[#686863]">
                    {item.description}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;