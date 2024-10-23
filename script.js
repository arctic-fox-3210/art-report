window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if(window.scrollY > 0){
        header.style.backgroundColor = 'rgba(230, 160, 49, 0.4)';
    }
    else{
        header.style.backgroundColor = '#E6A031';
    }
})
