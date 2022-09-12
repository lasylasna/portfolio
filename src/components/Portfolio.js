import React from "react";
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";

import halza from "../images/halza.jpg";
import halzafull from "../images/halzafull.jpg";
import myhalza from "../images/myhalza.png";
import halza365 from "../images/halza365.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {




  //halza

  const openPopupboxTaskManagerHalza = () => {
    const content = (
      <>
        {/* <h1> Halza App </h1> */}
        <img className="portfolio-image-popupbox" style={{ height: "330px", width: "175px" }} src={halzafull} alt="myHalza pass and PeriodTracker projects..." />
        <br ></br> <a className="hyper-link" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.Halza&hl=en_SG")}>https://play.google.com/store/apps/details?id=com.Halza&hl=en_SG</a>

      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManagerHalza = {
    titleBar: {
      enable: true,
     // text: "Halza App"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  //halza365

  const openPopupboxhalza365 = () => {
    const content = (
      <>
        {/* <h1> myHalza</h1> */}
        <img className="portfolio-image-popupbox"  src={halza365} alt="halza365" />
        <br ></br> <a className="hyper-link" onClick={() => window.open("https://halza365.com/en")}>https://halza365.com/en</a>

      </>
    )
    PopupboxManager.open({ content })
  }
  const popupboxConfihalza365 = {
    titleBar: {
      enable: true,
     // text: "myHalza"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxmyHalza = () => {
    const content = (
      <>
        {/* <h1> myHalza</h1> */}
        <img className="portfolio-image-popupbox"  src={myhalza} alt="myHalza" />
        <br ></br> <a className="hyper-link" onClick={() => window.open("https://myhalza.com/")}>https://myhalza.com/ </a>

      </>
    )
    PopupboxManager.open({ content })
  }
  const popupboxConfigmyHalza = {
    titleBar: {
      enable: true,
     // text: "myHalza",
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        {/* <h1>Davas CRM </h1> */}
        <img className="portfolio-image-popupbox" src={netflix} alt="Davas CRM" />
        <br ></br>
         {/* <a className="hyper-link" onClick={() => window.open("https://crm.3phtechsolutions.com/")}>https://crm.3phtechsolutions.com/</a> */}
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
    //  text: "Davas CRM"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        {/* <h1>Davas UI</h1> */}
        <img className="portfolio-image-popupbox" src={cityGuide} alt="Three Phase Techno Solutions Project." />
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
  */}
        <br />
        <a className="hyper-link" onClick={() => window.open("https://davas.3phtechsolutions.com/login", "_blank")}>https://davas.3phtechsolutions.com/</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
     // text: "Davas UI"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        {/* <h1>Three Phase Techno Solutions Website</h1> */}
        <img className="portfolio-image-popupbox" src={portfolio} alt="Three Phase Techno Solutions project." />
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p> */}
        <br />
        <a className="hyper-link" onClick={() => window.open("https://www.3phtechsolutions.com/", "_blank")}>https://www.3phtechsolutions.com/</a>


      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
     // text: "Three Phase Techno Solutions Website"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        {/* <h1>Grafana customized panel plugin</h1> */}
        <img className="portfolio-image-popupbox" src={taskManager} alt="Grafana customized panel plugin development project." />
        {/* <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p> */}
        {/* <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a> */}
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigGrafana = {
    titleBar: {
      enable: true,
      // text: "Grafana customized panel plugin"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper ">

          <div className="portfolio-image-box" onClick={openPopupboxTaskManagerHalza}>
            <img className="portfolio-image" style={{ height: "75px" }} src={halza} alt="Halza app." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxmyHalza}>
            <img className="portfolio-image"   src={myhalza} alt="myHalza" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

          <div className="portfolio-image-box" onClick={openPopupboxhalza365}>
            <img className="portfolio-image"   src={halza365} alt="Halza365" />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Davas CRM Project." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="Three Phase Techno Solutions Project." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Three Phase Techno Solutions project." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Grafana customized panel plugin development Project." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}

        </div>
      </div>

      <PopupboxContainer {...popupboxConfigTaskManagerHalza}  />     
      <PopupboxContainer {...popupboxConfigmyHalza} />        
      <PopupboxContainer {...popupboxConfihalza365} />
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigGrafana} />
    </div>
  )
}

export default Pofrfolio;
