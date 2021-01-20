const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.content');

about.addEventListener('click', e => {
    const id = e.target.dataset.id;

    if(id) {
        btns.forEach(btn => {
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        contents.forEach(content => {
            content.classList.remove('active');
            const article = document.getElementById(id);
            article.classList.add('active')
        });
    }
    
    
})