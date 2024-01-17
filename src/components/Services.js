import { faDev } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">my services</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>Data Analysis and Visualization </h3>
             {/*  <p>
                I approach each project individually and always focus on the
                result.
              </p>*/}
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faFileCode} size="2x" />
              </div>

              <h3>Web Development</h3>
             {/*  <p>Your website will be build with an new proven technologies.</p>*/}
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDev} size="2x" />
              </div>

              <h3>Web Application Developement</h3>
              {/*  <p>
                Your web application will be built as per your ideas or
                requirements{" "}
              </p>*/}
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faDesktop} size="2x" />
              </div>
              <h3>alization</h3>
             {/*   <p>
                Customized widgets Developement on open source Visualization
                tool(Grafana)
              </p>*/}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
