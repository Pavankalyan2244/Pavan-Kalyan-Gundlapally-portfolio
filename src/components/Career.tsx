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
                <h5>AriaTech IT Solutions</h5>
              </div>
              <h3>2023-24</h3>
            </div>
            <p>
              Developed scalable backend microservices using Node.js and Java Spring Boot, building REST APIs to support high concurrent users and improve data processing performance. Created React-based dashboards and UI components to visualize system data and enhance user interaction, while implementing structured data validation and exception handling to improve reliability and increase data accuracy by 28%. Integrated CI/CD pipelines for automated deployments to AWS and Azure, and refactored legacy code into modular microservices to improve maintainability and reduce system defects.
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
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Mahasu Automotives Solutions</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
             Developed Java backend services using Spring Boot, managing source code with Git and tracking tasks in Jira to support internal automation and enable automated reporting, reducing manual effort. Implemented batch data processing pipelines that improved reporting turnaround time by 30%, while applying strong object-oriented design principles to enhance system maintainability and simplify debugging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
