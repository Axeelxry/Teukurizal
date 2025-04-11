import ProjectsSection from '@/components/sections/ProjectsSection';
import { generateMetadata as getPageMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'Projects',
    description:
      'Explore the projects I have worked on, showcasing skills and technologies.',
    path: '/projects'
  });
}

const Projects = () => <ProjectsSection />;

export default Projects;
