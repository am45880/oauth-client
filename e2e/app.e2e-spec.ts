import { OauthClientPage } from './app.po';

describe('oauth-client App', () => {
  let page: OauthClientPage;

  beforeEach(() => {
    page = new OauthClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
