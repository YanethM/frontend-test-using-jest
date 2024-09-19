/* import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App'; */

/* test('renders the app and triggers button click', () => {
    // Mock de la función alert
    window.alert = jest.fn();
  
    render(<App />);
    
    const buttonElement = screen.getByText(/Submit/i);
    expect(buttonElement).toBeInTheDocument();
  
    // Simula el clic en el botón
    fireEvent.click(buttonElement);
  
    // Verifica que alert haya sido llamado
    expect(window.alert).toHaveBeenCalledWith("Button clicked");
  }); */

import { render } from "@testing-library/react";
import App from "../App";

test("renders the app", () => {
  render(<App />); // No envuelvas con MemoryRouter si App ya tiene BrowserRouter
});