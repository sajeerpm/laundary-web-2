// import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router-dom";

type Props = {};

const Locations = ({}: Props) => {
  // const isAboveMediumScreens = useMediaQuery("(min-width:1084px)");
  const areaMap = [
    "Abbey road",
    "Acton (part)",
    "Aldgate",
    "Aldgate High Street",
    "Amwell",
    "Angel",
    "Archway",
    "Arnos Grove",
    "Baker street",
    "Barnet",
    "Barnsbury",
    "Barbican",
    "Barons court",
    "Battersea",
    "Beech Street",
    "Belgravia",
    "Belsize Park",
    "Billingsgate",
    "Bishopsgate",
    "Bishopsgate to the north",
    "Bloomsbury",
    "Brent",
    "Brent Cross",
    "Brent Park",
    "Bridgewater Square",
    "Brompton",
    "Brondesbury",
    "Cannon Street",
    "Canonbury",
    "Camden Town",
    "Chalk Farm",
    "Chancery Lane",
    "Cheapside",
    "Chelsea",
    "Childs Hill",
    "Chinatown",
    "Chiswick",
    "Church End",
    "City of Westminster",
    "Clapham",
    "Clerkenwell",
    "Cockfosters",
    "Cornhill",
    "Covent Garden",
    "Cricklewood",
    "Crouch End",
    "Dalston (part)",
    "Earls Court",
    "East Acton",
    "East Finchley",
    "Edgware",
    "Edmonton",
    "Edmonton to the West",
    "Embankment",
    "Euston",
    "Farringdon",
    "Farringdon Road in the north",
    "Fenchurch Street",
    "Fetter Lane",
    "Finchley Central",
    "Finsbury",
    "Finsbury Park",
    "Fleet Street",
    "Fleet Street in the south",
    "Fortune Green",
    "Frognal",
    "Fulham",
    "Golders Green",
    "Gospel Oak",
    "Grange Park",
    "Gunnersbury",
    "Hammersmith",
    "Hampstead",
    "Hampstead Garden Suburb",
    "Harlesden",
    "Harley Street",
    "Harringay",
    "Harringay in the West",
    "Harrow",
    "Hatton Garden",
    "Hendon",
    "Hendon Central",
    "Highbury",
    "Highgate",
    "Holborn",
    "Holborn in the west",
    "Holland Park",
    "Holloway",
    "Hornsey",
    "Hyde Park",
    "Imperial Wharf",
    "Islington",
    "Kensington",
    "Kensal Green",
    "Kensington Olympia",
    "Kentish Town",
    "Kilburn",
    "Kings Cross",
    "Kingsbury Green",
    "Kingsland",
    "Knightsbridge",
    "Lambeth",
    "Lisson Grove",
    "Little Venice",
    "London Wall",
    "Lancaster Gate",
    "Maida Vale",
    "Manor House",
    "Marylebone",
    "Mayfair",
    "Mill Hill",
    "Moorgate",
    "Museum of London",
    "Muswell Hill",
    "Marble Arch",
    "Neasden (part)",
    "New Southgate",
    "Newington Green",
    "North Finchley",
    "North Kensington",
    "Northfields (north and west)",
    "Northumberland Park",
    "Notting Hill",
    "Oakleigh Park",
    "Oakwood",
    "Old Broad Street",
    "Old Oak Common",
    "Old Street",
    "Oxford Circus",
    "Paddington",
    "Park Lane",
    "Park Royal",
    "Parsons Green",
    "Pentonville",
    "Pimlico",
    "Primrose Hill",
    "Queen Street",
    "Queens park",
    "Regent Street",
    "Regents park",
    "Shepherds Bush",
    "Shoreditch",
    "Smithfield",
    "South Islington",
    "South Kensington",
    "Southgate",
    "Southwark",
    "Spitalfields",
    "St James",
    "St Lukes",
    "St Pauls",
    "Stoke Newington",
    "Stonebridge",
    "Streatham Hill",
    "Stroud Green",
    "Swiss Cottage",
    "Temple Fortune",
    "Totteridge",
    "Tower Hill",
    "Tufnell Park",
    "Upper Holloway",
    "Vauxhall",
    "Victoria Park",
    "Victoria",
    "Walbrook",
    "Walham Green",
    "Wandsworth",
    "West Brompton",
    "West Ealing",
    "West Hampstead",
    "West Kensington",
    "Westbourne Green",
    "Westminster",
    "Whetstone",
    "White City",
    "Whitechapel",
    "Whitehall",
    "Willesden",
    "Willesden Green",
    "Winchmore Hill",
    "Wood Green",
  ];
  return (
    <>
      <div className="flex-1 pt-6 md:w-1/2">
        <p className="text-md uppercase">Selected Locations</p>
        <hr className="my-2 h-[2px] bg-gray-400" />
        <div className="w-full justify-between gap-8 md:flex">
          <div className="grid w-full grid-flow-row grid-cols-1 md:grid-cols-4">
            {areaMap.map((area) => (
              <Link to={"/" + area.toLowerCase().replace(/ /g, "-")}>
                {area}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
