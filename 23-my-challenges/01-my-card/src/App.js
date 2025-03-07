import logo from "./logo.svg";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="App">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="./bobo.jpg" alt="Boyan"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Boyan Ivanov</h1>
      <p>
        Full-stack web developer. When not coding or playing games, I like to
        play tennis and padel, to cook (and eat), or to just enjoy the Bulgarian
        sun at the beach.
      </p>
    </div>
  );
}

function SkillList(params) {
  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill skillObj={skill} key={skill.skill} />
      ))}
    </ul>
  );
}

function Skill({ skillObj }) {
  return (
    <li className="skill" style={{ backgroundColor: skillObj.color }}>
      <span>
        {skillObj.skill}
        {skillObj.level === "beginner" && "👶"}
        {skillObj.level === "intermediate" && "👍"}
        {skillObj.level === "advanced" && "💪"}
      </span>
    </li>
  );
}

export default App;
