import styles from "../styles/Units.module.css";

import React from "react";

const Unit = React.forwardRef(function Unit(
	
		{
			onClick,
			href,
			title,
			title1,
			title2,
			topic,
			topic1,
			topic2,
			topic3,
			
			
		},ref)
	
	 {
		return (
			<div className={styles.unitcard}>
				<ul>
					<li>
						<h3>{topic}</h3>
						<h3>{topic1}</h3>
						<h3>{topic2}</h3>
						<h3>{topic3}</h3>
					</li>
				</ul>
				<div className={styles.unitsbtndiv}>
					<button type="button" className={styles.unitsbtn }> 
						<a href={href} ref={ref} onClick={onClick}>
							{title}
							{title1}
							{title2}
						</a>
					</button>
				</div>
			</div>
		);
	}
);
export default Unit;
