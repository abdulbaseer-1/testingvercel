import closed_cases_style from './Closed_Cases.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import Closed_Cases_Table from '../../components/Tables/Closed_Cases_Table/Closed_Cases_Table';

function Closed_Cases() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={closed_cases_style.contentBody}><Closed_Cases_Table/></Content>
      <Footer/>
    </>
  );
}

export default Closed_Cases;