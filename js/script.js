
const buttons = document.querySelectorAll('.hotels-filter-button');

document.addEventListener('click', e => {
    const target = e.target;
    if(!target.classList.contains('hotels-filter-button')){
        return;
    }
    buttons.forEach(e => {
        if(e.classList.contains('active')){
           e.classList.remove('active'); 
        }
    })

    target.classList.add('active');
})

