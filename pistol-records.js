var manufacturerVerificationTemplates = {
    "Colt 1945": {
        manufacturer: "Colt",
        year: "1945",
        expected_inspector: "Late-war Colt inspection and ordnance acceptance markings should be verified by photograph.",
        expected_finish: "Evaluate for late WWII parkerized finish and consistency across the pistol.",
        expected_parts: "Check arched mainspring housing, WWII-style controls, barrel markings, and slide markings.",
        warning: "Do not treat serial range alone as proof of originality. Verify finish, markings, barrel, and parts together."
    },
    "Ithaca 1943": {
        manufacturer: "Ithaca",
        year: "1943",
        expected_inspector: "F.J.A. inspection initials are an important Ithaca identification point.",
        expected_finish: "Evaluate for WWII parkerized finish and consistency across frame, slide, and small parts.",
        expected_parts: "Check Ithaca slide markings, frame markings, ordnance stamp, and barrel markings.",
        warning: "Serials 856405 through 916404 overlap with Colt. Confirm Ithaca identity with markings, not serial number alone."
    },
    "Remington Rand 1943": {
        manufacturer: "Remington Rand",
        year: "1943",
        expected_inspector: "F.J.A. is commonly associated with Remington Rand WWII production.",
        expected_finish: "Evaluate parkerized finish, slide type, and wear consistency.",
        expected_parts: "Check slide marking style, frame markings, barrel, grips, and small parts.",
        warning: "Remington Rand pistols are common, but rebuilds and mixed parts should be identified accurately."
    },
    "Union Switch & Signal 1943": {
        manufacturer: "Union Switch & Signal",
        year: "1943",
        expected_inspector: "Verify inspection initials and ordnance acceptance markings with clear photographs.",
        expected_finish: "Evaluate finish carefully because high-value US&S pistols are often refinished or assembled from parts.",
        expected_parts: "Check US&S slide markings, frame markings, barrel, and small parts for period consistency.",
        warning: "US&S pistols are valuable. Authentication should be conservative and photo-based."
    },
    "Singer 1942": {
        manufacturer: "Singer",
        year: "1942",
        expected_inspector: "Singer inspection references must be verified carefully with known examples and expert review.",
        expected_finish: "Evaluate all markings, finish, and surface condition carefully due to high counterfeit risk.",
        expected_parts: "Check slide, frame, serial format, small parts, and provenance together.",
        warning: "Singer pistols are extremely valuable and frequently faked or altered. Do not authenticate from serial range alone."
    }
};

