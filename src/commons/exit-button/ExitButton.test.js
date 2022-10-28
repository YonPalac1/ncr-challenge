import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import ExitButton from "./";


test('renders component', () => {
    render(<ExitButton />);
});