var manufacturerProductionBlocks = {
    "colt.html": {
        title: "Colt Serial Number Production Ranges",
        note: "Serial-number ranges identify production blocks only. They do not authenticate a pistol by themselves. Confirm Colt identification with frame markings, slide markings, inspector initials, P proofs, ordnance mark, finish, barrel, small parts, and provenance.",
        columns: ["Year", "Serial Start", "Serial End", "Reported Quantity", "Identification Period", "Status", "Notes"],
        rows: [
            ["1924", "700001", "710000", "10,000", "1924 Transitional", "Produced", "Model of 1911 U.S. Army slide marking may appear with early A1-type features. Verify W.T.G. inspection context, H/G slide marks, HP barrel markings, blue finish, and two-tone magazine details."],
            ["1937", "710001", "711605", "1,605", "Interwar / Early M1911A1", "Produced", "Colt USN / USA block. Verify destination and branch notes against primary references when available."],
            ["1937", "711606", "712349", "744", "Interwar / Early M1911A1", "Produced", "Colt USN block."],
            ["1938", "712350", "713645", "1,296", "Interwar / Early M1911A1", "Produced", "Evaluate R.S. or other period inspection context, blue finish, and early A1 configuration details."],
            ["1939", "713646", "717281", "3,636", "Interwar / Early M1911A1", "Produced", "Colt USN block. Verify branch/destination context with primary references when available."],
            ["1940", "717282", "721977", "4,696", "Pre-war / Early WWII", "Produced", "Review inspection mark, slide legend, finish, barrel, grips, and small parts against exact serial period."],
            ["1941", "721978", "756733", "34,756", "Early WWII Colt", "Produced", "Review W.B. / early wartime inspection context, Colt slide markings, P proofs, ordnance mark, finish, barrel, grips, and small parts."],
            ["1942", "756734", "793657", "36,924", "Early WWII Colt", "Produced", "Colt production block. Confirm by frame/slide markings, inspection mark, P proofs, finish, and parts."],
            ["1942", "793658", "797639", "3,982", "Early WWII Colt / USN", "Produced", "Colt USN block. Verify branch/destination context with primary references when available."],
            ["1942", "797640", "800000", "2,361", "Early WWII Colt", "Produced", "Colt production block."],
            ["1942", "801001", "856100", "55,100", "Early WWII Colt", "Produced", "Colt production block immediately before the Colt/Ithaca duplicated serial-number area."],
            ["1943", "856101", "856404", "304", "Replacement Numbers", "Replacement numbers", "Replacement-number block. Do not treat as ordinary factory production."],
            ["1943", "856101", "958100", "102,000", "Duplicate Range Caution", "Produced / duplicate caution", "Colt production block overlaps the 856405–916404 Ithaca duplicated range. Identify actual maker by markings, not serial number alone."],
            ["1943", "1088726", "1092896", "4,171", "Mid-WWII Colt", "Produced", "Review G.H.D. inspection context, Colt slide/frame markings, P proofs, crossed-cannon ordnance mark, barrel, grips, and finish."],
            ["1943", "1096405", "1208673", "112,269", "Mid-WWII Colt", "Produced", "Review G.H.D. inspection context, Colt slide/frame markings, P proofs, crossed-cannon ordnance mark, barrel, grips, and finish."],
            ["1944", "1609529", "1743846", "134,318", "Mid / Late WWII Colt", "Produced", "Review G.H.D. inspection context, Colt slide/frame markings, P proofs, crossed-cannon ordnance mark, Colt barrel, Coltwood-style grips, and finish."],
            ["1945", "2244804", "2380013", "119,450", "Late WWII Colt", "Produced / verify count", "Late-war Colt assigned block. Reported production count and last-Colt note should be verified before being treated as final. Review J.S.B. where applicable, Colt components, and late-war finish."],
            ["1945", "2368718", "2368718", "—", "Late WWII Colt", "Last reported serial", "Reported last Colt serial. Reference note only; not a production range."]
        ]
    },
    "remington-rand.html": {
        title: "Remington Rand Serial Number Production Ranges",
        note: "Serial-number ranges identify production blocks only. Confirm Remington Rand identification with frame markings, slide type, F.J.A. inspection, P proofs, ordnance mark, finish, barrel, grips, magazine, and rebuild evidence.",
        columns: ["Year", "Serial Start", "Serial End", "Reported Quantity", "Status", "Notes"],
        rows: [
            ["1943", "916405", "1041404", "125,000", "Produced", "Early Remington Rand block. Important for Type 1 / Type 2 slide-marking review and early finish evaluation."],
            ["1943", "1279699", "1441430", "161,732", "Produced", "Remington Rand production block."],
            ["1943", "1471431", "1609528", "138,098", "Produced", "Remington Rand production block."],
            ["1944", "1743847", "1816641", "72,795", "Produced", "Remington Rand 1944 production block."],
            ["1944", "1890504", "2075103", "184,600", "Produced", "Remington Rand 1944 production block."],
            ["1945", "2134404", "2244803", "110,400", "Produced", "Late-war Remington Rand production block."],
            ["1945", "2380014", "2619013", "85,126", "Assigned / partially completed", "Assigned block extends beyond reported completed production. Reported quantity aligns with 2380014–2465139, not the full assigned range."],
            ["1945", "2465139", "2465139", "—", "Last reported serial", "Reported last Remington Rand serial. Reference note only; not a production range."]
        ]
    },
    "ithaca.html": {
        title: "Ithaca Serial Number Production Ranges",
        note: "Serial-number ranges identify production blocks only. Ithaca requires extra care because 856405–916404 is a duplicated / special-review range. Confirm Ithaca identification with F.J.A., Ithaca slide markings, frame markings, ordnance mark, finish, and parts.",
        columns: ["Year", "Serial Start", "Serial End", "Reported Quantity", "Status", "Notes"],
        rows: [
            ["1943", "856405", "916404", "60,000", "Duplicate / special review", "Duplicated range. Do not identify by serial number alone. Confirm Ithaca by F.J.A. inspection mark and Ithaca-specific slide/frame markings."],
            ["1943", "1208674", "1279673", "71,000", "Produced", "Ithaca production block."],
            ["1943", "1279674", "1279698", "25", "Replacement numbers", "Replacement-number block. Do not treat as ordinary Ithaca production."],
            ["1943", "1441431", "1471430", "30,000", "Produced", "Ithaca production block. Start value cleaned to 1441431."],
            ["1944", "1816642", "1890503", "73,862", "Produced / verify count", "Range arithmetic equals 73,862 inclusive. If a source lists 73,682, verify before using that lower count."],
            ["1945", "2075104", "2134403", "59,300", "Produced", "Late-war Ithaca production block."],
            ["1945", "2619014", "2693613", "41,305", "Assigned / partially completed", "Assigned block extends beyond reported completed production. Reported quantity aligns with 2619014–2660318, not the full assigned range."],
            ["1945", "2660318", "2660318", "—", "Last reported serial", "Reported last Ithaca serial. Reference note only; not a production range."]
        ]
    },
    "union-switch-signal.html": {
        title: "Union Switch & Signal Serial Number Production Ranges",
        note: "Serial-number ranges identify the US&S production block only. Because US&S pistols are scarce and valuable, authentication should be conservative and based on serial range, R.C.D. inspection, US&S slide and frame markings, P proofs, finish, barrel, ordnance mark, and rebuild evidence.",
        columns: ["Year", "Serial Start", "Serial End", "Reported Quantity", "Status", "Notes"],
        rows: [
            ["1943", "1041405", "1096404", "55,000", "Produced", "Union Switch & Signal production block. Verify with US&S-specific slide/frame markings and R.C.D. inspection context."]
        ]
    },
    "singer.html": {
        title: "Singer / Assigned Serial Number Production Ranges",
        note: "Singer production was extremely limited. The H&R line is included because it appears in the submitted block table as an assigned block with no accepted production. Authenticate Singer pistols conservatively with markings, finish, inspection, parts, and provenance.",
        columns: ["Year", "Serial Start", "Serial End", "Reported Quantity", "Status", "Notes"],
        rows: [
            ["1941", "S800001", "S800500", "500", "Produced", "Singer contract production. High-value pistols requiring conservative authentication."],
            ["1942", "H800501", "H801000", "0", "Assigned, not produced", "Harrington & Richardson assigned block. Source range was cleaned to H800501–H801000. No accepted production in this block."],
            ["1942", "801001", "856100", "55,100", "Context note", "Colt numeric block included here only to show the post-Singer/H&R serial transition. Primary listing belongs under Colt."]
        ]
    }
};

