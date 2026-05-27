function searchDatabase() {
    const input = document.getElementById("searchInput").value.trim().toUpperCase();
    const resultDiv = document.getElementById("result");

    resultDiv.innerHTML = "";

    if (!input) {
        resultDiv.innerHTML = "<p>Enter a serial number to search.</p>";
        return;
    }

    let match = null;

    for (let pistol of pistols) {
        const start = String(pistol.serial_start).toUpperCase();
        const end = String(pistol.serial_end).toUpperCase();

        // For normal numeric serial numbers
        if (!isNaN(input) && !isNaN(start) && !isNaN(end)) {
            const numInput = Number(input);
            const numStart = Number(start);
            const numEnd = Number(end);

            if (numInput >= numStart && numInput <= numEnd) {
                match = pistol;
                break;
            }
        }

        // For letter-prefix serials like Singer S800001
        if (isNaN(input) && input >= start && input <= end) {
            match = pistol;
            break;
        }
    }

    if (match) {
        resultDiv.innerHTML = `
            <div class="result-card">
                <h2>Result Found</h2>
                <p><strong>Manufacturer:</strong> ${match.manufacturer}</p>
                <p><strong>Year:</strong> ${match.year}</p>
                <p><strong>Serial Range:</strong> ${match.serial_start} - ${match.serial_end}</p>
                <p><strong>Notes:</strong> ${match.notes}</p>
            </div>
        `;
    } else {
        resultDiv.innerHTML = "<p>No matching serial range found.</p>";
    }
}
