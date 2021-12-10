import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import ReactDOM from "react-dom";
import SamuraiJsApp from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SamuraiJsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});