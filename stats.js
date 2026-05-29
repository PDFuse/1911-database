function updateArchiveStats(){
    var estimatedMilitaryProduction = 2466000;

    var cmpDocumentedSerials = [
        "1068267",
        "1080894",
        "1403897",
        "1571692",
        "1935389",
        "2174401",
        "2335201",
        "2361085",
        "2363293",
        "369379"
    ];

    var provenanceSerials = [
        "702585",
        "707356",
        "861420",
        "1012841",
        "1403897",
        "1571692",
        "1743768",
        "2174401",
        "2335201",
        "2361085",
        "2363293",
        "369379"
    ];

    function formatNumber(value){
        return Number(value).toLocaleString("en-US");
    }

    function setText(id, value){
        var element = document.getElementById(id);
        if(element){
            element.textContent = value;
        }
    }

    function setStatByLabel(labelText, value){
        document.querySelectorAll(".stat-card").forEach(function(card){
            var label = card.querySelector("p");
            var number = card.querySelector("h3");
            if(label && number && label.textContent.trim() === labelText){
                number.textContent = value;
            }
        });
    }

    function getIndividualSerials(){
        if(typeof individualRecordPages === "undefined"){
            return [];
        }
        return Object.keys(individualRecordPages).filter(function(serial){
            return /^\d+$/.test(serial);
        });
    }

    var individualSerials = getIndividualSerials();
    var serialSet = {};

    individualSerials.forEach(function(serial){
        serialSet[serial] = true;
    });

    var documentedCount = individualSerials.length;
    var cmpCount = cmpDocumentedSerials.filter(function(serial){
        return serialSet[serial];
    }).length;
    var provenanceCount = provenanceSerials.filter(function(serial){
        return serialSet[serial];
    }).length;
    var outstandingCount = Math.max(estimatedMilitaryProduction - documentedCount, 0);

    setStatByLabel("Documented Individual Records", formatNumber(documentedCount));
    setStatByLabel("CMP Documented Examples", formatNumber(cmpCount));
    setStatByLabel("Museum / Provenance Examples", formatNumber(provenanceCount));
    setStatByLabel("Estimated Military Production Records", formatNumber(estimatedMilitaryProduction) + "+");
    setStatByLabel("Outstanding / Undocumented Serial Numbers", formatNumber(outstandingCount) + "+");

    setText("footer-stat-records", formatNumber(documentedCount));
    setText("footer-stat-cmp", formatNumber(cmpCount));
    setText("footer-stat-provenance", formatNumber(provenanceCount));
}

if(document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", updateArchiveStats);
} else {
    updateArchiveStats();
}
