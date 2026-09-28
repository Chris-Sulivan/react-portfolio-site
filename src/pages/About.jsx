// About page containing personal information and a link to my resume.
// The headshot and resume files are stored in the public folder.
export default function About() {
  return (
    <section className="section">
      <div className="gutter-heading">
        <span className="gutter-heading__num">01</span>
        <h2 className="gutter-heading__title">About Me</h2>
      </div>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        <img
          src="/headshot.jpeg"
          alt="Head and shoulders portrait of Chris Sojio"
          style={{
            width: "400px",
            height: "400px",
            objectFit: "cover",
            borderRadius: "8px",
            border: "1px solid var(--border)",
            background: "var(--surface)",
          }}
        />

        <div style={{ flex: "1", minWidth: "260px" }}>
          <p className="comment-line">Legal name</p>

          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "1.1rem",
            }}
          >
            Chris Sojio
          </p>

          <p>
            I'm a Software Engineering Technology – Artificial Intelligence
            student with a strong interest in software development,
            artificial intelligence, and emerging technologies. I enjoy
            learning how software systems work, solving technical problems,
            and developing practical applications that strengthen my
            programming skills. I'm continuously expanding my knowledge
            through academic projects and hands-on experience as I work
            toward a career in the technology industry.
          </p>

          <a href="/resume.pdf" className="btn" download>
            Download résumé (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}