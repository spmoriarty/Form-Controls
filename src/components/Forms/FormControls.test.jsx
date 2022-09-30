import { render, screen } from '@testing-library/react';

import { 
  InputController,

} from './FormControls';

test('INPUT CONTROL', async () => {
  render(
    <InputController
      label="User Name"
      name="username"
      required
      placeholder="Your user name"
    />
  );
  const inputController = screen.getByLabelText('User Name');
  expect(inputController.name).toBe('username');
  expect(inputController.placeholder).toBe('Your user name');
  expect(inputController.required).toBe(true);
  
});