function getCurrentPageName() {
    var path = window.location.pathname || '';
    return path.substring(path.lastIndexOf('/') + 1) || 'index.html';
}

function renderProductionBlockTable(config) {
    var columns = config.columns || ["Year", "Serial Start", "Serial End", "Reported Quantity", "Status", "Notes"];
    var html = '<div id="combined-production-note" class="warning-box"><strong>Serial Range Caution:</strong> ' + config.note + '</div>';
    html += '<table id="combined-production-table"><thead><tr>';

    columns.forEach(function(column) {
        html += '<th>' + column + '</th>';
    });

    html += '</tr></thead><tbody>';

    config.rows.forEach(function(row) {
        html += '<tr>';
        row.forEach(function(cell) {
            html += '<td>' + cell + '</td>';
        });
        html += '</tr>';
    });

    html += '</tbody></table>';
    return html;
}

function findFirstRangeHeading() {
    return Array.prototype.slice.call(document.querySelectorAll('h2')).find(function(h2) {
        return /Serial Number Range|Serial Number Ranges|Serial Number/.test(h2.textContent);
    });
}

function removeWhatShouldBeSeenSection() {
    var headings = Array.prototype.slice.call(document.querySelectorAll('h2'));

    headings.forEach(function(heading) {
        if (!/^What Should Be Seen/i.test(heading.textContent.trim())) {
            return;
        }

        var node = heading.nextElementSibling;
        var nodesToRemove = [heading];

        while (node && node.tagName && node.tagName.toLowerCase() !== 'h2') {
            var nextNode = node.nextElementSibling;
            nodesToRemove.push(node);
            node = nextNode;
        }

        nodesToRemove.forEach(function(item) {
            if (item && item.parentNode) {
                item.parentNode.removeChild(item);
            }
        });
    });
}

function injectManufacturerProductionBlocks() {
    var pageName = getCurrentPageName();
    var config = manufacturerProductionBlocks[pageName];

    if (!config) {
        return;
    }

    removeWhatShouldBeSeenSection();

    if (document.getElementById('combined-production-table')) {
        return;
    }

    var rangeHeading = findFirstRangeHeading();

    if (!rangeHeading) {
        return;
    }

    rangeHeading.textContent = config.title;

    var next = rangeHeading.nextElementSibling;

    if (next && next.tagName && next.tagName.toLowerCase() === 'table') {
        next.outerHTML = renderProductionBlockTable(config);
        return;
    }

    if (next && next.id === 'cleaned-production-blocks') {
        next.innerHTML = renderProductionBlockTable(config);
        return;
    }

    var wrapper = document.createElement('div');
    wrapper.innerHTML = renderProductionBlockTable(config);
    rangeHeading.parentNode.insertBefore(wrapper, rangeHeading.nextSibling);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectManufacturerProductionBlocks);
} else {
    injectManufacturerProductionBlocks();
}
