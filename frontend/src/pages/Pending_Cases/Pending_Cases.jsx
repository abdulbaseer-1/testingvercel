import pending_cases_style from './Pending_Cases.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import Pending_Cases_Table from "../../components/Tables/Pending_Cases_Table/Pending_Cases_Table";

function Pending_Cases() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={pending_cases_style.contentBody}><Pending_Cases_Table/></Content>
      <Footer/>
    </>
  );
}

export default Pending_Cases;