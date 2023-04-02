import { render, screen } from '@testing-library/react';
import OutputScreen from '../OutputScreen';

test('render output screen', () => {
  render(<OutputScreen output={""} input={""} />);
  const outputScreen = screen.getByTestId('screen');
  expect(outputScreen).toBeInTheDocument();
});
