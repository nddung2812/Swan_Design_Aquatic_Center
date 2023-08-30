import '../styles/Homebanner.css'

const HomeBanner = () => {
  return (
    <div className='homebanner-ctn'>
      <h1>Aquatic Plants and Fish</h1>
      <h2>Bringing the ocean to you by Aquatic Swan Design</h2>
      <p>Your Source for Healthy Aquarium Fish and Lush Plants</p>
      <a href="">
        <div className="homebanner-main-cta-btn">
          Who we are
        </div>
      </a>
      <div className="homebanner-cta-ctn">
        <a target="_blank" href='https://duckaroo.com.au/collections/aquarium-plants' rel="noreferrer">
          <div className="cta-card cta-btn1">
            <h2>Bucephalandra</h2>
            <p>Discover rare variants</p>
          </div>
        </a>
        <a target="_blank" href="https://duckaroo.com.au/pages/our-services" rel="noreferrer">
          <div className="cta-card cta-btn2">
            <h2>D.I.Y Projects</h2>
            <p>Checkout top-quality items</p>
          </div>
        </a>
        <a target="_blank" href="https://duckaroo.com.au/collections/aquarium-probiotics" rel="noreferrer">
          <div className="cta-card cta-btn3">
            <h2>Probiotics</h2>
            <p>Powered by Koika</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default HomeBanner