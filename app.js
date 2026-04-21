function toggleCard(card) {
    card.classList.toggle('expanded');
    const isExpanded = card.classList.contains('expanded');
    card.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
}

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card[onclick]');
    cards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.setAttribute('role', 'button');
        card.setAttribute('aria-expanded', 'false');
        card.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCard(this);
            }
        });
    });
});
