import React, { useState } from "react";
import { skillData, companyData } from '../../infoconfig';
import "./_info.scss";

const Info = () => {
  const [skills] = useState(skillData);
  const [companies] = useState(companyData);
  return (
    <>
      <section className="info_section">
        <div className="wrapper">
          <p className="italic">This is me.</p>
          <div className="content_wrap d-flex">
            <div className="title">
              <h2>Hi, I'm Shagun.</h2>
            </div>
            <div className="content d-flex">
              <p>
                As a Frontend Developer with over 8 years of experience creating engaging and innovative web applications. My expertise spans across developing responsive, high-performance interfaces that offer excellent user experiences.
              </p>
              <p>
                I'm involved in every step of the process: from design to development, testing, and deployment. I focus on delivering high-quality, scalable results that drive positive user experiences.
              </p>
            </div>
          </div>
          <div className="skill_wrap">
            <p className="italic">My skills.</p>
            <div className="content_wrap d-flex logo_gap">
            {skills.map((skill, index) => (
              <div className="skill_logo" key={index}>
                <skill.Component width={100} height={100} />
                <span className="name">{skill.name}</span>
              </div>
            ))}
            </div>
          </div>
          <div className="company_details">
            <p className="italic">Work Experience.</p>
            <div className="details_wrapper">
              <p className="bold_font">Throughout my career, I have had the opportunity to work with several esteemed companies, contributing to a range of innovative projects and enhancing my expertise in front-end development.</p>
            </div>
            <div className="company_list">
              {companies.map((company) => (
                <div className="d-flex spacing" key={company.id}>
                  <div className="d-flex gap-x-2 width_50">
                    <p className="number">{String(company.id).padStart(2, '0')}</p>
                    <h2>{company.name}</h2>
                  </div>
                  <div className="width_50 text_right">
                    <p className="position">{company.position}</p>
                    <p className="small-font">{company.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="download_cv">
            {/* <a href="/frontend-developer.pdf" download="frontend-developer.pdf">
              <button className="dwn_btn">Download Resume</button>
            </a> */}
            <a 
              className="box__link button-animation"
              href="#"
              >
                Download Resume
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Info;
