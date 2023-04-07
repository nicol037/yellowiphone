it('yellowiphone', ()=>{
    cy.visit('www.youtube.com')
    cy.xpath('//input[contains(@id,"search")]').type("mhkb")
    cy.xpath('//button[contains(@id,"search-icon-legacy")]').click()
    
})

