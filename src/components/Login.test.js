/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/render-result-naming-convention */
import Login from "./Login";
import { render, fireEvent, screen } from "@testing-library/react";
import store from '../features/store'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import Dashboard from "./Dashboard";


describe("testing DOM", () => {
    it("Login", () => {
      let component = render(
        <MemoryRouter>
          <Provider store={store}>
            <Login />
  
            <Dashboard></Dashboard>
          </Provider>
        </MemoryRouter>
      );
      // eslint-disable-next-line testing-library/no-node-access
      let userid = component.getByTestId("un").querySelector("input");
      fireEvent.change(userid, { target: { value: "tylermcginnis" } });
      // eslint-disable-next-line testing-library/no-node-access
      let password = component.getByTestId("pa").querySelector("input");
      fireEvent.change(password, { target: { value: "abc321" } });
      let submitButtom = component.getByRole("button");
      fireEvent.click(submitButtom);
    });
  });