function Section(props: {title: string, content: React.ReactNode}){
    return (
        <div>
          <h2>{props.title}</h2>
          {props.content}
        </div>
      )
}

export default Section;

import Project, { allProjects } from '../Project/Project.tsx';

const about = {
  title: "About Me",
  content: (
    <div>
      <p>Hello! I'm a passionate software engineer with a focus on web development.</p>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTG7x1skmjpRO_95RVuL14k1euB1wVBg8lLQ&s" />
    </div>)
}

const skills = {
  title: "Skills",
  content: (
    <ul>
      <li>React</li>
      <li>TypeScript</li>
      <li>Node.js</li>
      <li>Python</li>
    </ul>
  )
}

const projects = {
  title: "Projects",
  content: (
    <>
       {allProjects.map(({ title, description, image }) => (
        <Project
          title={title}
          description={description}
          image={image}
        />
      ))}
    </>
  )
}

const contact = {
  title: "Contact",
  content: (
    <>
      <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a></p>
      <p>GitHub: <a href="https://github.com/yourusername">github.com/yourusername</a></p>
    </>
  )
}

export const allSections = { about, skills, projects, contact };