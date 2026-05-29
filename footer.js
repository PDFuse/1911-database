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

function loadArchiveStatsScript() {
    if (!document.querySelector('.stats-grid')) {
        return;
    }

    if (document.getElementById('archive-stats-script')) {
        return;
    }

    var script = document.createElement('script');
    script.id = 'archive-stats-script';
    script.src = './stats.js?v=20260529a';
    document.body.appendChild(script);
}

document.addEventListener('DOMContentLoaded', function() {
    renderSiteFooter();
    loadArchiveStatsScript();
});
