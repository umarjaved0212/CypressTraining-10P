describe('practice spec', () => {
  it('It Should Login to Application', () => {
   let email = 'cypresstest'+ Math.random() + '@yopmail.com'
  cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account')
  cy.url().should('eq',"http://automationpractice.com/index.php?controller=authentication&back=my-account")
  cy.get('#email_create').type(email)
  cy.get('#SubmitCreate').click()
  cy.wait(5000)
  cy.get('#account-creation_form').should('be.visible')
  cy.wait(2000)
  cy.get('[id="noSlide"] .page-heading').contains('Create an account')
  cy.get('#id_gender1').click()
  cy.get('#customer_firstname').type("Test")
  cy.get('#customer_lastname').type("Test")
  cy.get('#email').clear()
  cy.get('#email').type(email)
  cy.wait(2000)
  cy.get('#passwd').type("Test@123")
  cy.get('#days').select("19")
  cy.wait(2000)
  cy.get('#months').select("3")
  cy.wait(2000)
  cy.get('#years').select("1993")
  cy.get('#company').type("Test")
  
  cy.get('#address1').type("Test 123")
  
  cy.get('#address2').type("Test2 123")
  
  cy.get('#city').type("ISB")
  
  cy.get('#id_state').select("Alaska")
  
  cy.get('#postcode').type("39000")
  
  cy.get('#id_country').select("United States")
  cy.wait(2000)
  cy.get('#other').type("test")
  cy.wait(2000)
  cy.get('#phone_mobile').type("31452222")
  cy.wait(2000)
  cy.get('#alias').type("alais")
  cy.wait(2000)
  cy.get('#submitAccount > span').click()
  cy.wait(2000)
  cy.get('.info-account').contains('Welcome to your account. Here you can manage all of your personal information and orders.')
  
 
  })

})