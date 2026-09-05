import { useEffect, useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";

function ScrollButtons() {
  const [showTop, setShowTop] = useState(false);
  const [showBottom, setShowBottom] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Tombol ke atas
      setShowTop(scrollTop > 400);

      // Tombol ke bawah
      setShowBottom(
        scrollTop + windowHeight < documentHeight - 100
      );
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        flex-col
        gap-2
      "
    >

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[#dcdcd6]
          bg-[#f8f7f3]
          text-[#171717]
          shadow-sm
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-[#d96c4f]
          hover:text-white
          ${
            showTop
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }
        `}
      >
        <FaArrowUp className="text-sm" />
      </button>


      {/* SCROLL TO BOTTOM */}
      <button
        onClick={scrollToBottom}
        aria-label="Scroll to bottom"
        className={`
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#171717]
          text-white
          shadow-sm
          transition-all
          duration-300
          hover:translate-y-1
          hover:bg-[#d96c4f]
          ${
            showBottom
              ? "translate-y-0 opacity-100"
              : "pointer-events-none translate-y-2 opacity-0"
          }
        `}
      >
        <FaArrowDown className="text-sm" />
      </button>

    </div>
  );
}

export default ScrollButtons;