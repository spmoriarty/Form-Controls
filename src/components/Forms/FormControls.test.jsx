import { render, screen } from '@testing-library/react';

import { 
  InputController,
  TextAreaControl,
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

test('text area control', async () => {
  render(
    <TextAreaControl
      label="Bio"
      name="bio"
      required
      placeholder="about you"
    />
  );
  const textAreaControl = screen.getByLabelText('Bio');
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('about you');
  
});
