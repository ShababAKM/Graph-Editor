import { GraphPage } from './app.po';

describe('graph App', function() {
  let page: GraphPage;

  beforeEach(() => {
    page = new GraphPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
