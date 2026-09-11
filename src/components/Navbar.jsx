function Navbar() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#work" },
    { name: "Expertise", href: "#expertise" },
   { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#e3e2dc] bg-[#f8f7f3]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[81px] max-w-[1600px] items-center justify-between px-6 lg:px-10">

        {/* LOGO / NAME */}
        <a
          href="#home"
          className="
            font-display
            text-xl
            font-semibold
            tracking-[-0.04em]
            text-[#171717]
            transition-colors
            duration-300
            hover:text-[#d96c4f]
          "
        >
          Alvyn Ardhana
        </a>


        {/* NAVIGATION */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="
                font-body
                text-[11px]
                font-medium
                uppercase
                tracking-[0.1em]
                text-[#6f6f6a]
                transition-colors
                duration-300
                hover:text-[#d96c4f]
              "
            >
              {item.name}
            </a>
          ))}

{/* CV */}
<a
  href="https://drive.google.com/file/d/1OJjqYC3qsbbkaJ47ndnIgQh-FkJ3ZEC5/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  View CV
</a>
</nav>


{/* MOBILE CV */}
<a
  href="https://drive.google.com/file/d/1OJjqYC3qsbbkaJ47ndnIgQh-FkJ3ZEC5/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="
    rounded-full
    bg-[#171717]
    px-5
    py-2.5
    font-body
    text-[11px]
    font-medium
    uppercase
    tracking-[0.08em]
    text-white
    transition-colors
    duration-300
    hover:bg-[#d96c4f]
    md:hidden
  "
>
  CV ↗
</a>

</div>
</header>
);
}

export default Navbar;