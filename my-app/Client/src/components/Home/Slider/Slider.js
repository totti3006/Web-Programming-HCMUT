import './Slider.css'
import slider1 from '../../../images/home-slider/iphone13.jpg'
import slider2 from '../../../images/home-slider/macbook.jpg'
import slider3 from '../../../images/home-slider/applewatch.jpg'

const Slider = () => {
    
    return(
        <div id="carouselExampleIndicators" className="carousel slide slider" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img className="d-block w-100" src={slider1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={slider2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                <img className="d-block w-100" src={slider3} alt="Third slide"/>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only"></span>
            </a>
        </div>
    )
}

export default Slider;