import ongoing_investigation_style from './Ongoing_Investigations.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import Ongoing_Investigations_Table from '../../components/Tables/Ongoing_Investigations_Table/Ongoing_Investigations_Table';

function Ongoing_Investigations() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={ongoing_investigation_style.contentBody}><Ongoing_Investigations_Table/></Content>
      <Footer/>
    </>
  );
}

export default Ongoing_Investigations;