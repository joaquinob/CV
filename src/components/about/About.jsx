import './about.scss'

function About({data}) {
  return (
    <div>
      <div className="aboutMe">
            <img src={data.image} alt="img"/>
            <h3 className='ab'>{data.aboutMe}</h3>
            <div className="card">
                <h2>{data.name}</h2>
                <p>🗺️{data.city}</p>
                <p>🗓️ {data.birthDate}</p>
                <p>📧{data.email}</p>
                <p>📱 {data.phone}</p>
            </div>
        </div>
    </div>
  )
}

export default About
