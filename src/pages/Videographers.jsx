import React, { useEffect, useState } from 'react';
import { VideographerCard } from '../components/VideographerCard';
import { getVideographers } from '../services/api';

export const Videographers = () => {
	const [videographers, setVideographers] = useState([]);
	const [search, setSearch] = useState('');

	useEffect(() => {
		getVideographers().then(setVideographers);
	}, []);

	const filtered = videographers.filter((videographer) => {
		const query = search.toLowerCase();
		return videographer.name.toLowerCase().includes(query) ||
			videographer.specializations.some((specialization) => specialization.toLowerCase().includes(query));
	});

	return (
		<div className="container" style={{ padding: '60px 24px' }}>
			<h1 className="section-title">Find Videographers</h1>
			<p className="section-subtitle">Browse through top industry videographers and explore their work</p>

			<input
				type="text"
				placeholder="Filter by name or specialization..."
				value={search}
				onChange={(event) => setSearch(event.target.value)}
				style={{ width: '100%', maxWidth: '480px', padding: '12px', marginBottom: '40px', borderRadius: '8px', border: '1px solid #CCC' }}
			/>

			<div className="grid-cards">
				{filtered.map((videographer) => (
					<VideographerCard key={videographer.id} videographer={videographer} />
				))}
			</div>
		</div>
	);
};
