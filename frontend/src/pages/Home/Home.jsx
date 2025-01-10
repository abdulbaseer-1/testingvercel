import home_style from './Home.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import User_HomePage_DB from '../../components/HomePage/User_HomePage_DB';

function Home() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={home_style.contentBody}><User_HomePage_DB/></Content>
      <Footer/>
    </>
  );
}

export default Home;