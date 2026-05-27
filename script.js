function getManufacturerPage(manufacturer) {

    if (manufacturer === "Colt") {
        return "colt.html";
    }

    if (manufacturer === "Ithaca") {
        return "ithaca.html";
    }

    if (manufacturer === "Remington Rand") {
        return "remington-rand.html";
    }

    if (manufacturer === "Union Switch & Signal") {
        return "union-switch-signal.html";
    }

    if (manufacturer === "Singer") {
        return "singer.html";
    }

    return "index.html";
}

function searchDatabase() {

    var input = document
        .getElementById("searchInput")
        .value
        .trim()
        .toUpperCase();

    var result = document.getElementById("result");

    result.innerHTML = "";

    for (var i = 0; i < pistols.length; i++) {

        var p = pistols[i];

        /* NUMERIC SERIALS */

        if (!isNaN(input)) {

            var serial = Number(input);

            if (
                serial >= p.serial_start &&
                serial <= p.serial_end
            ) {

                var page = getManufacturerPage(p.manufacturer);

                result.innerHTML =

                    "<div class='result-card'>" +

                    "<h2>Result Found</h2>" +

                    "<p><strong>Manufacturer:</strong> " +
                    p.manufacturer +
                    "</p>" +

                    "<p><strong>Year:</strong> " +
                    p.year +
                    "</p>" +

                    "<p><strong>Range:</strong> " +
                    p.serial_start +
                    " - " +
                    p.serial_end +
                    "</p>" +

                    "<p><strong>Notes:</strong> " +
                    p.notes +
                    "</p>" +

                    "<p>" +
                    "<a href='" + page + "'>" +
                    "View " + p.manufacturer + " Page →" +
                    "</a>" +
                    "</p>" +

                    "<p>" +
                    "<a href='pistols/" + input + ".html'>" +
                    "View Individual Pistol Page →" +
                    "</a>" +
                    "</p>" +

                    "</div>";

                return;
            }
        }

        /* LETTER PREFIX SERIALS */

        if (isNaN(input)) {

            if (
                input >= p.serial_start &&
                input <= p.serial_end
            ) {

                var page = getManufacturerPage(p.manufacturer);

                result.innerHTML =

                    "<div class='result-card'>" +

                    "<h2>Result Found</h2>" +

                    "<p><strong>Manufacturer:</strong> " +
                    p.manufacturer +
                    "</p>" +

                    "<p><strong>Year:</strong> " +
                    p.year +
                    "</p>" +

                    "<p><strong>Range:</strong> " +
                    p.serial_start +
                    " - " +
                    p.serial_end +
                    "</p>" +

                    "<p><strong>Notes:</strong> " +
                    p.notes +
                    "</p>" +

                    "<p>" +
                    "<a href='" + page + "'>" +
                    "View " + p.manufacturer + " Page →" +
                    "</a>" +
                    "</p>" +

                    "<p>" +
                    "<a href='pistols/" + input + ".html'>" +
                    "View Individual Pistol Page →" +
                    "</a>" +
                    "</p>" +

                    "</div>";

                return;
            }
        }
    }

    result.innerHTML =
        "<p>No matching serial range found.</p>";
}
