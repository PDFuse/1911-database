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
        .replace(/[,\s]/g, "");
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
    if (typeof pistolRecords === "undefined") {
        return "";
    }

    if (pistolRecords[input]) {
        return "<p><a href='pistols/" + encodeURIComponent(input) + ".html'>View Individual Pistol Page →</a></p>";
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
    html += "</tr>";

    matches.forEach(function(pistol) {
        var page = getManufacturerPage(pistol.manufacturer);

        html += "<tr>";
        html += "<td>" + escapeHtml(pistol.manufacturer) + "</td>";
        html += "<td>" + escapeHtml(pistol.year) + "</td>";
        html += "<td>" + getRangeText(pistol) + "</td>";
        html += "<td>" + escapeHtml(getNotes(pistol)) + "</td>";
        html += "<td><a href='" + escapeHtml(page) + "'>Open</a></td>";
        html += "</tr>";
    });

    html += "</table>";

    html += getIndividualPageLink(input);

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
