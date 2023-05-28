import React from 'react';
import { NavigationContainer, LinkingOptions } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';

import Register from '../Register';

const mockUseRouter = jest.fn()
jest.mock('expo-router', () => ({
    useRouter: () => ({
        push: jest.fn()
    })
}))


xdescribe('Register component', () => {
  it('renders correctly', () => {

    const { getByText, getByPlaceholderText } = render(
        <Register />
    );

    const createAccountButton = getByText('Create Account');
    const connectWalletLink = getByText('Connect Wallet');
    const usernameInput = getByPlaceholderText('username');
    const passwordInput = getByPlaceholderText('password');

    expect(createAccountButton).toBeDefined();
    expect(connectWalletLink).toBeDefined();
    expect(usernameInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  // Add more test cases as needed...
});
