interface ProjectProps{
    title: string,
    description: string,
    image?: string;
}


const Project : React.FC<ProjectProps> = (props) => (
    <>
        <h3>{props.title}</h3>
        {props.description}
        {props.image && <img src={props.image}/>}
    
    </>
);

export default Project
//Decalre projects
import FillerImage from "../assets/react.svg"

const project1 : ProjectProps = {
    title: "Project 1",
    description: "Description 1",
    image: FillerImage
}
const project2 : ProjectProps = {
    title: "Project 2",
    description: "This is my description for project 2",
    image: FillerImage
  }

export const allProjects = [project1, project2]