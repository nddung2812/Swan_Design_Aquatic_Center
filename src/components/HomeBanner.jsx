import '../styles/Homebanner.css'

const HomeBanner = () => {
  return (
    <div className='homebanner-ctn'>
      <h1>Aquatic Plants and Fish</h1>
      <h2>Bringing the Ocean to You</h2>
      <p>Your Source for Healthy Aquarium Fish and Lush Plants</p>
      <div className="checkout">
        <a href="">Who we are</a>
      </div>
      <div className="homebanner-cta-ctn">
        <div className="cta-card">
          <h2>Bucephandraa</h2>
          <p>Discover all products</p>
        </div>
        <div className="cta-card">
          <h2>Bucephandraa</h2>
          <p>Discover all products</p>
        </div>
        <div className="cta-card">
          <h2>Bucephandraa</h2>
          <p>Discover all products</p>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner