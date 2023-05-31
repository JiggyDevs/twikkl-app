import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';

import Register from '../Register';

const mockPushFn = jest.fn();

jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: mockPushFn
    })
}))

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
      t: (key: string) => key
  })
}));

// There is a bug in the KeyboardAwareScrollView library that causes the test to fail.
// Simplest workaround is to mock the library.
// See:
// https://github.com/APSL/react-native-keyboard-aware-scroll-view/issues/493
// Consider using the built in KeyboardAvoidingView, and ScrollView from React Native
jest.mock('react-native-keyboard-aware-scroll-view', () => {
  return {
    KeyboardAwareScrollView: jest.fn().mockImplementation(({ children }) => children)
  }
});

describe('Register component', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {

    const { getByText, getAllByText, getByPlaceholderText } = render(
        <Register />
    );

    // Assert that the required elements are rendered
    const createAccountEls = getAllByText("register.createAccount");
    expect(createAccountEls.length).toBe(2);
    expect(getByPlaceholderText("username")).toBeTruthy();
    expect(getByPlaceholderText("password")).toBeTruthy();
    expect(getByText("register.agree")).toBeTruthy();
    expect(getByText("register.terms")).toBeTruthy();
    expect(getByText("register.and")).toBeTruthy();
    expect(getByText("register.privacy")).toBeTruthy();
    expect(getByText("register.createWithGoogle")).toBeTruthy();
    expect(getByText("register.doYouHaveAWallet")).toBeTruthy();
    expect(getByText("register.connectWallet")).toBeTruthy();

  });

  it("navigates to '/Home' when the 'Create Account' button is pressed", () => {
    const { getByRole } = render(<Register />);

    const createAccountButton = getByRole("button", { name: "register.createAccount" });

    fireEvent.press(createAccountButton);

    expect(mockPushFn).toHaveBeenCalledWith("/Home");
  });
});
