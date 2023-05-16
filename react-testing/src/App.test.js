// App.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from '@testing-library/user-event';
import App from './App';

// test 2

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain container for this test
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
    // render(<App />);
    // expect(screen.getByRole("heading").textContent).toMatch(/Magnificent Monkeys/i);
  });

  it("renders radical rhinos after button click", async () => {
    // turtorial had "user = userEvent.setup()" which did not work
    const user = userEvent;

    render(<App />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});


// test 1

// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App />);
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });
