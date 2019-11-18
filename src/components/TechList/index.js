import React, { useState, useEffect } from 'react';

const TechList = () => {
	const [techs, setTechs] = useState([]);
	const [newTech, setNewTech] = useState([]);

	useEffect(() => {
		const storage = localStorage.getItem('techs');

		if (storage) {
			setTechs(JSON.parse(storage));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('techs', JSON.stringify(techs));
	}, [techs]);

	const handleAddTech = () => {
		setTechs([...techs, newTech]);
		setNewTech('');
	};

	return (
		<form data-testid="tech-form" onSubmit={handleAddTech}>
			<ul data-testid="tech-list">
				{techs.map(tech => (
					<li key={tech}>{tech}</li>
				))}
			</ul>

			<label htmlFor="tech">Tech</label>
			<input
				id="tech"
				value={newTech}
				onChange={e => setNewTech(e.target.value)}
			/>

			<button onClick={handleAddTech}>Adicionar</button>
		</form>
	);
};

export default TechList;
