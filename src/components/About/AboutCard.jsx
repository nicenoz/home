import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, <br /> 
            I am <span className="purple">JongHwaNoh </span>
            from <span className="purple"> Seoul, Korea.</span>
            <br />
            I am currently employed as a fullstack developer at Eduwill.
            <br />
            I have completed bachelor's degree in Department of Electronic and Communication Engineering at KwangWoon Univ.
            <br />
            I like to Configuring the development environment such as CI/CD.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching K-Drama
            </li>
          </ul>

          <p style={{ color: "rgba(0, 128, 128, 1)" }}>
            "No Pain, No gain"{" "}
          </p>
          <footer className="blockquote-footer">Noz</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
