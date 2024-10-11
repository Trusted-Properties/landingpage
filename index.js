function scrollToForm() {
    let e = document.getElementById("review");
    e.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start'
    });
}
