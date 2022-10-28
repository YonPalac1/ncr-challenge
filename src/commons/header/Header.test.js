import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Header from "./";


test('renders component', () => {
    render(<Header />);
});