import { MyTargetsPage } from './app.po';

describe('my-targets App', function() {
  let page: MyTargetsPage;

  beforeEach(() => {
    page = new MyTargetsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
