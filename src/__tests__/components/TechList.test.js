import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import TechList from '~/components/TechList';

describe('TechList component', () => {
	it('shoud be able to add new tech', () => {
		const { getByText, getByTestId, getByLabelText } = render(<TechList />);

		fireEvent.change(getByLabelText('Tech'), {
			target: { value: 'Node.js' },
		});

		fireEvent.submit(getByTestId('tech-form'));

		// fireEvent.click(getByText('Adicionar'));

		expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
		expect(getByLabelText('Tech')).toHaveValue('');
	});
});
