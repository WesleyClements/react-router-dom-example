import { ProjectCard } from '../../components/ProjectCard';

const projects = Array(10).fill()
  .map((_, i) => ({
    title: "My Project " + (i + 1),
    description: "Lorem ipsum"
  }));

export const Portfolio = () => {
  return (
    <>
      <h1>This is our portfolio page</h1>
      {
        projects.map(({title, description}) => (
          <ProjectCard key={title} title={title} description={description} />
        ))
      }
    </>
  );
}