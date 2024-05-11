import './about.scss'

function About({data}) {
  return (
    <div>
      <div className="aboutMe">
            <img src={data.image} alt="img"/>
            <div className="card">
                <h2>
                    {data.name}
                </h2>
                <p>🗺️{data.city}</p>
                <p>🗓️ {data.birthDate}</p>
                <p>
                    📧
                    <a href={"email: " + data.email}>
                        {data.email}
                    </a>
                </p>
                <p>📱 {data.phone}</p>
            </div>
        </div>
    </div>
  )
}

export default About
