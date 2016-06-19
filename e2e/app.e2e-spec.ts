import { NgupgradePage } from './app.po';

describe('ngupgrade App', function() {
  let page: NgupgradePage;

  beforeEach(() => {
    page = new NgupgradePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
