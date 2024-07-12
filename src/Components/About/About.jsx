import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from '@material-ui/icons/Facebook';
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hello, I am <span className="about__name">Abdi Elias</span>
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/AbdiElos/"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:Abdie6722@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+251933136375"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/abdi-elias-570a80278/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.facebook.com/abdiiE.Irena"
            aria-label="Facebook"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://doc-0k-0g-prod-01-apps-viewer.googleusercontent.com/viewer2/prod-01/pdf/1d31toa0m8kuf5irdvvmb2sl08r4psih/7of7ic9u778gpnjsi2rp8m9jeaolqd90/1720771425000/3/118275094899730988414/APznzaY3GPQ_Thx4zE7QMkLCbl3yj5BuLpoMVK7Wr1HAV914gNzoWZia57-Ija2meun7g4Mutl-KABG-L9A83Gaf9Jyo3hNPohS-kCdmWceQVBBRgzfuYi1pnHT0g4qZXA76X5eXUO8xorr1sEuTyJ0Pza9HNX6gNnjvatztkjnRDyVyAQZRgW9-p0ApXbC_4nLnHWZTOQoeFlWIdIVlvR8ADbUvm_7i9frnKee4Jwyikvy6a3zE2zyI0cTwgOa0hdKQ4CLSiUQ87JTugwdW-DQKuYp4Zu4ebj_xjs4JbUHVKxU9b1hOvFy0NL9Z4cuyriYa6pT_3G8_IkXRToc2jRFNr05uWQwOJBMTgkrQ5IAZW7R7Z7Q3ZsfB-BBN-p5eaK4u0pHHaij79zrihsh79phMvBuF_UlyISuQRtQhpEUqPNttgmNiZ5M=?authuser=0&nonce=2fpq6or0dtate&user=118275094899730988414&hash=jg6madb878pflmqporl2qn8nun41qsg4"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
