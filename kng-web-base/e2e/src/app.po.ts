import { browser, by, element, protractor } from 'protractor';

export class AppPage {

  login() {
    browser.waitForAngularEnabled(false);

    browser.get(browser.baseUrl);

    browser.driver.sleep(500);

    element(by.css('#username')).sendKeys('smxadmin');
    element(by.css('#password')).sendKeys('Password01');
    element(by.css('#kc-login')).click();
  }

  navigateTo() {
    return browser.get('/');
  }

  getTemplateTittle() {
    browser.waitForAngular();
    browser.driver.sleep(2000);

    return element(by.css('app-root header .header-app span')).getText();
  }

  getTemplateMenu() {
    return element(by.css('app-root div .container-fluid')).getText();
  }

}