var pistolRecords = {
    "2335201": {
        serial_number: "2335201",
        manufacturer: "Colt",
        model: "M1911A1",
        production_year: "1945",
        serial_range: "2244804 - 2380013",
        production_type: "Late WWII Colt production",
        verification_template: "Colt 1945",
        inspector: "Verify correct late-war Colt inspection and ordnance acceptance markings",
        finish: "Evaluate for correct late WWII parkerized finish and consistency across slide, frame, and small parts",
        barrel: "Photograph and compare markings to accepted Colt WWII barrel variations",
        mainspring_housing: "Check for arched, checkered M1911A1-style mainspring housing unless documented as replaced",
        rebuild_marks: "Check for arsenal rebuild stamps or replacement-part indicators",
        matching_status: "Undetermined until slide, frame, barrel, finish, and small parts are reviewed together",
        cmp_status: "Unknown",
        provenance: "Unknown",
        notes: "Late-war Colt pistol record created for collector research and photo documentation.",
        verification_points: [
            "Confirm frame is within the Colt 1945 serial range.",
            "Compare slide markings to known late-war Colt examples.",
            "Check finish consistency across slide, frame, and small parts.",
            "Photograph barrel markings for comparison.",
            "Look for rebuild marks before calling the pistol original.",
            "Evaluate small parts for WWII-correct style and finish."
        ],
        photos: {
            left: "../images/2335201/left.jpg",
            right: "../images/2335201/right.jpg",
            serial: "../images/2335201/serial.jpg",
            inspector: "../images/2335201/inspector.jpg",
            slide: "../images/2335201/slide.jpg",
            barrel: "../images/2335201/barrel.jpg"
        }
    },

    "ithaca_example": {
        serial_number: "ITHACA_EXAMPLE",
        manufacturer: "Ithaca",
        model: "M1911A1",
        production_year: "1943",
        serial_range: "856405 - 916404 or later Ithaca ranges",
        production_type: "WWII Ithaca production placeholder record",
        verification_template: "Ithaca 1943",
        inspector: "F.J.A. inspection initials should be checked, especially in the duplicated range.",
        finish: "Evaluate for parkerized finish and consistency across major parts.",
        barrel: "Photograph barrel markings for comparison.",
        mainspring_housing: "Check for WWII-correct M1911A1 style or documented replacement.",
        rebuild_marks: "Check for arsenal rebuild stamps and replacement indicators.",
        matching_status: "Placeholder record pending exact pistol review.",
        cmp_status: "Unknown",
        provenance: "Unknown",
        notes: "Placeholder Ithaca record. Replace with exact serial number and photographs when available.",
        verification_points: [
            "Confirm the exact serial number and production range.",
            "If in the 856405 - 916404 range, verify it is not a Colt by markings alone.",
            "Look for F.J.A. inspection initials.",
            "Compare Ithaca slide markings and frame markings.",
            "Check for rebuild marks and finish consistency."
        ],
        photos: {
            left: "../images/ithaca_example/left.jpg",
            right: "../images/ithaca_example/right.jpg",
            serial: "../images/ithaca_example/serial.jpg",
            inspector: "../images/ithaca_example/inspector.jpg",
            slide: "../images/ithaca_example/slide.jpg",
            barrel: "../images/ithaca_example/barrel.jpg"
        }
    },

    "remington_rand_example": {
        serial_number: "REMINGTON_RAND_EXAMPLE",
        manufacturer: "Remington Rand",
        model: "M1911A1",
        production_year: "1943-1945",
        serial_range: "See Remington Rand serial ranges",
        production_type: "WWII Remington Rand placeholder record",
        verification_template: "Remington Rand 1943",
        inspector: "F.J.A. and other inspection references should be reviewed with serial range and slide type.",
        finish: "Evaluate parkerized finish, slide type, and wear consistency.",
        barrel: "Photograph barrel markings for comparison.",
        mainspring_housing: "Check for WWII-correct M1911A1 style or documented replacement.",
        rebuild_marks: "Check for arsenal rebuild stamps and postwar maintenance marks.",
        matching_status: "Placeholder record pending exact pistol review.",
        cmp_status: "Unknown",
        provenance: "Unknown",
        notes: "Placeholder Remington Rand record. Replace with exact serial number and photographs when available.",
        verification_points: [
            "Confirm the exact serial number and year range.",
            "Compare Remington Rand slide markings and slide type.",
            "Check F.J.A. and ordnance markings.",
            "Review barrel and small parts for period consistency.",
            "Look for arsenal rebuild marks."
        ],
        photos: {
            left: "../images/remington_rand_example/left.jpg",
            right: "../images/remington_rand_example/right.jpg",
            serial: "../images/remington_rand_example/serial.jpg",
            inspector: "../images/remington_rand_example/inspector.jpg",
            slide: "../images/remington_rand_example/slide.jpg",
            barrel: "../images/remington_rand_example/barrel.jpg"
        }
    },

    "uss_example": {
        serial_number: "USS_EXAMPLE",
        manufacturer: "Union Switch & Signal",
        model: "M1911A1",
        production_year: "1943",
        serial_range: "1041405 - 1096404",
        production_type: "WWII US&S placeholder record",
        verification_template: "Union Switch & Signal 1943",
        inspector: "Verify inspection initials and ordnance stamp with clear photographs.",
        finish: "Evaluate finish carefully due to high collector value and refinish risk.",
        barrel: "Photograph barrel markings for comparison.",
        mainspring_housing: "Check for WWII-correct M1911A1 style or documented replacement.",
        rebuild_marks: "Check for arsenal rebuild stamps and replacement indicators.",
        matching_status: "Placeholder record pending exact pistol review.",
        cmp_status: "Unknown",
        provenance: "Unknown",
        notes: "Placeholder US&S record. Replace with exact serial number and photographs when available.",
        verification_points: [
            "Confirm serial number is in the US&S production range.",
            "Compare slide markings to known US&S examples.",
            "Check frame markings and ordnance acceptance stamp.",
            "Review finish and small parts carefully.",
            "Use conservative authentication standards due to value."
        ],
        photos: {
            left: "../images/uss_example/left.jpg",
            right: "../images/uss_example/right.jpg",
            serial: "../images/uss_example/serial.jpg",
            inspector: "../images/uss_example/inspector.jpg",
            slide: "../images/uss_example/slide.jpg",
            barrel: "../images/uss_example/barrel.jpg"
        }
    },

    "singer_example": {
        serial_number: "SINGER_EXAMPLE",
        manufacturer: "Singer",
        model: "M1911A1",
        production_year: "1942",
        serial_range: "S800001 - S800500",
        production_type: "Singer contract placeholder record",
        verification_template: "Singer 1942",
        inspector: "Singer inspection references must be verified with expert review and clear photographs.",
        finish: "Evaluate finish, markings, and surface condition with caution due to counterfeit risk.",
        barrel: "Photograph barrel markings for comparison.",
        mainspring_housing: "Check all small parts carefully for period and maker consistency.",
        rebuild_marks: "Check for any rebuild, alteration, or replacement indicators.",
        matching_status: "Placeholder record pending exact pistol review.",
        cmp_status: "Unknown",
        provenance: "Unknown",
        notes: "Placeholder Singer record. Do not use as authentication without exact photographs and expert review.",
        verification_points: [
            "Confirm serial format and range.",
            "Compare slide and frame markings to known Singer examples.",
            "Check finish, small parts, and barrel with expert-level caution.",
            "Review provenance and documentation.",
            "Assume high counterfeit risk until proven otherwise."
        ],
        photos: {
            left: "../images/singer_example/left.jpg",
            right: "../images/singer_example/right.jpg",
            serial: "../images/singer_example/serial.jpg",
            inspector: "../images/singer_example/inspector.jpg",
            slide: "../images/singer_example/slide.jpg",
            barrel: "../images/singer_example/barrel.jpg"
        }
    }
};
