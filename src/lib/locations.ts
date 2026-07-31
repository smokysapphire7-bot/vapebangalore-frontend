export interface Location {
  slug: string;
  name: string;
  sublocations: string[];
  localNote: string;
  category: "residential" | "tech" | "landmark" | "hospital" | "mall" | "hotel" | "college" | "road" | "metro";
  geoLat?: number;
  geoLng?: number;
}

export const locations: Location[] = [
  // ─── TIER 1 ELITE — highest traffic from VDB/VIB data ───
  {
    slug: "koramangala",
    name: "Koramangala",
    category: "residential",
    geoLat: 12.9352, geoLng: 77.6245,
    sublocations: ["1st Block", "2nd Block", "3rd Block", "4th Block", "5th Block", "6th Block", "7th Block", "8th Block", "ST Bed", "Ejipura", "Sony Signal", "80 Feet Road"],
    localNote: "Vape delivery in Koramangala Bangalore — 30-45 min to every block (1st to 8th), ST Bed, Ejipura and the entire pub zone. Elfbar Raya D1, Lost Mary MT35000, ZYN Cool Mint delivered fast and discreetly.",
  },
  {
    slug: "indiranagar",
    name: "Indiranagar",
    category: "residential",
    geoLat: 12.9784, geoLng: 77.6408,
    sublocations: ["100 Feet Road", "12th Main", "CMH Road", "HAL 1st Stage", "HAL 2nd Stage", "Domlur", "Old Airport Road", "Kodihalli", "Defence Colony"],
    localNote: "Vape delivery in Indiranagar Bangalore — fast delivery to 100 Feet Road, 12th Main, CMH Road, Toit area and all of Indiranagar. Elfbar, Caliburn, ZYN in 30-45 minutes.",
  },
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    category: "residential",
    geoLat: 12.9116, geoLng: 77.6389,
    sublocations: ["Sector 1", "Sector 2", "Sector 3", "Sector 4", "Sector 5", "Sector 6", "Sector 7", "Agara", "Kudlu Gate", "BDA Complex"],
    localNote: "Vape delivery in HSR Layout Bangalore — all 7 sectors covered. Elfbar Raya D1, Lost Mary, Caliburn G4, ZYN Cool Mint delivered in 30-45 minutes to your door.",
  },
  {
    slug: "btm-layout",
    name: "BTM Layout",
    category: "residential",
    geoLat: 12.9166, geoLng: 77.6101,
    sublocations: ["BTM 1st Stage", "BTM 2nd Stage", "Madiwala", "Tavarekere", "Udupi Garden", "Silk Board Junction"],
    localNote: "Vape delivery in BTM Layout Bangalore — 30-45 min to BTM 1st Stage, 2nd Stage, Madiwala, Tavarekere. All products in stock.",
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    category: "tech",
    geoLat: 12.9698, geoLng: 77.7499,
    sublocations: ["ITPL", "Brookefield", "AECS Layout", "Kundalahalli", "Hope Farm", "Kadugodi", "Varthur", "Mahadevapura", "Hoodi"],
    localNote: "Vape delivery in Whitefield Bangalore — full IT corridor covered. ITPL, Hope Farm, Kadugodi, Mahadevapura. 30-45 min, discreet delivery to gate or flat.",
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    category: "tech",
    geoLat: 12.8399, geoLng: 77.6770,
    sublocations: ["Phase 1", "Phase 2", "Doddathogur", "Neeladri Nagar", "Huskur", "Bommasandra", "Hosur Road"],
    localNote: "Vape delivery in Electronic City Bangalore — Phase 1, Phase 2, Neeladri Nagar, Hosur Road. Fast and discreet delivery to tech campuses and residences.",
  },
  {
    slug: "marathahalli",
    name: "Marathahalli",
    category: "residential",
    geoLat: 12.9591, geoLng: 77.6972,
    sublocations: ["Bridge Area", "ORR Junction", "Munnekollal", "Kadubeesanahalli", "Kalyani Nagar Road"],
    localNote: "Vape delivery in Marathahalli Bangalore — ORR, bridge area, Kadubeesanahalli. 30-45 min delivery.",
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    category: "residential",
    geoLat: 12.9250, geoLng: 77.5938,
    sublocations: ["1st Block", "2nd Block", "3rd Block", "4th Block", "4th T Block", "5th Block", "6th Block", "7th Block", "8th Block", "9th Block", "Shopping Complex"],
    localNote: "Vape delivery in Jayanagar Bangalore — all blocks from 1st to 9th. Jayanagar Shopping Complex area covered.",
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    category: "residential",
    geoLat: 13.0358, geoLng: 77.5970,
    sublocations: ["RT Nagar", "Nagawara", "Manyata Tech Park Area", "Kempapura", "Hebbal Lake"],
    localNote: "Vape delivery in Hebbal Bangalore — Manyata Tech Park, RT Nagar, Nagawara. North Bangalore fast delivery.",
  },
  {
    slug: "yelahanka",
    name: "Yelahanka",
    category: "residential",
    geoLat: 13.1007, geoLng: 77.5963,
    sublocations: ["New Town", "Old Town", "Attur", "Kogilu", "Vidyaranyapura", "Sahakara Nagar"],
    localNote: "Vape delivery in Yelahanka Bangalore — New Town, Old Town, Sahakara Nagar. North Bangalore delivery in 30-45 minutes.",
  },
  {
    slug: "jp-nagar",
    name: "JP Nagar",
    category: "residential",
    geoLat: 12.9063, geoLng: 77.5856,
    sublocations: ["1st Phase", "2nd Phase", "3rd Phase", "4th Phase", "5th Phase", "6th Phase", "7th Phase", "8th Phase"],
    localNote: "Vape delivery in JP Nagar Bangalore — all phases covered. South Bangalore fast delivery.",
  },
  {
    slug: "rajajinagar",
    name: "Rajajinagar",
    category: "residential",
    geoLat: 12.9923, geoLng: 77.5556,
    sublocations: ["1st Block", "2nd Block", "3rd Block", "4th Block", "5th Block", "Chord Road", "Vijayanagar"],
    localNote: "Vape delivery in Rajajinagar Bangalore — all blocks, Chord Road. West Bangalore delivery.",
  },
  {
    slug: "malleshwaram",
    name: "Malleshwaram",
    category: "residential",
    geoLat: 13.0035, geoLng: 77.5704,
    sublocations: ["8th Cross", "11th Cross", "15th Cross", "Sampige Road", "Mantri Square Area"],
    localNote: "Vape delivery in Malleshwaram Bangalore — 30-45 min to North Bangalore cultural hub.",
  },
  {
    slug: "bellandur",
    name: "Bellandur",
    category: "residential",
    geoLat: 12.9257, geoLng: 77.6785,
    sublocations: ["Yemalur", "Devarabisanahalli", "Kariyammana Agrahara", "Ecospace", "ORR"],
    localNote: "Vape delivery in Bellandur Bangalore — Ecospace, Sarjapur Road, ORR. Fast IT corridor delivery.",
  },
  {
    slug: "sarjapur-road",
    name: "Sarjapur Road",
    category: "residential",
    geoLat: 12.9140, geoLng: 77.6855,
    sublocations: ["Kaikondrahalli", "Kasavanahalli", "Harlur", "Ambalipura", "Carmelaram", "Haralur Road"],
    localNote: "Vape delivery on Sarjapur Road Bangalore — Harlur, Carmelaram, Haralur Road corridor.",
  },

  // ─── RESIDENTIAL ──────────────────────────
  { slug: "banashankari", name: "Banashankari", category: "residential", geoLat: 12.9255, geoLng: 77.5468, sublocations: ["1st Stage", "2nd Stage", "3rd Stage", "Kanakapura Road", "JP Nagar"], localNote: "Vape delivery in Banashankari Bangalore — South Bangalore 30-45 min delivery." },
  { slug: "basavanagudi", name: "Basavanagudi", category: "residential", geoLat: 12.9426, geoLng: 77.5743, sublocations: ["Gandhi Bazaar", "Bull Temple Road", "DVG Road", "Lalbagh West Gate"], localNote: "Vape delivery in Basavanagudi Bangalore — Gandhi Bazaar, Bull Temple Road area." },
  { slug: "vijayanagar", name: "Vijayanagar", category: "residential", geoLat: 12.9718, geoLng: 77.5237, sublocations: ["Chord Road", "Nagarbhavi", "West of Chord Road", "Basaveshwara Nagar"], localNote: "Vape delivery in Vijayanagar Bangalore — West Bangalore 30-45 min delivery." },
  { slug: "nagarbhavi", name: "Nagarbhavi", category: "residential", geoLat: 12.9582, geoLng: 77.5068, sublocations: ["Nagarbhavi", "Kengeri", "Uttarahalli", "RV College Area"], localNote: "Vape delivery in Nagarbhavi Bangalore — West Bangalore fast delivery." },
  { slug: "kengeri", name: "Kengeri", category: "residential", geoLat: 12.9063, geoLng: 77.4824, sublocations: ["Kengeri Satellite Town", "Uttarahalli", "Nayandahalli", "Rajarajeshwari Nagar"], localNote: "Vape delivery in Kengeri Bangalore — West Bangalore satellite town." },
  { slug: "frazer-town", name: "Frazer Town", category: "residential", geoLat: 12.9816, geoLng: 77.6196, sublocations: ["Frazer Town", "Cleveland Town", "Cox Town", "Ulsoor"], localNote: "Vape delivery in Frazer Town Bangalore — Central-North Bangalore 30-45 min." },
  { slug: "sadashivanagar", name: "Sadashivanagar", category: "residential", geoLat: 13.0089, geoLng: 77.5784, sublocations: ["Sadashivanagar", "Palace Road", "Rajmahal Vilas"], localNote: "Vape delivery in Sadashivanagar Bangalore — premium North Bangalore delivery." },
  { slug: "banaswadi", name: "Banaswadi", category: "residential", geoLat: 13.0130, geoLng: 77.6479, sublocations: ["Banaswadi", "HBR Layout", "Horamavu", "Ramamurthy Nagar"], localNote: "Vape delivery in Banaswadi Bangalore — North-East Bangalore fast delivery." },
  { slug: "hennur", name: "Hennur", category: "residential", geoLat: 13.0408, geoLng: 77.6394, sublocations: ["Hennur", "HBR Layout", "Kalyan Nagar", "Thanisandra"], localNote: "Vape delivery in Hennur Bangalore — North Bangalore residential delivery." },
  { slug: "cv-raman-nagar", name: "CV Raman Nagar", category: "residential", geoLat: 12.9897, geoLng: 77.6563, sublocations: ["CV Raman Nagar", "New Thippasandra", "Banaswadi"], localNote: "Vape delivery in CV Raman Nagar Bangalore — East Bangalore 30-45 min." },
  { slug: "kr-puram", name: "KR Puram", category: "residential", geoLat: 13.0034, geoLng: 77.6941, sublocations: ["KR Puram", "Tin Factory", "Old Madras Road", "Hoodi"], localNote: "Vape delivery in KR Puram Bangalore — East Bangalore fast delivery." },
  { slug: "yeshwanthpur", name: "Yeshwanthpur", category: "residential", geoLat: 13.0236, geoLng: 77.5400, sublocations: ["Yeshwanthpur", "Peenya", "Rajajinagar", "Malleshwaram West"], localNote: "Vape delivery in Yeshwanthpur Bangalore — North-West Bangalore delivery." },
  { slug: "ulsoor", name: "Ulsoor", category: "residential", geoLat: 12.9814, geoLng: 77.6218, sublocations: ["Ulsoor", "Halasuru", "Frazer Town", "MG Road adjacent"], localNote: "Vape delivery in Ulsoor Bangalore — Central Bangalore lake area." },
  { slug: "shivajinagar", name: "Shivajinagar", category: "residential", geoLat: 12.9855, geoLng: 77.6010, sublocations: ["Shivajinagar", "Vasanth Nagar", "Cunningham Road", "Richmond Town"], localNote: "Vape delivery in Shivajinagar Bangalore — Central Bangalore fast delivery." },
  { slug: "richmond-town", name: "Richmond Town", category: "residential", geoLat: 12.9602, geoLng: 77.6054, sublocations: ["Richmond Town", "Langford Road", "Residency Road", "Lalbagh adjacent"], localNote: "Vape delivery in Richmond Town Bangalore — premium Central Bangalore delivery." },
  { slug: "hoodi", name: "Hoodi", category: "residential", geoLat: 12.9887, geoLng: 77.7066, sublocations: ["Hoodi", "KR Puram", "ITPL adjacent", "Mahadevapura"], localNote: "Vape delivery in Hoodi Bangalore — East Bangalore IT zone." },
  { slug: "mahadevapura", name: "Mahadevapura", category: "residential", geoLat: 12.9925, geoLng: 77.7026, sublocations: ["Mahadevapura", "Whitefield adjacent", "ITPL", "Hoodi"], localNote: "Vape delivery in Mahadevapura Bangalore — East Bangalore tech hub." },
  { slug: "kadubeesanahalli", name: "Kadubeesanahalli", category: "residential", geoLat: 12.9394, geoLng: 77.6964, sublocations: ["Kadubeesanahalli", "Marathahalli", "ORR", "Panathur"], localNote: "Vape delivery in Kadubeesanahalli Bangalore — ORR corridor delivery." },
  { slug: "panathur", name: "Panathur", category: "residential", geoLat: 12.9350, geoLng: 77.7015, sublocations: ["Panathur", "ORR", "Marathahalli adjacent", "Varthur"], localNote: "Vape delivery in Panathur Bangalore — East ORR fast delivery." },
  { slug: "thanisandra", name: "Thanisandra", category: "residential", geoLat: 13.0534, geoLng: 77.6270, sublocations: ["Thanisandra", "Nagawara", "Manyata Tech Park", "HBR Layout"], localNote: "Vape delivery in Thanisandra Bangalore — North Bangalore delivery." },
  { slug: "nagawara", name: "Nagawara", category: "residential", geoLat: 13.0432, geoLng: 77.6268, sublocations: ["Nagawara", "HBR Layout", "Kalyan Nagar", "Kammanahalli"], localNote: "Vape delivery in Nagawara Bangalore — North Bangalore." },
  { slug: "bommanahalli", name: "Bommanahalli", category: "residential", geoLat: 12.8958, geoLng: 77.6412, sublocations: ["Bommanahalli", "Singasandra", "Kudlu", "Hosa Road"], localNote: "Vape delivery in Bommanahalli Bangalore — South Bangalore ORR corridor." },
  { slug: "gottigere", name: "Gottigere", category: "residential", geoLat: 12.8741, geoLng: 77.5994, sublocations: ["Gottigere", "Bannerghatta Road", "Hulimavu", "Arekere"], localNote: "Vape delivery in Gottigere Bangalore — South Bangalore Bannerghatta corridor." },
  { slug: "begur", name: "Begur", category: "residential", geoLat: 12.8742, geoLng: 77.6199, sublocations: ["Begur", "Hulimavu", "Electronic City Phase 2"], localNote: "Vape delivery in Begur Bangalore — South Bangalore delivery." },
  { slug: "arekere", name: "Arekere", category: "residential", geoLat: 12.8821, geoLng: 77.6050, sublocations: ["Arekere", "Bannerghatta Road", "Bilekahalli", "JP Nagar 8th Phase"], localNote: "Vape delivery in Arekere Bangalore — Bannerghatta Road corridor." },
  { slug: "harlur", name: "Harlur", category: "residential", geoLat: 12.9026, geoLng: 77.6782, sublocations: ["Harlur", "Haralur Road", "Sarjapur Road", "Bellandur"], localNote: "Vape delivery in Harlur Bangalore — South Bangalore residential." },
  { slug: "devanahalli", name: "Devanahalli", category: "residential", geoLat: 13.2495, geoLng: 77.7133, sublocations: ["Devanahalli", "Airport Zone", "Bagalur", "Chikkajala"], localNote: "Vape delivery in Devanahalli Bangalore — Airport zone North Bangalore." },
  { slug: "horamavu", name: "Horamavu", category: "residential", geoLat: 13.0220, geoLng: 77.6601, sublocations: ["Horamavu", "Banaswadi", "Ramamurthy Nagar", "Kalyan Nagar"], localNote: "Vape delivery in Horamavu Bangalore — North-East Bangalore." },
  { slug: "attibele", name: "Attibele", category: "residential", geoLat: 12.7792, geoLng: 77.7671, sublocations: ["Attibele", "Anekal", "Chandapura", "Bommasandra"], localNote: "Vape delivery in Attibele Bangalore — South Bangalore border." },

  // ─── TECH PARKS ───────────────────────────
  { slug: "manyata-tech-park", name: "Manyata Tech Park", category: "tech", geoLat: 13.0474, geoLng: 77.6218, sublocations: ["Manyata Tech Park", "Hebbal", "Nagawara", "Thanisandra"], localNote: "Vape delivery to Manyata Tech Park Bangalore — discreet delivery to gate in 30-45 minutes." },
  { slug: "prestige-tech-park", name: "Prestige Tech Park", category: "tech", geoLat: 12.9344, geoLng: 77.6855, sublocations: ["Prestige Tech Park", "ORR", "Marathahalli", "Bellandur"], localNote: "Vape delivery to Prestige Tech Park Bangalore — ORR corridor fast delivery." },
  { slug: "embassy-tech-village", name: "Embassy Tech Village", category: "tech", geoLat: 12.9316, geoLng: 77.6892, sublocations: ["Embassy Tech Village", "ORR", "Marathahalli", "Bellandur"], localNote: "Vape delivery to Embassy Tech Village Bangalore — discreet gate delivery." },
  { slug: "bagmane-tech-park", name: "Bagmane Tech Park", category: "tech", geoLat: 12.9866, geoLng: 77.6530, sublocations: ["Bagmane Tech Park", "CV Raman Nagar", "Old Madras Road"], localNote: "Vape delivery to Bagmane Tech Park Bangalore — East Bangalore IT hub." },
  { slug: "itpl-whitefield", name: "ITPL Whitefield", category: "tech", geoLat: 12.9862, geoLng: 77.7268, sublocations: ["ITPL", "Whitefield Main Road", "Brookefield", "Hope Farm"], localNote: "Vape delivery to ITPL Whitefield Bangalore — fast discreet IT campus delivery." },
  { slug: "ecospace-business-park", name: "Ecospace Business Park", category: "tech", geoLat: 12.9279, geoLng: 77.6823, sublocations: ["Ecospace", "Bellandur", "ORR", "Sarjapur Road"], localNote: "Vape delivery to Ecospace Bangalore — South ORR tech zone delivery." },
  { slug: "global-village-tech-park", name: "Global Village Tech Park", category: "tech", geoLat: 12.9220, geoLng: 77.4998, sublocations: ["Global Village", "Mysore Road", "Kengeri", "NICE Road"], localNote: "Vape delivery to Global Village Tech Park Bangalore — West Bangalore." },
  { slug: "cessna-business-park", name: "Cessna Business Park", category: "tech", geoLat: 12.9389, geoLng: 77.6947, sublocations: ["Cessna", "Kadubeesanahalli", "ORR", "Marathahalli"], localNote: "Vape delivery to Cessna Business Park Bangalore — ORR corridor." },
  { slug: "rmz-infinity", name: "RMZ Infinity", category: "tech", geoLat: 13.0045, geoLng: 77.6664, sublocations: ["RMZ Infinity", "Old Madras Road", "Banaswadi", "CV Raman Nagar"], localNote: "Vape delivery to RMZ Infinity Bangalore — East Bangalore tech campus." },

  // ─── LANDMARKS / AREAS ────────────────────
  { slug: "mg-road", name: "MG Road", category: "landmark", geoLat: 12.9756, geoLng: 77.6099, sublocations: ["MG Road", "Brigade Road", "Church Street", "Residency Road", "Cubbon Park"], localNote: "Vape delivery near MG Road Bangalore — Central Bangalore nightlife and pub area." },
  { slug: "brigade-road", name: "Brigade Road", category: "landmark", geoLat: 12.9726, geoLng: 77.6101, sublocations: ["Brigade Road", "Church Street", "MG Road", "Commercial Street"], localNote: "Vape delivery near Brigade Road Bangalore — Central Bangalore shopping strip." },
  { slug: "church-street", name: "Church Street", category: "landmark", geoLat: 12.9741, geoLng: 77.6124, sublocations: ["Church Street", "MG Road", "Brigade Road", "Residency Road", "St Marks Road"], localNote: "Vape delivery near Church Street Bangalore — pub and nightlife hub, fast delivery." },
  { slug: "commercial-street", name: "Commercial Street", category: "landmark", geoLat: 12.9816, geoLng: 77.6109, sublocations: ["Commercial Street", "Shivajinagar", "MG Road", "Frazer Town"], localNote: "Vape delivery near Commercial Street Bangalore — Central shopping area." },
  { slug: "cubbon-park", name: "Cubbon Park", category: "landmark", geoLat: 12.9763, geoLng: 77.5929, sublocations: ["Cubbon Park", "MG Road", "Kasturba Road", "Shivajinagar"], localNote: "Vape delivery near Cubbon Park Bangalore — Central Bangalore." },
  { slug: "lalbagh", name: "Lalbagh", category: "landmark", geoLat: 12.9507, geoLng: 77.5848, sublocations: ["Lalbagh", "Basavanagudi", "Jayanagar", "South End Road"], localNote: "Vape delivery near Lalbagh Bangalore — South Bangalore botanical garden area." },
  { slug: "bannerghatta-road", name: "Bannerghatta Road", category: "road", geoLat: 12.8965, geoLng: 77.5993, sublocations: ["Bannerghatta Road", "JP Nagar", "Arekere", "Gottigere", "Hulimavu"], localNote: "Vape delivery along Bannerghatta Road Bangalore — South Bangalore corridor." },
  { slug: "outer-ring-road", name: "Outer Ring Road", category: "road", geoLat: 12.9334, geoLng: 77.6855, sublocations: ["Marathahalli", "Bellandur", "Kadubeesanahalli", "Panathur", "Sarjapur Junction"], localNote: "Vape delivery along Outer Ring Road Bangalore — full ORR tech corridor." },
  { slug: "hosur-road", name: "Hosur Road", category: "road", geoLat: 12.8957, geoLng: 77.6360, sublocations: ["Dairy Circle", "BTM Layout", "Electronic City", "Bommanahalli", "Silk Board"], localNote: "Vape delivery along Hosur Road Bangalore — South Bangalore arterial road." },
  { slug: "mysore-road", name: "Mysore Road", category: "road", geoLat: 12.9389, geoLng: 77.4986, sublocations: ["Kengeri", "Rajarajeshwari Nagar", "Vijayanagar", "Nagarbhavi", "NICE Road"], localNote: "Vape delivery along Mysore Road Bangalore — West Bangalore corridor." },
  { slug: "tumkur-road", name: "Tumkur Road", category: "road", geoLat: 13.0178, geoLng: 77.5186, sublocations: ["Yeshwanthpur", "Peenya", "Rajajinagar", "Nagasandra"], localNote: "Vape delivery along Tumkur Road Bangalore — North-West Bangalore." },
  { slug: "kanakapura-road", name: "Kanakapura Road", category: "road", geoLat: 12.8945, geoLng: 77.5614, sublocations: ["JP Nagar", "Banashankari", "Uttarahalli", "Gottigere", "Talaghattapura"], localNote: "Vape delivery along Kanakapura Road Bangalore — South Bangalore residential." },
  { slug: "old-madras-road", name: "Old Madras Road", category: "road", geoLat: 13.0044, geoLng: 77.6664, sublocations: ["KR Puram", "Banaswadi", "Horamavu", "RMZ Infinity"], localNote: "Vape delivery along Old Madras Road Bangalore — East Bangalore." },

  // ─── HOSPITALS ────────────────────────────
  { slug: "manipal-hospital-bangalore", name: "Manipal Hospital", category: "hospital", geoLat: 12.9559, geoLng: 77.6455, sublocations: ["Old Airport Road", "HAL", "Domlur", "Indiranagar"], localNote: "Vape delivery near Manipal Hospital Bangalore — Old Airport Road area." },
  { slug: "fortis-hospital-bangalore", name: "Fortis Hospital", category: "hospital", geoLat: 12.8956, geoLng: 77.5993, sublocations: ["Bannerghatta Road", "JP Nagar", "Arekere"], localNote: "Vape delivery near Fortis Hospital Bangalore — Bannerghatta Road." },
  { slug: "apollo-hospital-bangalore", name: "Apollo Hospital", category: "hospital", geoLat: 12.8956, geoLng: 77.5993, sublocations: ["Bannerghatta Road", "JP Nagar", "Jayanagar"], localNote: "Vape delivery near Apollo Hospital Bangalore — South Bangalore." },
  { slug: "aster-cmi-hospital", name: "Aster CMI Hospital", category: "hospital", geoLat: 13.0536, geoLng: 77.6151, sublocations: ["Hebbal", "Thanisandra", "Nagawara", "Manyata Tech Park"], localNote: "Vape delivery near Aster CMI Hospital Bangalore — North Bangalore." },
  { slug: "narayana-health-city", name: "Narayana Health City", category: "hospital", geoLat: 12.8387, geoLng: 77.6681, sublocations: ["Bommasandra", "Electronic City", "Hosur Road"], localNote: "Vape delivery near Narayana Health City Bangalore — South Bangalore." },
  { slug: "sakra-world-hospital", name: "Sakra World Hospital", category: "hospital", geoLat: 12.9407, geoLng: 77.6914, sublocations: ["Devarabeesanahalli", "Marathahalli", "Bellandur", "ORR"], localNote: "Vape delivery near Sakra World Hospital Bangalore — ORR East." },

  // ─── MALLS ────────────────────────────────
  { slug: "phoenix-marketcity", name: "Phoenix Marketcity", category: "mall", geoLat: 12.9965, geoLng: 77.6966, sublocations: ["Whitefield", "ITPL", "Marathahalli", "Brookefield"], localNote: "Vape delivery near Phoenix Marketcity Whitefield Bangalore." },
  { slug: "orion-mall", name: "Orion Mall", category: "mall", geoLat: 13.0114, geoLng: 77.5553, sublocations: ["Rajajinagar", "Malleshwaram", "Yeshwanthpur", "Tumkur Road"], localNote: "Vape delivery near Orion Mall Bangalore — North-West Bangalore." },
  { slug: "forum-mall", name: "Forum Mall Koramangala", category: "mall", geoLat: 12.9341, geoLng: 77.6101, sublocations: ["Koramangala", "BTM Layout", "HSR Layout", "Hosur Road"], localNote: "Vape delivery near Forum Mall Koramangala Bangalore." },
  { slug: "garuda-mall", name: "Garuda Mall", category: "mall", geoLat: 12.9720, geoLng: 77.6097, sublocations: ["Magrath Road", "MG Road", "Brigade Road", "Residency Road"], localNote: "Vape delivery near Garuda Mall Bangalore — Central Bangalore." },
  { slug: "mantri-square", name: "Mantri Square Mall", category: "mall", geoLat: 13.0039, geoLng: 77.5707, sublocations: ["Malleshwaram", "Sadashivanagar", "Rajajinagar", "Yeshwanthpur"], localNote: "Vape delivery near Mantri Square Mall Bangalore — North Bangalore." },
  { slug: "elements-mall", name: "Elements Mall", category: "mall", geoLat: 13.0523, geoLng: 77.6199, sublocations: ["Thanisandra", "Hebbal", "Nagawara", "Manyata Tech Park"], localNote: "Vape delivery near Elements Mall Bangalore — North Bangalore." },
  { slug: "gopalan-mall", name: "Gopalan Mall", category: "mall", geoLat: 12.9055, geoLng: 77.5910, sublocations: ["Bannerghatta Road", "JP Nagar", "Jayanagar"], localNote: "Vape delivery near Gopalan Mall Bangalore — South Bangalore." },
  { slug: "inorbit-mall", name: "Inorbit Mall Whitefield", category: "mall", geoLat: 12.9952, geoLng: 77.6949, sublocations: ["Whitefield", "ITPL", "Marathahalli", "Brookefield"], localNote: "Vape delivery near Inorbit Mall Whitefield Bangalore." },

  // ─── HOTELS ───────────────────────────────
  { slug: "leela-palace-bangalore", name: "Leela Palace", category: "hotel", geoLat: 12.9562, geoLng: 77.6455, sublocations: ["Old Airport Road", "HAL", "Kodihalli", "Indiranagar"], localNote: "Discreet vape delivery near Leela Palace Bangalore — 5-star hotel zone." },
  { slug: "four-seasons-bangalore", name: "Four Seasons Bangalore", category: "hotel", geoLat: 12.9721, geoLng: 77.5933, sublocations: ["St Marks Road", "Cubbon Park", "MG Road", "Lavelle Road"], localNote: "Discreet vape delivery near Four Seasons Hotel Bangalore." },
  { slug: "jw-marriott-bangalore", name: "JW Marriott Bangalore", category: "hotel", geoLat: 12.9718, geoLng: 77.5943, sublocations: ["Vittal Mallya Road", "Lavelle Road", "MG Road", "UB City"], localNote: "Discreet vape delivery near JW Marriott Bangalore — premium delivery service." },
  { slug: "taj-west-end-bangalore", name: "Taj West End", category: "hotel", geoLat: 12.9776, geoLng: 77.5794, sublocations: ["Race Course Road", "Cunningham Road", "Shivajinagar", "Malleshwaram"], localNote: "Discreet vape delivery near Taj West End Bangalore — heritage hotel zone." },
  { slug: "hyatt-regency-bangalore", name: "Hyatt Regency Bangalore", category: "hotel", geoLat: 12.9555, geoLng: 77.6467, sublocations: ["Old Airport Road", "HAL", "Domlur", "Indiranagar"], localNote: "Discreet vape delivery near Hyatt Regency Bangalore." },
  { slug: "oberoi-hotel-bangalore", name: "Oberoi Hotel Bangalore", category: "hotel", geoLat: 12.9725, geoLng: 77.6100, sublocations: ["MG Road", "Cubbon Park", "Brigade Road", "Residency Road"], localNote: "Discreet vape delivery near Oberoi Hotel Bangalore — Central premium zone." },
  { slug: "itc-gardenia-bangalore", name: "ITC Gardenia", category: "hotel", geoLat: 12.9607, geoLng: 77.6054, sublocations: ["Residency Road", "MG Road", "Richmond Town", "Lavelle Road"], localNote: "Discreet vape delivery near ITC Gardenia Bangalore." },
  { slug: "sheraton-grand-bangalore", name: "Sheraton Grand Bangalore", category: "hotel", geoLat: 12.9984, geoLng: 77.5782, sublocations: ["Palace Road", "Vasanth Nagar", "Shivajinagar", "Malleshwaram"], localNote: "Discreet vape delivery near Sheraton Grand Bangalore." },
  { slug: "conrad-bangalore", name: "Conrad Bangalore", category: "hotel", geoLat: 12.9723, geoLng: 77.5941, sublocations: ["Vittal Mallya Road", "UB City", "MG Road", "Lavelle Road"], localNote: "Discreet vape delivery near Conrad Bangalore — luxury hotel delivery." },

  // ─── COLLEGES ─────────────────────────────
  { slug: "iisc-bangalore", name: "IISc Bangalore", category: "college", geoLat: 13.0212, geoLng: 77.5671, sublocations: ["IISc Campus", "Malleshwaram", "Sadashivanagar", "Yeshwanthpur"], localNote: "Vape delivery near IISc Bangalore — research campus North Bangalore." },
  { slug: "christ-university-bangalore", name: "Christ University", category: "college", geoLat: 12.9347, geoLng: 77.6094, sublocations: ["Hosur Road", "BTM Layout", "Dairy Circle", "Koramangala"], localNote: "Vape delivery near Christ University Bangalore — Hosur Road." },
  { slug: "rv-college-bangalore", name: "RV College", category: "college", geoLat: 12.9236, geoLng: 77.4987, sublocations: ["Mysore Road", "Kengeri", "Rajarajeshwari Nagar", "Vijayanagar"], localNote: "Vape delivery near RV College Bangalore — West Bangalore." },
  { slug: "bms-college-bangalore", name: "BMS College", category: "college", geoLat: 12.9425, geoLng: 77.5703, sublocations: ["Bull Temple Road", "Basavanagudi", "Jayanagar", "Gandhi Bazaar"], localNote: "Vape delivery near BMS College Bangalore — South Bangalore." },
  { slug: "ms-ramaiah-bangalore", name: "MS Ramaiah", category: "college", geoLat: 13.0191, geoLng: 77.5587, sublocations: ["Mathikere", "Yeshwanthpur", "Rajajinagar", "Malleshwaram"], localNote: "Vape delivery near MS Ramaiah Bangalore — North Bangalore education hub." },
  { slug: "jain-university-bangalore", name: "Jain University", category: "college", geoLat: 12.9166, geoLng: 77.5969, sublocations: ["Jayanagar", "BTM Layout", "JP Nagar", "Kanakapura Road"], localNote: "Vape delivery near Jain University Bangalore — South Bangalore." },

  // ─── STADIUMS / ENTERTAINMENT ─────────────
  { slug: "chinnaswamy-stadium", name: "M Chinnaswamy Stadium", category: "landmark", geoLat: 12.9788, geoLng: 77.5996, sublocations: ["MG Road", "Brigade Road", "Shivajinagar", "Cubbon Park", "Queens Road"], localNote: "Vape delivery near Chinnaswamy Stadium Bangalore — Central Bangalore cricket zone." },
  { slug: "kanteerava-stadium", name: "Kanteerava Stadium", category: "landmark", geoLat: 12.9737, geoLng: 77.5932, sublocations: ["Kasturba Road", "MG Road", "Shivajinagar", "Vasanth Nagar"], localNote: "Vape delivery near Kanteerava Stadium Bangalore — Central Bangalore." },

  // ─── AIRPORT ──────────────────────────────
  { slug: "kempegowda-airport", name: "Kempegowda International Airport", category: "landmark", geoLat: 13.1986, geoLng: 77.7066, sublocations: ["Devanahalli", "Yelahanka", "Hebbal", "Bagalur", "Chikkajala"], localNote: "Vape delivery near Kempegowda Airport Bangalore — airport zone and North Bangalore." },

  // ─── METRO ────────────────────────────────
  { slug: "namma-metro-bangalore", name: "Namma Metro Bangalore", category: "metro", geoLat: 12.9756, geoLng: 77.6099, sublocations: ["MG Road Metro", "Indiranagar Metro", "Whitefield Metro", "Yeshwanthpur Metro", "Hebbal Metro", "Rajajinagar Metro"], localNote: "Vape delivery near Namma Metro stations Bangalore — all metro corridors covered." },

  // ─── PUB / NIGHTLIFE ZONES ────────────────
  { slug: "toit-brewery-area", name: "Toit Brewery Area", category: "landmark", geoLat: 12.9784, geoLng: 77.6408, sublocations: ["Indiranagar 100 Feet Road", "CMH Road", "12th Main", "Domlur"], localNote: "Vape delivery near Toit Brewery Indiranagar Bangalore — craft beer and pub hub." },
  { slug: "koramangala-pub-zone", name: "Koramangala Pub Zone", category: "landmark", geoLat: 12.9352, geoLng: 77.6245, sublocations: ["Koramangala 5th Block", "7th Block", "80 Feet Road", "Sony Signal"], localNote: "Vape delivery near Koramangala pub zone Bangalore — Bangalore's top nightlife area." },
  { slug: "ub-city-bangalore", name: "UB City", category: "landmark", geoLat: 12.9722, geoLng: 77.5948, sublocations: ["UB City Mall", "Vittal Mallya Road", "Lavelle Road", "MG Road"], localNote: "Vape delivery near UB City Bangalore — premium commercial and lifestyle hub." },
  { slug: "us-consulate-bangalore", name: "US Consulate Bangalore", category: "landmark", geoLat: 12.9569, geoLng: 77.6011, sublocations: ["Lavelle Road", "Residency Road", "MG Road", "Richmond Town"], localNote: "Vape delivery near US Consulate Bangalore — Lavelle Road premium zone. Discreet delivery in 30-45 minutes." },
  { slug: "british-high-commission-bangalore", name: "British Deputy High Commission", category: "landmark", geoLat: 12.9606, geoLng: 77.6007, sublocations: ["Residency Road", "Lavelle Road", "Richmond Town", "MG Road"], localNote: "Vape delivery near British Deputy High Commission Bangalore — Central diplomatic zone." },
  { slug: "german-consulate-bangalore", name: "German Consulate Bangalore", category: "landmark", geoLat: 12.9650, geoLng: 77.5950, sublocations: ["Lavelle Road", "Cunningham Road", "MG Road"], localNote: "Vape delivery near German Consulate Bangalore — Central diplomatic area." },
  { slug: "french-consulate-bangalore", name: "French Consulate Bangalore", category: "landmark", geoLat: 12.9617, geoLng: 77.5990, sublocations: ["Lavelle Road", "Residency Road", "Richmond Town"], localNote: "Vape delivery near French Consulate Bangalore — discreet fast delivery." },
  { slug: "japanese-consulate-bangalore", name: "Japanese Consulate Bangalore", category: "landmark", geoLat: 12.9595, geoLng: 77.6015, sublocations: ["Residency Road", "Lavelle Road", "MG Road"], localNote: "Vape delivery near Japanese Consulate Bangalore — premium Central Bangalore." },
  { slug: "lavelle-road-bangalore", name: "Lavelle Road", category: "landmark", geoLat: 12.9615, geoLng: 77.5955, sublocations: ["Lavelle Road", "Residency Road", "MG Road", "Richmond Town", "UB City"], localNote: "Vape delivery on Lavelle Road Bangalore — premium expat corridor, discreet delivery." },
  { slug: "cunningham-road-bangalore", name: "Cunningham Road", category: "landmark", geoLat: 12.9832, geoLng: 77.5891, sublocations: ["Cunningham Road", "Vasanth Nagar", "Shivajinagar", "Malleshwaram"], localNote: "Vape delivery on Cunningham Road Bangalore — premium Central Bangalore." },
  { slug: "whitefield-expat-zone", name: "Whitefield Expat Zone", category: "residential", geoLat: 12.9698, geoLng: 77.7499, sublocations: ["Prestige Shantiniketan", "Brigade Metropolis", "Sobha City", "ITPL Road"], localNote: "Vape delivery in Whitefield expat zone Bangalore — gated communities, discreet delivery to gate." },
  { slug: "embassy-golf-links-bangalore", name: "Embassy Golf Links", category: "residential", geoLat: 12.9560, geoLng: 77.6450, sublocations: ["Old Airport Road", "Indiranagar", "HAL", "Kodihalli"], localNote: "Vape delivery to Embassy Golf Links Bangalore — ultra-premium residential." },
  { slug: "prestige-shantiniketan", name: "Prestige Shantiniketan", category: "residential", geoLat: 12.9973, geoLng: 77.6966, sublocations: ["Whitefield", "ITPL Road", "Hoodi", "Mahadevapura"], localNote: "Vape delivery to Prestige Shantiniketan Bangalore — premium gated community." },
  { slug: "kga-golf-course-bangalore", name: "Karnataka Golf Association", category: "landmark", geoLat: 12.9593, geoLng: 77.6455, sublocations: ["HAL Airport Road", "Kodihalli", "Indiranagar", "Domlur"], localNote: "Vape delivery near KGA Golf Course Bangalore — premium Old Airport Road zone." },
  { slug: "koramangala-indoor-stadium", name: "Koramangala Indoor Stadium", category: "landmark", geoLat: 12.9270, geoLng: 77.6248, sublocations: ["Koramangala", "HSR Layout", "BTM Layout", "Ejipura"], localNote: "Vape delivery near Koramangala Indoor Stadium Bangalore." },
  { slug: "lulu-mall-bangalore", name: "LuLu Mall Bangalore", category: "mall", geoLat: 13.0114, geoLng: 77.5553, sublocations: ["Rajajinagar", "Yeshwanthpur", "Malleshwaram", "Tumkur Road"], localNote: "Vape delivery near LuLu Mall Bangalore — North-West Bangalore mega mall." },
  { slug: "vega-city-mall-bangalore", name: "Vega City Mall", category: "mall", geoLat: 12.9145, geoLng: 77.5985, sublocations: ["BTM Layout", "Dairy Circle", "Hosur Road", "JP Nagar"], localNote: "Vape delivery near Vega City Mall Bangalore — South Bangalore." },
  { slug: "forum-shantiniketan-mall", name: "Forum Shantiniketan Mall", category: "mall", geoLat: 12.9973, geoLng: 77.6966, sublocations: ["Whitefield", "ITPL", "Brookefield", "Mahadevapura"], localNote: "Vape delivery near Forum Shantiniketan Mall Whitefield Bangalore." },
  { slug: "gt-world-mall-bangalore", name: "GT World Mall", category: "mall", geoLat: 12.9219, geoLng: 77.5025, sublocations: ["Mysore Road", "Kengeri", "Rajarajeshwari Nagar", "Uttarahalli"], localNote: "Vape delivery near GT World Mall Bangalore — West Bangalore." },
  { slug: "royal-meenakshi-mall", name: "Royal Meenakshi Mall", category: "mall", geoLat: 12.8756, geoLng: 77.5999, sublocations: ["Bannerghatta Road", "Hulimavu", "Gottigere", "JP Nagar 7th Phase"], localNote: "Vape delivery near Royal Meenakshi Mall Bangalore — South Bangalore." },
  { slug: "sobha-city-bangalore", name: "Sobha City", category: "residential", geoLat: 13.0470, geoLng: 77.6202, sublocations: ["Hebbal", "Thanisandra", "Manyata Tech Park", "Nagawara"], localNote: "Vape delivery to Sobha City Bangalore — premium gated community North Bangalore." },
  { slug: "toit-brewery-area", name: "Toit Brewery Area", category: "landmark", geoLat: 12.9784, geoLng: 77.6408, sublocations: ["Indiranagar 100 Feet Road", "CMH Road", "12th Main", "Domlur"], localNote: "Vape delivery near Toit Brewery Indiranagar Bangalore — craft beer and pub hub." },
  { slug: "koramangala-pub-zone", name: "Koramangala Pub Zone", category: "landmark", geoLat: 12.9352, geoLng: 77.6245, sublocations: ["Koramangala 5th Block", "7th Block", "80 Feet Road", "Sony Signal"], localNote: "Vape delivery near Koramangala pub zone Bangalore — top nightlife area." },

];

// ─── HELPERS ──────────────────────────────────────────
export const LOCATION_COUNT = locations.length;

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getLocationsByCategory(category: Location["category"]): Location[] {
  return locations.filter((l) => l.category === category);
}

export function getNearbyLocations(slug: string, count = 5): Location[] {
  const current = getLocationBySlug(slug);
  if (!current || !current.geoLat || !current.geoLng) {
    return locations.filter((l) => l.slug !== slug).slice(0, count);
  }
  return locations
    .filter((l) => l.slug !== slug && l.geoLat && l.geoLng)
    .map((l) => ({
      ...l,
      distance: Math.sqrt(
        Math.pow((l.geoLat! - current.geoLat!) * 111, 2) +
        Math.pow((l.geoLng! - current.geoLng!) * 111 * Math.cos(current.geoLat! * Math.PI / 180), 2)
      ),
    }))
    .sort((a: any, b: any) => a.distance - b.distance)
    .slice(0, count);
}

export const WHATSAPP_URL = "https://wa.me/916282878843?text=Hi%20VapeBangalore%2C%20I%20want%20to%20place%20an%20order.";
export const TELEGRAM_URL = "https://t.me/vapebangalorebot?start=order";
