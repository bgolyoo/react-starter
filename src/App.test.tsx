import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';

import App from './App.tsx';

describe('App', () => {
  test('test code', async () => {
    render(<App />);

    const btn = () => screen.findByRole('button');

    await userEvent.click(await btn());

    expect((await btn()).textContent).toEqual('count is 1');
  });
});
