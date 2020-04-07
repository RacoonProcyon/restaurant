import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Location from './location';
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Location/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});