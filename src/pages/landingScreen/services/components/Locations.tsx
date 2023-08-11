import useMediaQuery from "@/hooks/useMediaQuery";
import { Link } from "react-router-dom";

type Props = {};

const Locations = ({}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1084px)");
  return (
    <>
      {isAboveMediumScreens && (
        <div className="flex-1 pt-6 md:w-1/2">
          <p className="text-md uppercase">Selected Locations</p>
          <hr className="my-2 h-[2px] bg-gray-400" />
          <div className="w-full justify-between gap-8 md:flex">
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Abbey road
              </Link>
              <Link className="hover:underline" to={`#`}>
                Acton (part)
              </Link>
              <Link className="hover:underline" to={`#`}>
                Aldgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Aldgate High Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Amwell
              </Link>
              <Link className="hover:underline" to={`#`}>
                Angel
              </Link>
              <Link className="hover:underline" to={`#`}>
                Archway
              </Link>
              <Link className="hover:underline" to={`#`}>
                Arnos Grove
              </Link>
              <Link className="hover:underline" to={`#`}>
                Baker street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Barnet
              </Link>
              <Link className="hover:underline" to={`#`}>
                Barnsbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Barbican
              </Link>
              <Link className="hover:underline" to={`#`}>
                Barons court
              </Link>
              <Link className="hover:underline" to={`#`}>
                Battersea
              </Link>
              <Link className="hover:underline" to={`#`}>
                Beech Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Belgravia
              </Link>
              <Link className="hover:underline" to={`#`}>
                Belsize Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Billingsgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Bishopsgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Bishopsgate to the north
              </Link>
              <Link className="hover:underline" to={`#`}>
                Bloomsbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Brent
              </Link>
              <Link className="hover:underline" to={`#`}>
                Brent Cross
              </Link>
              <Link className="hover:underline" to={`#`}>
                Brent Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Bridgewater Square
              </Link>
              <Link className="hover:underline" to={`#`}>
                Brompton
              </Link>
              <Link className="hover:underline" to={`#`}>
                Brondesbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Cannon Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Canonbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Camden Town
              </Link>
              <Link className="hover:underline" to={`#`}>
                Chalk Farm
              </Link>
              <Link className="hover:underline" to={`#`}>
                Chancery Lane
              </Link>
              <Link className="hover:underline" to={`#`}>
                Cheapside
              </Link>
              <Link className="hover:underline" to={`#`}>
                Chelsea
              </Link>
              <Link className="hover:underline" to={`#`}>
                Childs Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Chinatown
              </Link>
              <Link className="hover:underline" to={`#`}>
                Chiswick
              </Link>
              <Link className="hover:underline" to={`#`}>
                Church End
              </Link>
              <Link className="hover:underline" to={`#`}>
                City of Westminster
              </Link>
              <Link className="hover:underline" to={`#`}>
                Clapham
              </Link>
              <Link className="hover:underline" to={`#`}>
                Clerkenwell
              </Link>
              <Link className="hover:underline" to={`#`}>
                Cockfosters
              </Link>
              <Link className="hover:underline" to={`#`}>
                Cornhill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Covent Garden
              </Link>
              <Link className="hover:underline" to={`#`}>
                Cricklewood
              </Link>
              <Link className="hover:underline" to={`#`}>
                Crouch End
              </Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Dalston (part)
              </Link>
              <Link className="hover:underline" to={`#`}>
                Earls Court
              </Link>
              <Link className="hover:underline" to={`#`}>
                East Acton
              </Link>
              <Link className="hover:underline" to={`#`}>
                East Finchley
              </Link>
              <Link className="hover:underline" to={`#`}>
                Edgware
              </Link>
              <Link className="hover:underline" to={`#`}>
                Edmonton
              </Link>
              <Link className="hover:underline" to={`#`}>
                Edmonton to the West
              </Link>
              <Link className="hover:underline" to={`#`}>
                Embankment
              </Link>
              <Link className="hover:underline" to={`#`}>
                Euston
              </Link>
              <Link className="hover:underline" to={`#`}>
                Farringdon
              </Link>
              <Link className="hover:underline" to={`#`}>
                Farringdon Road in the north
              </Link>
              <Link className="hover:underline" to={`#`}>
                Fenchurch Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Fetter Lane
              </Link>
              <Link className="hover:underline" to={`#`}>
                Finchley Central
              </Link>
              <Link className="hover:underline" to={`#`}>
                Finsbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Finsbury Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Fleet Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Fleet Street in the south
              </Link>
              <Link className="hover:underline" to={`#`}>
                Fortune Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Frognal
              </Link>
              <Link className="hover:underline" to={`#`}>
                Fulham
              </Link>
              <Link className="hover:underline" to={`#`}>
                Golders Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Gospel Oak
              </Link>
              <Link className="hover:underline" to={`#`}>
                Grange Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Gunnersbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hammersmith
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hampstead
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hampstead Garden Suburb
              </Link>
              <Link className="hover:underline" to={`#`}>
                Harlesden
              </Link>
              <Link className="hover:underline" to={`#`}>
                Harley Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Harringay
              </Link>
              <Link className="hover:underline" to={`#`}>
                Harringay in the West
              </Link>
              <Link className="hover:underline" to={`#`}>
                Harrow
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hatton Garden
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hendon
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hendon Central
              </Link>
              <Link className="hover:underline" to={`#`}>
                Highbury
              </Link>
              <Link className="hover:underline" to={`#`}>
                Highgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Holborn
              </Link>
              <Link className="hover:underline" to={`#`}>
                Holborn in the west
              </Link>
              <Link className="hover:underline" to={`#`}>
                Holland Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Holloway
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hornsey
              </Link>
              <Link className="hover:underline" to={`#`}>
                Hyde Park
              </Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Imperial Wharf
              </Link>
              <Link className="hover:underline" to={`#`}>
                Islington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kensington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kensal Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kensington Olympia
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kentish Town
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kilburn
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kings Cross
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kingsbury Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Kingsland
              </Link>
              <Link className="hover:underline" to={`#`}>
                Knightsbridge
              </Link>
              <Link className="hover:underline" to={`#`}>
                Lambeth
              </Link>
              <Link className="hover:underline" to={`#`}>
                Lisson Grove
              </Link>
              <Link className="hover:underline" to={`#`}>
                Little Venice
              </Link>
              <Link className="hover:underline" to={`#`}>
                London Wall
              </Link>
              <Link className="hover:underline" to={`#`}>
                Lancaster Gate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Maida Vale
              </Link>
              <Link className="hover:underline" to={`#`}>
                Manor House
              </Link>
              <Link className="hover:underline" to={`#`}>
                Marylebone
              </Link>
              <Link className="hover:underline" to={`#`}>
                Mayfair
              </Link>
              <Link className="hover:underline" to={`#`}>
                Mill Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Moorgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Museum of London
              </Link>
              <Link className="hover:underline" to={`#`}>
                Muswell Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Marble Arch
              </Link>
              <Link className="hover:underline" to={`#`}>
                Neasden (part)
              </Link>
              <Link className="hover:underline" to={`#`}>
                New Southgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Newington Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                North Finchley
              </Link>
              <Link className="hover:underline" to={`#`}>
                North Kensington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Northfields (north and west)
              </Link>
              <Link className="hover:underline" to={`#`}>
                Northumberland Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Notting Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Oakleigh Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Oakwood
              </Link>
              <Link className="hover:underline" to={`#`}>
                Old Broad Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Old Oak Common
              </Link>
              <Link className="hover:underline" to={`#`}>
                Old Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Oxford Circus
              </Link>
              <Link className="hover:underline" to={`#`}>
                Paddington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Park Lane
              </Link>
              <Link className="hover:underline" to={`#`}>
                Park Royal
              </Link>
              <Link className="hover:underline" to={`#`}>
                Parsons Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Pentonville
              </Link>
              <Link className="hover:underline" to={`#`}>
                Pimlico
              </Link>
            </div>
            <div className="flex flex-col md:w-1/4">
              <Link className="hover:underline" to={`#`}>
                Primrose Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Queen Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Queens Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Regent Street
              </Link>
              <Link className="hover:underline" to={`#`}>
                Regents park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Shepherds Bush
              </Link>
              <Link className="hover:underline" to={`#`}>
                Shoreditch
              </Link>
              <Link className="hover:underline" to={`#`}>
                Smithfield
              </Link>
              <Link className="hover:underline" to={`#`}>
                South Islington
              </Link>
              <Link className="hover:underline" to={`#`}>
                South Kensington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Southgate
              </Link>
              <Link className="hover:underline" to={`#`}>
                Southwark
              </Link>
              <Link className="hover:underline" to={`#`}>
                Spitalfields
              </Link>
              <Link className="hover:underline" to={`#`}>
                St James
              </Link>
              <Link className="hover:underline" to={`#`}>
                St Lukes
              </Link>
              <Link className="hover:underline" to={`#`}>
                St Pauls
              </Link>
              <Link className="hover:underline" to={`#`}>
                Stoke Newington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Stonebridge
              </Link>
              <Link className="hover:underline" to={`#`}>
                Streatham Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Stroud Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Swiss Cottage
              </Link>
              <Link className="hover:underline" to={`#`}>
                Temple Fortune
              </Link>
              <Link className="hover:underline" to={`#`}>
                Totteridge
              </Link>
              <Link className="hover:underline" to={`#`}>
                Tower Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Tufnell Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Upper Holloway
              </Link>
              <Link className="hover:underline" to={`#`}>
                Vauxhall
              </Link>
              <Link className="hover:underline" to={`#`}>
                Victoria Park
              </Link>
              <Link className="hover:underline" to={`#`}>
                Victoria
              </Link>
              <Link className="hover:underline" to={`#`}>
                Walbrook
              </Link>
              <Link className="hover:underline" to={`#`}>
                Walham Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Wandsworth
              </Link>
              <Link className="hover:underline" to={`#`}>
                West Brompton
              </Link>
              <Link className="hover:underline" to={`#`}>
                West Ealing
              </Link>
              <Link className="hover:underline" to={`#`}>
                West Hampstead
              </Link>
              <Link className="hover:underline" to={`#`}>
                West Kensington
              </Link>
              <Link className="hover:underline" to={`#`}>
                Westbourne Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Westminster
              </Link>
              <Link className="hover:underline" to={`#`}>
                Whetstone
              </Link>
              <Link className="hover:underline" to={`#`}>
                White City
              </Link>
              <Link className="hover:underline" to={`#`}>
                Whitechapel
              </Link>
              <Link className="hover:underline" to={`#`}>
                Whitehall
              </Link>
              <Link className="hover:underline" to={`#`}>
                Willesden
              </Link>
              <Link className="hover:underline" to={`#`}>
                Willesden Green
              </Link>
              <Link className="hover:underline" to={`#`}>
                Winchmore Hill
              </Link>
              <Link className="hover:underline" to={`#`}>
                Wood Green
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Locations;
