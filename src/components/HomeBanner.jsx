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
        <div className="cta-card">
          <h2>Bucephalandra</h2>
          <p>Discover all products</p>
        </div>
        <div className="cta-card">
          <h2>D.I.Y Projects</h2>
          <p>Discover all products</p>
        </div>
        <div className="cta-card">
          <h2>Probiotics</h2>
          <p>Discover all products</p>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner