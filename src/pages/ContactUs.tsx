import React from "react";
import "../index.css";
import "../fonts.css";
function ContactUs() {
  return (
    <div>
      <h1
        style={{
          position: "absolute",
          top: "3900px",
          left: "520px",
          lineHeight: "0.3",
          fontFamily: "brixton",
        }}
      >
        Contact Us!
      </h1>
      <img
        src="/message.png"
        style={{
          height: 80,
          width: 80,
          position: "absolute",
          top: "4100px",
          left: "700px",
          zIndex: "0",
        }}
      ></img>
      <img
        src="/person.png"
        style={{
          height: 80,
          width: 80,
          position: "absolute",
          top: "4100px",
          left: "500px",
          zIndex: "0",
        }}
      ></img>
      <img
        src="/phone.png"
        style={{
          height: 80,
          width: 80,
          position: "absolute",
          top: "4100px",
          left: "900px",
          zIndex: "0",
        }}
      ></img>
    </div>
  );
}

export default ContactUs;
