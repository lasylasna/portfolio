import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        {/* DX mail */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2023-Present</h3>
            <h5>
              Data Assistant, DX mail (Freightways)
            </h5>
            <p>
              Entering mail address in the database for Video encoding.
              <br /> Route Mapping , entering the billing information and
              reconciliation.
              <br />
              Process, sort and post all outbound mail.
              <br />
              Set up machinery for operation.
              <br />
              Operate machinery and equipment , troubleshoot issues and perform
              maintenance.
              <br />
              Perform quality control, follow reporting and record-keeping
              procedures,
              <br />
              Maintains logs and records of mail produced.
            </p>{" "}
          </div>
        </div>

        {/* Halza software Solution (I) Pvt Ltd */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021-2022</h3>
            <h5>Front End Developer, Halza Software Solution LLC</h5>
            <p>
              Front-end (web) development, test, release and support for HALZA’s
              digital health solution within an agile-blended software
              environment.
              <br />
              Develop and implement practical technical solutions to support
              product discovery and business development initiatives.
              <br />
              Work closely with other members of the product development team to
              align technical solutions with the existing architecture. Perform
              quality reviews and deploy updates and fixes.
              <br />
              Tackle diverse business challenges with a focus on triaging and
              providing simple technical or operational workarounds.
              <br />
              Contribute to developing internal processes to increase efficiency
              and stability.
              <br />
              Adjust standard procedures, when necessary, after benefits and
              risks assessments in response to changing situations.
              <br />
              Implement translations, Caching strategy, iframe, PWA and SignalR.
            </p>{" "}
          </div>
        </div>

        {/* Three Phase Techno Solution (I) Pvt Ltd */}

        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020-2021</h3>
            <h5>
              Development Engineer, Three Phase Techno Solution (I) Pvt Ltd
            </h5>
            <p>
              Developed efficient and secure web applications (<b>Full stack</b>
              ) within an agile blended software environment
              <br />
              Collaborated closely with clients, both remotely and in-person, to
              bring their ideas to life.
              <br />
              Implemented Page Optimization techniques, Best Practices in
              Javascript and React.js .
              <br />
              Organized UI in order to make app responsive, accessible and give
              great user experience .
              <br />
              Developed customized plugins for Data visualization using React.js
              (Typescript), HTML and CSS.
            </p>{" "}
          </div>
        </div>

        {/* Ashtec Contractors Pvt Ltd */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2015-2016</h3>
            <h5>Junior Web Developer, Babte Technologies Pvt Ltd</h5>
            <p>
              Developed the front end of the entire website using HTML5, CSS3,
              jQuery, JSON, Ajax and JavaScript
              <br />
              Converted raw images and layouts from a graphic designer in to
              CSS/HTML/SVG themes.
              <br />
              Created dynamic webpage using API calls.
            </p>
          </div>
        </div>
        {/* Babte Technologies Pvt Ltd */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2014-2015</h3>
            <h5>Software Engineer Trainee, Babte Technologies Pvt Ltd </h5>
            <p>
              Participated in designing and developing of various applications
              using ASP.NET
              <br />
              Wrote SQL queries, stored procedures and transaction queries..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
