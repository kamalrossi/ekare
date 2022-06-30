import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  projectname,
  projectdesc,
  projectrole,
  projecttime,
  projecttag
} from "./data/projectdata";
import ekare0 from "./image/0ekare.png";
import ekare1 from "./image/1ekare.png";
import ekare2 from "./image/2ekare.png";
import ekare4 from "./image/4ekare.png";
import ekare5 from "./image/5ekare.png";
import ekare6 from "./image/6ekare.png";



export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{projectname}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{projectdesc.desc}</p>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>Contributor: Rossi Kamal (rossikamal@gmail.com)</p>
            </div>
          </Col>
        </Row>

        <div className="mb-5 po_items_ho">
          <Row>
            <Col lg="10">
              <div className="po_item">
                <img src={ekare0} alt="" />
                <div className="content">
                  <p>eKare Homescreen</p>
                  <a href="#">view project</a>
                </div>
              </div>
            </Col>

            <Col lg="10">
              <div className="po_item">
                <img src={ekare1} alt="" />
                <div className="content">
                  <p>eKare Feature</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>

            <Col lg="10">
              <div className="po_item">
                <img src={ekare2} alt="" />
                <div className="content">
                  <p>eKare Service</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>

           

            <Col lg="10">
              <div className="po_item">
                <img src={ekare4} alt="" />
                <div className="content">
                  <p>eKare About us</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>

            <Col lg="10">
              <div className="po_item">
                <img src={ekare5} alt="" />
                <div className="content">
                  <p>eKare Hospital Gallery</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>

            <Col lg="10">
              <div className="po_item">
                <img src={ekare6} alt="" />
                <div className="content">
                  <p>eKare Testimonial</p>
                  <a href="">view project</a>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Roles</h3>
          </Col>
          <Col lg="7">
            {projectrole.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.desc}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Software stack</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {projecttag.map((data, i) => {
                  return (
                    <tr key={i}>
                      <td>{data.tag1}</td>
                      <td>{data.tag2}</td>
                      <td>{data.tag3}</td>
                      <td>{data.tag4}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Timline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {projecttime.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.title}</th>
                      <td>{data.from}</td>
                      <td>{data.to}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
