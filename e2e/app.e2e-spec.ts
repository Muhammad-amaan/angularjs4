import { AowPage } from './app.po';

describe('aow App', () => {
  let page: AowPage;

  beforeEach(() => {
    page = new AowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
