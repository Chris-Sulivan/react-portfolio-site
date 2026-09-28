import { Link } from "react-router-dom";

// Home page introducing the portfolio and providing quick navigation.
export default function Home() {
  return (
    <section className="hero">
      <p className="hero__eyebrow">// welcome</p>

      <h1>
        Hi, I'm Chris Sojio.
        <br />
        Software Engineering Technology – Artificial Intelligence Student.
      </h1>

      <p>
        I'm a Software Engineering Technology – Artificial Intelligence
        student with a strong interest in software development, artificial
        intelligence, programming, and web technologies. This portfolio
        showcases my projects, technical skills, education, and the
        technologies I'm learning throughout my journey.
      </p>

      <p className="comment-line">Mission statement</p>

      <p>
        My goal is to continuously strengthen my programming and
        problem-solving skills while exploring the possibilities of
        artificial intelligence. I aim to build practical, innovative,
        and reliable solutions that can make a meaningful impact.
      </p>

      <div className="hero__actions">
        <Link to="/about" className="btn">
          About me →
        </Link>

        <Link to="/projects" className="btn btn--ghost">
          See my projects
        </Link>
      </div>
    </section>
  );
}