import HomeSection from '@/components/sections/HomeSection';
import { generateMetadata as getPageMetadata } from '@/components/utils/generateMetadata';

export async function generateMetadata() {
  return getPageMetadata({
    title: '',
    path: '/'
  });
}

const HomePage = () => <HomeSection />;

export default HomePage;
