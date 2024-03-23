import React from "react-dom";
export default function Project() {
  return (
    <div className="project-home">
      <div className="p1img">
        <img src="/images/Our.png" alt="" />
      </div>
      <div className="hpro">
        <div className="hpro1">
          <p>
            Dive into our portfolio of successful collaborations, where
            innovation meets implementation. Explore the diverse range of
            projects we've undertaken, each a testament to our strategic
            thinking, meticulous planning, and dedication to delivering tangible
            results.
          </p>
        </div>
        <div className="hpro2"></div>
      </div>
      <div className="project-grid">
        <div className="prooo">
          <div className="grid-one">
            <img src="/images/Rectangle 14.png" />
          </div>
          <div className="grid-two">
            <h4 className="my-header">01</h4>
            <h3 className="my-paragraph">MarketNavigator Strategy</h3>
            <p>
              Dive into our portfolio of successful collaborations, where
              innovation meets implementation. Explore the diverse range of
              projects we've undertaken, each a testament to our strategic
              thinking, meticulous planning, and dedication to delivering
              tangible results.
            </p>
            <div className="circle-part">
              <p>View project</p>
            </div>
          </div>
        </div>
        <div className="prooo">
          <div className="grid-two">
            <h4 className="my-header">02</h4>
            <h3 className="my-paragraph">TechInnovate Integration</h3>
            <p>
              Dive into our portfolio of successful collaborations, where
              innovation meets implementation. Explore the diverse range of
              projects we've undertaken, each a testament to our strategic
              thinking, meticulous planning, and dedication to delivering
              tangible results.
            </p>
            <div className="circle-part">
              <p>View project</p>
            </div>
          </div>
          <div className="grid-one">
            <img src="/images/Rectangle 14(1).png" />
          </div>
        </div>
        <div className="prooo">
          <div className="grid-one">
            <img src="/images/Rectangle 14(3).png" />
          </div>
          <div className="grid-two">
            <h4 className="my-header">03</h4>
            <h3 className="my-paragraph">OptiStream</h3>
            <p>
              Dive into our portfolio of successful collaborations, where
              innovation meets implementation. Explore the diverse range of
              projects we've undertaken, each a testament to our strategic
              thinking, meticulous planning, and dedication to delivering
              tangible results.
            </p>
            <div className="circle-part">
              <p>View project</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="project--home">
        <button>view all project</button>
      </div> */}
    </div>
  );
}
