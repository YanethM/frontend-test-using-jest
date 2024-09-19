import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppRouting } from '../routes/AppRouting';

test('renders the Dashboard when navigating to /admin', async () => {
  render(
    <MemoryRouter initialEntries={['/admin']}>
      <AppRouting />
    </MemoryRouter>
  );

  // Usa findByText en lugar de getByText para manejar elementos que podrían aparecer después
  const dashboardTitle = await screen.findByText('Usuarios');
  expect(dashboardTitle).toBeInTheDocument();
});

test('renders the Menu when navigating to /', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppRouting />
      </MemoryRouter>
    );
  
    // Usa findByText para esperar a que el texto de "Servicios" aparezca en la página
    const menuTitle = await screen.findByText('Servicios');
    expect(menuTitle).toBeInTheDocument();
  });