


//Listens for intro animation end
document.addEventListener('animationend', (e) => {
    const bodyElement = document.querySelector('.about-me-heading') as HTMLBodyElement;
    bodyElement.classList.remove('.body-active');
});