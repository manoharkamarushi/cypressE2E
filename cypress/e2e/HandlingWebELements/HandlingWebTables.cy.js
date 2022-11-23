describe('tests handle webtable elements',()=>{

    it('gets table details',()=>{
        cy.visit('https://money.rediff.com/indices/bse/bse100');
        //total rows
        cy.get('.index-data-wrapper table.dataTable tbody tr').should('have.length','100')

        //total cols
        cy.get('.index-data-wrapper table.dataTable tbody tr:first-child td').should('have.length','6')

        //get first row column values
        cy.get('.index-data-wrapper table.dataTable tbody tr').eq(0).within(()=>{

            cy.get('td').then((element)=>{
                cy.log(element.text())
            })

            cy.get('td').eq('0').should('contains.text','ACC Ltd.')
        })

        //validate data for a given company
        cy.get('.index-data-wrapper table.dataTable').contains('Adani Total Gas Ltd.').parent().parent().within(()=>{
            cy.get('td').eq(2).then((element)=>{
                cy.log("current price: "+element.text());
            })
        })

        //get all table data
        cy.get('.index-data-wrapper table.dataTable tbody tr').each((rows)=>{

            cy.wrap(rows).within(()=>{
                cy.get('td').each((data)=>{
                    cy.log(data.text());
                })
            })
        })

    })
})