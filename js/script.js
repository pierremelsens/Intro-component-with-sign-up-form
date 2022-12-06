const form = {
    // j'ai besoin que les form soient actifs dès l'affichage de la page
    // je vais donc créer une functionnalité qui va le lancer dès la fin du chargement de la page
    init: function(){
        console.log("début chargement du module de form");
        // ici je veux ajouter des eventListener à tout les boutons
        // et ça dès la fin du chargement de la page
        const FormElement = document.querySelector('#form');
        FormElement.addEventListener("submit", form.handleSubmit);
        const nameElement = document.querySelector('#name');
        FormElement.addEventListener("click", form.handleName);


        // et d'autre eventListener
    },
    /******************** HANDLES ***********************/

    handleSubmit: function(event){
        event.preventDefault();
        console.log("Tu m'a cliqué");

        /* --------------------------------- POUR LE PRENOM --------------------------------- */

        const inputElement = document.querySelector('.form__firstName input');
        const errorMessage = document.querySelector("#nameError");
        const userName = inputElement.value;
        console.log(userName);

        if (userName.length === 0) {
            console.log("pas ok");
            errorMessage.classList.remove('errorText-hidden')
            errorMessage.classList.add('errorText-active');
            inputElement.classList.remove('input');
            inputElement.classList.add('errorBorder');

        } 

         /* --------------------------------- POUR LE NOM --------------------------------- */


        const inputElementLastName = document.querySelector('.form__LastName input');
        const errorMessageLastName = document.querySelector("#lastNameError");
        const userLastName = inputElementLastName.value;
        console.log(userLastName);

        if (userLastName.length === 0) {
            console.log("pas ok");
            errorMessageLastName.classList.remove('errorText-hidden')
            errorMessageLastName.classList.add('errorText-active');
            inputElementLastName.classList.remove('input');
            inputElementLastName.classList.add('errorBorder')  ;

        } 

        /* --------------------------------- POUR L'EMAIL --------------------------------- */


        const inputElementEmail = document.querySelector('.form__email input');
        const errorMessageEmail = document.querySelector("#emailError");
        const erroricon = document.querySelector(".iconError-hidden")
        const userEmail = inputElementEmail.value;
        console.log(userEmail);

 
        if (userEmail.length === 0) {
            console.log("pas ok");
            errorMessageEmail.classList.remove('errorText-hidden')
            errorMessageEmail.classList.add('errorText-active');
            inputElementEmail.classList.remove('input');
            inputElementEmail.classList.add('errorBorder');
        }
        console.log(userEmail.includes("@"))
        if (userEmail.includes("@")){
            console.log(userEmail) 
        }  else {
            errorMessageEmail.classList.remove('errorText-hidden')
            errorMessageEmail.classList.add('errorText-active');
            inputElementEmail.classList.remove('input');
            inputElementEmail.classList.add('errorBorder');
        }


        /* --------------------------------- POUR LE PASSWORD --------------------------------- */

        const inputElementPassword = document.querySelector('.form__password input');
        const errorMessagePassword = document.querySelector("#passwordError");
        const userPassword = inputElementPassword.value;
        console.log(userPassword);

        if (userPassword.length === 0) {
            console.log("pas ok");
            errorMessagePassword.classList.remove('errorText-hidden')
            errorMessagePassword.classList.add('errorText-active');
            inputElementPassword.classList.remove('input');
            inputElementPassword.classList.add('errorBorder')  ;

        } 

// il faut donc attendre que l'évènement de fin de chargement de la page se lance
// * évènement ??? de quel évènement on parle ?
// on va s'abonner à l'évènement "DOMContentLoaded" de document

}
}
document.addEventListener("DOMContentLoaded", form.init)
