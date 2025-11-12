import { useState } from "react";

const Hatch = ({ number, content }) => {
  const [isOpen, setIsOpen] = useState(() => {
    const openedHatches = JSON.parse(
      localStorage.getItem("openedHatches") || "[]"
    );
    return openedHatches.includes(number);
  });
  const today = new Date().getDate();

  const canOpen = number <= today;

  const OpenHatch = () => {
    if (canOpen && !isOpen) {
      setIsOpen(true);
      const openedHatches = JSON.parse(
        localStorage.getItem("openedHatches") || "[]"
      );
      if (!openedHatches.includes(number)) {
        openedHatches.push(number);
        localStorage.setItem("openedHatches", JSON.stringify(openedHatches));
      }
    }
  };
  return (
    <div
      onClick={OpenHatch}
      className={`p-4 border rounded-2xl cursor-pointer shadow-md transition-transform duration-300 hover:scale-105 ${
        canOpen
          ? "bg-red-100 hover:bg-red-200"
          : "bg-gray-200 opacity-50 cursor-not-allowed"
      }`}
    >
      {!isOpen ? (
        <h2 className="text-2xl font-bold text-center">{number}</h2>
      ) : (
        <div className="text-center">
          <p className="text-lg">{content.content}</p>
          {content.link && (
            <a
              href={content.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline mt-2 block"
            >
              Avaa yllätys 🎁
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Hatch;
