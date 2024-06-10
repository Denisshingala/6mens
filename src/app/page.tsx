import 'bootstrap/dist/css/bootstrap.css';
import styles from "./page.module.css";
import HomeHeader from './components/HomeHeader/HomeHeader';
import ServicesSection from './components/ServicesSection/ServicesSection';
// import BlogsSection from './components/BlogsSection/BlogsSection';
import SuccessStorySection from './components/SuccessStorySection/SuccessStorySection';
import ClientReview from './components/ClientReview/ClientReview';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import TeamExpert from './components/TeamExpert/TeamExpert';
import HorizontalLine from './components/HorizontalLine/HorizontalLine';
import Loader from './components/Loader/Loader';

export default function Home() {
  return (
    <main className={styles.main}>
      <Loader />
      <HomeHeader />
      <HorizontalLine />
      <ServicesSection />
      <SuccessStorySection />
      <WhyChooseUs />
      <ClientReview />
      <TeamExpert />
    </main>
  );
}
