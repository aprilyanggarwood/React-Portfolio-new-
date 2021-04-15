import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import aboutImg from "../image/aboutimage.jpeg";
// import Sidebar from "../Sidebar/index";
// import Navbar from "../Navbar/Nav";

function About() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} /> */}

      <main>
        <div class="background">
          <Container fluid>
            <Row class="row">
              <Col md={9}>
                <div
                  className="aboutmebackground p-4"
                  style={{ background: "yellow", marginLeft: "50px" }}
                >
                  <h1>About Me</h1>
                  <hr />
                  <Image
                    height={300}
                    width={300}
                    fluid
                    rounded
                    className="aprilimg shadow"
                    src={aboutImg}
                    alt="April Yang"
                  />
                  <p>
                    My name is April. I have a lot of sales, customer service,
                    and marketing work experience with my priviouse and current
                    jobs both in China and America. My work experiences have
                    taught me to ask questions and pay attention to detail, as
                    these are really important for people to succeed in their
                    career.
                  </p>
                  <p>
                    Humility, teamwork, and curiosity are my strengths in both
                    my professional and educational career. I believe that
                    everyone around me could be my teacher/mentor in my life and
                    career.
                  </p>
                  <p>
                    Good collaboration and a good relationship with colleagues
                    can make us more efficient and productive during our daily
                    work.
                  </p>
                  <p>
                    Currently, I am pursuing a certificate in a full stack
                    web-development at University of Washington. I am motivating
                    myself to learn computer coding skills because there are
                    more job opportunities in this job field, and my interest
                    and curiosity brought me into this field. I love to keep my
                    skills up to date in order to better fit this new
                    technologic world.
                  </p>
                  <p>
                    Today, as we know, more and more people love/need to use the
                    web or mobile applications to do more things at their
                    convenience. Therefore, my goals in my future tech career
                    are to help companies to create and develop easy-to-use
                    applications based on company and user’s needs in order to
                    build an online channel for both sides to efficiently
                    interact and communicate 24/7.
                  </p>
                  <p>
                    If you want to know more about me, please be a friend on
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/ying-april-yang-a9bb8720/"
                    >
                      Linkedin
                    </a>
                    and
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/aprilyanggarwood?tab=repositories"
                    >
                      GitHub
                    </a>
                    .
                  </p>
                  <p>
                    Technical Skills:
                    <div class="row">
                      <div class="col-md-4">
                        <ul>
                          <li>HTML5</li>
                          <li>CSS</li>
                          <li>Bootstrap</li>
                          <li>JavaScript ES6</li>
                          <li>jQuery</li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <ul>
                          <li>Express</li>
                          <li>Handlebars</li>
                          <li>MySQL and Sequelize</li>
                          <li>Mongo and Mongoose</li>
                          <li></li>
                        </ul>
                      </div>
                      <div class="col-md-4">
                        <ul>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                          <li></li>
                        </ul>
                      </div>
                    </div>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </main>
    </>
  );
}
export default About;
