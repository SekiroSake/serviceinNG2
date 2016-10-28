import { ServicePracPage } from './app.po';

describe('service-prac App', function() {
  let page: ServicePracPage;

  beforeEach(() => {
    page = new ServicePracPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
