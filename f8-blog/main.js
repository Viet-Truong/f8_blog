// JS MODAL
function jsModal(){
    const rentBtn = document.querySelectorAll('.js-rent')
    const modal = document.querySelector('.js-modal')
    const closeModal = document.querySelector('.js-close-modal')
    const wrapperModal = document.querySelector('.js-wrapper-modal')
    function showModal () {
        modal.classList.add('open');
    };
    function hideModal() {
        modal.classList.remove('open');
    };
    for(const button of rentBtn){
        button.addEventListener('click', showModal)
    };
    closeModal.addEventListener('click', hideModal);
    modal.addEventListener('click', hideModal);
    wrapperModal.addEventListener('click', function(event) {
        event.stopPropagation();
    })
}
jsModal()

// JS NAV
function jsNav() {
    const header = document.querySelector('.js-header');
    const navMobile = document.querySelector('.js-nav-mobile');
    const menuItems = document.querySelectorAll('.navigation ul li a[href*="#"]');
    const heightHeader = header.clientHeight;
    function mobileMenu(){
        const isClosed = header.clientHeight === heightHeader;
        if(isClosed) {
            header.style.height = 'auto';
        }else{
            header.style.height = null;
        }
    }
    navMobile.addEventListener('click', mobileMenu);
    for(var i = 0; i < menuItems.length;  i++){
        const menuItem = menuItems[i];
        function closeMenu(){
            header.style.height = null;
        }
        menuItem.addEventListener('click', closeMenu);
    }
}

jsNav()