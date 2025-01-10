import report_crime_style from './Report_a_Crime.module.css';
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Footer from "../../components/Footer/Footer";
import Report_Form from "../../components/report_form/Report_Form";

function Report_a_Crime() {
  return(
    <>
      <Header/>
      <Hero/>
      <Content className={report_crime_style.contentBody}><Report_Form/></Content>
      <Footer/>
    </>
  );
}

export default Report_a_Crime;