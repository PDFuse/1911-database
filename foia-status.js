var foiaStatusRecords = {
    "120040": {
        title: "LDAC / DoD Small Arms Registry FOIA Response",
        status: "No responsive records located",
        submitted: "Prior LDAC request",
        response: "LDAC reported that no responsive records were located after a good-faith search of the records system searched.",
        note: "A no-records response does not prove or disprove authenticity, originality, or U.S. service history. It means responsive records were not located in the records searched. The DoD Small Arms/Light Weapons Registry began in 1975, so older M1911/M1911A1 pistols may not appear in registry data."
    },
    "1261933": {
        title: "LDAC / DoD Small Arms Registry FOIA Status",
        status: "Request submitted / response pending",
        submitted: "Submitted 28 May 2026",
        response: "Pending",
        note: "Submitted as part of a DoD Small Arms/Light Weapons Registry FOIA request. No personal requester information, address, email, or tracking number is published in this database record."
    },
    "1935389": {
        title: "LDAC / DoD Small Arms Registry FOIA Status",
        status: "Request submitted / response pending",
        submitted: "Submitted 28 May 2026",
        response: "Pending",
        note: "Submitted as part of a DoD Small Arms/Light Weapons Registry FOIA request. No personal requester information, address, email, or tracking number is published in this database record."
    },
    "2121722": {
        title: "LDAC / DoD Small Arms Registry FOIA Status",
        status: "Request submitted / response pending",
        submitted: "Submitted 28 May 2026",
        response: "Pending",
        note: "Submitted as part of a DoD Small Arms/Light Weapons Registry FOIA request. No personal requester information, address, email, or tracking number is published in this database record."
    },
    "2335201": {
        title: "LDAC / DoD Small Arms Registry FOIA Status",
        status: "Request submitted / response pending",
        submitted: "Submitted 28 May 2026",
        response: "Pending",
        note: "Submitted as part of a DoD Small Arms/Light Weapons Registry FOIA request. No personal requester information, address, email, or tracking number is published in this database record."
    }
};

function getSerialFromPage() {
    var heading = document.querySelector('h1');
    var titleText = (heading ? heading.textContent : document.title) || '';
    var match = titleText.match(/(?:Serial Number|Serial No\.?|No\.?)\s*(\d{3,})/i);

    if (match && match[1]) {
        return match[1];
    }

    var pathMatch = window.location.pathname.match(/\/(\d{3,})\.html$/);
    return pathMatch ? pathMatch[1] : '';
}

function injectFoiaStatusCard() {
    var serial = getSerialFromPage();
    var record = foiaStatusRecords[serial];
    var main = document.querySelector('main.record');

    if (!record || !main || document.getElementById('foia-status-card')) {
        return;
    }

    var section = document.createElement('section');
    section.id = 'foia-status-card';
    section.className = 'card note';
    section.innerHTML = '<h2>FOIA / Registry Research Status</h2>' +
        '<p><strong>Status:</strong> ' + record.status + '</p>' +
        '<p><strong>Submitted:</strong> ' + record.submitted + '</p>' +
        '<p><strong>Response:</strong> ' + record.response + '</p>' +
        '<p>' + record.note + '</p>';

    var researchHeading = Array.prototype.slice.call(main.querySelectorAll('h2')).find(function(h2) {
        return h2.textContent.trim() === 'Research Notes';
    });

    if (researchHeading) {
        main.insertBefore(section, researchHeading);
    } else {
        main.appendChild(section);
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFoiaStatusCard);
} else {
    injectFoiaStatusCard();
}
