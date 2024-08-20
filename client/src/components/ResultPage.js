import React, {useState} from 'react';
import {useQuery} from '@tanstack/react-query';
import {downloadReport, fetchReportPreview} from '../services/mockApi';

const ResultPage = ({report, format}) => {
	const [downloading, setDownloading] = useState(false);
	const [error, setError] = useState(null);
	const defaultFormat = 'PDF';

	// Fetch HTML Preview of the report
	const {data: htmlPreview, isLoading: isPreviewLoading, error: previewError} = useQuery({
		queryKey: ['reportPreview', report], queryFn: () => fetchReportPreview(report),
	});

	const handleDownload = async () => {
		console.log(format)
		setDownloading(true);
		try {
			const data = await downloadReport(report, format || defaultFormat);
			const blob = new Blob([data], {type: 'application/pdf'});
			const url = URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.setAttribute('download', `${report}.${format}`);
			document.body.appendChild(link);
			link.click();
			link.remove();
		} catch (error) {
			setError('Failed to download report.');
		} finally {
			setDownloading(false);
		}
	};

	if (isPreviewLoading) return <p>Loading preview...</p>;
	if (previewError) return <p>Error loading preview: {previewError.message}</p>;

	return (<div>
			<h2>Result</h2>
			<button onClick={handleDownload} disabled={downloading}>
				{downloading ? 'Downloading...' : 'Download Report'}
			</button>

			{/* Bonus: HTML Preview */}
			{htmlPreview && (<div>
					<h3>Preview</h3>
					<div dangerouslySetInnerHTML={{__html: htmlPreview}}/>
				</div>)}
			{error && <p>{error}</p>}
		</div>);
};

export default ResultPage;