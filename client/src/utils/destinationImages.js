import manali from "../assets/destinations/manali.avif";
import goa from "../assets/destinations/goa.avif";
import jaipur from "../assets/destinations/jaipur.avif";
import delhi from "../assets/destinations/delhi.avif";
import mumbai from "../assets/destinations/mumbai.avif";
import shimla from "../assets/destinations/shimla.avif";
import kedarnath from "../assets/destinations/kedarnath.avif";
import leh from "../assets/destinations/leh.avif";
import agra from "../assets/destinations/agra.avif";
import udaipur from "../assets/destinations/udaipur.avif";
import defaultImage from "../assets/destinations/default.avif";

const destinationImages = {
  manali,
  goa,
  jaipur,
  delhi,
  mumbai,
  shimla,
  kedarnath,
  leh,
  agra,
  udaipur,
};

export const getDestinationImage = (destination) => {
  if (!destination) return defaultImage;

  const key = destination.trim().toLowerCase();

  return destinationImages[key] || defaultImage;
};