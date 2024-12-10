import React from "react";
import "./_home.scss";
import { ReactComponent as Beardo } from "../../Assets/svg/beard.svg";
import { PiCaretDoubleDownThin } from "react-icons/pi";
import Canvas from "../Canvas";

const Home = () => {
  const [count, setCount] = React.useState(4);

  return (
    <>
      <section className="intro_section">
        <span className="logo">
          [ Frontend <br /> Developer ]
        </span>
        <div className="animated_wrapper">
          <Canvas />
        </div>
        <div className="container">
          <div className="index_wrap">
            <div className="content_text">
              <h1 className="title">
                WELCOME TO MY <br /> <span> PORTFOLIO</span>
              </h1>
            </div>
            <div className="beardo_svg">
              <Beardo />
            </div>
          </div>
          <div className="downarrow">
            <PiCaretDoubleDownThin />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
