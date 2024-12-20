import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className="box btn_shadow">
                    <img src='{props.image}' alt=''/>
                    <h2>{props.title}</h2>
                    <p>
                    {props.desc}
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae dignissimos tenetur rerum ratione. Maiores, ipsa doloremque error, dicta iusto voluptatum culpa optio, illum animi sit pariatur? Illo architecto dolore id!</p>
                    <a href=''>
                        <i className='fs fa-arrow-right'></i>
                    </a>
                </div>
                </>
  )
}

export default Card