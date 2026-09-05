function Expertise() {
  const expertise = [
    {
      number: "01",
      title: "Software Development",
      subtitle: "Web & Mobile Development",
      description:
        "Building web and mobile applications with a focus on functionality, structured development, and practical user experiences.",
      languages: ["PHP", "JavaScript", "Python", "SQL"],
      technologies: [
        "Laravel",
        "React",
        "React Native",
        "Expo",
        "Vite",
        "REST API",
      ],
      focus: [
        "Web Applications",
        "Mobile Applications",
        "API Integration",
        "Database",
      ],
    },

    {
      number: "02",
      title: "Data & Machine Learning",
      subtitle: "Data Processing & Analysis",
      description:
        "Working with data processing, analysis, and machine learning experiments through academic and project-based work.",
      languages: ["Python"],
      technologies: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "Google Colab",
      ],
      focus: [
        "Data Mining",
        "Data Processing",
        "Classification",
        "Data Analysis",
      ],
    },

    {
      number: "03",
      title: "Computer Vision",
      subtitle: "Image Processing & Recognition",
      description:
        "Exploring computer vision through image processing, classification, and recognition-based projects.",
      languages: ["Python"],
      technologies: [
        "OpenCV",
        "CNN",
        "KNN",
        "TensorFlow / Keras",
      ],
      focus: [
        "Image Processing",
        "Face Recognition",
        "Image Classification",
        "Feature Extraction",
      ],
    },

    {
      number: "04",
      title: "Quality Assurance",
      subtitle: "Software Testing",
      description:
        "Ensuring software quality through structured testing, documentation, and identifying problems before they affect users.",
      languages: [],
      technologies: [
        "Test Case Design",
        "Functional Testing",
        "Regression Testing",
        "Bug Reporting",
        "Test Documentation",
      ],
      focus: [
        "Functional Testing",
        "Test Documentation",
        "Usability Testing",
        "Quality Control",
      ],
    },

    {
      number: "05",
      title: "Game Development",
      subtitle: "Interactive 3D Experiences",
      description:
        "Developing interactive 3D game experiences while exploring gameplay systems, character controllers, environments, and animations.",
      languages: ["C#"],
      technologies: [
        "Unity",
        "Blender",
        "Mixamo",
      ],
      focus: [
        "3D Game Development",
        "Gameplay Systems",
        "Character Controller",
        "Animation",
      ],
    },

    {
      number: "06",
      title: "IT Support",
      subtitle: "Technical Troubleshooting",
      description:
        "Handling practical hardware and software problems while helping maintain reliable computing environments.",
      languages: [],
      technologies: [
        "Hardware Troubleshooting",
        "Software Troubleshooting",
        "System Configuration",
        "Basic Networking",
      ],
      focus: [
        "Technical Support",
        "Troubleshooting",
        "System Configuration",
        "Hardware Support",
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="border-t border-[#dcdcd6] bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* SECTION HEADER */}

        <div className="flex items-center gap-4">
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#686863]">
            Expertise
          </span>

          <div className="h-px flex-1 bg-[#dcdcd6]" />

          <span className="hidden font-body text-[11px] text-[#999993] sm:block">
                     </span>
        </div>


        {/* INTRO */}

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#d96c4f]">
              What I do
            </p>
          </div>

          <div>
            <h2 className="font-display max-w-4xl text-3xl font-medium leading-[1.05] tracking-[-0.045em] text-[#171717] sm:text-4xl lg:text-5xl">
              A broad technical background built through projects,
              experimentation, and hands-on learning.
            </h2>
          </div>

        </div>


        {/* EXPERTISE LIST */}

        <div className="mt-16 border-t border-[#dcdcd6] lg:mt-20">

          {expertise.map((item) => (
            <article
              key={item.number}
              className="group border-b border-[#dcdcd6] py-10 lg:py-12"
            >

              <div className="grid gap-8 lg:grid-cols-[70px_0.8fr_1.2fr]">

                {/* NUMBER */}

                <div>
                  <span className="font-body text-xs font-medium text-[#d96c4f]">
                    {item.number}
                  </span>
                </div>


                {/* TITLE & DESCRIPTION */}

                <div>

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="font-display text-2xl font-medium leading-tight tracking-[-0.03em] text-[#171717] sm:text-3xl">
                        {item.title}
                      </h3>

                      <p className="font-body mt-1 text-sm text-[#999993]">
                        {item.subtitle}
                      </p>

                    </div>

                    <span className="font-body text-lg text-[#b5b5ae] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>

                  </div>

                  <p className="font-body mt-6 max-w-md text-sm leading-6 text-[#686863]">
                    {item.description}
                  </p>

                </div>


                {/* TECHNICAL DETAILS */}

                <div className="grid gap-8 sm:grid-cols-3">

                  {/* LANGUAGES */}

                  <div>
                    <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[#999993]">
                      Languages
                    </p>

                    <div className="mt-3 space-y-1.5">
                      {item.languages.length > 0 ? (
                        item.languages.map((language) => (
                          <p
                            key={language}
                            className="font-body text-sm text-[#44443f]"
                          >
                            {language}
                          </p>
                        ))
                      ) : (
                        <p className="font-body text-sm text-[#b5b5ae]">
                          —
                        </p>
                      )}
                    </div>
                  </div>


                  {/* TECHNOLOGIES */}

                  <div>
                    <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[#999993]">
                      Tools & Technologies
                    </p>

                    <div className="mt-3 space-y-1.5">
                      {item.technologies.map((technology) => (
                        <p
                          key={technology}
                          className="font-body text-sm text-[#44443f]"
                        >
                          {technology}
                        </p>
                      ))}
                    </div>
                  </div>


                  {/* FOCUS */}

                  <div>
                    <p className="font-body text-[10px] font-medium uppercase tracking-[0.14em] text-[#999993]">
                      Focus
                    </p>

                    <div className="mt-3 space-y-1.5">
                      {item.focus.map((focus) => (
                        <p
                          key={focus}
                          className="font-body text-sm text-[#44443f]"
                        >
                          {focus}
                        </p>
                      ))}
                    </div>
                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Expertise;