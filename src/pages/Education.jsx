// Educational qualifications listed in reverse-chronological order.
const qualifications = [
  {
    date: "2025 — Present",
    degree: "Software Engineering Technology – Artificial Intelligence",
    institution: "Centennial College, Toronto, Ontario",
    status: "Advanced Diploma — In Progress",
  },

  {
    date: "2020 — 2024",
    degree: "GCE Ordinary Level (O-Level) and Advanced Level (A-Level)",
    institution: "Laval Bilingual High School, Douala, Cameroon",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section className="section">
      <div className="gutter-heading">
        <span className="gutter-heading__num">03</span>
        <h2 className="gutter-heading__title">Education</h2>
      </div>

      <div className="timeline">
        {qualifications.map((item) => (
          <div className="timeline__item" key={item.degree}>
            <p className="timeline__date">{item.date}</p>

            <h3 style={{ margin: "0.2rem 0" }}>
              {item.degree}
            </h3>

            <p
              style={{
                color: "var(--text-dim)",
                margin: "0 0 0.25rem 0",
              }}
            >
              {item.institution}
            </p>

            <p className="comment-line">
              {item.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}