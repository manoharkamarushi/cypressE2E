class CustomerPage{

    navigateToCustomers():void{
        cy.contains('Customers').click()

    }
    deleteAllCustomers():void{
        cy.xpath('//button[.="Delete"]').each(($el)=>{
            $el.click()
        })
    }

}
export default new CustomerPage();