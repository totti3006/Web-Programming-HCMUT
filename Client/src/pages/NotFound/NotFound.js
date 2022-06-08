import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./NotFound.css"

function NotFoundPage(){
    return(
        <>
            <Header />
            <div style={{"position" : "absolute", "top" : "56px", "width": "100vw"}}>
                <h3 id="notfound-title">ĐƯỜNG DẪN KHÔNG TỒN TẠI</h3>
                <Footer />
            </div>
        </>
    )
}

export default NotFoundPage;