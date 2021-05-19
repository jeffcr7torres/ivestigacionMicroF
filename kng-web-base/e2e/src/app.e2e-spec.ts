import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display template header Web Base', () => {
    page.login();

    page.navigateTo();

    expect(page.getTemplateTittle()).toEqual('Web Base');

    expect(page.getTemplateMenu()).toEqual('Menu Principal.');

  });

});
