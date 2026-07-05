import React from "react";
import "./styles/Certifications.css";
import { MdArrowOutward } from "react-icons/md";

const certificationsData = [
  {
    title: "SAP Customer Engagement and Discovery",
    issuer: "SAP",
    date: "Jul 2026",
    id: "CH9LY4EVMPIM",
    link: "https://www.coursera.org/account/accomplishments/verify/CH9LY4EVMPIM",
    description: "Explored methodologies and tools for SAP customer engagement, gathering business requirements, and planning enterprise discovery processes.",
  },
  {
    title: "Designing an SAP Solution",
    issuer: "SAP",
    date: "Jul 2026",
    id: "LIHH1MSJSB80",
    link: "https://www.coursera.org/account/accomplishments/verify/LIHH1MSJSB80",
    description: "Developed skills in architecting, planning, and designing enterprise-grade solutions using SAP technical frameworks and architectural best practices.",
  },
  {
    title: "Understanding the Enterprise Systems Environment",
    issuer: "SAP",
    date: "Jul 2026",
    id: "B1F4332LVKKK",
    link: "https://www.coursera.org/account/accomplishments/verify/B1F4332LVKKK",
    description: "Mastered core components of enterprise resource planning (ERP) architectures, systems integration, and organizational data structures.",
  },
  {
    title: "SAP Professional Fundamentals",
    issuer: "SAP",
    date: "Jul 2026",
    id: "1NVO6LPT2WJ1",
    link: "https://www.coursera.org/account/accomplishments/verify/1NVO6LPT2WJ1",
    description: "Mastered professional fundamentals of SAP environments, focusing on operations, key concepts, and enterprise integration.",
  },
  {
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/9d4e2b46-6d80-41fe-8c74-18b8121aed65/public_url",
    description: "Configured enterprise network technologies, software-defined networking, virtualization, network security policies, and automation APIs.",
  },
  {
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/27763be0-eed7-464a-98af-6f63a7655bf0/public_url",
    description: "Mastered switching and routing technologies, configuring VLANs, wireless local area networks (WLANs), and security configurations.",
  },
  {
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/bfde895c-3663-4e2c-8382-9f49ac7d944a/public_url",
    description: "Acquired foundational knowledge of network architectures, IP addressing schemes, cabling, network media, and routing basics.",
  },
  {
    title: "Apply AI: Analyze Customer Reviews",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/bfc08a5c-134c-46a3-89bc-0a99fdb53a74/public_url",
    description: "Applied artificial intelligence models to process, analyze, and extract insights from customer reviews and text datasets.",
  },
  {
    title: "Introduction to Modern AI",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/b23b4048-e393-44ef-95d9-4a86c4c505db/public_url",
    description: "Conceptualized modern Artificial Intelligence systems, neural networks, machine learning paradigms, and future trends.",
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/32b5dcce-436c-4a40-8f04-edcf36aeb825/public_url",
    description: "Advanced programming concepts in Python, including object-oriented programming, packages, modules, exceptions, and file processing.",
  },
  {
    title: "Python Essentials 1",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/8bc25abf-152b-462c-a335-a77e9698cb6d/public_url",
    description: "Fundamental computer programming concepts in Python, covering variables, operators, loops, logic, functions, and basic structures.",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/4785f7b4-434a-447b-a905-35dead564349/public_url",
    description: "Gained core knowledge of data analysis concepts, tools, collection methods, and data storytelling principles.",
  },
  {
    title: "Introduction to Data Science",
    issuer: "Cisco",
    date: "Jun 2026",
    link: "https://www.credly.com/badges/ca1bcf52-0cdc-46f5-992d-e881917733d8/public_url",
    description: "Fundamental concepts of data science, data lifecycle, analysis techniques, and modern tools for data scientists.",
  },
];

const Certifications = () => {
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };

  return (
    <div className="cert-section" id="certifications">
      <div className="cert-container section-container">
        <h2>
          My <span>Certifications</span>
        </h2>
        <div className="cert-grid">
          {certificationsData.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
              onMouseMove={handleMouseMove}
              data-cursor="disable"
            >
              <div className="cert-header">
                <span className="cert-badge">{cert.issuer}</span>
                <div className="cert-icon">
                  <MdArrowOutward />
                </div>
              </div>
              <div className="cert-body">
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
              <div className="cert-footer">
                <span className="cert-date">{cert.date}</span>
                {cert.id && <span className="cert-id">ID: {cert.id}</span>}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
