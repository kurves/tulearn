import Unit from "../components/unit";
import styles from "../styles/Units.module.css";
import Link from "next/link";

function Units() {
	return (
		<div className={styles.unitscontainer}>
			<h1 style={{ textAlign: "center", color: "purple" }}>Module 1</h1>
			<div className={styles.unitsdiv}>
				<Unit
					topic="Simple Stress and Strain"
					topic1="Composite Materials"
					topic2="Temperature Stress and Strain"	
					/>

				<div className={styles.btndiv}>
					<Link href="/stressRevision" passHref>
						<Unit title="Revision Questions" />
					</Link>
					<Link href="/stressAnswered" passHref>
						
						
						<Unit title1="Worked out Examples" />
					</Link>

					<Link href="/stressNotes" passHref>
						<Unit title2="Click for Notes" />
					</Link>
				</div>
			</div>
			<div className={styles.unitsdiv}>
				<Unit
					topic="Types of Supports and Loadings"
					topic1="Shear Force and Bending Moments"
					topic2="Properties of a Section"
					topic3="Theory of Simple Bending"></Unit>

				<div className={styles.btndiv}>
					<Link href="/bendingRevision" passHref>
						<Unit title="Revision Questions" />
					</Link>
					<Link href="/bendingAnswered" passHref>
						<Unit title1="Worked out Examples" />
					</Link>
					<Link href="/bendingNotes" passHref>
						<Unit title2="Click for Notes" />
					</Link>
				</div>
			</div>

			<div className={styles.unitsdiv}>
				<Unit
					topic="Horizontal Shear Stress in Beams"
					topic1="Columns and Struts"
					topic2="Analysis of Simple Plane Frames"></Unit>

				<div className={styles.btndiv}>
					<Link href="/strutRevision" passHref>
						<Unit title="Revision Questions" />
					</Link>
					<Link href="/strutAnswered" passHref>
						<Unit title1="Worked out Examples" />
					</Link>
					<Link href="/strutNotes" passHref>
						<Unit title2="Click for Notes" />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Units;
