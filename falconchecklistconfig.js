window.checklistConfig = {
rootQuestions: [
{
id: "Q_REG",
label: "Registration",
type: "text",
options: null,
enabled_by: null,
disabled_by: null
},
{
id: "Q_MISSIONID",
label: "Trip Number",
type: "text",
options: null,
enabled_by: null,
disabled_by: null
},
{
id: "Q_ACTION",
label: "Action",
type: "select",
options: ["New Trip", "**WIP** Trip Update **WIP**","Flight Plan QC"],
enabled_by: null,
disabled_by: null
},
{
id: "Q_COMMS",
label: "Method of communication?",
type: "radio",
options: ["Email", "Phone", "Whatsapp"],
enabled_by: "Q_ACTION=New Trip||Q_ACTION=Trip Update",
disabled_by: null,
}
],
sections: [
        {
          "id": "S_CLIENTCOMS",
          "title": "Communications",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_COMS1",
              "label": "Has the client email been responded to?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_COMMS=Email||Q_COMMS=Whatsapp",
              "disabled_by": null
            },
            {
              "id": "Q_EMAIL2",
              "label": "Has the message been added to Trip Messages in Falcon?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_COMMS=Email",
              "disabled_by": null
            },
            {
              "id": "Q_EMAIL3",
              "label": "Has the message been archived within Front?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_COMMS=Email",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_INITIAL",
          "title": "INITIAL QUESTIONS",
          "enabled_by": "Q_INITIAL5=Services Only Trip||Q_ACTION=New Trip||Q_ACTION=Trip Update||Q_ACTION=Flight Plan QC",
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_INITIAL1",
              "label": "Which Service(s) has the client requested?",
              "type": "multi",
              "options": [ "Flight Plans", "Handling/Slots/PPR", "Customs", "Permits", "Hotels", "Transport", "Catering", "TCE", "APD", "RSP", "Customs Decal", "Border Overflight Exemption", "TSA Waiver" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_LOCATIONS",
              "label": "List the Trip Itinerary ICAOs",
              "type": "text",
              "options": [ "Brazil","Caribbean","China","Finland","Greece","Hong Kong","Poland","UAE","UK","USA", "None of the listed" ],
              "enabled_by": "Q_ACTION=New Trip||Q_ACTION=Trip Update",
              "disabled_by": "Q_INITIAL5=Services Only Trip||Q_INITIAL1=RSP||Q_INITIAL1=APD",
            },
            {
              "id": "Q_UPDATE1",
              "label": "Which elements to the trip have been updated?",
              "type": "multi",
              "options": [ "Date/Time", "Crew/Pax", "New Legs", "Services", "Other" ],
              "enabled_by": "Q_ACTION=Trip Update",
              "disabled_by": null,
            },
            
            {
              "id": "Q_INITIAL4",
              "label": "Flight Plan QC for which client?",
              "type": "radio",
              "options": [ "Dassault", "Wideworld", "CAMOSA" ],
              "enabled_by": "Q_ACTION=Flight Plan QC",
              "disabled_by": null,
            },
            {
              "id": "Q_INITIALFPQC",
              "label": "Is it a Foreflight or Legacy delivery?",
              "type": "radio",
              "options": [ "Foreflight", "Legacy" ],
              "enabled_by": "Q_INITIAL4=Dassault",
              "disabled_by": null,
            },
            {
              "id": "Q_INITIALFPQC2",
              "label": "Is the flight being operated to EASA or FAA requirements",
              "type": "radio",
              "options": [ "EASA", "FAA" ],
              "enabled_by": "Q_INITIALFPQC=Foreflight",
              "disabled_by": null,
            },
          ]
        },
        {
          "id": "S_TRIPTAB",
          "title": "TRIP TAB",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_PREFERENCES",
              "label": "Have you checked the Dashboard and Client Preferences Tab to verify client preferences?",
              "type": "radio",
              "options": [ "Yes", "No preferences exist - Task Loaded" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_OPERATIONALTYPE",
              "label": "Has the Operational Type been correctly loaded?",
              "type": "radio",
              "options": [ "Private Non-Revenue", "Commercial Non-Scheduled" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": 
              //TITAN
              "Q_REG=GOATW||Q_REG=GXATW" +
              //ASCEND
              "||Q_REG=GMULR||Q_REG=GWEAH",
            },
            {
              "id": "Q_OPERATIONALTYPE",
              "label": "Has the Operational Type been correctly loaded?",
              "type": "radio",
              "options": ["Commercial Scheduled", "Commercial Non-Scheduled", "Private Non-Revenue" ],
              "tooltip": "Registration indicates a client who is a known commercial operator",
              "enabled_by": "Q_REG=GOATW||Q_REG=GXATW||Q_REG=GMULR||Q_REG=GWEAH",
              "disabled_by": null,
            },
            {
              "id": "Q_OPERATORNAME",
              "label": "Is the Operator name loaded correctly?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
          "id": "Q_CAMOSA_OPERATORNAME",
          "label": "Has the Site number been changed? (Transport Only) **VERIFY FOR FALCON**",
          "type": "radio",
          "options": ["Yes"],
          "enabled_by":
            // MTENG: Transport only
            "Q_REG=MTENG;Q_INITIAL1=Transport;Q_INITIAL1!=Hotels;Q_INITIAL1!=Flight Plans;Q_INITIAL1!=Handling/Slots/PPR;Q_INITIAL1!=Customs;Q_INITIAL1!=Permits;Q_INITIAL1!=Catering;Q_INITIAL1!=TCE;Q_INITIAL1!=APD;Q_INITIAL1!=RSP;Q_INITIAL1!=Customs Decal;Q_INITIAL1!=Border Overflight Exemption;Q_INITIAL1!=TSA Waiver" +
            // MTENG: Transport + Hotels only
            "||Q_REG=MTENG;Q_INITIAL1=Transport;Q_INITIAL1=Hotels;Q_INITIAL1!=Flight Plans;Q_INITIAL1!=Handling/Slots/PPR;Q_INITIAL1!=Customs;Q_INITIAL1!=Permits;Q_INITIAL1!=Catering;Q_INITIAL1!=TCE;Q_INITIAL1!=APD;Q_INITIAL1!=RSP;Q_INITIAL1!=Customs Decal;Q_INITIAL1!=Border Overflight Exemption;Q_INITIAL1!=TSA Waiver" +

            // N224BH: Transport only
            "||Q_REG=N224BH;Q_INITIAL1=Transport;Q_INITIAL1!=Hotels;Q_INITIAL1!=Flight Plans;Q_INITIAL1!=Handling/Slots/PPR;Q_INITIAL1!=Customs;Q_INITIAL1!=Permits;Q_INITIAL1!=Catering;Q_INITIAL1!=TCE;Q_INITIAL1!=APD;Q_INITIAL1!=RSP;Q_INITIAL1!=Customs Decal;Q_INITIAL1!=Border Overflight Exemption;Q_INITIAL1!=TSA Waiver" +
            // N224BH: Transport + Hotels only
            "||Q_REG=N224BH;Q_INITIAL1=Transport;Q_INITIAL1=Hotels;Q_INITIAL1!=Flight Plans;Q_INITIAL1!=Handling/Slots/PPR;Q_INITIAL1!=Customs;Q_INITIAL1!=Permits;Q_INITIAL1!=Catering;Q_INITIAL1!=TCE;Q_INITIAL1!=APD;Q_INITIAL1!=RSP;Q_INITIAL1!=Customs Decal;Q_INITIAL1!=Border Overflight Exemption;Q_INITIAL1!=TSA Waiver" +

            // MUATG: Transport only
            "||Q_REG=MUATG;Q_INITIAL1=Transport;Q_INITIAL1!=Hotels;Q_INITIAL1!=Flight Plans;Q_INITIAL1!=Handling/Slots/PPR;Q_INITIAL1!=Customs;Q_INITIAL1!=Permits;Q_INITIAL1!=Catering;Q_INITIAL1!=TCE;Q_INITIAL1!=APD;Q_INITIAL1!=RSP;Q_INITIAL1!=Customs Decal;Q_INITIAL1!=Border Overflight Exemption;Q_INITIAL1!=TSA Waiver" +
            // MUATG: Transport + Hotels only
            "||Q_REG=MUATG;Q_INITIAL1=Transport;Q_INITIAL1=Hotels;Q_INITIAL1!=Flight Plans;Q_INITIAL1!=Handling/Slots/PPR;Q_INITIAL1!=Customs;Q_INITIAL1!=Permits;Q_INITIAL1!=Catering;Q_INITIAL1!=TCE;Q_INITIAL1!=APD;Q_INITIAL1!=RSP;Q_INITIAL1!=Customs Decal;Q_INITIAL1!=Border Overflight Exemption;Q_INITIAL1!=TSA Waiver",
            "disabled_by": null
            },
            {
              "id": "Q_N372ET",
              "label": "Is the Operator name loaded correctly?",
              "type": "radio",
              "options": [ "Cloudfare", "East Dakota Ventures" ],
              "enabled_by": "Q_REG=N372ET",
              "disabled_by": null
            },
            {
              "id": "Q_N115JS1",
              "label": "Has the operator been changed to PRINCESS GATE LLC?",
              "type": "radio",
              "options": [ "Yes"],
              "enabled_by": "Q_REG=N115JS",
              "disabled_by": null
            },
            {
              "id": "Q_CLIENTREFNBR",
              "label": "Has any client provided reference number been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - No reference number provided" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_TRIPBOW",
              "label": "Has any client provided BOW value been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - No BOW provided" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_ASCEND1",
              "label": "Has the 'SYG' flight number/call sign been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - Callsign differs across legs", "No - Task Loaded" ],
              "enabled_by": "Q_REG=GWEAH||Q_REG=GHODL||Q_REG=GULIT||Q_REG=GNOLA||Q_REG=GCRUX",
              "disabled_by": null
            },
            {
              "id": "Q_AVIONCO1",
              "label": "Has callsign/flight number RJR934 been loaded?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=N934JM",
              "disabled_by": null
            },
            {
              "id": "Q_AVIONCO2",
              "label": "Has callsign/flight number RJR85 been loaded?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_ACTION=New Trip;Q_REG=N885AQ",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA5",
              "label": "If all legs are operating to/from/internal USA, has the flight number/call sign been loaded as W3AMGA?",
              "type": "radio",
              "options": [ "Yes", "No - Legs in trip that are not to/from/internal USA" ],
              "enabled_by": "Q_REG=3AMGA; Q_INITIAL2=USA",
              "disabled_by": null
            },
            {
              "id": "Q_BASIC17",
              "label": "For locations where we are arranging handling, have you sent a Feasibility Guide from uvGO to client?",
              "type": "radio",
              "options": [ "Yes", "No - Task Loaded"],
              "enabled_by": "Q_INITIAL5=Full Trip",
              "disabled_by": "Q_REG=MATEX",
            },
            {
              "id": "Q_ONBOARDED",
              "label": "Does the client show as On-Boarded?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            }
          ]
        },
        {
          "id": "S_ITINERARYTAB",
          "title": "ITINERARY TAB",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": []
        },
        {
          "id": "S_TRIPSCHEDULER",
          "title": "TRIP SCHEDULER",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_DATESANDTIMES",
              "label": "Are dates and times populated in all locations?",
              "type": "radio",
              "options": [ "Yes", "No - Have sent an order to be requested" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_TENTATIVE",
              "label": "Have any tenative times been marked accordingly?",
              "type": "radio",
              "tooltip": "Tentative times can be shown with a small 't' after the time in Falcon",
              "options": [ "Yes", "No - No tentative times in schedule" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_STOPTYPE",
              "label": "Have stop types been correctly loaded?",
              "type": "multi",
              "options": [ "Tech","Bus","RON","EOT" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_GROUNDTIME",
              "label": "Check and list any ground time (ETG) durations?",
              "type": "text",
              //"options": [ "Tech","Bus","RON","EOT" ],
              "enabled_by": "Q_STOPTYPE=Tech",
              "disabled_by": null,
            },
          ]
        },
        {
          "id": "S_LOCATIONSERVICES",
          "title": "LOCATION SERVICES",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": [
              {
              "id": "SUB_ITIN_HANDLING",
              "label": "Handling",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_HANDLINGOWN1",
              "label": "Have all handling services been set to OWN status?",
              "type": "radio",
              "options": [ "Yes"],
              "tooltip": "INITIAL SERVICES indicates WFS not arranging handling",
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=Handling/Slots/PPR",
            },
            {
              "id": "Q_HANDLINGARRANGE",
              "label": "Is UWA arranging all handling?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_INITIAL1=Handling/Slots/PPR",
              "disabled_by": null,
            },
            {
              "id": "Q_HANDLINGPREF",
              "label": "Do selected handlers match client request/preferences",
              "type": "radio",
              "options": [ "Yes","No - NLT Loaded" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_HANDLINGOWN2",
              "label": "Have relevant handling services been set to OWN status?",
              "type": "radio",
              "options": [ "Yes"],
              "tooltip": "HANDLING indicates WFS are not arranging ALL handling services",
              "enabled_by": "Q_HANDLINGARRANGE=No",
              "disabled_by": null,
            },
              {
              "id": "SUB_ITIN_SLOTS",
              "label": "Slots",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_SLOTSARRANGE",
              "label": "Is UWA arranging Slots?",
              "type": "radio",
              "options": [ "Yes - All", "Yes - Some", "No", "Slots Not Required"],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_SLOTSOWN1",
              "label": "Have client provided Slot IDs been loaded into slot service?",
              "type": "radio",
              "options": [ "Yes", "No - All/Some, not known - NLT Loaded"],
              "enabled_by": "Q_SLOTSARRANGE=No",
              "disabled_by": "Q_SLOTSARRANGE=Slots Not Required"
            },
{
              "id": "Q_SLOTSOWN2",
              "label": "Have any slot services been changed to OWN?",
              "type": "radio",
              "options": [ "Yes"],
              "enabled_by": "Q_SLOTSARRANGE=No",
              "disabled_by": "Q_SLOTSARRANGE=Slots Not Required"
            },
              {
              "id": "SUB_ITIN_PPR",
              "label": "PPR",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_PPRARRANGE",
              "label": "Is UWA arranging PPR?",
              "type": "radio",
              "options": [ "Yes - All", "Yes - Some", "No", "PPR Not Required"],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_TEB_EWR_PPR",
              "label": "If arriving into KTEB or KEWR have PPR requirements been reviewed?",
              "type": "multi",
              "options": [ 
                "Arriving in KTEB - PPR Reviewed and changed as required", 
                "Arriving in KEWR - PPR Reviewed and changed as required",
                "Not arriving in KTEB or KEWR", 
                ],
              "enabled_by": "Q_INITIAL2=USA;Q_INITIAL1=Handling/Slots/PPR",
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_LDGPERMITS",
              "label": "LANDING PERMITS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_PERMITFIQ1",
              "label": "Has an FIQ been run to ascertain required permits?",
              "type": "radio",
              "options": [ "Yes - UV Route exists", "Yes - Optimised Route (FOR CONSULTATION ONLY)", "No - Awaiting Route Build" ],
              "enabled_by": null,
              "disabled_by": null,
            },
              {
              "id": "SUB_ITIN_HOTELS",
              "label": "HOTELS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_HOTELARRANGE",
              "label": "Has the client requested UWA arrange Hotels?",
              "type": "radio",
              "tooltip": "Stop Type includes RON and INITIAL QUESTIONS does not include Hotels",
              "options": [ "No - Client Own Booking", "Yes", "Unknown - Task Loaded", "Hotels Not Required"],
              "enabled_by": "Q_STOPTYPE=RON",
              "disabled_by": "Q_INITIAL1=Hotels",
            },
            {
              "id": "Q_HOTELINQUIRY",
              "label": "Has a hotel inquiry been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - Client specified hotel", "No - NLT Loaded"],
              "enabled_by": "Q_HOTELARRANGE=Yes||Q_INITIAL1=Hotels",
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_TRANSPORT",
              "label": "TRANSPORT",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_CUSTOMS",
              "label": "CUSTOMS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_CUSTOMS1",
              "label": "Will UV arrange US Customs?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "Q_INITIAL2=USA",
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_API",
              "label": "API",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_UKGAR1",
              "label": "Will UV or the handler complete UK GAR?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "D_HAS_GAR=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_EAPIS1",
              "label": "Will UV transmit the US eAPIS?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "D_HAS_USA=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_EAPIS1",
              "label": "Will UV transmit the UAE API?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "D_HAS_UAE=Yes",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_SCHEDULE",
          "title": "SCHEDULE",
          "enabled_by": "Q_INITIAL5=Full Trip||Q_INITIAL5=Services Only Trip||Q_INITIAL3=Date/Time||Q_INITIAL3=New Legs",
          "disabled_by": "Q_INITIAL1=Customs Decal||Q_INITIAL1=Border Overflight Exemption||Q_INITIAL1=TSA Waiver",
          "questions": [
            {
              "id": "Q_SCHED1",
              "label": "Did the client provide UTC or Local times? State which.",
              "type": "radio",
              "options": [ "UTC", "Local" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=Transport"
            },
            {
              "id": "Q_SCHEDTRANSPORT",
              "label": "Has a schedule been loaded to the nearest airport to where transport is required (Drivania only)",
              "type": "radio",
              "options": [ "UTC", "Local" ],
              "enabled_by": "Q_INITIAL1=Transport",
              "disabled_by": null,
            },
            {
              "id": "Q_SCHED6",
              "label": "Has the client provided arrival times or flight times?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_SCHED2",
              "label": "Have any client provided timings been checked against FIQ for accuracy?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_SCHED6=Yes",
              "disabled_by": "Q_INITIAL1=APD||Q_INITIAL1=Transport"
            },
            {
              "id": "Q_SCHED7",
              "label": "Has FIQ been run to obtain flight times?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_SCHED6=No",
              "disabled_by": "Q_INITIAL1=Transport"
            },
            {
              "id": "Q_SCHED3",
              "label": "Have times been rounded to the nearest whole 5 mins?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=Transport"
            },
            {
              "id": "Q_SCHED4",
              "label": "For any legs arriving at a technical stop, has the Tech checkbox been selected?",
              "type": "radio",
              "options": [ "Yes", "No applicable legs" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=APD||Q_INITIAL1=Transport",
            },
            {
              "id": "Q_SCHEDTIMEDATE",
              "label": "Have any client specified time on the ground been maintained (quick turn, tech stop etc)?",
              "type": "radio",
              "options": [ "Yes", "No applicable legs" ],
              "enabled_by": "Q_INITIAL3=Date/Time",
              "disabled_by": "Q_INITIAL1=Transport",
            },
            {
              "id": "Q_SCHED5",
              "label": "Has COMPASS highlighted any potential timing issues with the planned schedule (curfews, operational hours, NOTAMS)?",
              "type": "radio",
              "options": [ "Yes - Client Advised", "No" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=APD||Q_INITIAL1=Transport"
            },
          ]
        },
        {
          "id": "S_LEGSERVICES",
          "title": "LEG SERVICES",
          "enabled_by": "Q_ACTION=New Trip||Q_INITIAL1=Permits||Q_INITIAL3=Date/Time",
          "disabled_by": null,
          "questions": [
              {
              "id": "SUB_ITIN_FLIGHTFOLLOWING",
              "label": "FLIGHT FOLLOWING",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_OVFPERMITS",
              "label": "OVERFLIGHT PERMITS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_PERMITSDATETIME",
              "label": "Have all permits been checked for validity and where required a revision sent?",
              "type": "multi",
              "options": [ "Overflight Permits", "Landing Permits"],
              "enabled_by": "Q_INITIAL3=Date/Time",
              "disabled_by": "Q_INITIAL1=APD",
            },            
            {
              "id": "Q_PERMITS1",
              "label": "Has an FIQ been run to ascertain required permits?",
              "type": "radio",
              "options": [ "Yes - UV Route exists", "Yes - Optimised Route (FOR CONSULTATION ONLY)", "No - Client Provided Route (Not yet in UV Routes)" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=APD||Q_INITIAL3=Date/Time"
            },
            {
              "id": "Q_PERMITS2",
              "label": "Have Route build tasks been loaded for any legs which don't have UV Routes?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_PERMITS1=Yes - Optimised Route (FOR CONSULTATION ONLY)",
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITS3",
              "label": "Have Route build tasks been loaded to verify Client Provided Routes?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_PERMITS1=No - Client Provided Route (Not yet in UV Routes)",
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITS10",
              "label": "Have Route builds been loaded to Route History?",
              "type": "radio",
              "options": [ "Yes", "No - Awaiting Route Builds" ],
              "enabled_by": "Q_PERMITS2=Yes||Q_PERMITS3=Yes",
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITS11",
              "label": "Has FIQ Route been loaded to Route History?",
              "type": "radio",
              "options": [ "Yes"],
              "enabled_by": "Q_PERMITS1=Yes - UV Route exists",
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITS4",
              "label": "Does FIQ indicate permits are required?",
              "type": "multi",
              "options": [ "Yes - Landing", "Yes - Overflights", "No" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=APD||Q_INITIAL3=Date/Time||Q_PERMITS1=No - Client Provided Route (Not yet in UV Routes)"
            },
            {
              "id": "Q_PERMITS5",
              "label": "Is UWA obtaining permits?",
              "type": "multi",
              "options": ["Yes - Landing", "Yes - Overflights", "Yes - Block Permits", "No" ],
              "enabled_by": "Q_PERMITS4=Yes - Landing||Q_PERMITS4=Yes - Overflights",
              "disabled_by": null,
            },
            {
              "id": "Q_CAMOSA2",
              "label": "Is the Nigeria block permit loaded in CAPPS valid and current?",
              "type": "multi",
              "options": [ "Yes - Loaded to trip", "No - CAMOSA advised - Task Loaded" ],
              "enabled_by": "Q_REG=MTENG||Q_REG=N224BH",
              "disabled_by": "Q_INITIAL1=APD"
            },
            {
              "id": "Q_WWS12",
              "label": "Is the Bolivia block permit loaded in CAPPS valid and current (Check Excel File for City Pair/Routing?",
              "type": "multi",
              "options": [ "Yes - Checked and Valid", "No - Amendment to Block Permit requested", "N/A - Flight doesn't overfly Bolivia" ],
              "enabled_by": "Q_REG=P4WWS",
              "disabled_by": "Q_INITIAL1=APD"
            },
            {
              "id": "Q_PERMITS6",
              "label": "Have permits been requested?",
              "type": "multi",
              "options": [ "Yes - Format Send", "Yes - Special Form", "Yes - Website", "No - Missing Information - Task Loaded" ],
              "enabled_by": "Q_PERMITS5=Yes - All||Q_PERMITS5=Yes - Landing||Q_PERMITS5=Yes - Overflights",
              "disabled_by": "Q_INITIAL1=APD"
            },
            {
              "id": "Q_PERMITS7",
              "label": "Have any permit required fields been completed?",
              "type": "multi",
              "options": [ "Yes - Route", "Yes - FIR Boundries", "Yes - Purpose", "Yes - Business Contact", "No - Task Loaded" ],
              "enabled_by": "Q_PERMITS5=Yes - Landing||Q_PERMITS5=Yes - Overflights||Q_PERMITS5=Yes - All",
              "disabled_by": "Q_INITIAL1=APD"
            },
            {
              "id": "Q_PERMITS8",
              "label": "Have required supporting documents been sent to the permit provider?",
              "type": "multi",
              "options": [ "Yes - Added to Message Log", "No - Missing Documents - Task Loaded" ],
              "enabled_by": "Q_PERMITS6=Yes - Format Send||Q_PERMITS6=Yes - Special Form||Q_PERMITS6=Yes - Website",
              "disabled_by": "Q_INITIAL1=APD"
            },
            {
              "id": "Q_PERMITS9",
              "label": "Has the client provided required permit numbers?",
              "type": "radio",
              "options": [ "Yes - Loaded to Trip", "No - Task Loaded" ],
              "enabled_by": "Q_PERMITS5=No",
              "disabled_by": "Q_INITIAL1=APD"
            },
              {
              "id": "SUB_ITIN_SPECFLIGHTAUTH",
              "label": "SPECIAL FLIGHT AUTHORISATIONS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_PERMITTOFLY",
              "label": "Is the aircraft being operated on a Permit To Fly?",
              "type": "radio",
              "options": [ "Yes - Loaded to Trip", "No - Task Loaded" ],
              "enabled_by": null,
              "disabled_by": null,
            },
          ]
        },
        {
          "id": "S_FLIGHTPLANNING",
          "title": "FLIGHT PLANNING",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": []
        },
        {
          "id": "S_WEATHER",
          "title": "WEATHER",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": []
        },
        {
          "id": "S_TRIPSERVICES",
          "title": "TRIP SERVICES",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_TRIPSERVICE1",
              "label": "Credit Exposure?",
              "type": "radio",
              "options": [ "Yes", "No", "Maybe", "I don't know, could you repeat the question?" ],
              "enabled_by": "Q_ACTION=New Trip||Q_INITIAL1=APD||Q_INITIAL3=Crew/Pax",
              "disabled_by": null
            },
            {
              "id": "SUB_ITIN_BOE",
              "label": "BORDER OVERFLIGHT EXEMPTION",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Border Overflight Exemption",
              "disabled_by": null
            },
            {
              "id": "Q_USABOE",
              "label": "If the client is arriving into the US from South America do they have a Border Overflight Exemption (BOE)?",
              "type": "radio",
              "options": [
                "Client not arriving from South America",
                "No - Client Advised - Task Loaded",
                "No - UWA to arrange",
                "Yes - Client has a valid BOE"
              ],
              "enabled_by": "Q_INITIAL2=USA",
              "disabled_by": "Q_INITIAL1=Border Overflight Exemption"
            },
            {
              "id": "SUB_ITIN_DECAL",
              "label": "CUSTOMS DECAL",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Border Overflight Exemption",
              "disabled_by": null
            },
            {
              "id": "SUB_ITIN_TSAWAIVER",
              "label": "TSA WAIVER",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Border Overflight Exemption",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_MANIFESTTAB",
          "title": "MANIFEST TAB",
          "enabled_by": "Q_ACTION=New Trip||Q_INITIAL1=APD||Q_INITIAL3=Crew/Pax",
          "disabled_by": null,
          "questions": [
            {
              "id": "SUB_ITIN_CREW",
              "label": "CREW",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_CREWMMANIFEST1",
              "label": "Is any Crew information missing?",
              "type": "radio",
              "options": [ "Yes - NLT Loaded", "No" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "SUB_ITIN_PAX",
              "label": "PASSENGERS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_PAXMMANIFEST1",
              "label": "Is any Passenger information missing?",
              "type": "radio",
              "options": [ "Yes - NLT Loaded", "No" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_MANIFEST2",
              "label": "Has the client specified passports to be used in their request?",
              "type": "radio",
              "options": [ "Yes - In trip request", "No - Client has preferred passports", "No - Task Loaded" ],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_115MANIFEST",
              "label": "Confirm Hala loaded correctly? In the US (domestic legs only) she uses the name Hala Mnaymneh. Everywhere else, she uses Hala Elhabashi",
              "type": "multi",
              "options": [ "Yes - Loaded as Mnaymneh for US domestic legs", "Yes - Loaded as Elhabashi for non US domestic legs", "Hala not on trip" ],
              "enabled_by": "Q_REG=N115JS;Q_INITIAL2=USA",
              "disabled_by": null
            },
            {
              "id": "Q_115MANIFEST",
              "label": "Confirm you have loaded pax Hala correctly as Hala Elhabashi",
              "type": "radio",
              "options": [ "Yes - Loaded as Hala Elhabashi", "Hala not on trip" ],
              "enabled_by": "Q_REG=N115JS",
              "disabled_by": "Q_INITIAL2=USA",
            },
            {
              "id": "Q_MANIFEST5",
              "label": "Have the client specified passports been loaded to the trip and any new documents loaded in a Task DM-RDB?",
              "type": "multi",
              "options": [ "Existing Passports - Checked and loaded", "New Passports - DM-RDB Task Loaded" ],
              "enabled_by": "Q_MANIFEST2=Yes - In trip request",
              "disabled_by": "Q_MANIFEST2=No - Client has preferred passports||No - Task Loaded"
            },
            {
              "id": "Q_MANIFEST3",
              "label": "Do passports selected for trip match the client specified or preferred passports?",
              "type": "radio",
              "options": [ "Yes", "No - Task Loaded" ],
              "enabled_by": "Q_MANIFEST2=No - Client has preferred passports",
              "disabled_by": null
            },
            {
              "id": "Q_MANIFEST4",
              "label": "Have any new people added to CAPPS been MK Verified?",
              "type": "radio",
              "options": [ "Yes", "No new people added" ],
              "enabled_by": "Q_MANIFEST1=No||Q_MANIFEST1=Some Info Provided",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_INFORMATIONTAB",
          "title": "Information Tab",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [


            {
              "id": "Q_HOTEL6",
              "label": "Has the client advised a hotel choice?",
              "type": "radio",
              "options": [ "Yes", "No - Client Task Loaded"],
              "enabled_by": "Q_HOTEL4=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_HOTEL7",
              "label": "Has the client choice been booked?",
              "type": "radio",
              "options": [ "Yes - Confirmation sent to client", "No - Hotel not available - Client Advised"],
              "enabled_by": "Q_HOTEL6=Yes||Q_HOTEL4=No - Client specified hotel",
              "disabled_by": null
            },
            {
              "id": "Q_HOTEL5",
              "label": "Does CAPPS suggest an early checkin/late checkout?",
              "type": "radio",
              "options": [ "Yes - Client Advised", "Yes - Requested (on client instruction)", "Not Suggested" ],
              "enabled_by": "Q_HOTEL1=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_HOTEL2",
              "label": "Has the client been advised of the cancellation policy if a short notice booking?",
              "type": "radio",
              "options": [ "Yes", "No - Client Own Booking", "Not Required" ],
              "enabled_by": "Q_HOTEL1=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_HOTEL3",
              "label": "Have Hotels been loaded as OWN to the trip?",
              "type": "radio",
              "options": [ "Yes", "No - Task Loaded" ],
              "enabled_by": "Q_HOTEL1=No - Client Own Booking",
              "disabled_by": null
            },

          ]
        },
        {
          "id": "S_COMMUNICATIONSTAB",
          "title": "COMMUNICATIONS TAB",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_USA1",
              "label": "Is the client arriving into an AOE?",
              "type": "radio",
              "options": [
                "AOE",
                "AOE - On Request - Task Loaded",
                "No - Task Loaded",
              ],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_USA2",
              "label": "Is the client arriving CBP published hours?",
              "type": "radio",
              "options": [
                "Yes",
                "No - Client is arriving outside CBP hours, RSP Requested",
                "No - Client is arriving outside CBP hours, RSP Not available"
              ],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_USA3",
              "label": "If the client is arriving into the US from South America do they have a Border Overflight Exemption (BOE)?",
              "type": "radio",
              "options": [
                "Client not arriving from South America",
                "No - Client Advised - Task Loaded",
                "No - UWA to arrange",
                "Yes - Client has a valid BOE"
              ],
              "enabled_by": null,
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_DELIVERIESTAB",
          "title": "DELIVERIES TAB",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_GAPIS3",
              "label": "Is UWA transmitting the eAPIS?",
              "type": "radio",
              "options": [ "Yes", "No", "Not Advised - Task Loaded" ],
              "enabled_by": "Q_INITIAL2=USA||Q_INITIAL1=RSP",
              "disabled_by": null
            },
            {
              "id": "Q_GAPIS4",
              "label": "Has eAPIS been checked for missing information?",
              "type": "radio",
              "options": [ "eAPIS ready for transmission", "Missing Information - Task Loaded", "Missing Info - Clearance Location", "Missing Info - Customs Decal (UWA arranging)" ],
              "enabled_by": "Q_GAPIS3=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_GAPIS5",
              "label": "Has the client provided a copy of the eAPIS transmission?",
              "type": "radio",
              "options": [ "Yes", "No - Task Loaded" ],
              "enabled_by": "Q_GAPIS3=No",
              "disabled_by": null
            },
            {
              "id": "Q_GAPIS1",
              "label": "Does Global APIS indicate a required API/APIS transmission (non US eAPIS)?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=APD||Q_INITIAL1=RSP"
            },
            {
              "id": "Q_GAPIS2",
              "label": "Is UWA transmitting the required API/APIS?",
              "type": "radio",
              "options": [ "Yes", "No", "Not Advised - Task Loaded" ],
              "enabled_by": "Q_GAPIS1=Yes",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_FPWX",
          "title": "FLIGHT PLANNING AND WX",
          "enabled_by": "Q_INITIAL1=Flight Plans",
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_3AMGA7",
              "label": "What flight type is this?",
              "type": "radio",
              "options": [ "IG", "IX / Head", "A Mix", "Unknown - Task Loaded" ],
              "enabled_by": "Q_REG=3AMGA",
              "disabled_by": null
            },
            {
              "id": "Q_FPWX2",
              "label": "Are all flight planning specifications loaded?",
              "type": "radio",
              "options": [ "Yes", "Missing Information - Task Loaded" ],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_FPWX3",
              "label": "Indicate where loaded alternates have come from?",
              "type": "radio",
              "options": [
                "Client Provided",
                "Client Preference (Dashboard or Customer Profile)",
                "UVCH",
                "NONE"
              ],
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA6",
              "label": "For all legs operating to/from/internal USA, has the flight number/call sign been loaded as W3AMGA?",
              "type": "radio",
              "options": [ "Yes", "No - Legs in trip that are not to/from/internal USA" ],
              "enabled_by": "Q_3AMGA5=No - Legs in trip that are not to/from/internal USA",
              "disabled_by": null
            },
            {
              "id": "Q_FPWX8",
              "label": "How have the payload figures been calculated?",
              "type": "radio",
              "options": [
                "Payload - Standard",
                "Payload - Non Standard",
                "Payload - Non Automated"
              ],
              "enabled_by": null,
              "disabled_by": "Q_REG=N115JS",
            },
            {
              "id": "Q_N115JS2",
              "label": "How have the payload figures been calculated?",
              "type": "radio",
              "options": [
                "Payload - Non Standard (261lbs per pax)",
                "Payload - Non Automated"
              ],
              "enabled_by": "Q_REG=N115JS",
              "disabled_by": null
            },
            {
              "id": "Q_FPWX9",
              "label": "Has any non standard payload been noted in the flight planning comments?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_FPWX8=Payload - Non Standard||Q_FPWX8=Payload - Non Automated||Q_N115JS2=Payload - Non Automated",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA2",
              "label": "Have any client provided DCNs' been loaded to flight planning comments?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=3AMGA; Q_PERMITS4=Yes - Landing||Q_PERMITS5=Yes - Overflights||Q_3AMGA3=Not Required - DCNs provided",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA3",
              "label": "Has 'Avoid Swiss Airspace' and/or 'Avoid Italian Airspace' been loaded to flight planning comments?",
              "type": "multi",
              "options": [ "Avoid Swiss Airspace", "Avoid Italian Airspace", "Not Required - DCNs provided" ],
              "enabled_by": "Q_REG=3AMGA",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA8",
              "label": "Has 'Add to field 18 STS/HEAD' been loaded to flight planning comments?",
              "type": "multi",
              "options": [ "Yes"],
              "enabled_by": "Q_3AMGA7=IX / Head||Q_3AMGA7=A Mix",
              "disabled_by": null
            },
            {
              "id": "Q_FPWX13",
              "label": "For MTENG and N224BH when a dual purpose delivery is sent to Execujet, have you loaded a prefile-only FPL delivery to Execujet each day of operation 12 hrs prior to departure so they can file the plan locally?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=N224BH||Q_REG=MTENG",
              "disabled_by": null
            },
            {
              "id": "Q_MATEXFPWX",
              "label": "Confirm WX/NOTAMS are loaded as per MATEX preferences?",
              "type": "multi",
              "options": [ "European Legs loaded with NO WX/NOTAMS included", "International Legs loaded with WX/NOTAMS included" ],
              "enabled_by": "Q_REG=MATEX",
              "disabled_by": null
            },            
          ]
        },
        {
          "id": "S_DELIVERIES",
          "title": "DELIVERIES TAB",
          "enabled_by": "Q_ACTION=Flight Plans",
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_DELIVTIMEDATE",
              "label": "Has the delivery been sent out/filed?",
              "type": "radio",
              "options": [ "Yes", "Yes - New Delivery loaded", "No" ],
              "enabled_by": "Q_INITIAL3=Date/Time||Q_INITIAL3=Crew/Pax",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVTIMEDATE2",
              "label": "Have Merges been re run with the new date/time?",
              "type": "radio",
              "options": [ "Yes", "No - Changed leg greater than 24hrs away - Task Loaded" ],
              "enabled_by": "Q_INITIAL3=Date/Time;Q_DELIVTIMEDATE=Yes - New Delivery loaded||Q_INITIAL3=Date/Time;Q_DELIVTIMEDATE=No",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVCREWPAX1",
              "label": "Have Merges been re run with the new manifest?",
              "type": "radio",
              "options": [ "Yes", "No - Changed leg greater than 24hrs away - Task Loaded" ],
              "enabled_by": "Q_INITIAL3=Crew/Pax;Q_DELIVTIMEDATE=Yes - New Delivery loaded||Q_INITIAL3=Crew/Pax;Q_DELIVTIMEDATE=No",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVERIES1",
              "label": "Has Flight Following been loaded to each leg or to the first leg of a multi-leg day?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_INITIAL1=RSP||Q_INITIAL1=APD",
              "disabled_by": "Q_INITIAL1=Flight Plans"
            },   
            {
              "id": "Q_DELIVERIES2",
              "label": "Have Deliveries been loaded to each leg or to the first leg of a multi-leg day?",
              "type": "radio",
              "options": [ "Yes", "No - Task Loaded" ],
              "enabled_by": "Q_INITIAL1=Flight Plans",
              "disabled_by": null,
            },         
            {
              "id": "Q_DELIVERIES6",
              "label": "Who specified the delivery recipients for this trip?",
              "type": "radio",
              "options": [ "Client in request", "Client Preferences", "Unknown - Task Loaded" ],
              "enabled_by": "Q_INITAL1=Flight Plans||Q_DELIVTIMEDATE=Yes - New Delivery loaded",
              "disabled_by": "Q_REG=N372ET||Q_REG=3AMGA||Q_REG=MATEX||Q_REG=N115JS",
            },            
            {
              "id": "Q_DELIVERIES3",
              "label": "For deliveries requiring QC, have you loaded the EOC RMP address instead of the standard address?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=P4WWS||Q_REG=MTENG",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA9",
              "label": "Have deliveries been loaded to operational crew, handler and Lionel Chouard?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=3AMGA",
              "disabled_by": null,
            },  
            {
              "id": "Q_DELIVERIES4",
              "label": "Have 24hr Summary (Preliminary) flights been loaded?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=P4WWS||Q_REG=MTENG",
              "disabled_by": null
            },
            {
              "id": "Q_CAMOSA1",
              "label": "For legs departing Nigeria have ICAO only plans been loaded?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=N224BH||Q_REG=MTENG",
              "disabled_by": null
            },
            {
              "id": "Q_N372ET1",
              "label": "Confirm that deliveries have been loaded to crew only? - Ensure delivery is NOT sent to Handlers",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_REG=N372ET",
              "disabled_by": null
            },
            {
              "id": "Q_N115JS3",
              "label": "Confirm you have loaded two separate operational book entries for each delivery? One with the CFP-only and another containing the WX/NTMs/Merges (Client requests the package always is split into two)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_REG=N115JS",
              "disabled_by": null
            },
            {
              "id": "Q_N115JS4",
              "label": "Confirm you have included FLIGHTPLANS@FDFMAIL.COM as delivery recipient",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_REG=N115JS",
              "disabled_by": null
            },
            {
              "id": "Q_N115JS5",
              "label": "Confirm Deliveries have been loaded with a 180min offset?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_REG=N115JS||Q_REG=3AMGA",
              "disabled_by": null
            },
            {
              "id": "Q_N115JS6",
              "label": "Have Summary Deliveries been loaded (24hrs) for all international legs?",
              "type": "radio",
              "options": [ "Yes", "No - Internal EU legs", "No - Task Loaded" ],
              "enabled_by": "Q_REG=N115JS",
              "disabled_by": null
            },
            {
              "id": "Q_MATEX2",
              "label": "Has the delivery been loaded to both crew members and to the Falcon address?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_REG=MATEX",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVERIES5",
              "label": "What time are the packages being delivered? (write the dlvy times)",
              "type": "text",
              "options": null,
              "enabled_by": "Q_DELIVERIES1=Yes||Q_DELIVERIES2=Yes||Q_DELIVTIMEDATE=Yes - New Delivery loaded",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVTIMEDATE4",
              "label": "Has the time correctly updated for any affected deliveries?",
              "type": "radio",
              "options": [ "Deliveries updated correctly", "Deliveries manually updated" ],
              "enabled_by": "Q_INITIAL3=Date/Time",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVTIMEDATE3",
              "label": "Remember that Summary/Preliminary/Sample deliveries have Locked Delivery times, so they will not automatically update when the schedule changes",
              "type": "radio",
              "options": [ "Summary Deliveries unlocked and and time corrected", "No applicable deliveries" ],
              "enabled_by": "Q_INITIAL3=Date/Time",
              "disabled_by": null,
            },
          ]
        },
        {
          "id": "S_FUEL",
          "title": "FUEL",
          "enabled_by": "Q_ACTION=New Trip||Q_ACTION=Trip Update;Q_INITIAL3=Date/Time",
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_FUELMATEX",
              "label": "Confirm Fuel has been set to DO NOT CONTACT?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_REG=MATEX",
              "disabled_by": null,
            },
          ]
        },
        {
          "id": "S_TRANSPORT",
          "title": "TRANSPORT",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_TRANSDATETIME",
              "label": "Have any transport bookings been adjusted to meet the time/date change?",
              "type": "radio",
              "options": ["Yes", "No - Transport bookings not affected" ],
              "enabled_by": "Q_INITIAL3=Date/Time",
              "disabled_by": null,
            },
            {
              "id": "Q_TRANSPORT0",
              "label": "Has any client requested transport been requested?",
              "type": "radio",
              "options": [ "Yes", "No transport requested" ],
              "enabled_by": "Q_INITIAL5=Full Trip",
              "disabled_by": null,
            },            
            {
              "id": "Q_TRANSPORT1",
              "label": "Who has Crew Transport been requested with?",
              "type": "radio",
              "options": [ "Handler", "Drivania" ],
              "enabled_by": "Q_TRANSPORT0=Yes||Q_INITIAL1=Transport",
              "disabled_by": "Q_REG=N372ET",
            },
            {
              "id": "Q_TRANSPORT3",
              "label": "Who has Crew Transport been requested with?",
              "type": "radio",
              "options": [ "GGT", "Drivania"],
              "enabled_by": "Q_TRANSPORT0=Yes;Q_REG=N372ET",
              "disabled_by": null,
            },
            {
              "id": "Q_TRANSPORT4",
              "label": "Has the client been advised we are unable to provide transport through GGT and a quote been requested from Drivania?",
              "type": "multi",
              "options": [ "Client Advised", "Drivania Quote Requested", "Drivania quote sent to client for approval"],
              "enabled_by": "Q_TRANSPORT3=Drivania",
              "disabled_by": null,
            },
            {
              "id": "Q_TRANSPORT5",
              "label": "Has the email to GGT been sent to the RMP and a task created?",
              "type": "multi",
              "options": [ "Email sent to RMP", "Transportation - GGT - ICAO task created", "Task follow up set for 48hrs prior to pick up"],
              "enabled_by": "Q_TRANSPORT3=GGT",
              "disabled_by": null,
            },
            {
              "id": "Q_3AMGA13",
              "label": "Who has Crew Transport been aranged with?",
              "type": "radio",
              "options": [ "Handler", "Own", "Drivania (Other options unavailable)" ],
              "enabled_by": "Q_3AMGA10=Crew Transport (if required)",
              "disabled_by": null,
            },
            {
              "id": "Q_TRANSPORT2",
              "label": "Has a quote for transport been sent to the client?",
              "type": "radio",
              "options": [ "Handler", "Drivania", "Own" ],
              "enabled_by": "Q_REG=N700ME;Q_INITIAL1=Transport",
              "disabled_by": null,
            },
            {
              "id": "Q_TRANSPORT6",
              "label": "Has a cancellation policy been advised to the client if booking is within 24hrs?",
              "type": "radio",
              "options": [ "Handler", "Drivania", "Own" ],
              "enabled_by": "Q_INITIAL5=Full Trip||Q_INITIAL1=Transport",
              "disabled_by": "Q_TRANSPORT1=No Transport Required",
            },
          ]
        },
        {
          "id": "S_CATERING",
          "title": "CATERING",
          "enabled_by": "Q_ACTION=New Trip",
          "disabled_by": null,
          "questions": []
        },
        {
          "id": "S_TASKFINAL",
          "title": "TASKS",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_BILLINGPFT",
              "label": "Have you pre-loaded a 'Billing - PFT' Task?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_INITIAL5=Full Trip||Q_INITIAL5=Services Only Trip",
              "disabled_by": "Q_INITIAL1=Customs Decal||Q_INITIAL1=Border Overflight Exemption||Q_INITIAL1=TSA Waiver",
            },
            {
              "id": "Q_TASKFINAL1",
              "label": "Task to chase for PIC Name (FRONT PAGES)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_BASIC6=Not known - Task loaded",
              "disabled_by": null
            },
            {
              "id": "Q_TASKFINAL2",
              "label": "Task to chase for Trip FAR Type (FRONT PAGES)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_BASIC11=Not advised - Task Loaded",
              "disabled_by": null,
            },
            {
              "id": "Q_TASKFINAL3",
              "label": "Task to chase for Outstanding Schedule (Missing schedule or No EOT selected)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_BASIC12=No - Task Loaded",
              "disabled_by": null
            },
            {
              "id": "Q_TASKFINAL5",
              "label": "Task to chase for crew/pax manifest (Missing Information selected)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_MANIFEST1=Crew - Task Loaded||Q_MANIFEST1=Passengers - Task Loaded||Q_MANIFEST1=Both - Task Loaded",
              "disabled_by": null
            },
            {
              "id": "Q_TASKFINAL4",
              "label": "Task to chase for Flight Planning Specs (Missing FP specs selected)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_FPWX2=Missing Information - Task Loaded",
              "disabled_by": null
            },
            {
              "id": "Q_TASKFINAL6",
              "label": "Task to chase for documents (Missing Documents selected)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_PERMITS8=No - Missing Documents - Task Loaded",
              "disabled_by": null
            },
            {
              "id": "Q_CAMOSA4",
              "label": "Has a Task been loaded to generate passport flip gendecs for any legs to/from Nigeria",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_REG=MTENG",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA11",
              "label": "Task to chase for slot IDs (Client Arranging slots selected)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_SLOTS1=No||Q_SLOTS1=Yes - Some",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA12",
              "label": "Task to chase for PPR numbers (Client Arranging PPR selected)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_PPR1=No||Q_PPR1=Yes - Some",
              "disabled_by": null
            },
            {
              "id": "Q_TASKDRIVER",
              "label": "Task to chase for driver details (name, registration, contact number)",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_TRANSPORT1=Handler",
              "disabled_by": null
            },
            {
              "id": "Q_TASKMERGES",
              "label": "Task to generate and attach merges 24hrs prior to delivery date/time",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_INITIAL5=Full Trip||Q_DELIVTIMEDATE2=No - Changed leg greater than 24hrs away - Task Loaded",
              "disabled_by": "Q_INITIAL1=Customs Decal||Q_INITIAL1=Border Overflight Exemption||Q_INITIAL1=TSA Waiver",
            },
            {
              "id": "Q_TASKDECAL",
              "label": "Has a Customs Decal Task been loaded with the below information",
              "type": "multi",
              "options": [ "Decal Year", "Aircraft Registration(s)", "Aircraft Manufacturer/Type", "Year of Manufacture", "Email for Receipt" ],
              "enabled_by": "Q_INITIAL1=Customs Decal",
              "disabled_by": null
            },
            {
              "id": "Q_TASKBOE",
              "label": "Has a BOE Task been loaded with the below information",
              "type": "multi",
              "options": [ "New Request/Renewal", "Operator Name", "Private/Charter/Both", "Email for Receipt" ],
              "enabled_by": "Q_INITIAL1=Border Overflight Exemption",
              "disabled_by": null
            },
            {
              "id": "Q_TASKTSAW",
              "label": "Has a TSA Waiver Task been loaded with the below information",
              "type": "multi",
              "options": [ "New Request/Renewal/Modification", "Client email with application", "Email for Receipt" ],
              "enabled_by": "Q_INITIAL1=TSA Waiver",
              "disabled_by": null
            },
            {
              "id": "Q_TASK700HA",
              "label": "Task been loaded to provide client with Daily Briefs starting 1week prior to departure",
              "type": "radio",
              "options": [ "Yes",],
              "enabled_by": "Q_REG=N700HA",
              "disabled_by": null
            },

          ]
        },

//-------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------DASSAULT FLIGHT PLAN QC CHECKLIST---------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
        {
          "id": "S_FPQC",
          "title": "FRONT PAGE & TRIP SUMMARY",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_FPQC0",
              "label": "Delivery Type?",
              "type": "radio",
              "options": [ "Summary/Preliminary", "Live Delivery" ],
              "enabled_by": "Q_ACTION=Flight Plan QC",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC18",
              "label": "Is the flight is to USA/Canada?",
              "type": "radio",
              "options": [ "USA","Canada", "No" ],
              "enabled_by": "Q_INITIAL4=Dassault;Q_FPQC0=Live Delivery",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC1",
              "label": "Is the Flight Plan named to the correct Captain (front page of trip and ICAO ATC plan)?",
              "type": "radio",
              "options": [ "Yes", ],
              "enabled_by": "Q_INITIAL4=Dassault",
              "disabled_by": "Q_INITIALFPQC=Foreflight"
            },
            {
              "id": "Q_FPQC2",
              "label": "What is the aircraft type?",
              "type": "radio",
              "options": [ "F2TH", "F900", "FA6X", "FA7X/FA8X" ],
              "enabled_by": "Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC3",
              "label": "Review the Flight Summary page. Ensure all services are showing the correct status. If not coordinate with Houston to have the package reissued.",
              "type": "radio",
              "options": [ "Correct", "Houston to reissue" ],
              "enabled_by": "Q_INITIAL4=Dassault",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_FPQC",
          "title": "COMPUTERISED FLIGHT PLAN",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [

            {
              "id": "Q_FPQC4",
              "label": "Is the CFP format (FMT ID) - 4O (for French crew) or A2 (for US crew)?",
              "type": "radio",
              "options": [ "4O", "A2", ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": "Q_INITIALFPQC=Foreflight",
            },
            {
              "id": "Q_FPQC-F2TH",
              "label": "Do the fuel figures match Dassaults' (EASA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 30mins, minimum 700lb", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=4O;Q_FPQC2=F2TH||Q_INITIALFPQC2=EASA;Q_FPQC2=F2TH",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-F900",
              "label": "Do the fuel figures match Dassaults' (EASA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 30mins, minimum 800lb", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=4O;Q_FPQC2=F900||Q_INITIALFPQC2=EASA;Q_FPQC2=F900",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-FA7X",
              "label": "Do the fuel figures match Dassaults' (EASA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 30mins, minimum 900lb", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=4O;Q_FPQC2=FA7X/FA8X||Q_INITIALFPQC2=EASA;Q_FPQC2=FA7X/FA8X",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-FA6X",
              "label": "Do the fuel figures match Dassaults' (EASA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 30mins, minimum 1000lb", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=4O;Q_FPQC2=FA6X||Q_INITIALFPQC2=EASA;Q_FPQC2=FA6X",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-F2THUS",
              "label": "Do the fuel figures match Dassaults' (FAA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 45mins", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=A2;Q_FPQC2=F2TH||Q_INITIALFPQC2=FAA;Q_FPQC2=F2TH",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-F900US",
              "label": "Do the fuel figures match Dassaults' (FAA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 45mins", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=A2;Q_FPQC2=F900||Q_INITIALFPQC2=FAA;Q_FPQC2=F900",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-FA7XUS",
              "label": "Do the fuel figures match Dassaults' (FAA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 45mins", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=A2;Q_FPQC2=FA7X/FA8X||Q_INITIALFPQC2=FAA;Q_FPQC2=FA7X/FA8X",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC-FA6XUS",
              "label": "Do the fuel figures match Dassaults' (FAA) requirements?",
              "type": "multi",
              "options": [ "RTE.R - 5% - minimum 200lb", "ALT.R - minimum 600lb", "FIN.RES - 45mins", "TAXI OUT - minimum 200lb", "TTL.FUEL - Matches value requested in trip" ],
              "enabled_by": "Q_FPQC4=A2;Q_FPQC2=FA6X||Q_INITIALFPQC2=FAA;Q_FPQC2=FA6X",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC11",
              "label": "If flying lots of short sectors in one day, Dassault will normally uplift X amount at the start of the day and subsequent legs will use RMNG fuel. If so, check that following legs are loaded as such and not as ‘Stored Aircraft Record Fuel’.",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC10",
              "label": "Have you checked FP Comments for BOW figures and any other special requests?",
              "type": "multi",
              "options": [ "Standard BOW", "Client specified BOW", "M82 loaded for Ferry legs", "Not Applicable" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC5",
              "label": "Have SIDs & STARs been included in the plans?",
              "type": "radio",
              "options": [ "Yes", "No - Header included" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC22",
              "label": "Have any relevant permits, slots or PPR numbers been included on the ICAO plan?",
              "type": "radio",
              "options": [ "Yes", "No permits, slots or PPR" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC6",
              "label": "Have you changed the trip from UVCH to the chosen alternate listed on the preliminary plan?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_INITIAL4=Dassault;Q_FPQC0=Summary/Preliminary",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC9",
              "label": "Have ETPs been included (on flights over 4 hours)?",
              "type": "multi",
              "options": [ "Not Required - (Flight less than 4hrs)", "Depressurisation", "One Engine Inoperative" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
{
              "id": "Q_FPQCWWS1",
              "label": "Do the flight times match the trip?",
              "type": "radio",
              "options": [ "Yes", "No - Trip updated for accuracy" ],
              "enabled_by": "Q_INITIAL4=Wideworld",
              "disabled_by": null
            },
            {
              "id": "Q_FPQCWWS2",
              "label": "Has M85 or the client specified speed been used?",
              "type": "radio",
              "options": [ "Yes", "No - Header added to delivery" ],
              "enabled_by": "Q_INITIAL4=Wideworld",
              "disabled_by": null
            },
            {
              "id": "Q_FPQCWWS3",
              "label": "Does the route from the full delivery match what was sent in any previous summaries?",
              "type": "radio",
              "options": [ "Yes", "No - Header added to delivery" ],
              "enabled_by": "Q_INITIAL4=Wideworld;Q_FPQC0=Live Delivery",
              "disabled_by": null
            },
            {
              "id": "Q_FPQCWWS6",
              "label": "Do the chosen flight levels on the plan conform to the ICAO IFR eastbound/westbound requirement?",
              "type": "radio",
              "options": [ "Yes", "No - Header added to delivery" ],
              "enabled_by": "Q_INITIAL4=Wideworld",
              "disabled_by": null
            },
            {
              "id": "Q_FPQCWWS5",
              "label": "Flight Planning /Weather Team are to call the crew if there is any significant diversion from the summary. (routing, level, speeds, SIGWX etc.) Ask them to speak with the crew and record name.",
              "type": "text",
              "enabled_by": "Q_FPQC0=Live Delivery;Q_FPQCWWS2=No - Header added to delivery||Q_FPQC0=Live Delivery;Q_FPQCWWS3=No - Header added to delivery||Q_FPQC0=Live Delivery;Q_FPQCWWS6=No - Header added to delivery",
              "disabled_by": null
            },
            {
              "id": "Q_FPQCWWS4",
              "label": "Has the delivery been run more than 5 hours before departure?",
              "type": "radio",
              "options": [ "Plan run less than 5hrs prior to departure", "Plan run greater than 5hrs prior to departure - Remains valid - No update needed", "Plan run greater than 5hrs prior to departure - No longer valid - Update needed" ],
              "enabled_by": "Q_INITIAL4=Wideworld;Q_FPQC0=Live Delivery",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_FPQC2",
          "title": "WEATHER AND NOTAMS",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_FPQC7",
              "label": "If a destination has no government (official) TAF, have two destination alternates been included?",
              "type": "radio",
              "options": [ "Yes", "Not Applicable - government TAFs included" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC8",
              "label": "Has text weather and NOTAMS for departure, destination, enroute and alternates been included?",
              "type": "radio",
              "options": [ "Yes", "No - header included", "No - Houston to reissue" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC15",
              "label": "Check Tasks to make sure we’ve not been asked to send the delivery to additional emails on this occasion",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
          ]
        },
        {
          "id": "S_FPQC3",
          "title": "DELIVERY",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_FPQC19-F2TH",
              "label": "The Delivery has been forwarded to the client as follows:",
              "type": "multi",
              "options": [ "Operational Flight Crew (to emails listed on Dashboard)", "ops@flight-office.com (unless Bordeaux managed flight)", "F2000demo@outlook.fr","Deliveries over 7mb in size have been split into multiple smaller emails" ],
              "enabled_by": "Q_FPQC2=F2TH",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC19-FA8X",
              "label": "The Delivery has been forwarded to the client as follows:",
              "type": "multi",
              "options": [ "Operational Flight Crew (to emails listed on Dashboard)", "ops@flight-office.com (unless Bordeaux managed flight)", "tablettedevr@outlook.fr & f8xdemo@outlook.fr","Deliveries over 7mb in size have been split into multiple smaller emails" ],
              "enabled_by": "Q_FPQC2=FA7X/FA8X",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC19-FA6X",
              "label": "The Delivery has been forwarded to the client as follows:",
              "type": "multi",
              "options": [ "Operational Flight Crew (to emails listed on Dashboard)", "ops@flight-office.com (unless Bordeaux managed flight)", "F6XDEMO@OUTLOOK.FR","Deliveries over 7mb in size have been split into multiple smaller emails" ],
              "enabled_by": "Q_FPQC2=FA6X",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC12",
              "label": "Have gendecs and fuel releases and short handling been included correctly for each leg?",
              "type": "multi",
              "options": [ "Gendecs", "Fuel Releases", "Short Handling" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
{
              "id": "Q_FPQCWWS12",
              "label": "Have gendecs and fuel releases been included correctly for each leg?",
              "type": "multi",
              "options": [ "Gendecs", "Fuel Releases"],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Wideworld",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC13",
              "label": "Are the gendec’s correct as possible? Take note of accurate pax counts and any crew changes. Gendecs for legs to/from France must be manually edited in the AutoGendec screen to include place of birth",
              "type": "radio",
              "options": [ "Yes", "No - Gendecs rerun" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC16",
              "label": "Check that the .xml file attachment is included in the email. Ask CCC to add the tail to the ‘CDS’ and then ask FP to rerun if missing. This is important! (no need to open the files; they just need to be present)",
              "type": "radio",
              "options": [ "Yes", "CCC contacted to generate xml" ],
              "enabled_by": "Q_ACTION=Flight Plan QC;Q_INITIAL4=Dassault",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC17US",
              "label": "Ensure a copy of the eAPIS transmission, and if we have obtained a brand new Customs Decal, a copy of the purchase receipt have been attached.",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_FPQC18=USA",
              "disabled_by": null
            },
            {
              "id": "Q_FPQC17CA",
              "label": "Ensure a copy of CANPASS has been attached",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_FPQC18=Canada",
              "disabled_by": null
            },
            {
              "id": "Q_FPQCWWS11",
              "label": "Send the delivery to the PIC and SIC only. NEVER the handling agent",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_INITIAL4=Wideworld",
              "disabled_by": null
            },
          ]
        },
//-------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------------WIDEWORLD FLIGHT PLAN QC CHECKLIST---------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------------------------//
      ]
    };
