import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter
import { Provider } from 'react-redux'; // Redux Provider
import store from '../store/store'; // Redux store
import { GlobalProvider } from '../context/GlobalContext'; // Global context
import App from '../App';

describe('A truthy statement', () => {
  it('should be equal to 2', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('App', () => {
  it('renders the App component', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <GlobalProvider>
            <App />
          </GlobalProvider>
        </Provider>
      </BrowserRouter>
    );

    // DOM'u kontrol etmek için
    screen.debug(); // Konsola App bileşeninin render edilmiş halini yazdırır
  });
});
