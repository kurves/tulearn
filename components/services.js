import styles from '../styles/Service.module.css'
import React from 'react'



const Service = React.forwardRef(function Service({description,onClick,href,title2,title1,title },ref){
return(
    <div>
        <h3>{description}</h3>
      <button 
       type="button"
       className={styles.servicesbtn}>
        <a href={href}  ref={ref}onClick={onClick}>{title}{title2}{title1}</a>
        </button>
      
    </div>
)
})



export default Service