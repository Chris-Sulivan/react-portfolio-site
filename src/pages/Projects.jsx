// Projects displayed in my portfolio.
// Each project includes a screenshot, my role, and the project outcome.
const projects = [
  {
    id: "restaurant-project",
    title: "Chris Restaurant Website",
    role: "Web Developer",
    description:
      "A responsive restaurant website designed to provide customers with an easy way to explore the restaurant, browse the menu, place orders, view location information, and contact the business.",
    outcome:
      "The completed website combines multiple interactive pages with a clean navigation system and includes a live Toronto weather feature to improve the user experience.",
    image: "/projects/chris-restaurant.png",
  },

  {
    id: "bug-smasher",
    title: "Bug Smasher Game",
    role: "Web Developer",
    description:
      "An interactive browser game where players try to click or tap a moving bug before it changes position. The game keeps track of the player's score and includes controls for game speed.",
    outcome:
      "The project helped me apply JavaScript event handling, DOM interaction, game logic, user input, and responsive web design to create a functional interactive game.",
    image: "/projects/bug-smasher.png",
  },

  {
  id: "atlas-used-cars",
  title: "Atlas Used Cars Website",
  role: "Web Developer",
  description:
    "A multi-page used car dealership website designed to help customers explore available vehicles and learn about the services offered by the dealership. The website includes Home, Services, Available Cars, Contact, and Sitemap pages.",
  outcome:
    "The completed website provides a simple and organized interface for browsing vehicles and dealership information while demonstrating my skills in web design, navigation, page structure, and responsive development.",
  image: "/projects/atlas-used-cars.png",
  },
];

export default function Projects() {
  return (
    <section className="section">
      <div className="gutter-heading">
        <span className="gutter-heading__num">02</span>
        <h2 className="gutter-heading__title">Projects</h2>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className="card" key={project.id}>

            <div className="card__image">
              <img
                src={project.image}
                alt={`Screenshot of ${project.title}`}
                style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
                }}
              />
            </div>

            <div className="card__body">
              <h3 style={{ margin: "0.25rem 0" }}>
                {project.title}
              </h3>

              <p className="comment-line">
                Role: {project.role}
              </p>

              <p>{project.description}</p>

              <p>
                <strong>Outcome:</strong> {project.outcome}
              </p>
            </div>

          </article>
        ))}
      </div>
    </section>
  );
}