import {
  FaWhatsapp,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa6";

function Contact() {
  const contactLinks = [
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
    <section
      id="contact"
      className="bg-[#f8f7f3] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px] px-6 text-center lg:px-10">

        {/* LABEL */}
        <p
          className="
            font-body
            text-sm
            font-medium
            tracking-[-0.01em]
            text-[#d96c4f]
            sm:text-base
          "
        >
          Contact
        </p>


        {/* TITLE */}
        <h2
          className="
            font-display
            mt-5
            text-5xl
            font-semibold
            leading-none
            tracking-[-0.055em]
            text-[#171717]
            sm:text-6xl
            lg:text-7xl
          "
        >
          Let&apos;s Connect
        </h2>


        {/* DESCRIPTION */}
        <p
          className="
            font-body
            mx-auto
            mt-6
            max-w-xl
            text-sm
            leading-7
            text-[#6f6f6a]
            sm:text-base
          "
        >
          Have an idea, project, or opportunity in mind?
          <br className="hidden sm:block" />
          I&apos;d be happy to connect and talk about it.
        </p>


        {/* SOCIAL ICONS */}
        <div
          className="
            mt-9
            flex
            flex-wrap
            items-center
            justify-center
            gap-3
            sm:gap-4
          "
        >
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.url.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={item.name}
                className="
                  group
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#deddd7]
                  bg-transparent
                  transition-all
                  duration-300
                  hover:border-[#bdbcb6]
                "
              >
                <Icon
                  className="
                    text-[19px]
                    text-[#d96c4f]
                    transition-all
                    duration-300
                    ease-out
                    group-hover:scale-90
                    group-hover:text-[#7896aa]
                  "
                />
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Contact;