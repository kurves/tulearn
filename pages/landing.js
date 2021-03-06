import Image from "next/image";
import styles from "../styles/Landing.module.css";
import Service from "../components/services";
import Link from 'next/link'

function Landing() {
	return (
		<div className={styles.landing}>
			<Image
				src="/welearn.jpg"
				alt="logo"
				marginleft={-6}
				width={300}
				height={300}
			/>
			<div className={styles.description}>
				<div className={styles.welcome}>
					<h3 className={styles.karibu}>Karibu </h3>
					<h3
						className={styles.welcome_karibu}
						style={{ letterSpacing: "1.95rem" }}>
						TuLearn
					</h3>
				</div>
				<p style={{ fontSize: "1.2rem" }}>
					Explore Tulearn for revision questions, notes from trainers, <br />{" "}
					worked out examples, questions and answers from learners and much
					more.
				</p>
			</div>
			<div className={styles.container}>
				<div className={styles.servicesdiv}>
					<Image src="/notes2.jpg" 
					priority
					height={300} width={260} 
					alt=''/>

					<Link href="/units" passHref>
						<Service
							description="Test your knowledge on various topics."
							title={" Click for Revision  Questions"}
						/>
					</Link>
				</div>

				<div className={styles.servicesdiv}>
					<Image src="/symbols.png" 
					priority
					height={300} width={200} 
					alt=''
					/>
					<Link href="/units" passHref>
						<Service
							description="These worked out examples will guide you through as you learn."
							title=" Click for Worked Out Examples"
						/>
					</Link>
				</div>

				<div className={styles.servicesdiv}>
					<Image src="/rover.png" 
					priority
					height={300} width={200}
					alt=''
					/>
					<Link href="/units" passHref>
						<Service
							description="Get more indepth knowledge on various complex topics."
							title=" Click to Update your Notes"
						/>
					</Link>

					<div />
				</div>
			</div>
			<div className={styles.footer}>
				Proudly brought to you by
				<footer>
					<Image src="/welearn.jpg" 
					alt=''
					width={100} height={100} />
				</footer>
			</div>
		</div>
	);
}
export default Landing;
