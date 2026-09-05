import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#work" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/6289512795205",
    },
    {
      name: "Email",
      icon: FaEnvelope,
      url: "mailto:alvynardhana29@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "https://www.linkedin.com/",
    },
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://github.com/Alvyn29",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://www.instagram.com/alvyn_ardhana?igsi=ZWo1cmxvdmFrNWxh&utm_source=qr",
    },
  ];

  return (
    <footer className="bg-[#171717] text-white">

      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">

        {/* MAIN FOOTER */}
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:gap-20">

          {/* BRAND */}
          <div>
            <h3
              className="
                font-display
                text-3xl
                font-semibold
                tracking-[-0.045em]
                text-white
                sm:text-4xl
              "
            >
              Alvyn Ardhana
            </h3>

            <p
              className="
                font-body
                mt-5
                max-w-md
                text-sm
                leading-7
                text-[#a3a3a0]
              "
            >
              Informatics Engineering student focused on building
              meaningful digital products through technology,
              creativity, and continuous learning.
            </p>

            <p
              className="
                font-body
                mt-6
                text-xs
                uppercase
                tracking-[0.12em]
                text-[#777771]
              "
            >
              Software · Data · Computer Vision
            </p>
          </div>


          {/* NAVIGATION */}
          <div>
            <p
              className="
                font-body
                text-xs
                font-medium
                uppercase
                tracking-[0.14em]
                text-[#d96c4f]
              "
            >
              Explore
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    font-body
                    text-sm
                    text-[#c5c5c0]
                    transition-all
                    duration-300
                    hover:translate-x-1
                    hover:text-white
                  "
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>


          {/* SOCIAL */}
          <div>
            <p
              className="
                font-body
                text-xs
                font-medium
                uppercase
                tracking-[0.14em]
                text-[#d96c4f]
              "
            >
              Connect
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target={
                      item.url.startsWith("http")
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      item.url.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={item.name}
                    className="
                      group
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#41413d]
                      text-[#c5c5c0]
                      transition-all
                      duration-300
                      hover:border-[#d96c4f]
                      hover:text-[#d96c4f]
                    "
                  >
                    <Icon
                      className="
                        text-[16px]
                        transition-transform
                        duration-300
                        group-hover:scale-90
                      "
                    />
                  </a>
                );
              })}
            </div>

            <p
              className="
                font-body
                mt-6
                text-sm
                leading-6
                text-[#777771]
              "
            >
              Open to opportunities, collaborations,
              and interesting ideas.
            </p>
          </div>

        </div>


        {/* DIVIDER */}
        <div className="h-px w-full bg-[#343430]" />


        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-5
            py-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >

          <p
            className="
              font-body
              text-[10px]
              uppercase
              tracking-[0.1em]
              text-[#777771]
            "
          >
            © 2026 Alvyn Ardhana. All rights reserved.
          </p>

          <p
            className="
              font-body
              text-[10px]
              uppercase
              tracking-[0.1em]
              text-[#777771]
            "
          >
            Designed & Built by Alvyn
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;