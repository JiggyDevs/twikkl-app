import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import Register from '../Register';

const mockPushFn = jest.fn();

jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: mockPushFn
    })
}))

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

    const { getByText, getByPlaceholderText } = render(
        <Register />
    );

    // Assert that the required elements are rendered
    expect(getByText("Create an Account")).toBeTruthy();
    expect(getByPlaceholderText("username")).toBeTruthy();
    expect(getByPlaceholderText("password")).toBeTruthy();
    expect(getByText("I agree to")).toBeTruthy();
    expect(getByText("Terms of Service")).toBeTruthy();
    expect(getByText("and")).toBeTruthy();
    expect(getByText("Privacy Policy")).toBeTruthy();
    expect(getByText("Create Account")).toBeTruthy();
    expect(getByText("Create Account with Google")).toBeTruthy();
    expect(getByText("Do you have a Crypto Wallet?")).toBeTruthy();
    expect(getByText("Connect Wallet")).toBeTruthy();

  });

  it("navigates to '/Home' when the 'Create Account' button is pressed", () => {
    const { getByText } = render(<Register />);
    const createAccountButton = getByText("Create Account");

    fireEvent.press(createAccountButton);

    expect(mockPushFn).toHaveBeenCalledWith("/Home");
  });
});
