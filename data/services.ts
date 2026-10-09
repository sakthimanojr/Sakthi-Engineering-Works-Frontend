import type { Lang, Localized } from "@/types";

export interface Service {
  slug: string;
  number: string;
  title: Localized;
  short: Localized;
  description: Localized;
  features: Localized[];
  applications: Localized[];
  image: string;
  featured?: boolean;
}

const l = (en: string, ta: string): Localized => ({ en, ta });

export const services: Service[] = [
  {
    slug: "sheet-bending-shearing",
    number: "01",
    title: l("Sheet Bending & Shearing", "தகடு வளைத்தல் & வெட்டுதல்"),
    short: l(
      "Sheet cutting, power shearing, press brake bending, plate cutting and forming for industries, fabricators and project work.",
      "தொழிற்சாலைகள், ஃபேப்ரிகேட்டர்கள் மற்றும் திட்டப் பணிகளுக்கான தகடு வெட்டுதல், பவர் ஷியரிங், பிரஸ் பிரேக் வளைத்தல், பிளேட் வெட்டுதல் மற்றும் வடிவமைத்தல்."
    ),
    description: l(
      "Sheet bending and shearing is a core part of our fabrication work at the Walajapet factory. Using shearing and press brake machines, we cut, bend and form sheet and plate to the sizes and profiles your job requires — as a standalone service or as part of a larger fabrication.",
      "தகடு வளைத்தல் மற்றும் வெட்டுதல் வாலாஜாபேட்டை தொழிற்சாலையில் எங்கள் ஃபேப்ரிகேஷன் பணியின் முக்கிய பகுதியாகும். ஷியரிங் மற்றும் பிரஸ் பிரேக் இயந்திரங்களைப் பயன்படுத்தி, உங்கள் பணிக்குத் தேவையான அளவுகள் மற்றும் வடிவங்களில் தகடு மற்றும் பிளேட்டை வெட்டி, வளைத்து, வடிவமைக்கிறோம் — தனிச் சேவையாகவோ பெரிய ஃபேப்ரிகேஷனின் ஒரு பகுதியாகவோ."
    ),
    features: [
      l("Sheet cutting", "தகடு வெட்டுதல்"),
      l("Power shearing", "பவர் ஷியரிங்"),
      l("Sheet bending", "தகடு வளைத்தல்"),
      l("Press brake work", "பிரஸ் பிரேக் பணிகள்"),
      l("Plate cutting", "பிளேட் வெட்டுதல்"),
      l("Forming", "வடிவமைத்தல் (ஃபார்மிங்)"),
    ],
    applications: [
      l("Fabricated components and enclosures", "ஃபேப்ரிகேட் செய்யப்பட்ட பாகங்கள் மற்றும் உறைகள்"),
      l("Industrial and machine parts", "தொழில்துறை மற்றும் இயந்திர பாகங்கள்"),
      l("Sheet work for structures and bodies", "கட்டமைப்புகள் மற்றும் பாடிகளுக்கான தகடு பணிகள்"),
    ],
    image: "/images/services/sheet-bending-shearing.jpg",
    featured: true,
  },
  {
    slug: "structural-sheds-roofing",
    number: "02",
    title: l("Structural Sheds & Roofing", "கட்டமைப்பு ஷெட்கள் & மேற்கூரை"),
    short: l(
      "Industrial, factory and warehouse sheds with trusses, purlins, roof sheets and structural steel work.",
      "டிரஸ், பர்லின், கூரைத் தகடுகள் மற்றும் கட்டமைப்பு ஸ்டீல் பணிகளுடன் தொழில்துறை, தொழிற்சாலை மற்றும் கிடங்கு ஷெட்கள்."
    ),
    description: l(
      "We fabricate and erect structural steel sheds and roofing structures for industrial, factory and warehouse use, built to your layout and requirements.",
      "தொழில்துறை, தொழிற்சாலை மற்றும் கிடங்குப் பயன்பாட்டிற்கான கட்டமைப்பு ஸ்டீல் ஷெட்கள் மற்றும் மேற்கூரை அமைப்புகளை உங்கள் வடிவமைப்பு மற்றும் தேவைக்கேற்ப உருவாக்கி நிறுவுகிறோம்."
    ),
    features: [
      l("Industrial sheds", "தொழில்துறை ஷெட்கள்"),
      l("Factory sheds", "தொழிற்சாலை ஷெட்கள்"),
      l("Warehouse sheds", "கிடங்கு ஷெட்கள்"),
      l("Roofing structures", "மேற்கூரை அமைப்புகள்"),
      l("Trusses", "டிரஸ்கள்"),
      l("Purlins", "பர்லின்கள்"),
      l("Roof sheets", "கூரைத் தகடுகள்"),
      l("Structural steel work", "கட்டமைப்பு ஸ்டீல் பணிகள்"),
    ],
    applications: [
      l("Factories and workshops", "தொழிற்சாலைகள் மற்றும் பணிமனைகள்"),
      l("Warehouses and storage", "கிடங்குகள் மற்றும் சேமிப்பு"),
      l("Large roofing projects", "பெரிய மேற்கூரைத் திட்டங்கள்"),
    ],
    image: "/images/services/structural-sheds-roofing.jpg",
    featured: true,
  },
  {
    slug: "peb-buildings",
    number: "03",
    title: l("PEB Buildings", "PEB கட்டிடங்கள்"),
    short: l(
      "Pre-Engineered Buildings for warehouses and factories, with structural frames and roofing systems.",
      "கிடங்குகள் மற்றும் தொழிற்சாலைகளுக்கான முன்-பொறியியல் கட்டிடங்கள் (PEB), கட்டமைப்பு ஃபிரேம்கள் மற்றும் மேற்கூரை அமைப்புகளுடன்."
    ),
    description: l(
      "We take up Pre-Engineered Building (PEB) works for industrial buildings, warehouses and factories, including structural frames and roofing systems.",
      "தொழில்துறை கட்டிடங்கள், கிடங்குகள் மற்றும் தொழிற்சாலைகளுக்கான முன்-பொறியியல் கட்டிடப் (PEB) பணிகளை, கட்டமைப்பு ஃபிரேம்கள் மற்றும் மேற்கூரை அமைப்புகள் உட்பட மேற்கொள்கிறோம்."
    ),
    features: [
      l("Pre-Engineered Buildings", "முன்-பொறியியல் கட்டிடங்கள் (PEB)"),
      l("PEB industrial buildings", "PEB தொழில்துறை கட்டிடங்கள்"),
      l("Warehouses", "கிடங்குகள்"),
      l("Factory buildings", "தொழிற்சாலை கட்டிடங்கள்"),
      l("Structural frames", "கட்டமைப்பு ஃபிரேம்கள்"),
      l("Roofing systems", "மேற்கூரை அமைப்புகள்"),
    ],
    applications: [
      l("Industrial buildings", "தொழில்துறை கட்டிடங்கள்"),
      l("Warehouses", "கிடங்குகள்"),
      l("Commercial structures", "வணிக அமைப்புகள்"),
    ],
    image: "/images/services/peb-buildings.jpg",
    featured: true,
  },
  {
    slug: "grills-safety-grills",
    number: "04",
    title: l("Grills & Safety Grills", "கிரில்கள் & பாதுகாப்பு கிரில்கள்"),
    short: l("Window, balcony, safety and decorative MS grills, made to your design.", "ஜன்னல், பால்கனி, பாதுகாப்பு மற்றும் அலங்கார எம்.எஸ் கிரில்கள் — உங்கள் வடிவமைப்புக்கேற்ப."),
    description: l(
      "From plain safety grills to decorative designs, we fabricate MS grills for homes, shops and buildings as per your design and measurements.",
      "எளிய பாதுகாப்பு கிரில்கள் முதல் அலங்கார வடிவமைப்புகள் வரை, வீடுகள், கடைகள் மற்றும் கட்டிடங்களுக்கான எம்.எஸ் கிரில்களை உங்கள் வடிவமைப்பு மற்றும் அளவுகளுக்கேற்ப உருவாக்குகிறோம்."
    ),
    features: [
      l("Window grills", "ஜன்னல் கிரில்கள்"),
      l("Balcony grills", "பால்கனி கிரில்கள்"),
      l("Safety grills", "பாதுகாப்பு கிரில்கள்"),
      l("MS grills", "எம்.எஸ் கிரில்கள்"),
      l("Decorative grills", "அலங்கார கிரில்கள்"),
      l("Custom grill fabrication", "தனிப்பயன் கிரில் ஃபேப்ரிகேஷன்"),
    ],
    applications: [l("Homes and apartments", "வீடுகள் மற்றும் குடியிருப்புகள்"), l("Shops and offices", "கடைகள் மற்றும் அலுவலகங்கள்"), l("Commercial buildings", "வணிகக் கட்டிடங்கள்")],
    image: "/images/services/grills-safety-grills.jpg",
  },
  {
    slug: "gates",
    number: "05",
    title: l("Gates", "கேட்கள்"),
    short: l("MS main gates, sliding gates, swing gates and industrial gates in custom designs.", "எம்.எஸ் பிரதான கேட்கள், ஸ்லைடிங் கேட்கள், ஸ்விங் கேட்கள் மற்றும் தொழில்துறை கேட்கள் — தனிப்பயன் வடிவமைப்புகளில்."),
    description: l(
      "We fabricate MS gates for residences, commercial premises and industrial sites, including sliding and swing types and custom-designed gates.",
      "குடியிருப்புகள், வணிக வளாகங்கள் மற்றும் தொழில்துறை தளங்களுக்கான எம்.எஸ் கேட்களை, ஸ்லைடிங் மற்றும் ஸ்விங் வகைகள் மற்றும் தனிப்பயன் வடிவமைப்பு கேட்கள் உட்பட உருவாக்குகிறோம்."
    ),
    features: [
      l("MS gates", "எம்.எஸ் கேட்கள்"),
      l("Main gates", "பிரதான கேட்கள்"),
      l("Sliding gates", "ஸ்லைடிங் கேட்கள்"),
      l("Swing gates", "ஸ்விங் கேட்கள்"),
      l("Industrial gates", "தொழில்துறை கேட்கள்"),
      l("Custom-designed gates", "தனிப்பயன் வடிவமைப்பு கேட்கள்"),
    ],
    applications: [l("Residential entrances", "குடியிருப்பு நுழைவாயில்கள்"), l("Factory and warehouse entrances", "தொழிற்சாலை மற்றும் கிடங்கு நுழைவாயில்கள்"), l("Commercial premises", "வணிக வளாகங்கள்")],
    image: "/images/services/gates.jpg",
  },
  {
    slug: "collapsible-gates",
    number: "06",
    title: l("Collapsible Gates", "மடக்கு கேட்கள்"),
    short: l("Security, shop-front and commercial collapsible gates, made to size.", "பாதுகாப்பு, கடை முகப்பு மற்றும் வணிக மடக்கு கேட்கள் — அளவுக்கேற்ப."),
    description: l(
      "Collapsible gates for shop fronts, commercial premises and security applications, fabricated to your opening size.",
      "கடை முகப்புகள், வணிக வளாகங்கள் மற்றும் பாதுகாப்புத் தேவைகளுக்கான மடக்கு கேட்கள், உங்கள் திறப்பு அளவுக்கேற்ப உருவாக்கப்படுகின்றன."
    ),
    features: [
      l("Security gates", "பாதுகாப்பு கேட்கள்"),
      l("Shop-front gates", "கடை முகப்பு கேட்கள்"),
      l("Commercial gates", "வணிக கேட்கள்"),
      l("Custom collapsible gates", "தனிப்பயன் மடக்கு கேட்கள்"),
    ],
    applications: [l("Shop fronts", "கடை முகப்புகள்"), l("Commercial premises", "வணிக வளாகங்கள்"), l("Security entrances", "பாதுகாப்பு நுழைவாயில்கள்")],
    image: "/images/services/collapsible-gates.jpg",
  },
  {
    slug: "staircases",
    number: "07",
    title: l("Staircases", "படிக்கட்டுகள்"),
    short: l("MS, industrial, spiral and straight staircases, platform stairs and handrails.", "எம்.எஸ், தொழில்துறை, சுருள் மற்றும் நேரான படிக்கட்டுகள், பிளாட்ஃபார்ம் படிகள் மற்றும் கைப்பிடிகள்."),
    description: l(
      "We fabricate steel staircases for homes, commercial buildings and industrial platforms, with handrails to suit.",
      "வீடுகள், வணிகக் கட்டிடங்கள் மற்றும் தொழில்துறை பிளாட்ஃபார்ம்களுக்கான ஸ்டீல் படிக்கட்டுகளை, பொருத்தமான கைப்பிடிகளுடன் உருவாக்குகிறோம்."
    ),
    features: [
      l("MS staircases", "எம்.எஸ் படிக்கட்டுகள்"),
      l("Industrial staircases", "தொழில்துறை படிக்கட்டுகள்"),
      l("Spiral staircases", "சுருள் படிக்கட்டுகள்"),
      l("Straight staircases", "நேரான படிக்கட்டுகள்"),
      l("Platform stairs", "பிளாட்ஃபார்ம் படிகள்"),
      l("Handrails", "கைப்பிடிகள்"),
    ],
    applications: [l("Industrial platforms", "தொழில்துறை பிளாட்ஃபார்ம்கள்"), l("Commercial buildings", "வணிகக் கட்டிடங்கள்"), l("Residential use", "குடியிருப்புப் பயன்பாடு")],
    image: "/images/services/staircases.jpg",
  },
  {
    slug: "rolling-shutters",
    number: "08",
    title: l("Rolling Shutters", "ரோலிங் ஷட்டர்கள்"),
    short: l("Manual, industrial, shop and heavy-duty rolling shutters, fabricated to order.", "கையால் இயக்கும், தொழில்துறை, கடை மற்றும் கனரக ரோலிங் ஷட்டர்கள் — ஆர்டருக்கேற்ப."),
    description: l(
      "Rolling shutters for shops, workshops, warehouses and factories, including heavy-duty and custom-sized shutters.",
      "கடைகள், பணிமனைகள், கிடங்குகள் மற்றும் தொழிற்சாலைகளுக்கான ரோலிங் ஷட்டர்கள், கனரக மற்றும் தனிப்பயன் அளவு ஷட்டர்கள் உட்பட."
    ),
    features: [
      l("Manual rolling shutters", "கையால் இயக்கும் ரோலிங் ஷட்டர்கள்"),
      l("Industrial rolling shutters", "தொழில்துறை ரோலிங் ஷட்டர்கள்"),
      l("Shop shutters", "கடை ஷட்டர்கள்"),
      l("Heavy-duty shutters", "கனரக ஷட்டர்கள்"),
      l("Custom shutter fabrication", "தனிப்பயன் ஷட்டர் ஃபேப்ரிகேஷன்"),
    ],
    applications: [l("Shops", "கடைகள்"), l("Workshops and warehouses", "பணிமனைகள் மற்றும் கிடங்குகள்"), l("Factories", "தொழிற்சாலைகள்")],
    image: "/images/services/rolling-shutters.jpg",
  },
  {
    slug: "container-body-building",
    number: "09",
    title: l("Container Body Building", "கன்டெய்னர் பாடி கட்டுமானம்"),
    short: l("Container bodies, cargo bodies and commercial vehicle body fabrication.", "கன்டெய்னர் பாடிகள், சரக்கு பாடிகள் மற்றும் வணிக வாகன பாடி ஃபேப்ரிகேஷன்."),
    description: l(
      "We fabricate container bodies, cargo bodies and other transport bodies for commercial vehicles, built to your requirements.",
      "வணிக வாகனங்களுக்கான கன்டெய்னர் பாடிகள், சரக்கு பாடிகள் மற்றும் பிற போக்குவரத்து பாடிகளை உங்கள் தேவைக்கேற்ப உருவாக்குகிறோம்."
    ),
    features: [
      l("Container bodies", "கன்டெய்னர் பாடிகள்"),
      l("Commercial vehicle bodies", "வணிக வாகன பாடிகள்"),
      l("Cargo bodies", "சரக்கு பாடிகள்"),
      l("Custom containers", "தனிப்பயன் கன்டெய்னர்கள்"),
      l("Transport body fabrication", "போக்குவரத்து வாகன பாடி ஃபேப்ரிகேஷன்"),
    ],
    applications: [l("Commercial vehicles", "வணிக வாகனங்கள்"), l("Cargo transport", "சரக்குப் போக்குவரத்து"), l("Custom container needs", "தனிப்பயன் கன்டெய்னர் தேவைகள்")],
    image: "/images/services/container-body-building.jpg",
  },
  {
    slug: "building-elevation",
    number: "10",
    title: l("Building Elevation", "கட்டிட முகப்பு அமைப்புகள்"),
    short: l("Architectural steel elevation, facade and entrance structures, and modern elevation works.", "கட்டடக்கலை ஸ்டீல் முகப்பு, முகப்பு மற்றும் நுழைவு அமைப்புகள் மற்றும் நவீன முகப்புப் பணிகள்."),
    description: l(
      "Steel elevation and facade structures for commercial and residential buildings, including decorative elevation and entrance structures.",
      "வணிக மற்றும் குடியிருப்புக் கட்டிடங்களுக்கான ஸ்டீல் முகப்பு மற்றும் ஃபசாட் அமைப்புகள், அலங்கார முகப்பு மற்றும் நுழைவு அமைப்புகள் உட்பட."
    ),
    features: [
      l("Architectural steel elevation", "கட்டடக்கலை ஸ்டீல் முகப்பு"),
      l("Decorative elevation", "அலங்கார முகப்பு"),
      l("Facade structures", "முகப்பு கட்டமைப்புகள்"),
      l("Entrance structures", "நுழைவு அமைப்புகள்"),
      l("Modern elevation works", "நவீன முகப்புப் பணிகள்"),
    ],
    applications: [l("Commercial buildings", "வணிகக் கட்டிடங்கள்"), l("Shop structures", "கடை அமைப்புகள்"), l("Building entrances", "கட்டிட நுழைவாயில்கள்")],
    image: "/images/services/building-elevation.jpg",
  },
  {
    slug: "sand-tails-sheds-houses",
    number: "11",
    title: l("Sand Tails Sheds & Houses", "Sand Tails ஷெட்கள் & வீடுகள்"),
    short: l("Sand-tail sheds and houses, agricultural and utility structures and related fabrication works.", "Sand-tail ஷெட்கள் மற்றும் வீடுகள், வேளாண் மற்றும் பயன்பாட்டு அமைப்புகள் மற்றும் தொடர்புடைய ஃபேப்ரிகேஷன் பணிகள்."),
    description: l(
      "We fabricate sand-tail sheds, sand-tail houses and related agricultural and utility structures.",
      "Sand-tail ஷெட்கள், Sand-tail வீடுகள் மற்றும் தொடர்புடைய வேளாண் மற்றும் பயன்பாட்டு அமைப்புகளை உருவாக்குகிறோம்."
    ),
    features: [
      l("Sand-tail sheds", "Sand-tail ஷெட்கள்"),
      l("Sand-tail houses", "Sand-tail வீடுகள்"),
      l("Agricultural / utility structures", "வேளாண் / பயன்பாட்டு அமைப்புகள்"),
      l("Related fabrication works", "தொடர்புடைய ஃபேப்ரிகேஷன் பணிகள்"),
    ],
    applications: [l("Agricultural use", "வேளாண் பயன்பாடு"), l("Utility structures", "பயன்பாட்டு அமைப்புகள்"), l("Housing needs", "குடியிருப்புத் தேவைகள்")],
    image: "/images/services/sand-tails-sheds-houses.jpg",
  },
  {
    slug: "expanded-metal-works",
    number: "12",
    title: l("Expanded Metal Works", "எக்ஸ்பாண்டட் மெட்டல் பணிகள்"),
    short: l("Expanded metal screens, mesh panels, partitions, fencing and safety panels.", "எக்ஸ்பாண்டட் மெட்டல் ஸ்கிரீன்கள், மெஷ் பேனல்கள், பார்ட்டிஷன்கள், வேலி மற்றும் பாதுகாப்பு பேனல்கள்."),
    description: l(
      "Expanded metal screens and mesh panels for partitions, fencing, safety panels and architectural applications.",
      "பார்ட்டிஷன்கள், வேலி, பாதுகாப்பு பேனல்கள் மற்றும் கட்டடக்கலைப் பயன்பாடுகளுக்கான எக்ஸ்பாண்டட் மெட்டல் ஸ்கிரீன்கள் மற்றும் மெஷ் பேனல்கள்."
    ),
    features: [
      l("Expanded metal screens", "எக்ஸ்பாண்டட் மெட்டல் ஸ்கிரீன்கள்"),
      l("Mesh panels", "மெஷ் பேனல்கள்"),
      l("Partitions", "பார்ட்டிஷன்கள்"),
      l("Fencing", "வேலி அமைப்புகள்"),
      l("Safety panels", "பாதுகாப்பு பேனல்கள்"),
      l("Architectural applications", "கட்டடக்கலைப் பயன்பாடுகள்"),
    ],
    applications: [l("Partitions and enclosures", "பார்ட்டிஷன்கள் மற்றும் அடைப்புகள்"), l("Fencing", "வேலி"), l("Architectural screens", "கட்டடக்கலை ஸ்கிரீன்கள்")],
    image: "/images/services/expanded-metal-works.jpg",
  },
  {
    slug: "stainless-steel-works",
    number: "13",
    title: l("Stainless Steel Works", "ஸ்டெயின்லெஸ் ஸ்டீல் பணிகள்"),
    short: l("SS railings, gates, handrails, kitchen works and architectural stainless-steel fabrication.", "எஸ்.எஸ் ரெயிலிங்குகள், கேட்கள், கைப்பிடிகள், சமையலறைப் பணிகள் மற்றும் கட்டடக்கலை ஸ்டெயின்லெஸ் ஸ்டீல் ஃபேப்ரிகேஷன்."),
    description: l(
      "Custom stainless-steel fabrication including railings, gates, handrails, kitchen works and architectural SS works.",
      "ரெயிலிங்குகள், கேட்கள், கைப்பிடிகள், சமையலறைப் பணிகள் மற்றும் கட்டடக்கலை எஸ்.எஸ் பணிகள் உட்பட தனிப்பயன் ஸ்டெயின்லெஸ் ஸ்டீல் ஃபேப்ரிகேஷன்."
    ),
    features: [
      l("SS railings", "எஸ்.எஸ் ரெயிலிங்குகள்"),
      l("SS gates", "எஸ்.எஸ் கேட்கள்"),
      l("SS handrails", "எஸ்.எஸ் கைப்பிடிகள்"),
      l("Kitchen works", "சமையலறைப் பணிகள்"),
      l("Architectural SS works", "கட்டடக்கலை எஸ்.எஸ் பணிகள்"),
      l("Custom stainless-steel fabrication", "தனிப்பயன் ஸ்டெயின்லெஸ் ஸ்டீல் ஃபேப்ரிகேஷன்"),
    ],
    applications: [l("Staircases and balconies", "படிக்கட்டுகள் மற்றும் பால்கனிகள்"), l("Kitchens", "சமையலறைகள்"), l("Entrances and gates", "நுழைவாயில்கள் மற்றும் கேட்கள்")],
    image: "/images/services/stainless-steel-works.jpg",
  },
  {
    slug: "general-fabrication-works",
    number: "14",
    title: l("General Fabrication Works", "பொது ஃபேப்ரிகேஷன் பணிகள்"),
    short: l("Custom fabrication, machine frames, platforms, supports, brackets, structural components and repair jobs.", "தனிப்பயன் ஃபேப்ரிகேஷன், இயந்திர ஃபிரேம்கள், பிளாட்ஃபார்ம்கள், சப்போர்ட்கள், பிராக்கெட்டுகள், கட்டமைப்பு பாகங்கள் மற்றும் பழுதுப் பணிகள்."),
    description: l(
      "For jobs that do not fit a standard category, we take up custom fabrication and repair work to your drawing or requirement.",
      "நிலையான வகைகளுக்குள் வராத பணிகளுக்கு, உங்கள் வரைபடம் அல்லது தேவைக்கேற்ப தனிப்பயன் ஃபேப்ரிகேஷன் மற்றும் பழுதுப் பணிகளை மேற்கொள்கிறோம்."
    ),
    features: [
      l("Custom fabrication", "தனிப்பயன் ஃபேப்ரிகேஷன்"),
      l("Machine frames", "இயந்திர ஃபிரேம்கள்"),
      l("Platforms", "பிளாட்ஃபார்ம்கள்"),
      l("Supports", "சப்போர்ட்கள்"),
      l("Brackets", "பிராக்கெட்டுகள்"),
      l("Structural components", "கட்டமைப்பு பாகங்கள்"),
      l("Repair / fabrication jobs", "பழுது / ஃபேப்ரிகேஷன் பணிகள்"),
      l("Other metal works", "பிற உலோகப் பணிகள்"),
    ],
    applications: [l("Custom machinery structures", "தனிப்பயன் இயந்திர அமைப்புகள்"), l("Industrial platforms", "தொழில்துறை பிளாட்ஃபார்ம்கள்"), l("Repair work", "பழுதுப் பணிகள்")],
    image: "/images/services/general-fabrication-works.jpg",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const tx = (v: Localized, lang: Lang) => v[lang];
