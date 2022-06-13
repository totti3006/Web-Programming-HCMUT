import New from "../../components/New";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function News() {
  return (
    <>
      
      <div className="news-page" style={{backgroundImage: "linear-gradient(to bottom, black, rgb(41, 39, 39))"}}>
        <Header/>
        <New />
        <Footer/>
      </div>
    </>
    
  );
}

export default News;