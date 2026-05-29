function renderSiteFooter() {
    var footer = document.getElementById('site-footer');

    if (!footer) {
        return;
    }

    footer.innerHTML = `
        <footer>
            <p>U.S. Military M1911 &amp; M1911A1 Database</p>
            <div class="footer-live-stats" style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin:10px 0;color:#d8b86a;font-weight:800;">
                <span><span id="footer-stat-records">Loading</span> documented records</span>
                <span>•</span>
                <span><span id="footer-stat-cmp">Loading</span> CMP examples</span>
                <span>•</span>
                <span><span id="footer-stat-provenance">Loading</span> provenance examples</span>
            </div>
            <p>Historical collector reference only.</p>
            <p>
                This site is an independent educational and historical reference.
                All information should be independently verified.
            </p>
        </footer>
    `;
}

function getRootPrefix() {
    var path = window.location.pathname || '';
    return path.indexOf('/pistols/') !== -1 ? '../' : './';
}

function loadScriptOnce(id, src, callback) {
    var existing = document.getElementById(id);

    if (existing) {
        if (callback) {
            callback();
        }
        return;
    }

    var script = document.createElement('script');
    script.id = id;
    script.src = src;

    if (callback) {
        script.onload = callback;
    }

    document.body.appendChild(script);
}

function loadArchiveStatsScript() {
    if (!document.getElementById('site-footer') && !document.querySelector('.stats-grid')) {
        return;
    }

    var rootPrefix = getRootPrefix();

    function loadStats() {
        loadScriptOnce('archive-stats-script', rootPrefix + 'stats.js?v=20260529b');
    }

    if (typeof individualRecordPages === 'undefined') {
        loadScriptOnce('archive-search-script-for-stats', rootPrefix + 'script.js?v=20260529g', loadStats);
    } else {
        loadStats();
    }
}

function loadFoiaStatusScript() {
    var path = window.location.pathname || '';

    if (path.indexOf('/pistols/') === -1) {
        return;
    }

    loadScriptOnce('foia-status-script', '../foia-status.js?v=20260529a');
}

function loadProductionBlocksScript() {
    var page = (window.location.pathname || '').split('/').pop();
    var manufacturerPages = ['colt.html', 'remington-rand.html', 'ithaca.html', 'union-switch-signal.html', 'singer.html'];

    if (manufacturerPages.indexOf(page) === -1) {
        return;
    }

    loadScriptOnce('production-blocks-script', './production-blocks.js?v=20260529b');
}

function loadExtraIndividualRecordsScript() {
    loadScriptOnce('individual-records-extra-script', getRootPrefix() + 'individual-records-extra.js?v=20260529a');
}

document.addEventListener('DOMContentLoaded', function() {
    renderSiteFooter();
    loadArchiveStatsScript();
    loadFoiaStatusScript();
    loadProductionBlocksScript();
    loadExtraIndividualRecordsScript();
});