import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Fifth Third Bank</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Developed and maintained microservices-based applications using Java, Spring Boot, React.js, and RESTful APIs, improving system performance and user experience. Worked with MySQL, PostgreSQL, Hibernate/JPA, and Apache Kafka to build scalable, event-driven solutions for real-time data processing and integration. Deployed containerized applications on AWS using Docker and supported CI/CD pipelines with Jenkins, Git, Maven, and SonarQube to streamline software delivery and operational efficiency.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>AriaTech IT Solutions</h5>
              </div>
              <h3>2022-24</h3>
            </div>
            <p>
              Developed Built scalable full-stack enterprise applications using Java, Spring Boot, React, REST APIs, SQL, AWS, and Azure, improving workflow automation, operational efficiency, and system reliability. Refactored legacy monolithic systems into modular microservices architectures, reducing production defects by 30%+ and significantly improving maintainability and deployment stability. Developed optimized backend processing workflows, CI/CD pipelines, and cloud-native deployments using Jenkins, GitHub Actions, and Docker, accelerating deployment cycles by 40% while enhancing scalability, monitoring, and overall application performance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>CBOX Networks</h5>
              </div>
              <h3>2022-23</h3>
            </div>
            <p>
              Developed backend services using Node.js, NestJS, Java, and Python for a network performance monitoring platform, reducing data processing latency and enabling real-time analytics. Built React and Next.js dashboards to provide real-time system monitoring and visualization, while designing REST APIs to ensure seamless communication between frontend applications and backend services. Optimized SQL queries and backend workflows to improve application performance and response times, and assisted with AWS cloud deployments and infrastructure management, streamlining release cycles and enhancing system reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
