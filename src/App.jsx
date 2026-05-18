export default function App() {
  const skills = [
    "Google Cloud Platform (GCP)",
    "BigQuery",
    "Dataflow",
    "Pub/Sub",
    "Cloud Functions",
    "Cloud Run",
    "Apache Beam",
    "Python",
    "SQL",
    "Terraform",
    "GitHub Actions",
    "Docker",
    "CI/CD Pipelines",
    "Streaming Pipelines",
    "Event-Driven Architecture",
    "Looker",
    "React.js",
  ];

  const projects = [
    {
      title: "Cloud-Native Data Platform",
      description:
        "Designed scalable cloud-native data pipelines on GCP using BigQuery, Dataflow, Pub/Sub, and Cloud Functions.",
    },
    {
      title: "Cloud Functions Gen1 → Gen2 Migration",
      description:
        "Led migration and deployment modernization for serverless workloads on Google Cloud Platform.",
    },
    {
      title: "CI/CD & Release Automation Platform",
      description:
        "Developed deployment automation and release orchestration workflows using GitHub Actions.",
    },
    {
      title: "Real-Time Retail Analytics Platform",
      description:
        "Implemented scalable streaming analytics workflows using distributed processing concepts.",
    },
  ];

  const styles = {
    page: {
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      padding: '0',
      margin: '0'
    },
    section: {
      padding: '60px 10%',
      borderBottom: '1px solid #222'
    },
    heading: {
      fontSize: '42px',
      marginBottom: '25px',
      color: '#4ea1ff'
    },
    subHeading: {
      fontSize: '28px',
      marginBottom: '10px'
    },
    text: {
      color: '#ccc',
      lineHeight: '1.8',
      fontSize: '18px'
    },
    hero: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '40px'
    },
    button: {
      backgroundColor: '#1976d2',
      color: '#fff',
      border: 'none',
      padding: '14px 28px',
      borderRadius: '12px',
      marginRight: '15px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block'
    },
    card: {
      backgroundColor: '#111',
      padding: '25px',
      borderRadius: '18px',
      border: '1px solid #222',
      marginBottom: '25px'
    },
    skillContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px'
    },
    skill: {
      backgroundColor: '#111',
      border: '1px solid #333',
      padding: '12px 20px',
      borderRadius: '12px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '25px'
    },
    image: {
      width: '300px',
      height: '300px',
      borderRadius: '20px',
      objectFit: 'cover',
      border: '3px solid #1976d2'
    }
  };

  return (
    <div style={styles.page}>
      <section style={styles.section}>
        <div style={styles.hero}>
          <div style={{ flex: 1 }}>
            <p style={{ color: '#4ea1ff', letterSpacing: '3px' }}>
              CLOUD-NATIVE DATA PLATFORM ENGINEER
            </p>

            <h1 style={{ fontSize: '70px', margin: '20px 0' }}>
              Varun Dev
            </h1>

            <p style={styles.text}>
              Data Engineer with 4+ years of experience designing scalable cloud-native data platforms and analytics systems on Google Cloud Platform (GCP). Specialized in ETL/ELT pipelines, streaming architectures, orchestration frameworks, CI/CD automation, and production-grade cloud systems.
            </p>

            <div style={{ marginTop: '30px' }}>
              <a href="#projects" style={styles.button}>View Projects</a>
              <a href="mailto:varundev497@gmail.com" style={styles.button}>Contact Me</a>
            </div>
          </div>

          <div>
            <img
              src="/varun_photo.jpg"
              alt="Varun Dev"
              style={styles.image}
            />
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>About Me</h2>
        <p style={styles.text}>
          I specialize in designing scalable cloud-native data platforms, ETL systems, streaming workflows, orchestration frameworks, and infrastructure automation using GCP technologies including BigQuery, Dataflow, Pub/Sub, Cloud Functions, Cloud Run.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Technical Skills</h2>

        <div style={styles.skillContainer}>
          {skills.map((skill) => (
            <div key={skill} style={styles.skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Experience</h2>

        <div style={styles.card}>
          <h3 style={styles.subHeading}>NCR VOYIX — Software Engineer II</h3>
          <p style={{ color: '#4ea1ff' }}>Apr 2023 – Present</p>

          <ul style={{ ...styles.text, listStyle: 'none', paddingLeft: 0 }}>
            <li>Designed scalable cloud-native data pipelines using BigQuery, Dataflow, Pub/Sub, and Cloud Functions.</li>
            <li>Developed GitHub Actions CI/CD workflows for deployment automation and artifact generation.</li>
            <li>Implemented Terraform-based monitoring and alerting policies for Cloud Functions.</li>
            <li>Led Cloud Functions Gen1 to Gen2 migration initiatives for serverless workloads.</li>
            <li>Improved pipeline reliability and observability to 99.9%.</li>
          </ul>
        </div>

        <div style={styles.card}>
          <h3 style={styles.subHeading}>NCR — Software Engineer I</h3>
          <p style={{ color: '#4ea1ff' }}>Aug 2021 – Apr 2023</p>

          <ul style={{ ...styles.text, listStyle: 'none', paddingLeft: 0 }}>
            <li>Designed scalable SQL transformation pipelines and enterprise reporting data models.</li>
            <li>Built interactive Looker dashboards and analytics solutions.</li>
            <li>Improved SQL query performance by 25%.</li>
            <li>Developed REST API-integrated backend workflows and analytics services.</li>
          </ul>
        </div>
      </section>

      <section id="projects" style={styles.section}>
        <h2 style={styles.heading}>Projects</h2>

        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.title} style={styles.card}>
              <h3 style={styles.subHeading}>{project.title}</h3>
              <p style={styles.text}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Key Achievements</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={{ fontSize: '40px', color: '#4ea1ff' }}>50K+</h3>
            <p>Records Processed Daily</p>
          </div>

          <div style={styles.card}>
            <h3 style={{ fontSize: '40px', color: '#4ea1ff' }}>99.9%</h3>
            <p>Pipeline Reliability</p>
          </div>

          <div style={styles.card}>
            <h3 style={{ fontSize: '40px', color: '#4ea1ff' }}>35%</h3>
            <p>Query Optimization Gains</p>
          </div>

          <div style={styles.card}>
            <h3 style={{ fontSize: '40px', color: '#4ea1ff' }}>40%</h3>
            <p>Improved Data Accuracy</p>
          </div>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>Leadership & Interests</h2>

        <div style={styles.grid}>
          <div style={styles.card}>
            <h3 style={styles.subHeading}>Taekwondo & Basketball</h3>
            <p style={styles.text}>
              Represented at the national and university level in Taekwondo and Basketball during college.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeading}>Basketball Leadership</h3>
            <p style={styles.text}>
              Lead and coordinate the company basketball team promoting teamwork and collaboration.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.subHeading}>Growth Mindset</h3>
            <p style={styles.text}>
              Advocate for fitness, productivity, continuous learning, and self-improvement.
            </p>
          </div>
        </div>
      </section>

      <footer style={{ ...styles.section, textAlign: 'center' }}>
        <h2 style={styles.heading}>Let’s Build Scalable Data Systems</h2>

        <p style={styles.text}>
          Open to Data Engineering, Cloud Platform Engineering, and Infrastructure Automation opportunities.
        </p>

        <div style={{ marginTop: '25px' }}>
          <a href="mailto:varundev497@gmail.com" style={styles.button}>Email</a>
          <a href="https://github.com" target="_blank" style={styles.button}>GitHub</a>
          <a href="https://linkedin.com" target="_blank" style={styles.button}>LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}
