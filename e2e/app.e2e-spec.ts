import { CapstonePortalPage } from './app.po';

describe('capstone-portal App', function() {
  let page: CapstonePortalPage;

  beforeEach(() => {
    page = new CapstonePortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
