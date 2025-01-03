/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import ContactPages from '../pages/ContactPages';
import store from '../store/store';
import { GlobalProvider } from '../context/GlobalContext';
import '@testing-library/jest-dom'; // Jest-DOM eşlemeleri Vitest'te de çalışır

// API çağrısını mockla
vi.mock('../mocks/api.js', () => ({
  useApi: () => ({
    postToApi: vi.fn(() => Promise.resolve()),
  }),
}));

describe('ContactPages Component', () => {
  const renderComponent = () =>
    render(
      <Provider store={store}>
        <GlobalProvider>
          <ToastContainer />
          <ContactPages />
        </GlobalProvider>
      </Provider>
    );

  it('renders all form fields correctly', () => {
    renderComponent();

    // Form alanlarını kontrol et
    expect(screen.getByLabelText(/İsim|Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Soyisim|Surname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefon|Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Mesaj|Message/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Gönder|Submit/i })).toBeInTheDocument();
  });

  it('allows users to fill out the form', () => {
    renderComponent();

    const nameInput = screen.getByLabelText(/İsim|Name/i);
    const surnameInput = screen.getByLabelText(/Soyisim|Surname/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const phoneInput = screen.getByLabelText(/Telefon|Phone/i);
    const messageTextarea = screen.getByLabelText(/Mesaj|Message/i);

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hello, this is a test message!' } });

    expect(nameInput.value).toBe('John');
    expect(surnameInput.value).toBe('Doe');
    expect(emailInput.value).toBe('john.doe@example.com');
    expect(phoneInput.value).toBe('1234567890');
    expect(messageTextarea.value).toBe('Hello, this is a test message!');
  });

  it('shows an error message when required fields are empty', () => {
    renderComponent();

    const submitButton = screen.getByRole('button', { name: /Gönder|Submit/i });
    fireEvent.click(submitButton);
    

    expect(
      screen.getByText(/All fields are required!|Tüm alanlar zorunludur!/i)
    ).toBeInTheDocument();
    
  });

  it('displays a success toast when the form is submitted successfully', async () => {
    renderComponent();

    vi.mock('../mocks/api.js', () => ({
      useApi: () => ({
        postToApi: vi.fn(() => Promise.resolve({ success: true })),
      }),
    }));

    const nameInput = screen.getByLabelText(/İsim|Name/i);
    const surnameInput = screen.getByLabelText(/Soyisim|Surname/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageTextarea = screen.getByLabelText(/Mesaj|Message/i);
    const submitButton = screen.getByRole('button', { name: /Gönder|Submit/i });

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hello!' } });

    fireEvent.click(submitButton);

    // Başarılı mesajın gösterildiğini kontrol et
    expect(await screen.findByText(/Mesajınız başarıyla gönderildi!/i)).toBeInTheDocument();
  });

  it('displays an error toast when the API call fails', async () => {

    {/*Test sırasında bir modülü taklit etmek için kullanılır.Burada, ../mocks/api.js modülü mocklanarak, useApi hook'unun bir simülasyonu oluşturulmuştur. */}
    vi.mock('../mocks/api.js', () => ({
      useApi: () => ({
        postToApi: vi.fn(() => Promise.reject(new Error('API Error'))),
      }),
    }));

    renderComponent();

    const nameInput = screen.getByLabelText(/İsim|Name/i);
    const surnameInput = screen.getByLabelText(/Soyisim|Surname/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const messageTextarea = screen.getByLabelText(/Mesaj|Message/i);
    const submitButton = screen.getByRole('button', { name: /Gönder|Submit/i });

    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(surnameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Hello!' } });

    fireEvent.click(submitButton);

    // Başarısız mesajın gösterildiğini kontrol et
    expect(await screen.findByText(/Mesaj gönderimi sırasında bir hata oluştu./i)).toBeInTheDocument();
  });
});
