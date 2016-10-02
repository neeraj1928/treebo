import { TreeboPage } from './app.po';

describe('treebo App', function() {
  let page: TreeboPage;

  beforeEach(() => {
    page = new TreeboPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
