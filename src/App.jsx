import { useState } from 'react';

function App() {
	const [step, setStep] = useState(1);
	const [count, setCount] = useState(0);

	const handleStepMinus = () => {
		setStep((prev) => step - 1);
	};
	const handleStepPlus = () => {
		setStep((prev) => step + 1);
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
				<button onClick={handleStepMinus}>-</button>
				<span>Step: {step}</span>
				<button onClick={handleStepPlus}>+</button>
			</div>
			<div>
				<button onClick={handleCountMinus}>-</button>
				<span>Count: {count}</span>
				<button onClick={handleCountPlus}>+</button>
			</div>
			<p>Today is Monday Jun 26 2023</p>
		</>
	);
}

export default App;
