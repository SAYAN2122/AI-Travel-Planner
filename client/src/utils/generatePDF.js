import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const generateTripPDF = (trip) => {
  const doc = new jsPDF();

  doc.setFontSize(24);
  doc.text("AI Travel Planner", 20, 20);

  doc.setFontSize(18);
  doc.text(`Destination: ${trip.destination}`, 20, 35);

  doc.text(`Days: ${trip.days}`, 20, 45);

  doc.text(`Budget: ₹${trip.budget}`, 20, 55);

  doc.text(`Travel Style: ${trip.travelStyle}`, 20, 65);

  doc.text(`Travelers: ${trip.travelers}`, 20, 75);

  let y = 90;

  doc.setFontSize(18);
  doc.text("Itinerary", 20, y);

  y += 10;

  trip.itinerary.forEach((day) => {
    doc.setFontSize(15);

    doc.text(`Day ${day.day}: ${day.title}`, 20, y);

    y += 8;

    day.activities.forEach((activity) => {
      doc.setFontSize(12);

      doc.text(`• ${activity}`, 25, y);

      y += 7;
    });

    y += 5;
  });

  autoTable(doc, {
    startY: y,
    head: [["Hotel", "Price"]],
    body: trip.hotels.map((hotel) => [
      hotel.name,
      hotel.estimatedPrice,
    ]),
  });

  y = doc.lastAutoTable.finalY + 12;

  doc.text("Food Recommendations", 20, y);

  y += 10;

  trip.foods.forEach((food) => {
    doc.text(`• ${food}`, 25, y);
    y += 7;
  });

  y += 8;

  doc.text("Packing Checklist", 20, y);

  y += 10;

  trip.packingChecklist.forEach((item) => {
    doc.text(`□ ${item}`, 25, y);
    y += 7;
  });

  doc.save(`${trip.destination}-Trip.pdf`);
};