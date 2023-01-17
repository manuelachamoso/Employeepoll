import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../features/store'
import Leaderboard from '../components/Leaderboard'


describe('Leaderboard', () => {
  it("will verify that the leaderboard is displaying the correct user name, number of questions asked, and number of questions answered", () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );
  
    expect(screen.getByTestId(/leaderboardscore/i)).toBeInTheDocument();
  });
})
 
