import './SocialButtons.css';

import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={20} />,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={20} />,
    url: "https://linkedin.com/in/yourusername",
  },
  // {
  //   name: "Twitter",
  //   icon: <FaTwitter size={20} />,
  //   url: "https://twitter.com/yourusername",
  // },
];

const SocialButtons = () => {
  return (
    <div className="flex gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-transparent border border-cyan-500/30 rounded-lg text-cyan-400 text-base font-medium flex items-center justify-center gap-2 hover:bg-cyan-900/10 hover:border-cyan-500/50 transition-all duration-300"
        >
          {social.icon}
          {/* <span className="hidden md:inline">{social.name}</span> */}
        </a>
      ))}
    </div>
  );
};

export default SocialButtons;
