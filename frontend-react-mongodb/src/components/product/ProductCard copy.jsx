import React, { useRef, useEffect,useState  } from 'react';
//import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; // dynamically require Bootstrap JS
// import { Carousel } from 'bootstrap';  // Import Carousel from Bootstrap's JS
import { Carousel } from 'react-bootstrap';
import "./product.css";


const ProductCard = () => {
  const carouselRef = useRef(null);
  const [zoomIndex, setZoomIndex] = useState(null);

  useEffect(() => {    
    const carouselInstance = new Carousel(carouselRef.current); // Initialize the Bootstrap carousel

    const setCarousel = (index) => {
      if (carouselInstance) {
        carouselInstance.to(index);
      }
    };

    const handleImageClick = (index) => {
      if (zoomIndex === index) {
        setZoomIndex(null); // Zoom out if already zoomed in
      } else {
        setZoomIndex(index); // Zoom in on the clicked image
      }
    };

    // Attach the function to the ref so it can be used by thumbnail clicks
    carouselRef.current.setCarousel = setCarousel;
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column: Image Carousel */}
        <div className="col-md-6">
          <div
            id="productCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            ref={carouselRef}
          >
            <div className="carousel-inner">
            {[1, 2, 3, 4].map((image, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? 'active' : ''}`}
                >
                  <img
                    src={`images/${image}.webp`}
                    className={`d-block w-100 ${zoomIndex === index ? 'zoomed' : ''}`}
                    alt={`Product Image ${image}`}
                    onClick={() => handleImageClick(index)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Thumbnails */}
          <div className="d-flex justify-content-center mt-3">
          {[1, 2, 3, 4].map((image, index) => (
              <img
                key={index}
                src={`images/${image}.webp`}
                className="img-thumbnail me-2"
                width="50"
                onClick={() => carouselRef.current.setCarousel(index)}
                alt={`Thumbnail ${image}`}
              />
            ))}             
            
          </div>
          <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>

        {/* Right Column: Product Details */}
        <div className="col-md-6">
          <h4>Product Name</h4>
          <p className="text-muted">Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional .</p>
          <h5>
            $99.99 <span className="text-danger ms-2"><del>$129.99</del></span>
          </h5>
          <div className="mb-3">
            <label htmlFor="productSize" className="form-label">Size:</label>
            <select className="form-select w-50" id="productSize">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
              <option>Extra Large</option>
            </select>
          </div>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
