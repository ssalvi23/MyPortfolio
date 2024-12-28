import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RAG from "../../Assets/Projects/RAG.png";
import car from "../../Assets/Projects/car.png";
import review from "../../Assets/Projects/review.png";
import NFC from "../../Assets/Projects/NFC.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RAG}
              isBlog={false}
              title="Retail Insight Generator Using RAG"
              description="A powerful tool designed to generate valuable insights from retail data, enabling comprehensive analysis of sales trends, product performance, and customer behavior. The tool leverages CSV-based uploads for data input, making it easy for retailers to analyze their data efficiently."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NFC}
              isBlog={false}
              title="NFC Door Guard"
              description="Developed an advanced IoT security prototype using NFC technology for efficient access control. The solution integrates an Android app with a Raspberry Pi, offering seamless accessibility management and the ability to reset NFC tags, providing a cost-effective and user-friendly security system."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Smart Parking Allocation"
              description="A smart parking allocation system prototype designed to optimize parking space management. The system features a web application built with PHP, MongoDB, and Express.js for efficient parking allocation and real-time monitoring. This solution aims to reduce parking congestion and improve space utilization."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={review}
              isBlog={false}
              title="Amazon Review Summarization System Using RoBERTa"
              description="Developed a system to summarize Amazon product reviews by categorizing them into positive, neutral, and negative sentiment. The system utilizes the RoBERTa model for highly accurate sentiment analysis, providing insightful and concise review summaries."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
