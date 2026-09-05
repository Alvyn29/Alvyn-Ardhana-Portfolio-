function Education() {
  const learningJourney = [
    {
      name: "SMKN 4 PEKANBARU",
      type: "VOCATIONAL EDUCATION",
      image: "/images/SMK.png",
      url: "https://smkn4pekanbaru.sch.id/",
    },
    {
      name: "PT MEDIA ANTAR NUSA",
      type: "INTERNSHIP",
      image: "/images/NUSANET.png",
      url: "https://nusanet.id/",
    },
    {
      name: "INSTITUT TEKNOLOGI NASIONAL MALANG",
      type: "INFORMATICS ENGINEERING",
      image: "/images/ITN.png",
      url: "https://www.itn.ac.id/",
    },
    {
      name: "Lab Multimedia & Pengolahan Citra",
      type: "ORGANIZATION",
      image: "/images/GAMA.png",
      url: "https://www.instagram.com/lab.mm.pcd_itn?igsi=MTB1NG5pZTMzZXg0bA==",
    },
    {
      name: "SMAS MISHBAHUL ULUM",
      type: "INTERNSHIP",
      image: "/images/SMAS.png",
      url: "https://sekolah.data.kemendikdasmen.go.id/profil-sekolah/DA87FBA8-9375-48C7-BA79-FC7F4A047F58",
    },
    {
      name: "DICODING",
      type: "PROFESSIONAL LEARNING",
      image: "/images/DICODING.png",
      url: "https://www.dicoding.com/",
    },
    {
      name: "MYSKILL",
      type: "PROFESSIONAL LEARNING",
      image: "/images/MY.png",
      url: "https://myskill.id/",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#f7f7f4] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* HEADER */}
        <div className="flex items-center gap-4">
          <span className="font-body text-[11px] font-medium uppercase tracking-[0.18em] text-[#686863]">
            Education & Learning
          </span>

          <div className="h-px flex-1 bg-[#dcdcd6]" />
        </div>


        {/* INTRO */}
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[0.7fr_1.3fr]">

          <div>
            <p className="font-body text-[11px] font-medium uppercase tracking-[0.15em] text-[#d96c4f]">
              My Journey
            </p>
          </div>

          <div>
            <h2
              className="
                font-display
                max-w-4xl
                text-3xl
                font-medium
                leading-[1.05]
                tracking-[-0.045em]
                text-[#171717]
                sm:text-4xl
                lg:text-5xl
              "
            >
              From education to professional experience and continuous
              learning.
            </h2>

            <p
              className="
                font-body
                mt-6
                max-w-2xl
                text-base
                leading-7
                text-[#686863]
                sm:text-lg
                sm:leading-8
              "
            >
              My journey in technology has been shaped by formal education,
              internship experience, organizational involvement, and
              continuous learning beyond the classroom.
            </p>
          </div>

        </div>


        {/* LOGOS */}
        <div className="mt-20 lg:mt-24">

          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-16
              sm:grid-cols-3
              lg:grid-cols-7
              lg:gap-x-8
            "
          >

            {learningJourney.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url !== "#" ? "_blank" : undefined}
                rel={
                  item.url !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={`Visit ${item.name}`}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                "
              >

                {/* LOGO AREA */}
                <div
                  className="
                    flex
                    h-[155px]
                    w-full
                    items-center
                    justify-center
                  "
                >

                  <img
                    src={item.image}
                    alt={`${item.name} logo`}
                    className={`
                      object-contain
                      transition-all
                      duration-500
                      ease-out
                      group-hover:grayscale
                      group-hover:opacity-50
                      group-hover:scale-[0.96]

                      ${
                       item.name === "Lab Multimedia & Pengolahan Citra"
                          ? "max-h-[155px] max-w-[200px] scale-[1.30]"
                          : "max-h-[135px] max-w-[175px]"
                      }
                    `}
                  />

                </div>


                {/* TEXT AREA */}
                <div
                  className="
                    mt-7
                    flex
                    min-h-[68px]
                    w-full
                    flex-col
                    items-center
                    justify-start
                  "
                >

                  <h3
                    className="
                      max-w-[200px]
                      font-display
                      text-[12px]
                      font-medium
                      leading-5
                      tracking-[-0.01em]
                      text-[#171717]
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-body
                      text-[9px]
                      font-medium
                      uppercase
                      tracking-[0.12em]
                      text-[#999993]
                      transition-colors
                      duration-300
                      group-hover:text-[#d96c4f]
                    "
                  >
                    {item.type}
                  </p>

                </div>


                {/* ARROW */}
                <span
                  className="
                    absolute
                    -right-1
                    -top-2
                    text-sm
                    text-[#d96c4f]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:opacity-100
                  "
                >
                  ↗
                </span>

              </a>
            ))}

          </div>

        </div>


        {/* FOOTNOTE */}
        <div className="mt-16 flex items-center gap-3">

          <span className="h-1.5 w-1.5 rounded-full bg-[#d96c4f]" />

          <p className="font-body text-xs text-[#999993]">
            EDUCATION · INTERNSHIP · ORGANIZATION · PROFESSIONAL LEARNING
          </p>

        </div>

      </div>
    </section>
  );
}

export default Education;