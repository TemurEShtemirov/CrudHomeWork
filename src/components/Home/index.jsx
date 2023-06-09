import React,{useContext} from "react";
import {context} from "../context"
import "./index.scss";
import HeroImage1 from "../../assets/graduation-image.png";
import HeroImage2 from "../../assets/bookmark-image.png";
import HeroImage3 from "../../assets/dollar-image.png";

function Home(props) {

  const { mode,LANG, language } = useContext(context);
  const theme = mode ? false : true;

  const lang = LANG[language];

  return (
    <div className={"hero " + (theme ? "" : "bg-[#040111]")}>
      <div className="container">
        <div className="hero__inner">
          <ul className="hero-cards">
            <li className="hero-card">
              <div className="hero-card__body">
                <img src={HeroImage1} alt="card image" />
                <h4 className="hero-card__body-title">
                  {lang.homePage.students}
                </h4>
              </div>
              <span className="hero-card__number">243</span>
            </li>

            <li className="hero-card">
              <div className="hero-card__body">
                <img src={HeroImage2} alt="card image" />
                <h4 className="hero-card__body-title">
                  {lang.homePage.course}
                </h4>
              </div>
              <span className="hero-card__number">13</span>
            </li>

            <li className="hero-card">
              <div className="hero-card__body">
                <img src={HeroImage3} alt="card image" />
                <h4 className="hero-card__body-title">
                  {lang.homePage.payments}
                </h4>
              </div>
              <span className="hero-card__number">INR 556,000</span>
            </li>

            <li className="hero-card">
              <div className="hero-card__body">
                <div className="hero-card__image4">
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 2.125C21.1039 2.125 24.4375 5.45859 24.4375 9.5625C24.4375 13.6664 21.1039 17 17 17C12.8961 17 9.5625 13.6664 9.5625 9.5625C9.5625 5.45859 12.8961 2.125 17 2.125ZM25.5 23.375C29.0129 23.375 31.875 26.2371 31.875 29.75V31.875H2.125V29.75C2.125 26.2371 4.98711 23.375 8.5 23.375C14.1445 23.375 12.9691 24.4375 17 24.4375C21.0441 24.4375 19.8488 23.375 25.5 23.375ZM17 0C11.7207 0 7.4375 4.2832 7.4375 9.5625C7.4375 14.8418 11.7207 19.125 17 19.125C22.2793 19.125 26.5625 14.8418 26.5625 9.5625C26.5625 4.2832 22.2793 0 17 0ZM25.5 21.25C19.3641 21.25 20.7852 22.3125 17 22.3125C13.2281 22.3125 14.6293 21.25 8.5 21.25C3.80508 21.25 0 25.0551 0 29.75V31.875C0 33.0504 0.949609 34 2.125 34H31.875C33.0504 34 34 33.0504 34 31.875V29.75C34 25.0551 30.1949 21.25 25.5 21.25Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h4 className="hero-card__body-title">{lang.homePage.users}</h4>
              </div>
              <span className="hero-card__number">3</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
