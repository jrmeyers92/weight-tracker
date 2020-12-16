import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
	return (
		<div className={styles.div}>
			<nav className={styles.nav}>
				<h2 className={styles.nav__logo}>Trackery</h2>
				<ul className={styles.nav__list}>
					<li className={styles.nav__item}>Input Weight</li>
					<li className={styles.nav__item}>Dashboard</li>
					<li className={styles.nav__item}>Goals</li>
				</ul>
			</nav>
		</div>
	);
};

export default Nav;
