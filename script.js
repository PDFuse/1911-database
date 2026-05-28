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
    "44": "pistols/44.html",
    "501": "pistols/501.html",
    "5461": "pistols/5461.html",
    "388733": "pistols/388733.html",
    "817679": "pistols/817679.html",
    "1293239": "pistols/1293239.html",
    "1319373": "pistols/1319373.html",
    "1656078": "pistols/1656078.html",
    "2064577": "pistols/2064577.html",
    "2335201": "pistols/2335201.html",
    "2440064": "pistols/2440064.html",
    "2455516": "pistols/2455516.html"
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
        .replace(/[#,\s]/g, "")
        .replace(/,/g, "");
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
        return "<p><a href='" + escapeHtml(individualRecordPages[serial]) + "'>Open Individual Record →</a></p>";
    }

    if (typeof pistolRecords !== "undefined" && pistolRecords[serial]) {
        return "<p><a href='pistols/" + encodeURIComponent(serial) + ".html'>Open Individual Record →</a></p>";
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
        var serialOk = serialMatches(input, pistol);
        var manufacturerOk = manufacturer === "" || pistol.manufacturer === manufacturer;
        var yearOk = year === "" || String(pistol.year) === year;
        return serialOk && manufacturerOk && yearOk;
    });

    if (matches.length === 0) {
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
        html += "<div class='warning-box'>";
        html += "WARNING: This search returned multiple matching or overlapping ranges. Verify using inspector marks, slide markings, frame markings, finish, and ordnance stamps.";
        html += "</div>";
    } else {
        html += "<h2>Result Found</h2>";
    }

    html += "<table>";
    html += "<tr>";
    html += "<th>Manufacturer</th>";
    html += "<th>Year</th>";
    html += "<th>Range</th>";
    html += "<th>Notes</th>";
    html += "<th>Reference Page</th>";
    html += "<th>Individual Record</th>";
    html += "</tr>";

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

    html += "</table>";
    html += "</div>";

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