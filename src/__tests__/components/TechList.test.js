import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {
	it('shoud be able to add new tech', () => {
		const { getByText, getByTestId, debug } = render(<TechList />);

		debug();
		fireEvent.click(getByText('Adicionar'));
		debug();

		expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
	});
});
