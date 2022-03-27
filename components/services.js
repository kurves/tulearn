import styles from '../styles/Service.module.css'
import {useRouter} from 'next/router'
import React from 'react'
import Image from 'next/image'



const Service = React.forwardRef(({description,onClick,href,title2,title1,title,src },ref)=>{
 

return(
    <div>
        <h3>{description}</h3>
      <button 
       type="button"
       className={styles.servicesbtn}>
        <a href={href} onClick={onClick}>{title}{title2}{title1}</a>
        </button>
      
    </div>
)
})



export default Service