import React from "react-dom";
export default function Contact() {
  return (
    <div className="contact-area">
      <h4 className="my-header">CONTACT</h4>
      <div className="contact-first">
        <div className="form-one">
          <h3 className="my-header">Get in Touch with Strat Edge</h3>
          <p className="my-header">
            Thank you for considering Strat Edge as your strategic partner in
            business evolution. We value your interest and are eager to connect
            with you. Whether you have questions, inquiries, or are ready to
            explore h3ow our expertise can benefit your organization, our team
            is here to assist you.
          </p>
          <div className="form-image">
            <div className="image-1">
              <div className="ixxx">
                <img src="/images/Frame (10).png" alt="" />
              </div>
              <div className="ixxx">
                <img src="/images/Vector (27).png" alt="" />
              </div>
              <div className="ixxx">
                <img src="/images/logo-80.png" alt="" />
              </div>
              <div className="ixxx">
                <img src="/images/logo-77.png" alt="" />
              </div>
              <div className="ixxx">
                <img src="/images/Frame (9).png" alt="" />
              </div>
            </div>
            <div className="image-1">
              <div className="iggg">
                <img src="/images/logo-51 (2).png" alt="" />
              </div>
              <div className="iggg">
                <img src="/images/logo-77.png" alt="" />
              </div>
              <div className="iggg">
                <img src="/images/logo-70 (2).png" alt="" />
              </div>
              <div className="iggg">
                <img src="/images/logo-75 (1).png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="contact-2">
          <div className="formmm">
            {/* <h3>Name</h3> */}
            <input
              type="text"
              placeholder="Name"
              className="form--input"
              name="topText"
            />
          </div>
          <div className="formmm">
            {/* <h3>Email</h3> */}
            <input
              type="text"
              placeholder="Email"
              className="form--input"
              name="topText"
            />
          </div>

          <div className="formmm">
            {/* <h3>Message</h3> */}
            <label className="form-input">
              <textarea
                name="message"
                placeholder="Message"
                rows="7"
              ></textarea>
            </label>
          </div>
          <div className="bbb">
            <button>send</button>
          </div>
        </div>
      </div>
      <div className="form-visit">
        <h4>ADDRESS</h4>
        <div className="visit-first">
          <div className="visit-1">
            <h3 className="my-header">Visit us at our headquarters:</h3>
            <p className="my-header">
              Strat Edge Solutions <br />
              123 Business Avenue <br />
              Cityville, State, Zip Code
            </p>
          </div>
          <div className="visit-2">
            <p className="my-header">Twitter</p>
            <p className="my-header">Linkedin</p>
            <p className="my-header">Instagram</p>
          </div>
        </div>
      </div>
      <div className="image-form">
        <div className="img-10">
          <img src="/images/Rectangle 28.png" alt="" />
        </div>
        <div className="img-11">
          <img src="/images/Rectangle 29.png" alt="" />
        </div>
        <div className="img-11">
          <img src="/images/Rectangle 30 (2).png" alt="" />
        </div>
      </div>
    </div>
  );
}
