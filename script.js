function getManufacturerPage(manufacturer) {
    var pages = {
        "Colt": "colt.html",
        "Springfield Armory": "springfield.html",
        "Ithaca": "ithaca.html",
        "Remington Rand": "remington-rand.html",
        "Union Switch & Signal": "union-switch-signal.html",
        "Singer": "singer.html"
    };

    return pages[manufacturer] || "index.html";
}

var individualRecordPages = {
    "1": "pistols/1.html",
    "2": "pistols/2.html",
    "3": "pistols/3.html",
    "42": "pistols/42.html",
    "44": "pistols/44.html",
    "501": "pistols/501.html",
    "538": "pistols/538.html",
    "5461": "pistols/5461.html",
    "16743": "pistols/16743.html",
    "120040": "pistols/120040.html",
    "369379": "pistols/369379.html",
    "388733": "pistols/388733.html",
    "399587": "pistols/399587.html",
    "702585": "pistols/702585.html",
    "707356": "pistols/707356.html",
    "817679": "pistols/817679.html",
    "861420": "pistols/861420.html",
    "883104": "pistols/883104.html",
    "898459": "pistols/898459.html",
    "898473": "pistols/898473.html",
    "1012841": "pistols/1012841.html",
    "1013380": "pistols/1013380.html",
    "1068267": "pistols/1068267.html",
    "1080894": "pistols/1080894.html",
    "1207693": "pistols/1207693.html",
    "1233243": "pistols/1233243.html",
    "1261933": "pistols/1261933.html",
    "1293239": "pistols/1293239.html",
    "1319373": "pistols/1319373.html",
    "1354259": "pistols/1354259.html",
    "1358930": "pistols/1358930.html",
    "1403897": "pistols/1403897.html",
    "1450575": "pistols/1450575.html",
    "1656078": "pistols/1656078.html",
    "1685626": "pistols/1685626.html",
    "1686209": "pistols/1686209.html",
    "1743768": "pistols/1743768.html",
    "1747777": "pistols/1747777.html",
    "1792084": "pistols/1792084.html",
    "1792202": "pistols/1792202.html",
    "1799472": "pistols/1799472.html",
    "1828605": "pistols/1828605.html",
    "1854428": "pistols/1854428.html",
    "1872269": "pistols/1872269.html",
    "1911367": "pistols/1911367.html",
    "1935389": "pistols/1935389.html",
    "2042609": "pistols/2042609.html",
    "2064577": "pistols/2064577.html",
    "2121722": "pistols/2121722.html",
    "2132641": "pistols/2132641.html",
    "2174401": "pistols/2174401.html",
    "2309527": "pistols/2309527.html",
    "2326274": "pistols/2326274.html",
    "2335201": "pistols/2335201.html",
    "2361085": "pistols/2361085.html",
    "2363293": "pistols/2363293.html",
    "2394700": "pistols/2394700.html",
    "2440064": "pistols/2440064.html",
    "2455516": "pistols/2455516.html",

    "1926885": "pistols/1926885.html",
    "1887296": "pistols/1887296.html",
    "1311841": "pistols/1311841.html",
    "730058": "pistols/730058.html",
    "1754060": "pistols/1754060.html",
    "1166186": "pistols/1166186.html",
    "2108757": "pistols/2108757.html",
    "1007642": "pistols/1007642.html",
    "1833662": "pistols/1833662.html",
    "2267082": "pistols/2267082.html",
    "1136852": "pistols/1136852.html",
    "714093": "pistols/714093.html",
    "1825392": "pistols/1825392.html",
    "1153716": "pistols/1153716.html",
    "1129767": "pistols/1129767.html",
    "1383505": "pistols/1383505.html",
    "1589098": "pistols/1589098.html",
    "1272220": "pistols/1272220.html",
    "1513922": "pistols/1513922.html",
    "1403283": "pistols/1403283.html",
    "1997691": "pistols/1997691.html",
    "898349": "pistols/898349.html",
    "904594": "pistols/904594.html",
    "1319523": "pistols/1319523.html",
    "1557162": "pistols/1557162.html",
    "1573892": "pistols/1573892.html",
    "1726202": "pistols/1726202.html",
    "1988513": "pistols/1988513.html",
    "2088647": "pistols/2088647.html"
};

