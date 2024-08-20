import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchExportFormats } from '../services/mockApi';

const ExportFormatPage = ({ onSelectFormat }) => {
	// Use React Query's useQuery hook with the object form
	const { data: formats, error, isLoading } = useQuery({
		queryKey: ['exportFormats'],
		queryFn: fetchExportFormats,
	});
	useEffect(() => {
		console.log(formats)
	}, [formats]);

	if (isLoading) return <p>Loading export formats...</p>;
	if (error) return <p>Error loading export formats: {error.message}</p>;



	return (
		<div>
			<h2>Select an Export Format</h2>
			<ul>
				{formats?.map((format,index) => (
					<li key={index} onClick={() => onSelectFormat(format)}>
						{format}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ExportFormatPage;