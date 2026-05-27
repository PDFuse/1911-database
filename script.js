function searchDatabase() {
    var input = document.getElementById("searchInput").value.trim().toUpperCase();
    var result = document.getElementById("result");

    result.innerHTML = "";

    for (var i = 0; i < pistols.length; i++) {
        var p = pistols[i];

        if (!isNaN(input)) {
            var serial = Number(input);

            if (serial >= p.serial_start && serial <= p.serial_end) {
                result.innerHTML =
                    "<h2>Result Found</h2>" +
                    "<p><strong>Manufacturer:</strong> " + p.manufacturer + "</p>" +
                    "<p><strong>Year:</strong> " + p.year + "</p>" +
                    "<p><strong>Range:</strong> " + p.serial_start + " - " + p.serial_end + "</p>" +
                    "<p><strong>Notes:</strong> " + p.notes + "</p>";
                return;
            }
        }

        if (isNaN(input)) {
            if (input >= p.serial_start && input <= p.serial_end) {
                result.innerHTML =
                    "<h2>Result Found</h2>" +
                    "<p><strong>Manufacturer:</strong> " + p.manufacturer + "</p>" +
                    "<p><strong>Year:</strong> " + p.year + "</p>" +
                    "<p><strong>Range:</strong> " + p.serial_start + " - " + p.serial_end + "</p>" +
                    "<p><strong>Notes:</strong> " + p.notes + "</p>";
                return;
            }
        }
    }

    result.innerHTML = "<p>No matching serial range found.</p>";
}
