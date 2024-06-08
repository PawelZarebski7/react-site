import React from "react";

const ContactSection: React.FC = () => {
  return (
    <React.Fragment>
      <div className="contact-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-page google-map">
                <iframe
                  src="https://maps.app.goo.gl/HFd2FrQuu38niokr5"
                  width="600"
                  height="600"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-12">
              <div className="contact-form dark-bg">
                <div className="section-title">
                  <h2 className="text-white">Lets talk...</h2>
                </div>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Your Name*</label>
                      <input type="text" placeholder="Your Full Name" />
                    </div>
                    <div className="col-md-6">
                      <label>Email Address*</label>
                      <input type="email" placeholder="E-mail Address" />
                    </div>
                    <div className="col-12">
                      <label>Subject*</label>
                      <input type="text" placeholder="Website" />
                    </div>
                    <div className="col-12">
                      <label>Message*</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                        placeholder="Write Here"
                      ></textarea>
                    </div>
                    <div>
                      <button type="submit" className="bordered-btn">
                        Send Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactSection;
