var pistols = [

/* COLT */

{
    manufacturer: "Colt",
    year: "1912",
    serial_start: 1,
    serial_end: 17250,
    notes: "Original Colt military M1911 production. Serial range identifies production block only; confirm with markings, finish, barrel, parts, and provenance."
},
{
    manufacturer: "Colt",
    year: "1913",
    serial_start: 17251,
    serial_end: 60400,
    notes: "Early Colt M1911 production. Confirm by early frame/slide markings, blue finish, barrel, and period inspection marks."
},
{
    manufacturer: "Colt",
    year: "1914",
    serial_start: 60401,
    serial_end: 72570,
    notes: "Colt M1911 production before the Springfield Armory block."
},

/* SPRINGFIELD ARMORY */

{
    manufacturer: "Springfield Armory",
    year: "1914-1915",
    serial_start: 72571,
    serial_end: 83855,
    notes: "Springfield Armory production block. This range is not Colt production; verify Springfield markings and features."
},

/* COLT CONTINUED */

{
    manufacturer: "Colt",
    year: "1915",
    serial_start: 83856,
    serial_end: 107596,
    notes: "Colt M1911 production resumes after the Springfield Armory block."
},
{
    manufacturer: "Colt",
    year: "1916",
    serial_start: 107597,
    serial_end: 133186,
    notes: "WWI Colt M1911 production."
},
{
    manufacturer: "Colt",
    year: "1917",
    serial_start: 133187,
    serial_end: 216986,
    notes: "WWI Colt production. Check WWI configuration, finish, barrel, grips, magazine, and any later rebuild updates."
},
{
    manufacturer: "Colt",
    year: "1918",
    serial_start: 216987,
    serial_end: 629500,
    notes: "Large WWI Colt production block. Many surviving examples may show later service updates, arsenal rebuilds, or replacement parts."
},
{
    manufacturer: "Colt",
    year: "1924",
    serial_start: 700001,
    serial_end: 710000,
    notes: "M1911A1 transition production. Original markings may still reference Model of 1911; verify transition features."
},
{
    manufacturer: "Colt",
    year: "1937",
    serial_start: 710001,
    serial_end: 712349,
    notes: "Interwar / early M1911A1 Colt production."
},
{
    manufacturer: "Colt",
    year: "1938",
    serial_start: 712350,
    serial_end: 713645,
    notes: "Pre-WWII Colt M1911A1 production."
},
{
    manufacturer: "Colt",
    year: "1939",
    serial_start: 713646,
    serial_end: 717281,
    notes: "Pre-WWII Colt M1911A1 production."
},
{
    manufacturer: "Colt",
    year: "1940",
    serial_start: 717282,
    serial_end: 721977,
    notes: "Pre-war / early WWII Colt production."
},
{
    manufacturer: "Colt",
    year: "1941",
    serial_start: 721978,
    serial_end: 756733,
    notes: "Early WWII Colt production. Review WB/early wartime inspection context, Colt slide markings, P proofs, ordnance mark, finish, barrel, grips, and small parts."
},
{
    manufacturer: "Colt",
    year: "1942",
    serial_start: 756734,
    serial_end: 793657,
    notes: "Early WWII Colt production."
},
{
    manufacturer: "Colt",
    year: "1942",
    serial_start: 793658,
    serial_end: 797639,
    notes: "Early WWII Colt / USN block. Verify branch or destination context with primary references when available."
},
{
    manufacturer: "Colt",
    year: "1942",
    serial_start: 797640,
    serial_end: 800000,
    notes: "Early WWII Colt production block."
},
{
    manufacturer: "Singer",
    year: "1941",
    serial_start: "S800001",
    serial_end: "S800500",
    notes: "Singer contract pistols. High-value pistols requiring conservative authentication."
},
{
    manufacturer: "Harrington & Richardson",
    year: "1942",
    serial_start: "H800501",
    serial_end: "H801000",
    notes: "Assigned H&R block with no accepted production. Treat as a reference/caution block, not accepted pistol production."
},
{
    manufacturer: "Colt",
    year: "1942",
    serial_start: 801001,
    serial_end: 856100,
    notes: "Early WWII Colt production immediately before the replacement and duplicate/caution ranges."
},
{
    manufacturer: "Colt / Replacement Numbers",
    year: "1943",
    serial_start: 856101,
    serial_end: 856404,
    notes: "Replacement-number block. Do not treat as ordinary factory production."
},
{
    manufacturer: "Colt",
    year: "1943",
    serial_start: 856101,
    serial_end: 958100,
    notes: "Duplicate/caution production block. Colt production overlaps the 856405-916404 Ithaca duplicated range. Identify the actual maker by markings, not serial number alone."
},
{
    manufacturer: "Colt",
    year: "1943",
    serial_start: 1088726,
    serial_end: 1092896,
    notes: "Mid-WWII Colt production. Review G.H.D. inspection context, Colt slide/frame markings, P proofs, crossed-cannon ordnance mark, barrel, grips, and finish."
},
{
    manufacturer: "Colt",
    year: "1943",
    serial_start: 1096405,
    serial_end: 1208673,
    notes: "Mid-WWII Colt production."
},
{
    manufacturer: "Colt",
    year: "1944",
    serial_start: 1609529,
    serial_end: 1743846,
    notes: "Mid / late WWII Colt production."
},
{
    manufacturer: "Colt",
    year: "1945",
    serial_start: 2244804,
    serial_end: 2380013,
    notes: "Late WWII Colt production. Verify late-war inspection context, Colt components, and late-war finish."
},

/* ITHACA */

{
    manufacturer: "Ithaca",
    year: "1943",
    serial_start: 856405,
    serial_end: 916404,
    duplicate_range: true,
    duplicate_with: "Colt",
    notes: "Duplicate serial range shared with Colt. Verify with F.J.A. inspection mark, Ithaca slide markings, frame markings, and ordnance stamp."
},
{
    manufacturer: "Ithaca",
    year: "1943",
    serial_start: 1208674,
    serial_end: 1279673,
    notes: "Ithaca WWII production."
},
{
    manufacturer: "Ithaca / Replacement Numbers",
    year: "1943",
    serial_start: 1279674,
    serial_end: 1279698,
    notes: "Ithaca replacement-number block. Do not treat as ordinary Ithaca production."
},
{
    manufacturer: "Ithaca",
    year: "1943",
    serial_start: 1441431,
    serial_end: 1471430,
    notes: "Ithaca WWII production. Start value corrected to 1441431."
},
{
    manufacturer: "Ithaca",
    year: "1944",
    serial_start: 1816642,
    serial_end: 1890503,
    notes: "Ithaca 1944 production block. Corrected start prevents overlap with the Remington Rand 1743847-1816641 block."
},
{
    manufacturer: "Ithaca",
    year: "1945",
    serial_start: 2075104,
    serial_end: 2134403,
    notes: "Late Ithaca WWII production."
},
{
    manufacturer: "Ithaca",
    year: "1945",
    serial_start: 2619014,
    serial_end: 2660318,
    notes: "Final accepted Ithaca WWII production. Assigned block may extend higher, but reported completed production ends at 2660318."
},

/* REMINGTON RAND */

{
    manufacturer: "Remington Rand",
    year: "1943",
    serial_start: 916405,
    serial_end: 1041404,
    notes: "Early Remington Rand WWII production. Important for Type 1 / Type 2 slide-marking review and early finish evaluation."
},
{
    manufacturer: "Remington Rand",
    year: "1943",
    serial_start: 1279699,
    serial_end: 1441430,
    notes: "Remington Rand WWII production."
},
{
    manufacturer: "Remington Rand",
    year: "1943",
    serial_start: 1471431,
    serial_end: 1609528,
    notes: "Remington Rand WWII production."
},
{
    manufacturer: "Remington Rand",
    year: "1944",
    serial_start: 1743847,
    serial_end: 1816641,
    notes: "Remington Rand 1944 production block."
},
{
    manufacturer: "Remington Rand",
    year: "1944",
    serial_start: 1890504,
    serial_end: 2075103,
    notes: "Remington Rand 1944 production block."
},
{
    manufacturer: "Remington Rand",
    year: "1945",
    serial_start: 2134404,
    serial_end: 2244803,
    notes: "Late Remington Rand WWII production."
},
{
    manufacturer: "Remington Rand",
    year: "1945",
    serial_start: 2380014,
    serial_end: 2465139,
    notes: "Final accepted Remington Rand WWII production. Assigned range may extend higher, but reported completed production ends at 2465139."
},

/* UNION SWITCH & SIGNAL */

{
    manufacturer: "Union Switch & Signal",
    year: "1943",
    serial_start: 1041405,
    serial_end: 1096404,
    notes: "US&S WWII production. Verify with US&S-specific slide/frame markings and R.C.D. inspection context; crossed-cannon cartouche is not expected on US&S."
}

];
