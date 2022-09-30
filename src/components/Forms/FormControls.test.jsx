import { render, screen } from '@testing-library/react';

import { 
  InputController,
  TextAreaControl,
  SelectControl,
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

test('select control', async () => {
  render(
    <SelectControl label="Animal" name="animal" required>
      <option>Cat</option>
      <option>Crow</option>
      <option>Dog</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('Animal');
  expect(selectControl.name).toBe('animal');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);
});
