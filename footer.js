function renderSiteFooter() {
    var footer = document.getElementById('site-footer');

    if (!footer) {
        return;
    }

    footer.innerHTML = `
        <footer>
            <p>U.S. Military M1911 &amp; M1911A1 Database</p>
            <p>Historical collector reference only.</p>
            <p>
                This site is an independent educational and historical reference.
                All information should be independently verified.
            </p>
        </footer>
    `;
}

document.addEventListener('DOMContentLoaded', renderSiteFooter);
