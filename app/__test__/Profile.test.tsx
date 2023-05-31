import React from "react";
import { render } from "@testing-library/react-native";
import Profile from "../Profile";


jest.mock("react-i18next", () => ({
  useTranslation: () => ({
      t: (key: string) => key
  })
}));

jest.mock('../../translations', () => ({
  changeLanguage: jest.fn()
}));

describe("Profile", () => {
  test("renders profile text", () => {
    const { getByText } = render(<Profile />);
    const walletText = getByText("profile.title");
    expect(walletText).toBeTruthy();
  });

  test("has correct styles", () => {
    const { getByText } = render(<Profile />);
    const profileText = getByText("profile.title");
    expect(profileText.props.style).toEqual([
      { textAlign: "left" },
      { color: "rgba(28, 27, 31, 1)", fontFamily: "System", fontWeight: "400", letterSpacing: 0 },
      { writingDirection: "ltr" },
      { color: "green", fontSize: 30, fontWeight: "bold" },
    ]);
  });
});
