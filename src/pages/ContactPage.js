import React from "react";

class ContactPage extends React.Component {
  render() {
    return (
      <>
      <section className="section-contant">
          <div className="container">
        <h2>Contact Us</h2>
        <form className="dialer-info" action="submit" >
            <div className="dialer-info">
              <div className="dialer-name">
                <label for="name">name</label>
                <input type="text" placeholder="Enter Your Name" />
              </div>
              <div className="dialer-email">
                <label for="email">email</label>
                <input type="email" placeholder="Enter Your Email" />
              </div>
            </div>
            <div className="dialer-message">
              <textarea
                name="Text"
                cols="40"
                rows="5"
                placeholder="Leave Your Message Here"
              ></textarea>
              <button className="send-btn">Send</button>
          </div>
        </form>
            </div>
      </section>
      </>
    );
  }
}
export default ContactPage;
