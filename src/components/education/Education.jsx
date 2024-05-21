import './education.css'

function Education({ education }) {

  


  return (
    <div className="edu">
        {education.map((item, i) => 
          <article key={i} className='block'>
            <a href={item.web} className='link'>
              <h5 className='item'>{item.name}</h5>
              <p className='item'>{item.where}</p>
              <p className='item'>{item.date}</p>
            </a>
          </article>)}
      
    </div>
  )
}

export default Education
