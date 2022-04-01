import Image from "next/image";
import styles from "../styles/Landing.module.css";
import Service from "../components/services";
import { useRouter } from "next/router";
import Units from './units'

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
					<h3 style={{ paddingLeft: "5rem" }}>Karibu </h3>
					<h3 className={styles.welcome_karibu}style={{letterSpacing:'1.9rem'}}>TuLearn</h3>
				</div>
				<p style={{ fontSize: "1.2rem" }}>
					Explore Tulearn for revision questions, notes from trainers, <br />{" "}
					worked out examples, questions and answers from learners and much
					more.
				</p>
			</div>
			<div className={styles.container}>
				<div className={styles.servicesdiv}>
					<Image src="/notes.jpg" height={300} width={260} />

					<Link href="/units"passHref>
						<Service
							description="Test your knowledge on various topics."
							title={" Revision  Questions"}
						/>
					</Link>
				</div>

				<div className={styles.servicesdiv}>
					<Image src="/symbols.png" height={300} width={200} />
					<Link href="/units" passHref>
						<Service
							description="These worked out examples will guide you through as you learn."
							title="Worked Out Examples"
						/>
					</Link>
				</div>

				<div className={styles.servicesdiv}>
					<Image src="/rover.png" height={300} width={200} />
					<Link href="/units" passHref>
						<Service
							description="Get more indepth knowledge on various complex topics."
							title="Update your Notes"
						/>
					</Link>
					<div />
				</div>
			</div>
			<div>
				<footer className={styles.footer}>
					Proudly brought to you by
					<span className={styles.logo}>
						<Image src="/welearn.jpg" width={200} height={150} />
					</span>
				</footer>
			</div>
		</div>
	);
}
export default Landing;
