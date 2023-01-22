(() => {
    const d = document;
    // Selector
    const $btnHamburger = d.querySelector('.btn-hamburger');
    const $navbar = d.querySelector('.main-navbar');
    // Events
    $btnHamburger.addEventListener('click', () =>{
        let btnState = $btnHamburger.getAttribute("aria-expanded");
        $btnHamburger.setAttribute("aria-expanded", btnState === 'true' ? false : true);
    });
    
    d.addEventListener('click', (e) => {
        if(!e.target.matches('.nav-list a')) return false;
        $btnHamburger.setAttribute("aria-expanded", false);
    })

    $navbar.addEventListener('click', function(e){
        if(e.target.matches('li')){
            window.location.href = '#' + e.target.dataset.href;
        }
    })
})(document);