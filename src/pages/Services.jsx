const services = [
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Responsive and interactive websites and web applications using HTML, CSS, JavaScript, React, Angular, Node.js, and Express.js.",
  },

  {
    icon: "📱",
    title: "Mobile Apps",
    description:
      "Development of mobile application interfaces and cross-platform application projects.",
  },

  {
    icon: "⚙️",
    title: "Software Development",
    description:
      "Software applications and programming solutions using C, C#, Java, Python, Dart, and .NET.",
  },

  {
    icon: "🗄️",
    title: "Database Development",
    description:
      "Relational database design and development using SQL and Oracle SQL, including ERD modeling and database management.",
  },

  {
    icon: "🤖",
    title: "Data & Machine Learning",
    description:
      "Data analysis and machine-learning projects using Python, Pandas, NumPy, scikit-learn, and Jupyter Notebook.",
  },

  {
    icon: "🎨",
    title: "UI/UX & Interface Design",
    description:
      "Designing responsive and intuitive user interfaces with a focus on usability and engaging user experiences.",
  },

  {
    icon: "🔧",
    title: "Testing & Debugging",
    description:
      "Testing, debugging, and troubleshooting applications to identify problems and improve reliability and functionality.",
  },
];
export default function Services() {
  return (
    <section className="section">
      <div className="gutter-heading">
        <span className="gutter-heading__num">04</span>
        <h2 className="gutter-heading__title">Services</h2>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div className="card" key={service.title}>
            <div className="card__body">
              <div
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "0.5rem",
                }}
              >
                {service.icon}
              </div>

              <h3 style={{ margin: "0 0 0.4rem" }}>
                {service.title}
              </h3>

              <p
                style={{
                  margin: 0,
                  color: "var(--text-dim)",
                }}
              >
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}