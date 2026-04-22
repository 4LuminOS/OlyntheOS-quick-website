document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.feature-toggle').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const expanded = this.getAttribute('aria-expanded') === 'true';
            const content = this.nextElementSibling;
            this.setAttribute('aria-expanded', String(!expanded));
            content.classList.toggle('open', !expanded);
        });
    });
});
