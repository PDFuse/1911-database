var coltExtraShipmentNotes = [
    {
        id: 'colt-navy-500-1000-row',
        year: '1912',
        start: '500',
        end: '1000',
        quantity: '501',
        period: 'Early M1911 / U.S. Navy',
        status: 'Shipment record / verify',
        notes: 'Reported early U.S. Navy serial-number sub-block. Verify against primary shipment records before treating as final delivery data.',
        insertBeforeStart: '3501'
    },
    {
        id: 'colt-usmc-3501-3799-row',
        year: '1912',
        start: '3501',
        end: '3799',
        quantity: '299',
        period: 'Early M1911 / U.S.M.C.',
        status: 'Shipment record',
        notes: 'First U.S.M.C. pistols made by Colt. Delivered 6 June 1912.',
        insertBeforeStart: '17251'
    },
    {
        id: 'colt-frankford-37951-38000-row',
        year: '1913',
        start: '37951',
        end: '38000',
        quantity: '50',
        period: 'Early M1911',
        status: 'Shipment record',
        notes: 'Documented shipment sub-block: serial numbers 37951–38000 shipped to Frankford Arsenal on 12 July 1913.',
        insertBeforeStart: '60401'
    },
    {
        id: 'colt-frankford-101401-101600-row',
        year: '1914',
        start: '101401',
        end: '101600',
        quantity: '200',
        period: 'WWI M1911',
        status: 'Shipment record',
        notes: 'Documented shipment sub-block: serial numbers 101401–101600 shipped to Frankford Arsenal on 22 October 1914.',
        insertBeforeStart: '107597'
    }
];

function buildShipmentRow(note) {
    var row = document.createElement('tr');
    row.id = note.id;
    row.innerHTML = '<td>' + note.year + '</td>' +
        '<td>' + note.start + '</td>' +
        '<td>' + note.end + '</td>' +
        '<td>' + note.quantity + '</td>' +
        '<td>' + note.period + '</td>' +
        '<td>' + note.status + '</td>' +
        '<td>' + note.notes + '</td>';
    return row;
}

function insertShipmentNote(tbody, note) {
    if (document.getElementById(note.id)) {
        return;
    }

    var row = buildShipmentRow(note);
    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    var inserted = false;

    rows.forEach(function(existingRow) {
        if (inserted) {
            return;
        }

        var cells = existingRow.querySelectorAll('td');
        if (cells.length >= 3 && cells[1].textContent.trim() === note.insertBeforeStart) {
            tbody.insertBefore(row, existingRow);
            inserted = true;
        }
    });

    if (!inserted) {
        tbody.appendChild(row);
    }
}

function addColtExtraShipmentNotes() {
    var table = document.getElementById('combined-production-table');

    if (!table) {
        return false;
    }

    var tbody = table.querySelector('tbody');

    if (!tbody) {
        return false;
    }

    coltExtraShipmentNotes.forEach(function(note) {
        insertShipmentNote(tbody, note);
    });

    return true;
}

function waitForColtProductionTable() {
    if (addColtExtraShipmentNotes()) {
        return;
    }

    var attempts = 0;
    var interval = setInterval(function() {
        attempts += 1;

        if (addColtExtraShipmentNotes() || attempts > 20) {
            clearInterval(interval);
        }
    }, 150);
}

if ((window.location.pathname || '').split('/').pop() === 'colt.html') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', waitForColtProductionTable);
    } else {
        waitForColtProductionTable();
    }
}
