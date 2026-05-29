var manufacturerProductionBlocks = {
    "colt.html": {
        title: "Cleaned Colt Production Block Comparison",
        note: "This table compares the submitted production-block information against the Colt manufacturer page. Serial number blocks are a starting point only; identification must still be confirmed by markings, inspection stamps, proofs, finish, parts, and provenance.",
        rows: [
            ["1924", "700001", "710000", "10,000", "Produced", "1924 transitional production group delivered to Springfield Armory; important bridge between M1911 and M1911A1 features."],
            ["1937", "710001", "711605", "1,605", "Produced", "Colt USN / USA block as submitted; verify destination notes against primary references."],
            ["1937", "711606", "712349", "744", "Produced", "Colt USN block as submitted."],
            ["1938", "712350", "713645", "1,296", "Produced", "Colt production block as submitted."],
            ["1939", "713646", "717281", "3,636", "Produced", "Colt USN block as submitted."],
            ["1940", "717282", "721977", "4,696", "Produced", "Colt production block as submitted."],
            ["1941", "721978", "756733", "34,756", "Produced", "Early WWII Colt production block."],
            ["1942", "756734", "793657", "36,924", "Produced", "Colt production block."],
            ["1942", "793658", "797639", "3,982", "Produced", "Colt USN block as submitted."],
            ["1942", "797640", "800000", "2,361", "Produced", "Colt production block."],
            ["1942", "801001", "856100", "55,100", "Produced", "Colt block before the duplicated / special-review Ithaca range."],
            ["1943", "856101", "958100", "102,000", "Produced / caution", "Submitted Colt block overlaps the 856405–916404 Ithaca duplicated range. Use this as a serial-block reference only; markings decide the actual maker."],
            ["1943", "856101", "856404", "304", "Replacement numbers", "Replacement-number block; do not treat as ordinary manufacturer production."],
            ["1943", "1088726", "1092896", "4,171", "Produced", "Colt production block as submitted."],
            ["1943", "1096405", "1208673", "112,269", "Produced", "Colt production block."],
            ["1944", "1609529", "1743846", "134,318", "Produced", "Colt 1944 production block."],
            ["1945", "2244804", "2380013", "119,450", "Produced / caution", "Submitted production count and listed last Colt serial require caution. Last Colt note submitted as 2368718; keep both values until verified."],
            ["1945", "2368718", "2368718", "—", "Last reported note", "Submitted note: last Colt. Treat as a last-reported serial note, not a separate production range."]
        ]
    },
    "remington-rand.html": {
        title: "Cleaned Remington Rand Production Block Comparison",
        note: "This table adds the submitted block quantities and status notes to the Remington Rand page. Some late-war assigned ranges were not fully completed; last-reported serial notes should not be treated as separate production ranges.",
        rows: [
            ["1943", "916405", "1041404", "125,000", "Produced", "Early Remington Rand block; verify slide marking type, F.J.A., finish, and component configuration."],
            ["1943", "1279699", "1441430", "161,732", "Produced", "Remington Rand production block."],
            ["1943", "1471431", "1609528", "138,098", "Produced", "Remington Rand production block."],
            ["1944", "1743847", "1816641", "72,795", "Produced", "Remington Rand 1944 production block."],
            ["1944", "1890504", "2075103", "184,600", "Produced", "Remington Rand 1944 production block."],
            ["1945", "2134404", "2244803", "110,400", "Produced", "Late-war Remington Rand block."],
            ["1945", "2380014", "2619013", "85,126", "Assigned / partially completed", "Submitted assigned range with last reported Remington Rand serial 2465139. The reported production count aligns with 2380014–2465139, not the entire assigned range."],
            ["1945", "2465139", "2465139", "—", "Last reported note", "Submitted note: last Remington Rand. Treat as a last-reported serial note, not a separate production block."]
        ]
    },
    "ithaca.html": {
        title: "Cleaned Ithaca Production Block Comparison",
        note: "This table adds the submitted block quantities and special warnings. Ithaca requires extra care because the 856405–916404 block is a duplicate / special-review range.",
        rows: [
            ["1943", "856405", "916404", "60,000", "Duplicate / special review", "Ithaca duplicated this range. Confirm Ithaca by F.J.A. inspection mark, Ithaca slide marking, frame markings, finish, ordnance stamp, and parts."],
            ["1943", "1208674", "1279673", "71,000", "Produced", "Ithaca production block."],
            ["1943", "1279674", "1279698", "25", "Replacement numbers", "Replacement-number block; do not treat as normal Ithaca production."],
            ["1943", "1441431", "1471430", "30,000", "Produced", "Ithaca production block. This corrects the commonly mistyped start value 1441131."],
            ["1944", "1816642", "1890503", "73,862", "Produced", "Submitted range arithmetic equals 73,862 inclusive; submitted quantity listed 73,682, so quantity should be verified."],
            ["1945", "2075104", "2134403", "59,300", "Produced", "Late-war Ithaca block."],
            ["1945", "2619014", "2693613", "41,305", "Assigned / partially completed", "Submitted assigned range with last reported Ithaca serial 2660318. The reported production count aligns with 2619014–2660318, not the entire assigned range."],
            ["1945", "2660318", "2660318", "—", "Last reported note", "Submitted note: last Ithaca. Treat as a last-reported serial note, not a separate production block."]
        ]
    },
    "union-switch-signal.html": {
        title: "Cleaned Union Switch & Signal Production Block Comparison",
        note: "This table adds the submitted US&S production block. US&S pistols are scarce and should be authenticated conservatively using serial range, R.C.D. inspection, US&S slide/frame markings, finish, barrel, and rebuild evidence.",
        rows: [
            ["1943", "1041405", "1096404", "55,000", "Produced", "Union Switch & Signal production block as submitted. Verify by US&S frame and slide markings, R.C.D. inspection, P proofs, finish, and ordnance mark."]
        ]
    },
    "singer.html": {
        title: "Cleaned Singer / Assigned Block Comparison",
        note: "This table adds the submitted Singer production block and the adjacent H&R assigned block note. H&R was assigned a block but produced no accepted pistols in that block.",
        rows: [
            ["1941", "S800001", "S800500", "500", "Produced", "Singer contract production. Authenticate conservatively due to high collector value."],
            ["1942", "H800501", "H801000", "0", "Assigned, not produced", "Submitted range appears to contain a typo as H800501–H800100. Cleaned here as H800501–H801000; H&R assigned block, no accepted production."],
            ["1942", "801001", "856100", "55,100", "Context note", "This numeric block belongs on Colt production context, but is included here to show the post-Singer/H&R serial transition in the submitted table."]
        ]
    }
};

