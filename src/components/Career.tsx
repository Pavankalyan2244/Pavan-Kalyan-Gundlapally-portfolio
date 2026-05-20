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
                <h5>Morgan Stanley</h5>
              </div>
              <h3>2025-26</h3>
            </div>
            <p>
              Engineered scalable Azure Databricks and PySpark-based data pipelines processing 15TB+ of high-volume financial and mortgage data daily across enterprise banking systems. Migrated legacy ETL and Hadoop workflows to Azure Synapse Analytics and Azure Data Factory, enabling efficient handling of 50TB+ enterprise data workloads while improving scalability and operational performance. Designed optimized dimensional data models and real-time streaming solutions using Spark Streaming and Azure Event Hubs, reducing transaction-processing latency by 25% and improving reporting efficiency by 40%. Additionally, developed backend microservices using Java, Spring Boot, REST APIs, and SQL integrations to support secure, high-availability enterprise applications.
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
