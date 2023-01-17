import Navbar from "./Nav";
import { render,  screen } from "@testing-library/react";
import {store} from '../features/store'
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";


describe("Navbar", () => {
    it("will the navigation bar displays all expected links properly", () => {
      render(
        <Provider store={store}>
          <MemoryRouter>
            <Navbar />
          </MemoryRouter>
        </Provider>
      );
  
      expect(screen.getByText(/home/i)).toBeInTheDocument();
      expect(screen.getByText(/add/i)).toBeInTheDocument();
      expect(screen.getByText(/leaderboard/i)).toBeInTheDocument();
      expect(screen.getByText(/logout/i)).toBeInTheDocument();
    });
});
