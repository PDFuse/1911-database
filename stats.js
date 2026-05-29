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
        "861420",
        "1403897",
        "1571692",
        "2174401",
        "2335201",
        "2361085",
        "2363293",
        "369379"
    ];

    function formatNumber(value){
        return Number(value).toLocaleString("en-US");
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

    setStatByLabel("Documented Individual Records", formatNumber(documentedCount));
    setStatByLabel("CMP Documented Examples", formatNumber(cmpCount));
    setStatByLabel("Museum / Provenance Examples", formatNumber(provenanceCount));
    setStatByLabel("Estimated Military Production Records", formatNumber(estimatedMilitaryProduction) + "+");
    setStatByLabel("Outstanding / Undocumented Serial Numbers", formatNumber(Math.max(estimatedMilitaryProduction - documentedCount, 0)) + "+");
}

document.addEventListener("DOMContentLoaded", updateArchiveStats);
