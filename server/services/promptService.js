const generatePrompt = ({
  destination,
  days,
  budget,
  travelStyle,
  travelers,
  foodPreference,
}) => {
  return `
You are an expert AI travel planner.

Create a detailed, realistic and personalized travel itinerary.

Trip Details

Destination: ${destination}

Duration: ${days} Days

Budget: ₹${budget}

Travel Style: ${travelStyle}

Food Preference: ${foodPreference}

Travelers: ${travelers}

-------------------------------------------------

Generate the following:

1. A detailed day-wise itinerary.

Each itinerary object MUST contain:

- day
- title
- description
- activities

Example:

{
  "day": 1,
  "title": "Arrival and Local Exploration",
  "description": "Arrive at the destination, check into the hotel, relax for some time and spend the evening exploring nearby attractions.",
  "activities": [
    "Hotel Check-in",
    "Visit Local Market",
    "Dinner at Local Restaurant"
  ]
}

-------------------------------------------------

2. Hotel Recommendations

Each hotel should contain:

{
  "name":"",
  "rating":4.5,
  "price":"₹3500 per night",
  "location":"",
  "description":""
}

-------------------------------------------------

3. Local Food Recommendations

Return an array of food names.

-------------------------------------------------

4. Packing Checklist

Return an array of useful packing items.

-------------------------------------------------

5. Budget Breakdown

The total should approximately match the user's budget.

{
  "accommodation":0,
  "food":0,
  "transportation":0,
  "activities":0,
  "shopping":0,
  "miscellaneous":0
}

-------------------------------------------------

Return ONLY valid JSON.

The JSON structure MUST be exactly:

{
  "destination":"${destination}",
  "days":${days},

  "itinerary":[
    {
      "day":1,
      "title":"",
      "description":"",
      "activities":[]
    }
  ],

  "hotels":[
    {
      "name":"",
      "rating":0,
      "price":"",
      "location":"",
      "description":""
    }
  ],

  "foods":[],

  "packingChecklist":[],

  "budgetBreakdown":{
    "accommodation":0,
    "food":0,
    "transportation":0,
    "activities":0,
    "shopping":0,
    "miscellaneous":0
  }
}

Do NOT use markdown.

Do NOT wrap the JSON inside \`\`\`.

Return ONLY the JSON object.
`;
};

export default generatePrompt;