import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Home from "../Home";
import BottomNav from "@twikkl/components/BottomNav";

const mockPushFn = jest.fn();

jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: mockPushFn
    })
}))

jest.mock('@twikkl/components/BottomNav', ()=> () => (<div>Mock BottomNav</div>))

describe("Home", () => {
  it("renders the component correctly", () => {
    const { getByText } = render(<Home />);
    
    // Assert that the required elements are rendered
    expect(getByText("My Feed")).toBeTruthy();
    expect(getByText("Discover")).toBeTruthy();
  });
});
