import React, {useState} from 'react';
import ReportsPage from './ReportsPage';
import ExportFormatPage from './ExportFormatPage';
import ResultPage from './ResultPage';

const Wizard = () => {
	const [step, setStep] = useState(1);
	const [report, setReport] = useState(null);
	const [format, setFormat] = useState(null);

	const nextStep = () => setStep(step + 1);
	const prevStep = () => setStep(step - 1);

	return (
		<div>
			{step === 1 && (
				<ReportsPage
					onSelectReport={(selectedReport) => {
						setReport(selectedReport);
						nextStep();
					}}
				/>
			)}
			{step === 2 && (
				<ExportFormatPage
					onSelectFormat={(selectedFormat) => {
						setFormat(selectedFormat);
						nextStep();
					}}
				/>
			)}
			{step === 3 && <ResultPage report={report} format={format.name}/>}

			{step > 1 && <button onClick={prevStep}>Back</button>}
		</div>
	);
};

export default Wizard;