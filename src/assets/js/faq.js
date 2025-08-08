const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));

for (const item of faqItems) {
    const onClick = (e) => {
        if (e.target.closest('a')) return;

        item.classList.toggle('active');
    }

    item.addEventListener('click', onClick);
}
