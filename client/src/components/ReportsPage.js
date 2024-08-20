import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchReports } from '../services/mockApi';

const ReportsPage = ({ onSelectReport }) => {
	// Use React Query's useQuery hook
	const { data: reports, error, isLoading } = useQuery({
		queryKey: ['reports'],
		queryFn: fetchReports,
	});

	if (isLoading) return <p>Loading reports...</p>;
	if (error) return <p>Error loading reports: {error.message}</p>;

	return (
		<div>
			<h2>Select a Report</h2>
			<ul>
				{reports.filter(report => report !== 'Web Report Designer').map(report => (
					<li key={report} onClick={() => onSelectReport(report)}>
						{report}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ReportsPage;