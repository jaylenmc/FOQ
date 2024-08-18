const questionContainer = document.querySelectorAll('.foq__questions');
const questions = document.querySelector('.question');
const answer = document.querySelector('.answer');

// questionContainer.addEventListener('click', function(e) {
//     if(e.target.matches('.question')) {
//         e.target.classList.toggle('active');
//         e.target.nextElementSibling.classList.toggle('active');
//     }
// })

questionContainer.forEach(container => {
    container.addEventListener('click', function(e) {
        if(e.target.matches('.question')) {
            e.target.classList.toggle('active');
            e.target.nextElementSibling.classList.toggle('active');
        }
    })
})