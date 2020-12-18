import React from "react";
import { Line } from "react-chartjs-2";
import styles from "./LineChart.module.css";

const LineChart = (props) => {
	const date = props.weight;
	const label = props.date;

	const info = {
		labels: ["jan", "feb", "mar"],
		datasets: [
			{
				label: { date },
				fill: false,
				lineTension: 0.1,
				backgroundColor: "rgba(75,192,192,1)",
				borderColor: "rgba(0,0,0,1)",
				borderWidth: 2,
				data: { date },
			},
		],
	};

	return (
		<div className={styles.lineChart}>
			<Line
				data={info}
				width={10}
				height={5}
				// options={{ maintainAspectRatio: false }}
			/>
		</div>
	);
};

export default LineChart;
