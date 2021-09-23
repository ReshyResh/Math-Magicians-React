import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';
import Calculator from '../components/Calculator';

describe('Components rendering correctly', () => {
  it('Homepage rendering', () => {
    render(<App />);
    expect(screen.getByText('Welcome to our page!'));
  });

  it('Calculator rendering', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Calculator'));
    expect(screen.getByText("Let's do some math!"));
  });

  it('Quote rendering', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Quote'));
    expect(screen.getByAltText('loading'));
  });

  it('Calculator working when user presses button', () => {
    const rendered = render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('='));
    const result = rendered.container.querySelector('.result').innerHTML;
    expect(result).toBe('18');
  });
});
