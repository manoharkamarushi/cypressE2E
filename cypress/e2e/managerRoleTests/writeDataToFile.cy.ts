describe('write data to file',()=>{

    it('write data to txt file',()=>{

        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/manager/list')
        cy.xpath('//table/tbody').each(row=>{
                cy.writeFile('cypress/fixtures/users.txt',row.text());
        })
    })
})