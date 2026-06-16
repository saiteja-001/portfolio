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
                <h4>Industrial Automation Trainee</h4>
                <h5>Tata Steel</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Engineered and tested PLC-based automation for blast furnace operations using Siemens S7 systems across a 6-point manual control system. Conducted gap analysis to optimize workflows and reduce operational downtime by 15%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Administration Member</h4>
                <h5>Coding Ninjas – KIIT Chapter</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Coordinating 10+ coding competitions, workshops, and technical events, growing chapter membership by 25% and streamlining administrative workflows to reduce planning overhead by 20%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Google</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Representing Google's developer ecosystem across KIIT, promoting developer tools and programs to 500+ students, and organizing workshops and tech events.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
