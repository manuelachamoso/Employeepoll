import Login from "./Login";
import { render, fireEvent, screen } from "@testing-library/react";
import {store} from '../features/store'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";

describe("Login", () => {
   it("Will throw an error message if the password is not sent", async () => {
        let view = render(
            <MemoryRouter>
                <Provider store={ store }>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        await expect(view).toMatchSnapshot();
        
      var user = screen.getByTestId("username");
      fireEvent.change(user, { target: { value: "sarahedo" } });
      var submitButton = screen.getByTestId("submit");
      fireEvent.click(submitButton);
      expect(
        screen.getByText(/Error! Incorrect Username or password./i)
      ).toBeInTheDocument();
    });
});

    it("will verify that a user name field, password field, and submit button are present on the page", () => {
        render(
          <Provider store={store}>
            <MemoryRouter>
              <Login />
            </MemoryRouter>
          </Provider>
        );
    
        expect(screen.getByTestId(/username/i)).toBeInTheDocument();
        expect(screen.getByTestId(/password/i)).toBeInTheDocument();
        expect(screen.getByTestId(/submit/i)).toBeInTheDocument();
      });
