import style from './Report_View.module.css';
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Content from "../../components/content/Content";
import Report_View from '../../components/Report_View/Report_View';

function ReportView() {
  return(
    <>
      <Header/>
      
      <Content className={style.contentBody}><Report_View/></Content>
      <Footer/>
    </>
  );
}

export default ReportView;