function getCurrentPageName() {
    var path = window.location.pathname || '';
    return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

function renderProductionBlockTable(config) {
    var html = '<h2>' + config.title + '</h2>';
    html += '<div class="warning-box"><strong>Serial Block Caution:</strong> ' + config.note + '</div>';
    html += '<table><thead><tr><th>Year</th><th>Serial Start</th><th>Serial End</th><th>Reported Quantity</th><th>Status</th><th>Notes</th></tr></thead><tbody>';

    config.rows.forEach(function(row) {
        html += '<tr>' +
            '<td>' + row[0] + '</td>' +
            '<td>' + row[1] + '</td>' +
            '<td>' + row[2] + '</td>' +
            '<td>' + row[3] + '</td>' +
            '<td>' + row[4] + '</td>' +
            '<td>' + row[5] + '</td>' +
        '</tr>';
    });

    html += '</tbody></table>';
    return html;
}

function injectManufacturerProductionBlocks() {
    var pageName = getCurrentPageName();
    var config = manufacturerProductionBlocks[pageName];

    if (!config || document.getElementById('cleaned-production-blocks')) {
        return;
    }

    var container = document.createElement('section');
    container.id = 'cleaned-production-blocks';
    container.innerHTML = renderProductionBlockTable(config);

    var firstRangeHeading = Array.prototype.slice.call(document.querySelectorAll('h2')).find(function(h2) {
        return /Serial Number Range|Serial Number Ranges|Serial Number/.test(h2.textContent);
    });

    if (firstRangeHeading && firstRangeHeading.parentNode) {
        firstRangeHeading.parentNode.insertBefore(container, firstRangeHeading);
    } else {
        var footer = document.getElementById('site-footer');
        if (footer && footer.parentNode) {
            footer.parentNode.insertBefore(container, footer);
        } else {
            document.body.appendChild(container);
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectManufacturerProductionBlocks);
} else {
    injectManufacturerProductionBlocks();
}
