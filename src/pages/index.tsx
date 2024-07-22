// pages/index.tsx
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ImageGallery from '../components/ImageGallery';
import Features from '../components/Features';
import JoinCommunity from '../components/JoinCommunity';
import PartnerWithUs from '../components/PartnerWithUs';
import About from '@/components/About';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <ImageGallery />
      <Features />
      <PartnerWithUs />
      <JoinCommunity />
    </Layout>
  );
};

export default Home;
