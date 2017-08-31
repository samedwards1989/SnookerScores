import { SnookerScoresPage } from './app.po';

describe('snooker-scores App', () => {
  let page: SnookerScoresPage;

  beforeEach(() => {
    page = new SnookerScoresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
