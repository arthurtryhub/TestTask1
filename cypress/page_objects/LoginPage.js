const s = {
 
  usernameInp: '[type="text"]',
  passwordInp: '[type="password"]',
  submitBtn: '[type="submit"]',
  warningMsg: '[class="help-block"]'
};


class LoginPage {

  open(){
    cy.visit('/registerlogin/registerlogin.php');
  }

  validateLoginForm(){
    cy.get(s.passwordInp).should('exist')
    cy.get(s.usernameInp).should('exist')
    cy.get(s.submitBtn).should('exist')
  }


  setUsername(email){
    cy.get(s.usernameInp).clear().type(email)
  }
  
  setPassword(password){
    cy.get(s.passwordInp).clear().type(password)
  }
  
  loginBtn(){
    cy.get(s.submitBtn).click()

  }

  validatePasswordErrased(){
    cy.get(s.passwordInp).should('be.empty')
  }

  validatWarningMessageForUsername(message) {
    cy.get(s.usernameInp).parent().find(s.warningMsg).should('have.text', message)
  }

  validatWarningMessageForPassword(message) {
    cy.get(s.passwordInp).parent().find(s.warningMsg).should('have.text', message)
    this.validatePasswordErrased()
  }

  validateInexisningUsername(){
    this.validatWarningMessageForUsername('No account found with that username.')
  }

  validateEmptyUsername(){
    this.validatWarningMessageForUsername('Please enter username.')
  }

  validateEmptyPassword(){
    this.validatWarningMessageForPassword('Please enter your password.')
  }


}
export default new LoginPage();
