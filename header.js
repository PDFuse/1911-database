function getBasePath() {
    var path = window.location.pathname;
    return path.includes('/pistols/') ? '../' : '';
}

function loadMobileStylesheet() {
    var base = getBasePath();

    if (!document.getElementById('mobile-stylesheet')) {
        var link = document.createElement('link');
        link.id = 'mobile-stylesheet';
        link.rel = 'stylesheet';
        link.href = base + 'mobile.css';
        document.head.appendChild(link);
    }
}

function renderSiteHeader() {
    var base = getBasePath();
    var header = document.getElementById('site-header');

    if (!header) {
        return;
    }

    header.innerHTML = `
        <header>
            <h1>U.S. Military M1911 &amp; M1911A1 Database</h1>
            <p>Independent historical and collector reference resource.</p>
        </header>

        <nav>
            <a href="${base}index.html">Home</a>
            <a href="${base}colt.html">Colt</a>
            <a href="${base}ithaca.html">Ithaca</a>
            <a href="${base}remington-rand.html">Remington Rand</a>
            <a href="${base}union-switch-signal.html">US&amp;S</a>
            <a href="${base}singer.html">Singer</a>
            <a href="${base}inspectors.html">Inspectors</a>
            <a href="${base}arsenal-rebuilds.html">Arsenal Rebuilds</a>
            <a href="${base}contracts.html">Contracts</a>
            <a href="${base}collector-guide.html">Collector Guide</a>
            <a href="${base}colt-correct-features.html">Correct Features</a>
            <a href="${base}colt-markings-gallery.html">Photo Galleries</a>
        </nav>
    `;
}

document.addEventListener('DOMContentLoaded', function() {
    loadMobileStylesheet();
    renderSiteHeader();
});