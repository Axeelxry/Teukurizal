import AboutSection from '@/components/sections/AboutSection';
import { generateMetadata as getPageMetadata } from '@/components/utils/generateMetadata';
import { siteConfig } from '@/configs/config';

export async function generateMetadata() {
  return getPageMetadata({
    title: 'About Me',
    description: `Learn more about ${siteConfig.author}, my mission, vision, and values as a developer.`,
    path: '/about'
  });
}

const About = () => <AboutSection />;

export default About;
