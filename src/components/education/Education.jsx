import './education.css'

function Education({ education, images }) {
  return (
    <div className="edu">
        {education.map((item, i) => 
          <article key={i} className='block'>
            <h5 className='item'>{item.name}</h5>
            <p className='item'>{item.where}</p>
            <p className='item'>{item.date}</p>
          </article>)}
      
    </div>
  )
}

export default Education
