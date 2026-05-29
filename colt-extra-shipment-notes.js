function addColtEarlyNavyShipmentNote() {
    var table = document.getElementById('combined-production-table');

    if (!table || document.getElementById('colt-navy-500-1000-row')) {
        return false;
    }

    var tbody = table.querySelector('tbody');

    if (!tbody) {
        return false;
    }

    var row = document.createElement('tr');
    row.id = 'colt-navy-500-1000-row';
    row.innerHTML = '<td>1912</td>' +
        '<td>500</td>' +
        '<td>1000</td>' +
        '<td>501</td>' +
        '<td>Early M1911 / U.S. Navy</td>' +
        '<td>Shipment record / verify</td>' +
        '<td>Reported early U.S. Navy serial-number sub-block. Verify against primary shipment records before treating as final delivery data.</td>';

    var rows = Array.prototype.slice.call(tbody.querySelectorAll('tr'));
    var inserted = false;

    rows.forEach(function(existingRow) {
        if (inserted) {
            return;
        }

        var cells = existingRow.querySelectorAll('td');
        if (cells.length >= 3 && cells[0].textContent.trim() === '1912' && cells[1].textContent.trim() === '3501') {
            tbody.insertBefore(row, existingRow);
            inserted = true;
        }
    });

    if (!inserted) {
        tbody.appendChild(row);
    }

    return true;
}

function waitForColtProductionTable() {
    if (addColtEarlyNavyShipmentNote()) {
        return;
    }

    var attempts = 0;
    var interval = setInterval(function() {
        attempts += 1;

        if (addColtEarlyNavyShipmentNote() || attempts > 20) {
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
