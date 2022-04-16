import NewsPage from "../../components/New";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function News() {
  return (
    <div className="news-page">
      <Header/>
      <NewsPage />
      <Footer/>
    </div>
  );
}

export default News;