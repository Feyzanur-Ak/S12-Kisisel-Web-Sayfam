/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App.jsx"; // App.jsx'in doğru yolu

describe("App Component", () => {
 
  test("renders Header and Footer components", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Header bileşeninde beklediğiniz bir metni kontrol edin
   
    expect(screen.getByText(/header metni veya logo/i)).toBeInTheDocument();

    // Footer bileşeninde beklediğiniz bir metni kontrol edin

    expect(screen.getByText(/footer metni/i)).toBeInTheDocument();
  });


  test("renders MainPage, Skills, Profile, and Projects on the root route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    // Ana sayfa bileşenlerini kontrol et
    expect(screen.getByText(/ana sayfa metni/i)).toBeInTheDocument();
    expect(screen.getByText(/skills metni/i)).toBeInTheDocument();
    expect(screen.getByText(/profile metni/i)).toBeInTheDocument();
    expect(screen.getByText(/projects metni/i)).toBeInTheDocument();
  });

  test("renders ContactPages component on the /contact route", () => {
    render(
      <MemoryRouter initialEntries={["/contact"]}>
        <App />
      </MemoryRouter>
    );

    // İletişim sayfası bileşeninin çalıştığını kontrol et
    expect(screen.getByText(/iletişim sayfası metni/i)).toBeInTheDocument();
  });
});
