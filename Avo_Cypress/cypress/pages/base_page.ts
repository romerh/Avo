export class base{


  elements = {
    addedToCartmsg: ()=> cy.contains('In cart'),
    }

    navigate(url: string){
        cy.visit(url)
    }

    randomText() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
        for (var i = 0; i < 10; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }

}