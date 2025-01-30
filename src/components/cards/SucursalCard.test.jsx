import { render } from '@testing-library/react';
import SucursalCard from './SucursalCard';

describe('SucursalCard Component', () => {
  const defaultProps = {
    title: 'Sucursal Test',
    id: '1',
    position: { lat: 19.4326, lng: -99.1332 },
    place: 'Test Place',
    gmap: 'https://www.google.com/maps',
    badge: '',
    advertisement: '',
    image: 'test-image.jpg',
    serviceday1: 'Lunes a Viernes',
    servicehour1: '9:00 AM - 5:00 PM',
    openHour: 9,
    closeHour: 17,
    openMinute: 0,
    closeMinute: 0,
  };

  it('renders without crashing', () => {
    render(<SucursalCard {...defaultProps} />);
  });

  it('displays the title and place', () => {
    const { getByText } = render(<SucursalCard {...defaultProps} />);
    expect(getByText('Sucursal Test')).toBeInTheDocument();
    expect(getByText('Test Place')).toBeInTheDocument();
  });

  it('displays the open badge when the branch is open', () => {
    const { getByText } = render(<SucursalCard {...defaultProps} />);
    expect(getByText('Abierto')).toBeInTheDocument();
  });

  it('displays the closed badge when the branch is closed', () => {
    const props = { ...defaultProps, openHour: 17, closeHour: 18 };
    const { getByText } = render(<SucursalCard {...props} />);
    expect(getByText('Cerrado')).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    const { getByText } = render(<SucursalCard {...defaultProps} />);
    expect(getByText('Google Maps')).toHaveAttribute('href', defaultProps.gmap);
    expect(getByText('Waze')).toHaveAttribute('href', `https://waze.com/ul?ll=${defaultProps.position.lat},${defaultProps.position.lng}&navigate=yes`);
  });
});
