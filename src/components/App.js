import React, { useState } from "react";
import styles from "./App.module.css";
import Nav from "./nav/Nav";
import InputWeight from "./InputWeight/InputWeight";

function App() {
	const [newWeight, setNewWeight] = useState(null);
	const [newDate, setNewDate] = useState(null);

	return (
		<div className={styles.app}>
			<Nav />
			<InputWeight />
		</div>
	);
}

export default App;
