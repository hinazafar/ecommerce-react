import React, { useRef, useEffect,useState  } from 'react';
import "./product.css";


const ProductCard = () => {
  const carouselRef = useRef(null);
  const [zoomIndex, setZoomIndex] = useState(null);
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Column: Image Carousel */}
        <div className="col-md-6">
        <div className="container ">
  
          <div id="mainCarousel" className="carousel slide rounded" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="./images/1.jfif" className="d-block w-100  rounded" alt="Image 1" style={{ height: '400px', objectFit: 'contain' }}/>
              </div>
              <div className="carousel-item">
                <img src="./images/2.jfif" className="d-block w-100 rounded" alt="Image 2" style={{ height: '400px', objectFit: 'contain' }}/>
              </div>
              <div className="carousel-item">
                <img src="./images/3.jfif" className="d-block w-100 rounded" alt="Image 3" style={{ height: '400px', objectFit: 'contain' }}/>
              </div>
              <div className="carousel-item">
                <img src="./images/5.webp" className="d-block w-100 rounded" alt="Image 4" style={{ height: '400px', objectFit: 'contain' }}/>
              </div>
            </div>
          </div>
 
        <div className="row mt-3 justify-content-center align-items-center">
            
            <div className="col-2">
              <img src="./images/1.jfif" className="thumbnail-image w-100  rounded active" data-bs-target="#mainCarousel" data-bs-slide-to="0" alt="Thumbnail 1"/>
            </div>
            <div className="col-2">
              <img src="./images/2.jfif" className="thumbnail-image w-100 rounded" data-bs-target="#mainCarousel" data-bs-slide-to="1" alt="Thumbnail 2"/>
            </div>
            <div className="col-2">
              <img src="./images/3.jfif" className="thumbnail-image w-100 rounded" data-bs-target="#mainCarousel" data-bs-slide-to="2" alt="Thumbnail 3"/>
            </div>
            <div className="col-2">
            <img src="./images/5.webp" className="thumbnail-image w-100  rounded " data-bs-target="#mainCarousel" data-bs-slide-to="3" alt="Thumbnail 4"/>
            </div>
        </div>
</div>
    
        </div>

        {/* Right Column: Product Details */}
        <div className="col-md-6">
          <h4>Product Name</h4>
          <p className="text-muted">Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional. Royalty-free licenses let you pay once to use copyrighted images and video clips in personal and commercial projects on an ongoing basis without requiring additional .</p>
          <h5>
            $99.99 <span className="text-danger ms-2"><del>$129.99</del></span>
          </h5>          
          <div>
          <h4 class="swatch__title">
            <span>Size: <span >35</span></span>
          </h4>
          <div className="d-flex">
              <button className="btn btn-outline-primary px-2 py-2 active">35</button>
              <button className="btn btn-outline-primary px-2 py-2">36</button>
              <button className="btn btn-outline-primary px-2 py-2">37</button>
              <button className="btn btn-outline-primary px-2 py-2">38</button>
              <button className="btn btn-outline-primary px-2 py-2">39</button>
              <button className="btn btn-outline-primary px-2 py-2">40</button>
              <button className="btn btn-outline-primary px-2 py-2">41</button>
              <button className="btn btn-outline-primary px-2 py-2">42</button>
          </div>
        </div>

          <button className="btn btn-primary my-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
