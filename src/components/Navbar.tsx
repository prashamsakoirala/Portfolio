import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import useScrolled from "../hooks/useScrolled";

interface NavItem {
  name: string;
  targetId: string;
  icon?: any;
}

const navigationLinks: NavItem[] = [
  { name: "", targetId: "home", icon: faStar },
  { name: "Projects", targetId: "projects" },
  { name: "Experience", targetId: "experience" },
];

export default function Navbar() {
  const scrolled = useScrolled(0.3);

  const textColor = scrolled ? "text-black" : "text-white";

  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${textColor}`}>

      <div className="">
        {navigationLinks.map((link) => (
          <div key={link.name} className="uppercase hover:scale-110 duration-200 ease-in-out cursor-pointer flex items-center gap-2"
            onClick={() => handleScroll(link.targetId)}
          >
            {link.icon && <FontAwesomeIcon icon={link.icon} className="fa-lg" />}
            <span>{link.name}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}
