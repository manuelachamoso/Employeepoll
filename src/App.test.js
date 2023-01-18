import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./features/store";
import { MemoryRouter } from "react-router-dom";
import {setUser} from './reducers/userSlice'


describe("App", () => {
    it("will render the App component properly", () => {
        let view = render(
            <MemoryRouter>
                <Provider store={ store }>
                    <App />
                </Provider>
            </MemoryRouter>
      );
      expect(view).toMatchSnapshot();
    });
  
    it("will show home page when user is logged in correctly", () => {
      store.dispatch(setUser({ id: "zoshikanlu", password: "pass246" }));
      render(
        <MemoryRouter>
                <Provider store={ store }>
                    <App />
                </Provider>
            </MemoryRouter>
      );
      expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });
  });