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

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
      t: (key: string) => key
  })
}));

describe("Home", () => {
  it("renders the component correctly", () => {
    const { getByText } = render(<Home />);
    
    // Assert that the required elements are rendered
    expect(getByText("home.myFeed")).toBeTruthy();
    expect(getByText("home.discover")).toBeTruthy();
  });
});
