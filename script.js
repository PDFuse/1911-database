function searchDatabase() {
    const input = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    if (input === "") {
        resultDiv.innerHTML = "<p>Enter a serial number to search.</p>";
        return;
    }

    let match = null;

    pistols.forEach(pistol => {
        const serial = input.toUpperCase();

        if (
            Number(serial) >= Number(pistol.serial_start) &&
            Number(serial) <= Number(pistol.serial_end)
        ) {
            match = pistol;
        }

        if (
            typeof pistol.serial_start === "string" &&
            serial >= pistol.serial_start &&
            serial <= pistol.serial_end
        ) {
            match = pistol;
        }
    });

    if (match) {
        resultDiv.innerHTML = `
            <h2>Result Found</h2>
            <p><strong>Manufacturer:</strong> ${match.manufacturer}</p>
            <p><strong>Year:</strong> ${match.year}</p>
            <p><strong>Serial Range:</strong> ${match.serial_start} - ${match.serial_end}</p>
            <p><strong>Notes:</strong> ${match.notes}</p>
        `;
    } else {
        resultDiv.innerHTML = "<p>No matching serial range found.</p>";
    }
}
