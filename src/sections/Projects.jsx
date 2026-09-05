function Projects() {
  const featuredProjects = [
    {
      number: "01",
      title: "Luneva Parfume",
      category: "Web Development",
      description:
        "A premium perfume brand website designed to present the brand identity, products, and overall visual experience.",
      technologies: "WordPress · Web Development",
      image: "/images/projects/luneva-web.png",
      orientation: "landscape",
      link: "https://lunevaparfume.wordpress.com/",
      linkLabel: "Visit website",
    },
    {
      number: "02",
      title: "Sistem Informasi BK",
      category: "Web Application",
      description:
        "A web-based guidance and counseling information system designed to support student counseling activities.",
      technologies: "Laravel · PHP · MySQL",
      image: "/images/projects/sistem-bk.png",
      orientation: "landscape",
      link: "https://github.com/emhabe22/SIAKAD-SMA",
      linkLabel: "GitHub",
    },
    {
      number: "03",
      title: "Coffee Shop — Senandung Senja",
      category: "Web Development",
      description:
        "A coffee shop website created to present products, information, and the visual identity of Senandung Senja.",
      technologies: "Web Development",
      image: "/images/projects/coffee-shop.png",
      orientation: "landscape",
      link: "https://github.com/12eyzha/CoffeeShop-Senandung_Senja",
      linkLabel: "GitHub",
    },
  ];

  const otherProjects = [
    {
      number: "04",
      title: "Luneva Parfume Mobile App",
      category: "Mobile Application",
      description:
        "A mobile perfume application focused on product discovery, clean interfaces, and a smooth user experience.",
      technologies: "React Native · Expo · Supabase",
      image: "/images/projects/luneva-mobile.jpeg",
      orientation: "portrait",
      link: null,
      linkLabel: "View project",
    },
    {
      number: "05",
      title: "Movieholic",
      category: "Web Application",
      description:
        "A cinema ticket booking website designed for exploring movies and managing ticket reservations.",
      technologies: "Web Development",
      image: "/images/projects/movieholic.png",
      orientation: "landscape",
      link: null,
      linkLabel: "View project",
    },
    {
      number: "06",
      title: "ERP Alat Musik",
      category: "Web Application",
      description:
        "An enterprise resource planning website focused on managing business processes for a musical instrument store.",
      technologies: "Enterprise Web Application",
      image: "/images/projects/erp-alat-musik.png",
      orientation: "landscape",
      link: null,
      linkLabel: "View project",
    },
    {
      number: "07",
      title: "Pengolahan Data Spasial & DEM",
      category: "Data",
      description:
        "A data processing project exploring spatial information and Digital Elevation Models using Google Colab.",
      technologies: "Python · Google Colab · Spatial Data",
      image: "/images/projects/spatial-dem.png",
      orientation: "landscape",
      link: "https://colab.research.google.com/drive/1PF4yxg4GvC1D0mnGUizS7gQ3ODlX4p9W?usp=sharing",
      linkLabel: "Colab",
    },
    {
      number: "08",
      title: "World Cup Player Face Recognition",
      category: "Computer Vision",
      description:
        "A CNN-based face recognition project for classifying selected star football players from the 2022 World Cup.",
      technologies: "Python · CNN · Computer Vision",
      image: "/images/projects/face-recognition.png",
      orientation: "landscape",
      link: "https://colab.research.google.com/drive/1bQm4OA-jJi0aCByRMX4GCbHcyY9x0srR?usp=sharing",
      linkLabel: "Colab",
    },
    {
      number: "09",
      title: "Weather Image Classification",
      category: "Computer Vision",
      description:
        "An image classification project using the K-Nearest Neighbors algorithm to classify different weather conditions.",
      technologies: "Python · KNN · Computer Vision",
      image: "/images/projects/weather-knn.png",
      orientation: "landscape",
      link: "https://colab.research.google.com/drive/1ot3roWB0oFIhla1IAw255vRYSgXU0Sbh?usp=sharing",
      linkLabel: "Colab",
    },
    {
      number: "10",
      title: "Nyxveil",
      category: "Game Development",
      description:
        "A 3D action RPG featuring exploration, combat, bosses, and a fantasy-driven storyline.",
      technologies: "Unity · 3D · Action RPG",
      image: "/images/projects/nyxveil.png",
      orientation: "landscape",
      link: null,
      linkLabel: "View project",
    },
    {
      number: "11",
      title: "Fantasy Forest",
      category: "Game Development",
      description:
        "A 3D action game set in a fantasy environment focused on exploration and interactive gameplay.",
      technologies: "Unity · 3D · Action Game",
      image: "/images/projects/fantasy-forest.png",
      orientation: "landscape",
      link: null,
      linkLabel: "View project",
    },
  ];

  return (
    <section
      id="work"
      className="border-t border-[#dedcd5] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* ================= HEADER ================= */}

        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr]">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#77746e]">
            Selected Work
          </p>

          <div>
            <h2 className="max-w-4xl text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-[#171717] sm:text-4xl lg:text-5xl">
              A collection of software, experiments, and interactive
              experiences I've built.
            </h2>
          </div>
        </div>

        {/* ================= FEATURED PROJECTS ================= */}

        <div className="mt-20">

          <div className="mb-10 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#8c8982]">
              Featured Projects
            </span>

            <div className="h-px flex-1 bg-[#dedcd5]" />
          </div>

          <div className="space-y-20 lg:space-y-24">

            {featuredProjects.map((project) => (
              <article
                key={project.number}
                className="group"
              >
                <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">

                  {/* PROJECT INFO */}

                  <div className="lg:pr-10">

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-[#d86f52]">
                        {project.number}
                      </span>

                      <span className="text-sm text-[#b5b1aa] transition-transform duration-300 group-hover:translate-x-1">
                        ↗
                      </span>
                    </div>

                    <div className="mt-7">

                      <p className="text-sm text-[#77746e]">
                        {project.category}
                      </p>

                      <h3 className="mt-2 text-3xl font-medium leading-tight tracking-[-0.025em] text-[#171717] sm:text-4xl">
                        {project.title}
                      </h3>

                      <p className="mt-5 max-w-md text-sm leading-6 text-[#77746e]">
                        {project.description}
                      </p>

                      <p className="mt-5 text-[11px] uppercase tracking-[0.14em] text-[#99958d]">
                        {project.technologies}
                      </p>

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-7 inline-flex text-sm font-medium text-[#171717] underline underline-offset-4 transition-colors hover:text-[#d86f52]"
                        >
                          {project.linkLabel} ↗
                        </a>
                      )}

                    </div>
                  </div>

                  {/* PROJECT IMAGE */}

                  <div className="flex aspect-[2.17/1] items-center justify-center overflow-hidden rounded-[3px] bg-[#ebe6dd] p-2 sm:p-3">

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                    />

                  </div>

                </div>
              </article>
            ))}

          </div>
        </div>

        {/* ================= MORE PROJECTS ================= */}

        <div className="mt-28">

          <div className="mb-10 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#8c8982]">
              More Projects
            </span>

            <div className="h-px flex-1 bg-[#dedcd5]" />
          </div>

          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2">

            {otherProjects.map((project) => (
              <article
                key={project.number}
                className="group"
              >

                {/* IMAGE */}

                {project.orientation === "portrait" ? (
                  <div className="flex h-[500px] items-center justify-center overflow-hidden rounded-[3px] bg-[#ebe6dd] p-6 sm:h-[560px]">

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="h-full w-auto max-w-[85%] object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                    />

                  </div>
                ) : (
                  <div className="flex aspect-[2.17/1] items-center justify-center overflow-hidden rounded-[3px] bg-[#ebe6dd] p-2 sm:p-3">

                    <img
                      src={project.image}
                      alt={`${project.title} project`}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                    />

                  </div>
                )}

                {/* INFO */}

                <div className="mt-5">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-medium text-[#d86f52]">
                      {project.number}
                    </span>

                    <span className="text-xs uppercase tracking-[0.08em] text-[#99958d]">
                      {project.category}
                    </span>

                  </div>

                  <div className="mt-3 flex items-start justify-between gap-5">

                    <h3 className="text-xl font-medium leading-tight tracking-[-0.02em] text-[#171717]">
                      {project.title}
                    </h3>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-xs font-medium text-[#171717] underline underline-offset-4 transition-colors hover:text-[#d86f52]"
                      >
                        {project.linkLabel} ↗
                      </a>
                    )}

                  </div>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-[#77746e]">
                    {project.description}
                  </p>

                  <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-[#99958d]">
                    {project.technologies}
                  </p>

                </div>

              </article>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;