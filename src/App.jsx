import { useState } from 'react';

function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const date = new Date();
	date.setDate(date.getDate() + count);

	// const handleStepMinus = () => {
	// 	setStep((prev) => step - 1);
	// };
	// const handleStepPlus = () => {
	// 	setStep((prev) => step + 1);
	// };

	const handleSteps = (e) => {
		setStep(Number(e.target.value));
	};

	const handleCountMinus = () => {
		setCount((prev) => count - step);
	};
	const handleCountPlus = () => {
		setCount((prev) => count + step);
	};
	return (
		<>
			<div>
				<input
					type='range'
					min={1}
					max={10}
					value={step}
					onChange={handleSteps}
				/>
				<span>Step: {step}</span>
			</div>
			<div>
				<button onClick={handleCountMinus}>-</button>
				<span>Count: {count}</span>
				<button onClick={handleCountPlus}>+</button>
			</div>
			{count === 0 ? (
				<p>Today is Monday {date.toDateString()}</p>
			) : (
				<p>
					{count} days from today is {date.toDateString()}
				</p>
			)}
		</>
	);
}

export default App;
