import React from "react";
import { useInView } from "react-intersection-observer";
import manWorking from "../../../images/man-working.jpg";
import familyPlaying from "../../../images/quality-family-time.jpg";
import "../../style/HomePage.css";

export default function HomePageThird() {
  const [leftRef, leftInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [rightRef, rightInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div className="about-us-third-wrapper">
      <div
        className={`about-us-third-top ${leftInView ? "appear" : "exit"}`}
        ref={leftRef}
      >
        <div className="third-top-left">
          <img src={manWorking}  />
        </div>
        <div className="third-top-right">
          <h1>Customized Financial Advice for International Investors</h1>
          <p>
            We understand that expatriates have unique needs when it comes to
            wealth management. Our planning-led approach allows us to find
            customized solutions for the complex financial planning situations
            you face as an expatriate. Your plan will be crafted to support your
            specific goals, and your portfolio will be designed to help you
            reach those goals while meeting currency exposure needs and ensuring
            your holdings meetthe tax compliance requirements.
          </p>
        </div>
      </div>
      <div
        className={`about-us-third-bottom ${rightInView ? "appear" : "exit"}`}
        ref={rightRef}
      >
        <div className="third-bottom-left">
          <h1>Avoid Common Expatriate Financial Mistakes</h1>
          <p>
            At BudgetBuddy, we help expats navigate complex U.S. tax laws,
            including implications of the Foreign Account Tax Compliance Act
            (FATCA), reporting of foreign investment income and filing of tax
            treaty claims. Our expat tax advisors can help ensure you’re in
            compliance with U.S. tax law — freeing up more time for you to enjoy
            the adventure of living abroad.
          </p>
        </div>
        <div className="third-bottom-right">
          <img
            src={familyPlaying}
          />
        </div>
      </div>
    </div>
  );
}
