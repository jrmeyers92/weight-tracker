import React, { useState } from "react";
import styles from "./InputWeight.module.css";

const InputWeight = (props) => {
	const [weight, setWeight] = useState(null);
	const [date, setDate] = useState(null);

	const onFormSubmit = (e) => {
		e.preventDefault();
		props.onSubmit(weight, date);
		setWeight("");
		setDate("");
	};

	return (
		<div className={styles.div}>
			<form className={styles.form} onSubmit={onFormSubmit}>
				<h2 className={styles.form__header}>Input Current Weight</h2>
				<div className={styles.form__box}>
					<div className={styles.form__container}>
						<label className={styles.form__label}>Weight:</label>
						<input
							type='text'
							required
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
							required
							className={styles.form__input}
							value={date}
							onChange={(e) => {
								setDate(e.target.value);
							}}></input>
					</div>
					<button type='submit' className={styles.form__button}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default InputWeight;
