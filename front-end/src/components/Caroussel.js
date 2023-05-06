import Carousel from "react-bootstrap/Carousel";

function Caroussel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.wallpapersafari.com/85/45/wTezm0.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://w0.peakpx.com/wallpaper/819/362/HD-wallpaper-abstract-3d.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpapers.com/images/featured/dks5jl1ul4qedmhk.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Caroussel;
