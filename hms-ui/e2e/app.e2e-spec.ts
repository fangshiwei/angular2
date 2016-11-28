import { HmsUiPage } from './app.po';

describe('hms-ui App', function() {
  let page: HmsUiPage;

  beforeEach(() => {
    page = new HmsUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
