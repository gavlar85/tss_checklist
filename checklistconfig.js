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
options: ["New Trip","Flight Plan QC"],
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
              "label": "Have you replied to the client through Front?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_COMMS=Email",
              "disabled_by": null
            },
            {
              "id": "Q_WHATSAPP1",
              "label": "Have you screenshotted the WhatsApp conversation and sent to EOC inbox?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_COMMS=Whatsapp",
              "disabled_by": null
            },
            {
              "id": "Q_WHATSAPP2",
              "label": "Have you added the email to Trip Messages in Falcon ensuring you include the image attachments?",
              "type": "radio",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_COMMS=Whatsapp",
              "disabled_by": null
            },
            {
              "id": "Q_EMAIL2",
              "label": "Has the email been added to Trip Messages in Falcon?",
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
              "enabled_by": "Q_COMMS=Email||Q_COMMS=Whatsapp",
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
              "options": [ "Flight Plans", "Fuel", "Handling/Slots/PPR", "Customs", "API/APIS", "Permits", "Hotels", "Transport", "Catering", "TCE", "APD", "RSP", "Customs Decal", "Border Overflight Exemption", "TSA Waiver" ],
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
              "options": [ "Yes", "No preferences exist - NLT loaded" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_OPERATIONALTYPE",
              "label": "Have you checked the Operational Type has been correctly loaded?",
              "type": "radio",
              "options": [ "Private Non-Revenue", "Private Special Airworthiness", "Commercial Non-Scheduled", "Charter Humanitarian", "Charter (X) Air Ambulance", "Special Operation Head Flight" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": 
              //TITAN
              "Q_REG=GOATW||Q_REG=GXATW",
            },
            {
              "id": "Q_OPERATORNAME",
              "label": "Is the Operator name loaded correctly?",
              "type": "text",
              "options": [ "Yes", "No" ],
              "enabled_by": "Q_ACTION=New Trip",
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
              "tooltip": "Avionco, Titan, Avcon and CAMOSA give reference numbers, Bertelsmann use a 4-digit number",
              "options": [ "Yes", "No - No reference number provided" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_TRIPSUPPORTTEAM",
              "label": "Is the Support Team correct (EOC)?",
              "type": "radio",
              "options": [ "Yes", "No - Supporting Services/Supervisor Advised" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_TRIPSITE",
              "label": "Has 'SERVICES' been loaded as the site?",
              "type": "radio",
              "options": [ "Yes", "No - Supporting Services/Supervisor Advised" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_3AMGA5",
              "label": "If all legs are operating to/from/internal USA, has the flight number/call sign been loaded as W3AMGA?",
              "type": "radio",
              "options": [ "Yes", "No - Legs in trip that are not to/from/internal USA" ],
              "enabled_by": "Q_REG=3AMGA; Q_INITIAL2=USA",
              "disabled_by": null
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
              "label": "How have dates and timings been populated?",
              "type": "radio",
              "options": [ "Client provided full schedule", "Client provided departure times only (Falcon calculated flight times)", "No details provided (Assumed timings and Falcon calculated flight times)", "No details provided (TBA dates/times, no flight times)" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_LOCALZULU",
              "label": "Did the client provide UTC/Zulu times or Local times?",
              "type": "radio",
              "options": [ "UTC/Zulu", "Local" ],
              "enabled_by": "Q_DATESANDTIMES=Yes - Client provided full schedule||Yes - Client provided departure times (Falcon calculated flight times)",
              "disabled_by": null,
            },
            {
              "id": "Q_TIMEROUNDING",
              "label": "Have all times been rounded to the nearest 5min interval?",
              "type": "radio",
              "options": [ "Yes", "No - Client preference not to adjust times" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null,
            },
            {
              "id": "Q_DATESANDTIMESNLT",
              "label": "Has a Trip Action NLT and Client Call NLT been loaded to advise you've loaded assumed times and to check with client for intended schedule?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_DATESANDTIMES=Yes - Client didnt provide information (Assumed timings and Falcon calculated flight times)",
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
              "label": "Any Tech stop ETG times match client request?",
              "type": "radio",
              "options": [ "Yes","No - client didnt provide ETG times - NLT loaded","No - requested ETG not possible - Client advised" ],
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
              "type": "multi",
              "options": [ "Yes","No - Handler not in database - Supporting Services & Golbal Vendors advised", "No preference given - Priority 1 loaded" ],
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
              "id": "Q_SLOTSOWN",
              "label": "Have slot services been loaded as OWN?",
              "type": "radio",
              "options": [ "Yes", "Slots Not Required"],
              "tooltip": "INITIAL QUESTIONS indicates we are not arranging Slots",
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=Handling/Slots/PPR"
            },
            {
              "id": "Q_SLOTSARRANGE2",
              "label": "Is UWA arranging Slots?",
              "type": "radio",
              "options": [ "Yes - All", "Yes - Some", "Slots Not Required"],
              "enabled_by": "Q_INITIAL1=Handling/Slots/PPR",
              "disabled_by": null
            },
            {
              "id": "Q_SLOTSOWNID",
              "label": "Have any client provided slot IDs been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - Client hasnt provided slot IDs - Client Call NLT loaded"],
              "tooltip": "INITIAL QUESTIONS indicates we are not arranging Slots",
              "enabled_by": "Q_SLOTSOWN=Yes||Q_SLOTSARRANGE2=Yes - Some",
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_PPR",
              "label": "PPR",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null,
            },
            {
              "id": "Q_PPRARRANGE",
              "label": "Is UWA arranging PPR?",
              "type": "radio",
              "options": [ "Yes - All", "Yes - Some", "PPR Not Required"],
              "enabled_by": "Q_INITIAL1=Handling/Slots/PPR",
              "disabled_by": null
            },
            {
              "id": "Q_PPROWN",
              "label": "Has PPR service been loaded as OWN?",
              "type": "radio",
              "options": [ "Yes", "PPR Not Required"],
              "tooltip": "INITIAL QUESTIONS indicate we are not arranging PPR",
              "enabled_by": null,
              "disabled_by": "Q_INITIAL1=Handling/Slots/PPR",
            },
            {
              "id": "Q_PPROWNID",
              "label": "Have any client provided PPR numbers been loaded?",
              "type": "radio",
              "options": [ "Yes", "No client provided PPR number - NLT loaded"],
              "enabled_by": "Q_PPROWN=Yes||Q_PPRARRANGE=Yes - Some",
              "disabled_by": null,
            },
            {
              "id": "Q_TEB_EWR_PPR",
              "label": "Have PPR requirements been reviewed?",
              "type": "multi",
              "tooltip": "Check PPR requirements - often not required",
              "options": [ 
                "Yes - loaded as NOT REQUIRED", 
                "Yes - Required and loaded accordingly", 
                ],
              "enabled_by": "D_HAS_TEB=Yes||D_HAS_EWR=Yes",
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
              "id": "Q_PERMITLANDINGFIQ",
              "label": "Does FIQ indicate landing permits are required?",
              "type": "radio",
              "options": [ "Yes", "No", "No FIQ route available - Route Build Required" ],
              "enabled_by": null,
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITLANDING",
              "label": "Have landing permits been loaded?",
              "type": "radio",
              "options": [ "Yes"],
              "enabled_by": "Q_INITIAL1=Permits;Q_PERMITLANDINGFIQ=Yes",
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITLANDINGOWN",
              "label": "Have landing permits been loaded and changed to OWN status?",
              "type": "radio",
              "options": [ "Yes", "No - NLT Loaded"],
              "tooltip": "INITAL QUESTIONS indicated no Permits",
              "enabled_by": "Q_PERMITLANDINGFIQ=Yes",
              "disabled_by": "Q_INITIAL1=Permits;Q_PERMITLANDINGFIQ=Yes",
            },
            {
              "id": "SUB_ITIN_GENDECS",
              "label": "GENERAL DECLARATIONS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_GENDECS",
              "label": "Have Departure and Arrival gendecs (as appropriate) been loaded to each location?",
              "type": "radio",
              "options": [ "Yes", "No - NLT loaded"],
              "enabled_by": null,
              "disabled_by": null,
            },
                        {
              "id": "Q_GENDECNLT",
              "label": "Have Gendec NLTs been set to 48hrs prior to departure of the relevant leg they will be attached to?",
              "type": "radio",
              "options": [ "Yes", "No - Trip Action NLT loaded"],
              "enabled_by": "Q_GENDECS=Yes;Q_INITIAL1=Flightplans",
              "disabled_by": null,
            },
              {
              "id": "SUB_ITIN_HOTELS",
              "label": "HOTELS",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Hotels||Q_STOPTYPE=RON",
              "disabled_by": null
            },
            {
              "id": "Q_HOTELARRANGE",
              "label": "Have hotel services been loaded as OWN?",
              "type": "radio",
              "tooltip": "Stop Type includes RON and INITIAL QUESTIONS does not include Hotels",
              "options": [ "Yes - Client Own Booking", "No - hotels not required - Loaded as NOT REQUIRED", "No - not known if hotels required - NLT Loaded"],
              "enabled_by": "Q_STOPTYPE=RON",
              "disabled_by": "Q_INITIAL1=Hotels",
            },
            {
              "id": "Q_HOTELINQUIRY",
              "label": "Has a hotel inquiry NLT been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - Client specified a hotel", "No - NLT Loaded"],
              "enabled_by": "Q_HOTELARRANGE=Yes||Q_INITIAL1=Hotels",
              "disabled_by": null
            },
              {
              "id": "SUB_ITIN_TRANSPORT",
              "label": "TRANSPORT",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Transport||Q_STOPTYPE=RON",
              "disabled_by": null
            },           
            {
              "id": "Q_TRANSPORT1",
              "label": "Who will be providing Crew Transport?",
              "type": "radio",
              "options": [ "Handler", "Third Party" ],
              "enabled_by": "Q_INITIAL1=Transport",
              "disabled_by": null
            },
            {
              "id": "Q_TRANSPORTHANDLERSERVICE",
              "label": "Has a Special Service been loaded to the appropriate handler with full details on destination, vehicle type, number of pax?",
              "type": "radio",
              "options": [ "Yes", "No - Information missing - NLT Loaded" ],
              "enabled_by": "Q_TRANSPORT1=Handler",
              "disabled_by": null
            },
            {
              "id": "Q_TRANSPORTTHIRDPARTYTRANSEMAIL",
              "label": "Has an email been sent to the service provider with full details on destination, vehicle type, number of pax?",
              "type": "radio",
              "options": [ "Yes", "No - Information missing - NLT Loaded" ],
              "enabled_by": "Q_TRANSPORT1=Third Party",
              "disabled_by": null
            },
            {
              "id": "Q_TRANSPORTTHIRDPARTYTRANSFALCON",
              "label": "Has the email been loaded to the Transport Service in Falcon?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_TRANSPORT1=Third Party",
              "disabled_by": null
            },
            {
              "id": "Q_TRANSPORTHANDLERSERVICE",
              "label": "Has an NLT been loaded to chase the handler for driver information if not recieved?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_TRANSPORT1=Handler",
              "disabled_by": null
            },
            {
              "id": "Q_TRANSPORTCANCELLATION",
              "label": "Has a cancellation policy been advised to the client if booking is within 24hrs?",
              "type": "radio",
              "options": [ "Yes", "No - N/A" ],
              "enabled_by": "Q_TRANSPORT1=Third Party",
              "disabled_by": null,
            },
            
            
            {
              "id": "SUB_ITIN_FUEL",
              "label": "FUEL",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },
            {
              "id": "Q_FUELOWN",
              "label": "Has Fuel service been loaded as OWN?",
              "type": "radio",
              "tooltip": "INITIAL QUESTIONS does not include Fuel",
              "options": ["Yes"],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": "Q_INITIAL1=Fuel"
            },
            {
              "id": "Q_FUELREQ",
              "label": "Has Fuel service been loaded in all locations advised by client?",
              "type": "radio",
              "options": ["Yes", "No - Fuel not available in all locations requested - NLT Loaded", "Client has not advised - NLT Loaded"],
              "enabled_by": "Q_INITIAL1=Fuel",
              "disabled_by": null
            },
            {
              "id": "SUB_ITIN_CUSTOMS",
              "label": "CUSTOMS",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Customs",
              "disabled_by": null
            },
            {
              "id": "Q_AOE1",
              "label": "Is the client arriving into an AOE?",
              "type": "radio",
              "options": [
                "AOE",
                "AOE - On Request - NLT loaded",
                "No - NLT loaded",
              ],
              "enabled_by": "Q_INITIAL1=Customs||Q_INITIAL1=RSP",
              "disabled_by": null
            },
            {
              "id": "Q_CBP1",
              "label": "Is the client arriving CBP published hours?",
              "type": "radio",
              "options": [
                "Yes",
                "No - Client is arriving outside CBP hours, RSP Requested",
                "No - Client is arriving outside CBP hours, RSP Not available"
              ],
              "enabled_by": "Q_INITIAL1=RSP",
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
              "enabled_by": "Q_INITIAL1=API/APIS",
              "disabled_by": null
            },
            {
              "id": "Q_UKGAR1",
              "label": "Will UV or the handler complete UK GAR?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "Q_INITIAL1=API/APIS",
              "disabled_by": null
            },
            {
              "id": "Q_EAPIS1",
              "label": "Will UV transmit the US eAPIS?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "Q_INITIAL1=API/APIS",
              "disabled_by": null
            },
            {
              "id": "Q_EAPIS2",
              "label": "Has a NLT been loaded for 24hrs prior to departure?",
              "type": "radio",
              "options": [ "Yes", "No - Longer time needed prior to departure" ],
              "enabled_by": "Q_EAPIS1=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_UAEAPI1",
              "label": "Will UV transmit the UAE API?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "Q_INITIAL1=API/APIS",
              "disabled_by": null
            },
            {
              "id": "Q_GRAPIS1",
              "label": "Will UV transmit the Greek APIS?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "D_HAS_GR=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_FIAPIS1",
              "label": "Will UV transmit the Finish APIS?",
              "type": "radio",
              "options": [ "Yes", "No - OWN" ],
              "enabled_by": "D_HAS_FI=Yes",
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
              "id": "Q_FLIGHTFOLLOWING",
              "label": "Is Flight Following and showing as PND?",
              "type": "radio",
              "options": [ "Yes", "No"],
              "enabled_by": null,
              "disabled_by": null,
            },
            {
              "id": "SUB_ITIN_SPECFLIGHTAUTH",
              "label": "SPECIAL FLIGHT AUTHORISATIONS",
              "type": "subsection",
              "enabled_by": "Q_INITIAL1=Permits",
              "disabled_by": null
            },
            {
              "id": "Q_PERMITTOFLY",
              "label": "Have the Special Airworthiness Documents been added to the trip (Permit to Fly etc)?",
              "type": "radio",
              "options": [ "Yes - Info loaded to trip", "No" ],
              "tooltip": "INITIAL QUESTIONS indicates no Flight Planning",
              "enabled_by": "Q_INITIAL1=Permits",
              "disabled_by": null,
            }, 
            {
              "id": "Q_PERMITTOFLY2",
              "label": "Has it been expressly highlighted to vendors that the flight is not operating with usually expected documents (COA, ARC etc)?",
              "type": "radio",
              "options": [ "Yes - Info loaded to trip", "No" ],
              "tooltip": "INITIAL QUESTIONS indicates no Flight Planning",
              "enabled_by": "Q_OPERATIONALTYPE=Private Special Airworthiness",
              "disabled_by": null,
            }, 
            {
              "id": "SUB_ITIN_OVFPERMITS",
              "label": "OVERFLIGHT PERMITS",
              "type": "subsection",
              "enabled_by": null,
              "disabled_by": null
            },          
            {
              "id": "Q_OVFPERMITS1",
              "label": "Does FIQ indicate that overflight permits are required?",
              "type": "radio",
              "options": [ "Yes", "No", "No FIQ route available - Route Build Required"],
              "enabled_by": null,
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITS5",
              "label": "Is UWA obtaining all overflight permits?",
              "type": "radio",
              "options": ["All", "Some"],
              "enabled_by": "Q_OVFPERMITS1=Yes;Q_INITIAL1=Permits",
              "disabled_by": null,
            },
            {
              "id": "Q_OVFPERMITSOWN",
              "label": "Have overflight permits been changed to OWN status?",
              "type": "multi",
              "options": ["Yes", "No - NLT Loaded"],
              "tooltip": "Initial questions indicated UV TSS is not arranging permits",
              "enabled_by": "Q_OVFPERMITS1=Yes",
              "disabled_by": "Q_INITIAL1=Permits",
            },
            {
              "id": "Q_OVFPERMITSOWN2",
              "label": "Have relevant overflight permits been changed to OWN status?",
              "type": "multi",
              "options": ["Yes", "No - NLT Loaded"],
              "enabled_by": "Q_PERMITS5=Some",
              "disabled_by": null,
            },
            {
              "id": "Q_PERMITS8",
              "label": "Have required supporting documents been sent to the permit provider?",
              "type": "multi",
              "options": [ "Yes - Added to Message Log", "No - Missing Documents - NLT loaded" ],
              "enabled_by": "Q_PERMITS6=Yes - Format Send||Q_PERMITS6=Yes - Special Form||Q_PERMITS6=Yes - Website",
              "disabled_by": "Q_INITIAL1=APD"
            },
            {
              "id": "Q_PERMITS9",
              "label": "Has the client provided required permit numbers?",
              "type": "radio",
              "options": [ "Yes - Loaded to Trip", "No - NLT loaded" ],
              "enabled_by": "Q_PERMITS5=No",
              "disabled_by": "Q_INITIAL1=APD"
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
              "options": [ "Is Credit Exposure service in Pending (PND)" ],
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
                "No - Client Advised - NLT loaded",
                "No - UWA to arrange",
                "Yes - Client has a valid BOE"
              ],
              "enabled_by": "D_HAS_USA=Yes",
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
              "id": "Q_CREWINFO",
              "label": "Is any Crew information missing?",
              "type": "radio",
              "options": [ "Yes - NLT Loaded", "No" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_CREWPOSITION",
              "label": "Have the correct positions been assigned to each crew member? PIC, SIC, F/A etc",
              "type": "radio",
              "options": [ "Yes", "No - NLT Loaded" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_CREWPASSPORT",
              "label": "Have the correct passport been loaded for each crew member and each leg",
              "type": "radio",
              "options": [ "Yes", "No - NLT Loaded" ],
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
              "options": [ "Yes - In trip request", "No - Client has preferred passports", "No - NLT loaded" ],
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
              "options": [ "Existing Passports - Checked and loaded", "New Passports - DM-RDB NLT loaded" ],
              "enabled_by": "Q_MANIFEST2=Yes - In trip request",
              "disabled_by": "Q_MANIFEST2=No - Client has preferred passports||No - NLT loaded"
            },
            {
              "id": "Q_MANIFEST3",
              "label": "Do passports selected for trip match the client specified or preferred passports?",
              "type": "radio",
              "options": [ "Yes", "No - NLT loaded" ],
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
              "id": "Q_INFORMATION1",
              "label": "Have the correct Primary Contacts been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - Missing information - NLT loaded"],
              "tooltip": "Ensure to include all contacts who would require be included in elements like APIS transmissions and Trip Briefs",
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_INFORMATIONEMAIL",
              "label": "Have the correct Primary Contacts emails been loaded?",
              "type": "radio",
              "options": [ "Yes", "No - Missing information - NLT loaded"],
              "tooltip": "On initial trip load flip to Communications Tab to enter emails",
              "enabled_by": "Q_ACTION=New Trip",
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

          ]
        },
        {
          "id": "S_DELIVERIESTAB",
          "title": "DELIVERIES TAB",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_DELIVERYNLT",
              "label": "Has the Delivery NLT date/time been set according to client preference?",
              "type": "radio",
              "tooltip": "Delivery NLT dictates the time the delivery will be sent to the client (see dashboard for preferences)",
              "options": [ "Yes", "No - Trip Action NLT loaded with reason", ],
              "enabled_by": "Q_INITIAL1=Flight Plans",
              "disabled_by": null
            },
            {
              "id": "Q_DELIVERYNLTTEXT",
              "label": "Has the Delivery NLT been updated to advise what merges are require? (Gendecs, Fuel Releases, Short Handling)",
              "type": "radio",
              "options": [ "Yes", "No - Trip Action NLT loaded with reason", ],
              "enabled_by": "Q_INITIAL1=Flight Plans",
              "disabled_by": null
            },
            {
              "id": "Q_DELIVERYCREWEMAIL",
              "label": "Have Crew emails correctly pulled through into the delivery recipients?",
              "type": "radio",
              "tooltip": "If crew has a PRIM1 email listed in their profile it should pull through automatically",
              "options": [ "Yes", "No - Delivery to EOC to QC", ],
              "enabled_by": "Q_INITIAL1=Flight Plans",
              "disabled_by": null
            },
            {
              "id": "Q_DELIVERYADDITIONAL",
              "label": "Has any client requested additional addresses been added?",
              "type": "radio",
              "options": [ "Yes", "No - No client provided additional addresses", ],
              "enabled_by": "Q_DELIVERYCREWEMAIL=Yes",
              "disabled_by": "Q_DELIVERYCREWEMAIL=No - Delivery to EOC to QC",
            },
            {
              "id": "Q_DELIVERYEOC",
              "label": "Has eoc@wfscorp.com and eoc@univ-wea.com been loaded in additional addresses?",
              "type": "radio",
              "options": [ "Yes"],
              "enabled_by": "Q_DELIVERYCREWEMAIL=No - Delivery to EOC to QC",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVERYREMOVE",
              "label": "Have all deliveries been removed?",
              "type": "radio",
              "options": [ "Yes", "No - Reason provided in the NLT", ],
              "tooltip": "INITIAL QUESTIONS indicates no Flight Planning",
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": "Q_INITIAL1=Flight Plans",
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
              "options": [ "IG", "IX / Head", "A Mix", "Unknown - NLT loaded" ],
              "enabled_by": "Q_REG=3AMGA",
              "disabled_by": null
            },
            {
              "id": "Q_FPWX2",
              "label": "Are all flight planning specifications loaded?",
              "type": "radio",
              "options": [ "Yes", "Missing Information - NLT loaded" ],
              "enabled_by": "Q_INITIAL1=",
              "disabled_by": null
            },
            {
              "id": "Q_FPWX3",
              "label": "Have any client provided or preferred alternates been loaded?",
              "type": "radio",
              "options": [
                "Client Provided",
                "Client Preference (Dashboard or Customer Profile)",
                "No client preference and none provided in request"
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
              "id": "Q_FPWX10",
              "label": "Has RNR been entered in the Route ID text box?",
              "type": "radio",
              "options": [
                "Yes",
              ],
              "enabled_by": "Q_PERMITLANDINGFIQ=No;Q_OVFPERMITS1=No",
              "disabled_by": null,
            },
            {
              "id": "Q_FPWX8",
              "label": "How have the payload figures been calculated?",
              "type": "radio",
              "options": [
                "200lbs per pax",
                "Custom weight per pax",
                "Fixed and total payload correct",
                "Not advised - NLT Loaded"
              ],
              "enabled_by": null,
              "disabled_by": "Q_REG=N115JS",
            },
            {
              "id": "Q_N115JS2",
              "label": "Has the client preferred passenger weight been loaded and the total payload checked?",
              "type": "radio",
              "options": [
                "261lbs per pax",
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
              "label": "Has 'Add to field 18 STS/HEAD' been loaded to flight planning comments for relevant legs?",
              "type": "radio",
              "options": [ "Yes", "No - NLT Loaded"],
              "enabled_by": "Q_OPERATIONALTYPE=Special Operation Head Flight",
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
              "options": [ "Yes", "No - Changed leg greater than 24hrs away - NLT loaded" ],
              "enabled_by": "Q_INITIAL3=Date/Time;Q_DELIVTIMEDATE=Yes - New Delivery loaded||Q_INITIAL3=Date/Time;Q_DELIVTIMEDATE=No",
              "disabled_by": null,
            },
            {
              "id": "Q_DELIVCREWPAX1",
              "label": "Have Merges been re run with the new manifest?",
              "type": "radio",
              "options": [ "Yes", "No - Changed leg greater than 24hrs away - NLT loaded" ],
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
              "options": [ "Yes", "No - NLT loaded" ],
              "enabled_by": "Q_INITIAL1=Flight Plans",
              "disabled_by": null,
            },         
            {
              "id": "Q_DELIVERIES6",
              "label": "Who specified the delivery recipients for this trip?",
              "type": "radio",
              "options": [ "Client in request", "Client Preferences", "Unknown - NLT loaded" ],
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
              "options": [ "Yes", "No - Internal EU legs", "No - NLT loaded" ],
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
          "title": "NLT CHECK",
          "enabled_by": null,
          "disabled_by": null,
          "questions": [
            {
              "id": "Q_NLT1",
              "label": "Have any irrelevant NLTs been completed?",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_ACTION=New Trip",
              "tooltip": "On-boarding NLTs can be removed",
              "disabled_by": null
            },
            {
              "id": "Q_NLTPRIMCONTACT",
              "label": "Chase client for missing Primary Contact Info",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_INFORMATION1=No - Missing information - NLT loaded||Q_INFORMATIONEMAIL=No - Missing information - NLT loaded",
              "disabled_by": null
            },
            {
              "id": "Q_NLTSCHEDULEINFO",
              "label": "Chase client for missing Schedule information",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_DATESANDTIMESNLT=Yes||Q_TENTATIVE=Yes",
              "disabled_by": null
            },
            {
              "id": "Q_NLTMANIFESTINFO",
              "label": "Chase client for missing Crew and/or Pax information",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_NLTSLOTID",
              "label": "Chase client for missing Slot IDs",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_SLOTSOWNID=No - Client hasnt provided slot IDs - Client Call NLT loaded",
              "disabled_by": null
            },
            {
              "id": "Q_NLTPPRNUMBER",
              "label": "Chase client for missing PPR Number",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_PPROWNID=No client provided PPR number - NLT loaded",
              "disabled_by": null
            },
            {
              "id": "Q_NLTPERMITS",
              "label": "Chase client for missing Permit numbers",
              "type": "radio",
              "options": [ "Yes" ],
              "enabled_by": "Q_PERMITLANDINGOWN=No - NLT Loaded||Q_OVFPERMITSOWN=No - NLT Loaded",
              "disabled_by": null
            },
            {
              "id": "Q_NLTROUTEBUILD",
              "label": "Have any unnecessary NEED ROUTE BUILD NLTs been completed?",
              "type": "radio",
              "tooltip": "Answers indicate no required permits - ensure RTE STRING entry in FP SPECS",
              "options": [ "Yes" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            },
            {
              "id": "Q_NLTROUTEBUILDNEEDED",
              "label": "Ensure any required Route Build NLTs have been set for an appropriate time/date to for permit applications?",
              "type": "radio",
              "tooltip": "Answers indicate no required permits - ensure RTE STRING entry in FP SPECS",
              "options": [ "Yes" ],
              "enabled_by": "Q_ACTION=New Trip",
              "disabled_by": null
            }

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
