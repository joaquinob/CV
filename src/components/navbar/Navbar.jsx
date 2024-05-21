import './navbar.css'

function Navbar({ images, profile}) {
  return (
    <div className="navbar">
       <h1 className="name">{profile.name}</h1>
       <h3 className='work'>{profile.work}</h3>
       <div className='buttons'>
        <button className='btn'><a href={profile.cv}><img src={images.cv} alt="" className='img'/> </a></button>
        <button className='btn'><a href={profile.linkedin}><img src={images.linkedin} alt="" className='img'/></a></button>
        <button className='btn'><a href={profile.gitHub}><img src={images.github} alt="" className='img'/></a></button>
       </div>
    </div>
  )
}

export default Navbar
