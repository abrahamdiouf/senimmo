function openModal(imageUrl){
    let modal=document.getElementById('myModal');
    let modalImg=document.getElementById('modalImage');

    modal.style.display="block";
    modalImg.src=imageUrl;
}

function closeModal(){
    let modal=document.getElementById('myModal');
    modal.style.display="none";

}




let formulaire=document.getElementById('monFormulaire');

formulaire.addEventListener('submit',function(event){
    event.preventDefault();

    let nom=document.getElementById('nom').value;
    let prenom=document.getElementById('prenom').value;
    let tel=document.getElementById('tel').value;
    let email=document.getElementById('email').value;
    let message=document.getElementById('message').value;

    if(nom===''|| prenom===''|| tel===''|| email===''|| message===''){
        alert('veillez remplir ce champs');
    }else{
        alert('envoyer avec succes');

    }

})