import { ComicsPage } from './app.po';

describe('comics App', () => {
  let page: ComicsPage;

  beforeEach(() => {
    page = new ComicsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
