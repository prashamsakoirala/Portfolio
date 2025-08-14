import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import useScrolled from "../hooks/useScrolled";

interface NavItem {
  name: string;
  targetId: string;
  icon?: any;
}

const navItemStar: NavItem = { name: "", targetId: "home", icon: faStar };
const navigationLinks: NavItem[] = [
  { name: "Projects", targetId: "projects" },
  { name: "Experience", targetId: "experience" },
];

export default function Navbar() {
  const scrolled = useScrolled(0.95);
  const textColor = scrolled ? "text-white" : "text-black";

  const handleScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`${textColor}`}>
      <div className="flex justify-between items-center p-8 bg-transparent fixed w-full z-50 md:flex-row">
        <div className="hidden md:flex justify-between items-center w-full">
          <div
            className="text-2xl uppercase hover:scale-110 duration-200 ease-in-out cursor-pointer flex items-center gap-2 ml-2"
            onClick={() => handleScroll(navItemStar.targetId)}
          >
            {navItemStar.icon && <FontAwesomeIcon icon={navItemStar.icon} className="fa-lg" />}
          </div>
          <div className="flex gap-16 mr-8">
            {navigationLinks.map((link) => (
              <div
                key={link.name}
                className="uppercase hover:scale-110 duration-200 ease-in-out cursor-pointer flex items-center gap-2"
                onClick={() => handleScroll(link.targetId)}
              >
                {link.icon && <FontAwesomeIcon icon={link.icon} className="fa-lg" />}
                <span>{link.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden flex justify-evenly items-center w-full px-4">
          <div
            className="text-xl uppercase hover:scale-110 duration-200 ease-in-out cursor-pointer flex items-center gap-2"
            onClick={() => handleScroll(navItemStar.targetId)}
          >
            {navItemStar.icon && <FontAwesomeIcon icon={navItemStar.icon} className="fa-lg" />}
          </div>
          {navigationLinks.map((link) => (
            <div
              key={link.name}
              className="uppercase hover:scale-110 duration-200 ease-in-out cursor-pointer flex items-center gap-2 text-sm"
              onClick={() => handleScroll(link.targetId)}
            >
              {link.icon && <FontAwesomeIcon icon={link.icon} className="fa-sm" />}
              <span>{link.name}</span>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}