import React, { useState } from "react";
import styles from "./InputWeight.module.css";

const InputWeight = () => {
	const [weight, setWeight] = useState(null);
	const [date, setDate] = useState(null);

	return (
		<div className={styles.div}>
			<form className={styles.form}>
				<h2 className={styles.form__header}>Input Current Weight</h2>
				<div className={styles.form__box}>
					<div className={styles.form__container}>
						<label className={styles.form__label}>Weight:</label>
						<input
							type='text'
							className={styles.form__input}
							value={weight}
							onChange={(e) => {
								setWeight(e.target.value);
							}}></input>
					</div>
					<div className={styles.form__container}>
						<label className={styles.form__label}>Date:</label>
						<input
							type='date'
							className={styles.form__input}
							value={date}
							onChange={(e) => {
								setDate(e.target.value);
							}}></input>
					</div>
				</div>
			</form>
		</div>
	);
};

export default InputWeight;
