import LoginPage from '../page_objects/LoginPage';
import {getUserData} from '../support/dataGenerators';

describe('Login page', () => {
  let artistData = getUserData();
  it('Validate login Form', () => {
    LoginPage.open()
    LoginPage.validateLoginForm()
  })

  it('Sent empty form', () => {
    LoginPage.open()
    LoginPage.loginBtn()
    LoginPage.validateEmptyUsername()
    LoginPage.validateEmptyPassword()
    LoginPage.validateLoginForm()

  })

  it('Login with inexisting Username', () => {
    LoginPage.open()
    LoginPage.setUsername(artistData.username)
    LoginPage.setPassword(artistData.password)
    LoginPage.loginBtn()
    LoginPage.validateInexisningUsername()
  })

  // it('Login with incorrect Password', () => {
  //   LoginPage.open()
  //   LoginPage.setUsername(Cypress.env('username'))
  //   LoginPage.setPassword(artistData.password)
  //   LoginPage.loginBtn()
  //   LoginPage.validateInexisningUsername()
  // })

  // it('Login succes', () => {
  //   LoginPage.open()
  //   LoginPage.setUsername(Cypress.env('username'))
  //   LoginPage.setPassword(Cypress.env('password'))
  //   LoginPage.loginBtn()
  // })
})