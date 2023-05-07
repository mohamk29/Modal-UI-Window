'use strict';

// Store all the index.html elemtnts in variable to reduce redunduncy
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//multiple buttons use this class so use querySelectorAll
const btnOpenModal = document.querySelectorAll('.show-modal');

//opens the modal
const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

//loop through and make all the buttons responsive
for(let i = 0 ; i < btnOpenModal.length; i++){
    //when 'Show Modal 1/2/3' button is clicked
    btnOpenModal[i].addEventListener('click', openModal);
}

//close the modal
const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

//when crossed button is clicked close the button
btnCloseModal.addEventListener('click', closeModal);

//when background is clicked to close the modal
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e){
    //check if the hidden peoperty of the modal is not active
    if(e.key === 'Escape' && modal.classList.contains('hidden') === false){
        closeModal();
    }
});


