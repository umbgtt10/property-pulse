import LocationAndRates from "./PropertyDetails/LocationAndRates";
import DescriptionAndDetails from "./PropertyDetails/DescriptionAndDetails";
import Amenities from "./PropertyDetails/Amenities";
import Map from "./PropertyDetails/Map";

const PropertyDetails = ({ property }) => {
  return (
    <>
      <main>
        <LocationAndRates property={property} />
        <DescriptionAndDetails property={property} />
        <Amenities property={property} />
        <Map property={property} />
      </main>
    </>
  );
};

export default PropertyDetails;
