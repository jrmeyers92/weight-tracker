import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Nav from "./nav/Nav";
import InputWeight from "./InputWeight/InputWeight";
import LineChart from "./chart/LineChart";

const weightArray = [];
const dateArray = [];

function App() {
	const [newWeight, setNewWeight] = useState(null);
	const [newDate, setNewDate] = useState(null);

	const onSubmit = (weight, date) => {
		setNewWeight(weight);
		setNewDate(date);
	};

	useEffect(() => {
		weightArray.push(newWeight);
		dateArray.push(newDate);
		console.log(weightArray, dateArray);
	}, [newWeight, newDate]);

	return (
		<div className={styles.app}>
			<Nav />
			<InputWeight onSubmit={onSubmit} />
			<LineChart weight={weightArray} date={dateArray} />
		</div>
	);
}

export default App;
