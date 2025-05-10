import { useState } from "react";

const SocialMediaIcons = () => {
  const [showEmail, setShowEmail] = useState(false);

  const toggleEmailPopup = () => {
    setShowEmail(!showEmail);
    setTimeout(() => setShowEmail(false), 3000); // Hide after 3s
  };

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7 relative">
      {/* LinkedIn Icon */}
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/mouli-tapadar-9ab6281a0/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="linkedin-link"
          src="../assets/linkedin.png"
          className="w-[30px] h-[30px]"
        />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Mouli1807"
        target="_blank"
        rel="noreferrer"
      >
        <img
          alt="github-link"
          src="../assets/github.png"
          className="w-[30px] h-[30px]"
        />
      </a>


      {/* Gmail Icon */}
      <button
        onClick={toggleEmailPopup}
        className="hover:opacity-50 transition duration-500"
      >
        <img
          alt="gmail-link"
          src="../assets/gmail.png"
          className="w-[30px] h-[30px]"
        />
      </button>

      {/* Email Popup */}
      {showEmail && (
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white text-deep-blue text-sm px-4 py-2 rounded shadow-md whitespace-nowrap">
          mouli.tapadar123@gmail.com
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