function escapeHtml(value) {
    return String(value === undefined || value === null ? "" : value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function normalizeSerial(value) {
    return String(value || "")
        .trim()
        .toUpperCase()
        .replace(/[#\s,]/g, "");
}

function isNumericSerial(value) {
    return /^\d+$/.test(value);
}

function serialMatches(input, pistol) {
    if (input === "") {
        return true;
    }

    if (isNumericSerial(input)) {
        var serial = Number(input);
        var start = Number(pistol.serial_start);
        var end = Number(pistol.serial_end);

        if (!isNaN(start) && !isNaN(end)) {
            return serial >= start && serial <= end;
        }

        return false;
    }

    var textStart = normalizeSerial(pistol.serial_start);
    var textEnd = normalizeSerial(pistol.serial_end);
    return input >= textStart && input <= textEnd;
}

function getRangeText(pistol) {
    return escapeHtml(pistol.serial_start) + " - " + escapeHtml(pistol.serial_end);
}

function getNotes(pistol) {
    var notes = pistol.notes || "";

    if (pistol.duplicate_range && pistol.duplicate_with) {
        notes += " Duplicate range with " + pistol.duplicate_with + ".";
    }

    return notes;
}

function getIndividualPageLink(input) {
    var serial = normalizeSerial(input);

    if (individualRecordPages[serial]) {
        return "<p><a href='" + escapeHtml(individualRecordPages[serial]) + "?v=20260531c'>Open Individual Record →</a></p>";
    }

    if (typeof pistolRecords !== "undefined" && pistolRecords[serial]) {
        return "<p><a href='pistols/" + encodeURIComponent(serial) + ".html?v=20260531c'>Open Individual Record →</a></p>";
    }

    return "";
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    document.getElementById("manufacturerFilter").value = "";
    document.getElementById("yearFilter").value = "";
    document.getElementById("result").innerHTML = "";
}

function searchDatabase() {
    var inputElement = document.getElementById("searchInput");
    var manufacturerFilter = document.getElementById("manufacturerFilter");
    var yearFilter = document.getElementById("yearFilter");
    var result = document.getElementById("result");

    if (!inputElement || !result) {
        return;
    }

    var input = normalizeSerial(inputElement.value);
    var manufacturer = manufacturerFilter ? manufacturerFilter.value : "";
    var year = yearFilter ? yearFilter.value : "";

    result.innerHTML = "";

    if (typeof pistols === "undefined" || !Array.isArray(pistols)) {
        result.innerHTML = "<p>Serial number data could not be loaded.</p>";
        return;
    }

    var matches = pistols.filter(function(pistol) {
        return serialMatches(input, pistol) &&
            (manufacturer === "" || pistol.manufacturer === manufacturer) &&
            (year === "" || String(pistol.year) === year);
    });

    if (matches.length === 0) {
        if (input !== "" && individualRecordPages[input]) {
            result.innerHTML = "<div class='result-card'><h2>Individual Record Found</h2>" + getIndividualPageLink(input) + "</div>";
            return;
        }

        result.innerHTML = "<div class='warning-box'><strong>No matches found.</strong></div>";
        return;
    }

    showAllResults(input, matches);
}

function showAllResults(input, matches) {
    var result = document.getElementById("result");
    var html = "<div class='result-card'>";

    if (matches.length > 1) {
        html += "<h2>Multiple Possible Matches Found</h2>";
        html += "<div class='warning-box'>WARNING: This search returned multiple matching or overlapping ranges. Verify using inspector marks, slide markings, frame markings, finish, and ordnance stamps.</div>";
    } else {
        html += "<h2>Result Found</h2>";
    }

    html += "<table><tr><th>Manufacturer</th><th>Year</th><th>Range</th><th>Notes</th><th>Reference Page</th><th>Individual Record</th></tr>";

    matches.forEach(function(pistol) {
        var page = getManufacturerPage(pistol.manufacturer);
        var individualLink = getIndividualPageLink(input);

        html += "<tr>";
        html += "<td>" + escapeHtml(pistol.manufacturer) + "</td>";
        html += "<td>" + escapeHtml(pistol.year) + "</td>";
        html += "<td>" + getRangeText(pistol) + "</td>";
        html += "<td>" + escapeHtml(getNotes(pistol)) + "</td>";
        html += "<td><a href='" + escapeHtml(page) + "'>Open</a></td>";
        html += "<td>" + (individualLink ? individualLink : "No individual record yet") + "</td>";
        html += "</tr>";
    });

    html += "</table></div>";
    result.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    var inputElement = document.getElementById("searchInput");

    if (inputElement) {
        inputElement.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                searchDatabase();
            }
        });
    }
});