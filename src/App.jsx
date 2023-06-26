import { useState } from 'react';
import './App.css';

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

	const handleCounts = (e) => {
		setCount((count) => Number(e.target.value));
	};
	return (
		<div className='container'>
			<div className='step-div'>
				<input
					type='range'
					min={1}
					max={10}
					value={step}
					onChange={handleSteps}
				/>
				<span>Step: {step}</span>
			</div>
			<div className='count-div'>
				<button onClick={handleCountMinus}>-</button>
				<input type='text' value={count} onChange={handleCounts} />
				<button onClick={handleCountPlus}>+</button>
			</div>
			{count === 0 ? (
				<p>Today is Monday {date.toDateString()}</p>
			) : (
				<p>
					{count} days from today is {date.toDateString()}
				</p>
			)}
		</div>
	);
}

export default App;
