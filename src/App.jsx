import { useState } from 'react';

function App() {
	const [step, setStep] = useState(1);

	const handleStepMinus = () => {
		setStep((prev) => step - 1);
	};
	const handleStepPlus = () => {
		setStep((prev) => step + 1);
	};
	return (
		<>
			<div>
				<button onClick={handleStepMinus}>-</button>
				<span>Step: {step}</span>
				<button onClick={handleStepPlus}>+</button>
			</div>
			<div>
				<button>-</button>
				<span>counter: 0</span>
				<button>+</button>
			</div>
			<p>Today is Monday Jun 26 2023</p>
		</>
	);
}

export default App;
