import { useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const skills = [
    "Google Cloud Platform",
    "BigQuery",
    "Pub/Sub",
    "Dataflow",
    "Apache Beam",
    "Cloud Functions",
    "Cloud Run",
    "Cloud SQL",
    "Python",
    "SQL",
    "Terraform",
    "GitHub Actions",
    "Docker",
    "CI/CD",
    "ETL/ELT",
    "Streaming Processing",
    "Batch Processing",
    "Looker",
    "React.js",
    "REST APIs",
    "Event-Driven Architecture",
    "Monitoring & Alerting",
  ];

  const projects = [
    {
      title: "Cloud-Native Data Platform",
      description:
        "Designed and implemented scalable GCP data pipelines using BigQuery, Dataflow, Pub/Sub, Cloud Functions and Cloud Storage.",
    },
    {
      title: "Cloud Functions Gen1 → Gen2 Migration",
      description:
        "Led migration of Google Cloud Functions to Gen2 architecture and modernized deployment pipelines.",
    },
    {
      title: "CI/CD Release Automation",
      description:
        "Built GitHub Actions workflows for artifact generation, deployment validation, and release orchestration.",
    },
    {
      title: "Monitoring & Alerting Framework",
      description:
        "Implemented Terraform-based monitoring and log-driven alerting policies for serverless workloads.",
    },
  ];

  const theme = {
    background: darkMode ? "#000" : "#f5f5f5",
    text: darkMode ? "#fff" : "#111",
    card: darkMode ? "#111" : "#fff",
    border: darkMode ? "#222" : "#ddd",
    accent: "#4ea1ff",
    secondary: darkMode ? "#ccc" : "#444",
  };

  const styles = {
    page: {
      backgroundColor: theme.background,
      color: theme.text,
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif",
      transition: "all 0.3s ease",
    },

    navbar: {
      position: "sticky",
      top: 0,
      zIndex: 1000,
      backgroundColor: darkMode ? "#0a0a0a" : "#fff",
      borderBottom: `1px solid ${theme.border}`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 10%",
      flexWrap: "wrap",
      backdropFilter: "blur(10px)",
    },

    navLinks: {
      display: "flex",
      gap: "22px",
      alignItems: "center",
      flexWrap: "wrap",
    },

    navItem: {
      cursor: "pointer",
      color: theme.text,
      textDecoration: "none",
      fontWeight: "600",
      transition: "0.3s",
    },

    section: {
      padding: "80px 10%",
      borderBottom: `1px solid ${theme.border}`,
    },

    hero: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "50px",
      minHeight: "60vh",
    },

    heading: {
      fontSize: "48px",
      marginBottom: "20px",
      color: theme.accent,
    },

    subHeading: {
      fontSize: "28px",
      marginBottom: "15px",
    },

    text: {
      color: theme.secondary,
      fontSize: "18px",
      lineHeight: "1.8",
    },

    button: {
      backgroundColor: theme.accent,
      color: "#fff",
      padding: "14px 28px",
      borderRadius: "10px",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
      display: "inline-block",
      transition: "0.3s ease",
      fontWeight: "600",
    },

    image: {
      width: "320px",
      height: "320px",
      borderRadius: "20px",
      objectFit: "cover",
      border: `3px solid ${theme.accent}`,
      boxShadow: darkMode
        ? "0 0 25px rgba(78,161,255,0.25)"
        : "0 0 15px rgba(0,0,0,0.15)",
    },

    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "18px",
      marginTop: "30px",
    },

    skill: {
      backgroundColor: theme.card,
      border: `1px solid ${theme.border}`,
      padding: "14px 22px",
      borderRadius: "12px",
      fontWeight: "500",
      transition: "0.3s",
    },

    cardGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "30px",
      marginTop: "40px",
      alignItems: "stretch",
    },

    card: {
      backgroundColor: theme.card,
      border: `1px solid ${theme.border}`,
      borderRadius: "18px",
      padding: "30px",
      transition: "0.3s ease",
      boxShadow: darkMode
        ? "0 0 15px rgba(255,255,255,0.05)"
        : "0 0 10px rgba(0,0,0,0.08)",
      minHeight: "220px",
    },

    achievementCard: {
      padding: "18px",
      minHeight: "120px",
      borderRadius: "14px",
    },

    toggle: {
      cursor: "pointer",
      width: "32px",
      height: "32px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "transparent",
      color: theme.text,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "0.3s ease",
      padding: 0,
    },
  };

  return (
    <div style={styles.page}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <h2
          style={{
            color: theme.text,
            letterSpacing: "1px",
            fontSize: "26px",
          }}
        >
          Varun Dev
        </h2>

        <div style={styles.navLinks}>
          <a href="#home" style={styles.navItem}>
            Home
          </a>

          <a href="#about" style={styles.navItem}>
            About
          </a>

          <a href="#experience" style={styles.navItem}>
            Experience
          </a>

          <a href="#projects" style={styles.navItem}>
            Projects
          </a>

          <a href="#contact" style={styles.navItem}>
            Contact
          </a>

          <button
            style={styles.toggle}
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <LightModeIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              />
            ) : (
              <DarkModeIcon
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv"
              />
            )}
          </button>
        </div>
      </nav>

      {/* Home */}
      <section id="home" style={styles.section}>
        <div style={styles.hero}>
          <div style={{ flex: 1, maxWidth: "650px" }}>
            <p style={{ color: theme.accent, letterSpacing: "3px" }}>
              Cloud-Native Data Engineer
            </p>

            <h1
              style={{
                fontSize: "58px",
                margin: "30px 0",
                color: theme.text,
              }}
            >
              Varun Dev
            </h1>

            <p style={styles.text}>
              Data Engineer with 4+ years of experience designing scalable
              cloud-native data platforms and analytics systems on Google Cloud Platform (GCP).
              Specialized in ETL/ELT pipelines, BigQuery, Dataflow, Pub/Sub,
              Infrastructure as Code, CI/CD automation, and production-grade
              data engineering solutions.
            </p>
          </div>

          <div>
            <img
              src="/varun_img.jpeg"
              alt="Varun Dev"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      <section id="experience" style={styles.section}>
        <h2 style={styles.heading}>Experience</h2>

        <div style={styles.card}>
          <h3 style={styles.subHeading}>NCR Voyix — Software Engineer II</h3>
          <p style={{ color: theme.accent }}>Apr 2023 – Present</p>

          <div style={styles.text}>
            <p style={{ margin: 0, marginBottom: "10px" }}>Built cloud-native data pipelines using BigQuery, Dataflow, Pub/Sub and Cloud Functions.</p>
            <p style={{ margin: 0, marginBottom: "10px" }}>Reduced BigQuery query latency by 35% through optimization techniques.</p>
            <p style={{ margin: 0, marginBottom: "10px" }}>Improved pipeline reliability and observability to 99.9%.</p>
            <p style={{ margin: 0, marginBottom: "10px" }}>Implemented Terraform-based monitoring and alerting.</p>
            <p style={{ margin: 0, marginBottom: "10px" }}>Led Cloud Functions Gen1 → Gen2 migration.</p>
            <p style={{ margin: 0 }}>Developed GitHub Actions deployment automation.</p>
          </div>
        </div>

        <div style={{ height: "20px" }} />

        <div style={styles.card}>
          <h3 style={styles.subHeading}>NCR — Software Engineer I</h3>
          <p style={{ color: theme.accent }}>Aug 2021 – Apr 2023</p>

          <div style={styles.text}>
            <p style={{ margin: 0, marginBottom: "10px" }}>Designed SQL transformation pipelines and reporting data models.</p>
            <p style={{ margin: 0, marginBottom: "10px" }}>Built interactive Looker dashboards.</p>
            <p style={{ margin: 0, marginBottom: "10px" }}>Improved SQL query performance by 25%.</p>
            <p style={{ margin: 0 }}>Developed analytics applications using React and REST APIs.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={styles.section}>
        <h2 style={styles.heading}>About Me</h2>

        <p style={styles.text}>
          I specialize in building scalable cloud-native applications,
          data pipelines, streaming systems, and infrastructure automation
          using technologies like GCP, BigQuery, Pub/Sub, Dataflow,
          Cloud Functions, Terraform, and GitHub Actions.
        </p>

        <div style={styles.skillsContainer}>
          {skills.map((skill) => (
            <div key={skill} style={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>

        <div style={styles.cardGrid}>
          {projects.map((project) => (
            <div key={project.title} style={styles.card}>
              <h3 style={styles.subHeading}>{project.title}</h3>

              <p style={styles.text}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" style={styles.section}>
        <h2 style={styles.heading}>Achievements</h2>

        <div style={styles.cardGrid}>
          <div style={{ ...styles.card, ...styles.achievementCard }}>
            <h3 style={styles.subHeading}>50K+</h3>
            <p style={styles.text}>Records Processed Daily</p>
          </div>

          <div style={{ ...styles.card, ...styles.achievementCard }}>
            <h3 style={styles.subHeading}>99.9%</h3>
            <p style={styles.text}>Pipeline Reliability</p>
          </div>

          <div style={{ ...styles.card, ...styles.achievementCard }}>
            <h3 style={styles.subHeading}>35%</h3>
            <p style={styles.text}>BigQuery Optimization</p>
          </div>

          <div style={{ ...styles.card, ...styles.achievementCard }}>
            <h3 style={styles.subHeading}>40%</h3>
            <p style={styles.text}>Reduction in Data Inconsistencies</p>
          </div>
        </div>
      </section>

      <section id="leadership" style={styles.section}>
        <h2 style={styles.heading}>Leadership</h2>

        <div style={styles.cardGrid}>
          <div style={styles.card}>
            <h3 style={styles.subHeading}>National Athlete</h3>
            <p style={styles.text}>
              Represented at the national and university level in
              Taekwondo and Basketball.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeading}>Team Leadership</h3>
            <p style={styles.text}>
              Lead and coordinate the company basketball team.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeading}>Growth Mindset</h3>
            <p style={styles.text}>
              Passionate about fitness, productivity and continuous learning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.heading}>Contact Me</h2>

        <p style={styles.text}>
          Open to Software Engineering, Data Engineering, and Cloud Platform opportunities.
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="mailto:varundev497@gmail.com"
            style={styles.button}
          >
            Email
          </a>

          <a
            href="https://www.linkedin.com/in/grandhe-varundev-b01019181/"
            target="_blank"
            rel="noreferrer"
            style={styles.button}
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          color: theme.secondary,
          fontSize: "15px",
        }}
      >
        © 2026 Varun Dev — Data Engineer
      </footer>
    </div>
  );
}
