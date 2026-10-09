import type { Localized } from "@/types";

export interface Machine { slug: string; icon: string; name: Localized; note: Localized }
const l = (en: string, ta: string): Localized => ({ en, ta });

// No capacities or models are listed: none have been supplied.
export const machinery: Machine[] = [
  { slug: "shearing", icon: "Scissors", name: l("Shearing Machine", "ஷியரிங் இயந்திரம்"), note: l("Straight cutting of sheet and plate.", "தகடு மற்றும் பிளேட்டை நேராக வெட்டுவதற்கு.") },
  { slug: "press-brake", icon: "Ruler", name: l("Press Brake / Sheet Bending Machine", "பிரஸ் பிரேக் / தகடு வளைக்கும் இயந்திரம்"), note: l("Bending and forming of sheet.", "தகடு வளைத்தல் மற்றும் வடிவமைத்தல்.") },
  { slug: "cutting", icon: "Scissors", name: l("Cutting Machines", "வெட்டும் இயந்திரங்கள்"), note: l("Cutting of metal for fabrication jobs.", "ஃபேப்ரிகேஷன் பணிகளுக்கான உலோக வெட்டுதல்.") },
  { slug: "welding", icon: "Zap", name: l("Welding Machines", "வெல்டிங் இயந்திரங்கள்"), note: l("Joining of structural and sheet components.", "கட்டமைப்பு மற்றும் தகடு பாகங்களை இணைக்க.") },
  { slug: "mig", icon: "Zap", name: l("MIG Welding", "MIG வெல்டிங்"), note: l("MIG welding for clean fabrication joints.", "சுத்தமான இணைப்புகளுக்கான MIG வெல்டிங்.") },
  { slug: "arc", icon: "Flame", name: l("Arc Welding", "ஆர்க் வெல்டிங்"), note: l("Arc welding for structural work.", "கட்டமைப்புப் பணிகளுக்கான ஆர்க் வெல்டிங்.") },
  { slug: "gas-cutting", icon: "Flame", name: l("Gas Cutting", "கேஸ் கட்டிங்"), note: l("Gas cutting of steel plate and sections.", "ஸ்டீல் பிளேட் மற்றும் செக்ஷன்களை கேஸ் கொண்டு வெட்டுதல்.") },
  { slug: "drilling", icon: "Drill", name: l("Drilling Machines", "துளையிடும் இயந்திரங்கள்"), note: l("Drilling for fabricated parts and structures.", "ஃபேப்ரிகேட் பாகங்கள் மற்றும் கட்டமைப்புகளுக்கான துளையிடுதல்.") },
  { slug: "grinding", icon: "Cog", name: l("Grinding Machines", "அரைக்கும் (கிரைண்டிங்) இயந்திரங்கள்"), note: l("Grinding and finishing.", "அரைத்தல் மற்றும் முடிப்புப் பணிகள்.") },
  { slug: "milling", icon: "Cog", name: l("Milling Machine", "மில்லிங் இயந்திரம்"), note: l("Machining work for fabricated components.", "ஃபேப்ரிகேட் பாகங்களுக்கான மெஷினிங் பணிகள்.") },
  { slug: "eot-crane", icon: "Wrench", name: l("EOT Crane / Lifting Equipment", "EOT கிரேன் / தூக்கும் உபகரணங்கள்"), note: l("Lifting and handling of heavy fabrication material.", "கனமான ஃபேப்ரிகேஷன் பொருட்களைத் தூக்கி கையாள.") },
];

export interface ProjectType { slug: string; icon: string; name: Localized }
export const projectTypes: ProjectType[] = [
  { slug: "factory-sheds", icon: "Factory", name: l("Industrial factory sheds", "தொழிற்சாலை ஷெட்கள்") },
  { slug: "warehouses", icon: "Warehouse", name: l("Warehouse buildings", "கிடங்கு கட்டிடங்கள்") },
  { slug: "peb", icon: "Building2", name: l("PEB buildings", "PEB கட்டிடங்கள்") },
  { slug: "commercial", icon: "Store", name: l("Commercial buildings", "வணிகக் கட்டிடங்கள்") },
  { slug: "government", icon: "Landmark", name: l("Government projects", "அரசு திட்டங்கள்") },
  { slug: "shops", icon: "Store", name: l("Shop structures", "கடை அமைப்புகள்") },
  { slug: "vehicle-bodies", icon: "Truck", name: l("Vehicle / container bodies", "வாகனம் / கன்டெய்னர் பாடிகள்") },
  { slug: "platforms", icon: "Layers", name: l("Industrial platforms", "தொழில்துறை பிளாட்ஃபார்ம்கள்") },
  { slug: "structural-buildings", icon: "Construction", name: l("Structural steel buildings", "கட்டமைப்பு ஸ்டீல் கட்டிடங்கள்") },
  { slug: "roofing", icon: "HardHat", name: l("Large roofing projects", "பெரிய மேற்கூரைத் திட்டங்கள்") },
  { slug: "gates-grills-stairs", icon: "ShieldCheck", name: l("Gates / grills / staircases", "கேட்கள் / கிரில்கள் / படிக்கட்டுகள்") },
  { slug: "machinery-structures", icon: "Hammer", name: l("Custom machinery structures", "தனிப்பயன் இயந்திர அமைப்புகள்") },
];
