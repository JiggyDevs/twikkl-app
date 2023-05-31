import React from "react";
import { render } from "@testing-library/react-native";
import Wallet from "../Wallet";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
      t: (key: string) => key
  })
}));

describe("Wallet", () => {
  test("renders wallet text", () => {
    const { getByText } = render(<Wallet />);
    const walletText = getByText("wallet.title");
    expect(walletText).toBeTruthy();
  });

  test("has correct styles", () => {
    const { getByText } = render(<Wallet />);
    const walletText = getByText("wallet.title");
    expect(walletText.props.style).toEqual([
      { textAlign: "left" },
      { color: "rgba(28, 27, 31, 1)", fontFamily: "System", fontWeight: "400", letterSpacing: 0 },
      { writingDirection: "ltr" },
      { color: "green", fontSize: 30, fontWeight: "bold" },
    ]);
  });
});
