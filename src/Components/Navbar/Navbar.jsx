import React from "react";
import { ThemeContext } from "../../Context/theme";
import "./Navbar.css";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import WbSunnyRoundedIcon from "@material-ui/icons/WbSunnyRounded";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Navbar = () => {
  const [{ themename, toggeltheme }] = React.useContext(ThemeContext);
  const [showNavList, setShowNavList] = React.useState(false);

  const toggleNavList = (id) => {
    var element = document.getElementById(id);
    if (element) {
      element.scrollIntoView();
    }
    setShowNavList(!showNavList);
  };
  return (
    <>
      <nav className="center nav">
        <ul
          style={{ display: showNavList ? "flex" : null }}
          className="nav__list"
        >
          <li className="nav__list-item">
            <a
              href="#home"
              onClick={() => toggleNavList("#home")}
              className="link link--nav"
            >
              Home
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#about"
              onClick={() => toggleNavList("#about")}
              className="link link--nav"
            >
              About
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#skills"
              onClick={() => toggleNavList("#skills")}
              className="link link--nav"
            >
              Skills
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#projects"
              onClick={() => toggleNavList("#projects")}
              className="link link--nav"
            >
              Projects
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="#contact"
              onClick={() => toggleNavList("#contact")}
              className="link link--nav"
            >
              Contact
            </a>
          </li>
          <li className="nav__list-item">
            <a
              href="https://doc-0k-0g-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/1d31toa0m8kuf5irdvvmb2sl08r4psih/7of7ic9u778gpnjsi2rp8m9jeaolqd90/1720771425000/3/118275094899730988414/APznzaY3GPQ_Thx4zE7QMkLCbl3yj5BuLpoMVK7Wr1HAV914gNzoWZia57-Ija2meun7g4Mutl-KABG-L9A83Gaf9Jyo3hNPohS-kCdmWceQVBBRgzfuYi1pnHT0g4qZXA76X5eXUO8xorr1sEuTyJ0Pza9HNX6gNnjvatztkjnRDyVyAQZRgW9-p0ApXbC_4nLnHWZTOQoeFlWIdIVlvR8ADbUvm_7i9frnKee4Jwyikvy6a3zE2zyI0cTwgOa0hdKQ4CLSiUQ87JTugwdW-DQKuYp4Zu4ebj_xjs4JbUHVKxU9b1hOvFy0NL9Z4cuyriYa6pT_3G8_IkXRToc2jRFNr05uWQwOJBMTgkrQ5IAZW7R7Z7Q3ZsfB-BBN-p5eaK4u0pHHaij79zrihsh79phMvBuF_UlyISuQRtQhpEUqPNttgmNiZ5M=?authuser=0&nonce=2fpq6or0dtate&user=118275094899730988414&hash=jg6madb878pflmqporl2qn8nun41qsg4"
              onClick={toggleNavList}
              className="link link--nav"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={toggeltheme}
          className="btn btn--icon nav__theme"
          aria-label="toggle theme"
          style={{ backgroundColor: "inherit" }}
        >
          {themename === "dark" ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
        </button>
        <button
          type="button"
          onClick={toggleNavList}
          className="btn btn--icon nav__hamburger"
          aria-label="toggle navigation"
        >
          {showNavList ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>
    </>
  );
};
