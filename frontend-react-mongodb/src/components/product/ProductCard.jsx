import React, { useRef, useEffect,useState  } from 'react';
//import bootstrap from "bootstrap/dist/css/bootstrap.min.css"; // dynamically require Bootstrap JS
import { Carousel } from 'bootstrap';  // Import Carousel from Bootstrap's JS
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
