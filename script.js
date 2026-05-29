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
    "369379": "pistols/369379.html",
    "388733": "pistols/388733.html",
    "702585": "pistols/702585.html",
    "817679": "pistols/817679.html",
    "861420": "pistols/861420.html",
    "1068267": "pistols/1068267.html",
    "1080894": "pistols/1080894.html",
    "1293239": "pistols/1293239.html",
    "1319373": "pistols/1319373.html",
    "1403897": "pistols/1403897.html",
    "1571692": "pistols/1571692.html",
    "1656078": "pistols/1656078.html",
    "1747777": "pistols/1747777.html",
    "1935389": "pistols/1935389.html",
    "2064577": "pistols/2064577.html",
    "2174401": "pistols/2174401.html",
    "2335201": "pistols/2335201.html",
    "2361085": "pistols/2361085.html",
    "2363293": "pistols/2363293.html",
    "2440064": "pistols/2440064.html",
    "2455516": "pistols/2455516.html"
};

function escapeHtml(value) { return String(value === undefined || value === null ? "" : value).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#039;"); }
function normalizeSerial(value) { return String(value || "").trim().toUpperCase().replace(/[#,\s]/g,"").replace(/,/g,""); }
function isNumericSerial(value) { return /^\d+$/.test(value); }
function serialMatches(input,pistol){ if(input===""){return true;} if(isNumericSerial(input)){var serial=Number(input),start=Number(pistol.serial_start),end=Number(pistol.serial_end); if(!isNaN(start)&&!isNaN(end)){return serial>=start&&serial<=end;} return false;} var textStart=normalizeSerial(pistol.serial_start),textEnd=normalizeSerial(pistol.serial_end); return input>=textStart&&input<=textEnd; }
function getRangeText(pistol){ return escapeHtml(pistol.serial_start)+" - "+escapeHtml(pistol.serial_end);} function getNotes(pistol){var notes=pistol.notes||""; if(pistol.duplicate_range&&pistol.duplicate_with){notes+=" Duplicate range with "+pistol.duplicate_with+".";} return notes;}
function getIndividualPageLink(input){var serial=normalizeSerial(input); if(individualRecordPages[serial]){return "<p><a href='"+escapeHtml(individualRecordPages[serial])+"?v=20260529a'>Open Individual Record →</a></p>";} if(typeof pistolRecords!=="undefined"&&pistolRecords[serial]){return "<p><a href='pistols/"+encodeURIComponent(serial)+".html?v=20260529a'>Open Individual Record →</a></p>";} return "";}
function clearSearch(){document.getElementById("searchInput").value="";document.getElementById("manufacturerFilter").value="";document.getElementById("yearFilter").value="";document.getElementById("result").innerHTML="";}
function searchDatabase(){var inputElement=document.getElementById("searchInput"),manufacturerFilter=document.getElementById("manufacturerFilter"),yearFilter=document.getElementById("yearFilter"),result=document.getElementById("result"); if(!inputElement||!result){return;} var input=normalizeSerial(inputElement.value),manufacturer=manufacturerFilter?manufacturerFilter.value:"",year=yearFilter?yearFilter.value:""; result.innerHTML=""; if(typeof pistols==="undefined"||!Array.isArray(pistols)){result.innerHTML="<p>Serial number data could not be loaded.</p>";return;} var matches=pistols.filter(function(pistol){return serialMatches(input,pistol)&&(manufacturer===""||pistol.manufacturer===manufacturer)&&(year===""||String(pistol.year)===year);}); if(matches.length===0){result.innerHTML="<div class='warning-box'><strong>No matches found.</strong></div>";return;} showAllResults(input,matches);} function showAllResults(input,matches){var result=document.getElementById("result"),html="<div class='result-card'>"; html+=matches.length>1?"<h2>Multiple Possible Matches Found</h2><div class='warning-box'>WARNING: This search returned multiple matching or overlapping ranges. Verify using inspector marks, slide markings, frame markings, finish, and ordnance stamps.</div>":"<h2>Result Found</h2>"; html+="<table><tr><th>Manufacturer</th><th>Year</th><th>Range</th><th>Notes</th><th>Reference Page</th><th>Individual Record</th></tr>"; matches.forEach(function(pistol){var page=getManufacturerPage(pistol.manufacturer),individualLink=getIndividualPageLink(input); html+="<tr><td>"+escapeHtml(pistol.manufacturer)+"</td><td>"+escapeHtml(pistol.year)+"</td><td>"+getRangeText(pistol)+"</td><td>"+escapeHtml(getNotes(pistol))+"</td><td><a href='"+escapeHtml(page)+"'>Open</a></td><td>"+(individualLink?individualLink:"No individual record yet")+"</td></tr>";}); html+="</table></div>"; result.innerHTML=html;} document.addEventListener("DOMContentLoaded",function(){var inputElement=document.getElementById("searchInput"); if(inputElement){inputElement.addEventListener("keydown",function(event){if(event.key==="Enter"){searchDatabase();}});}});