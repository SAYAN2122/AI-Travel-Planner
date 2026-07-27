const generatePrompt = ({
  destination,
  days,
  budget,
  travelStyle,
  travelers,
  foodPreference,
}) => {
  return `
You are an experienced travel planner with expert knowledge of cities and tourist destinations around the world.

Generate a COMPLETELY UNIQUE travel plan for the destination below.

TRIP DETAILS

Destination: ${destination}
Duration: ${days} Days
Budget: ₹${budget}
Travel Style: ${travelStyle}
Travelers: ${travelers}
Food Preference: ${foodPreference}

IMPORTANT RULES

1. The itinerary MUST be specific to ${destination}.
2. Mention only attractions that actually exist in ${destination}.
3. Recommend hotels that are located in ${destination}.
4. Recommend famous local dishes available in ${destination}.
5. Mention transportation options commonly used in ${destination}.
6. Allocate the budget realistically according to the cost of travelling in ${destination}.
7. Every day should contain different activities.
8. Do NOT generate generic itineraries.
9. Never reuse the same attractions for different destinations.
10. Never recommend places from another city or country.
11. If the destination changes, the entire itinerary should change.
12. Use realistic travel times between attractions.
13. Balance sightseeing, relaxation, food, shopping and local experiences.
14. Include famous landmarks along with hidden gems whenever appropriate.

--------------------------------------------------

Generate the following:

1. Day-wise itinerary

Each itinerary object MUST contain:

{
  "day":1,
  "title":"",
  "description":"",
  "activities":[]
}

Every day should have unique activities.

--------------------------------------------------

2. Hotel Recommendations

Recommend 5 REAL hotels located in ${destination}.

Each hotel:

{
  "name":"",
  "rating":4.5,
  "price":"₹3500 per night",
  "location":"",
  "description":""
}

--------------------------------------------------

3. Food Recommendations

Recommend 8-12 authentic local dishes available in ${destination}.

Return only food names.

--------------------------------------------------

4. Packing Checklist

Generate a destination-specific checklist.

Example:

If destination is Goa:
- Beachwear
- Sunscreen
- Flip-flops

If destination is Manali:
- Thermal wear
- Winter jacket
- Gloves

If destination is Dubai:
- Sunglasses
- Lightweight clothes

The packing list should depend on the destination and weather.

--------------------------------------------------

5. Budget Breakdown

The total should approximately equal ₹${budget}.

{
  "accommodation":0,
  "food":0,
  "transportation":0,
  "activities":0,
  "shopping":0,
  "miscellaneous":0
}

--------------------------------------------------

Return ONLY valid JSON.

The JSON MUST be:

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

Return ONLY the JSON object.

Do NOT use markdown.

Do NOT use code blocks.

Do NOT include explanations.

Do NOT include notes.

Do NOT include text before or after the JSON.
`;
};

export default generatePrompt;