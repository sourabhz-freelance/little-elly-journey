export type StateStat = {
  id: string; name: string; group: "State" | "Union Territory";
  people: string; children: string; urban: string;
};

/** 28 states (A–Z) then 8 union territories (A–Z). Source: Census of India 2011. */
export const STATE_STATS: StateStat[] = [
  { id: "andhra-pradesh", name: "Andhra Pradesh", group: "State", people: "4.96 cr", children: "52 lakh", urban: "29%" },
  { id: "arunachal-pradesh", name: "Arunachal Pradesh", group: "State", people: "14 lakh", children: "2.1 lakh", urban: "23%" },
  { id: "assam", name: "Assam", group: "State", people: "3.12 cr", children: "46 lakh", urban: "14%" },
  { id: "bihar", name: "Bihar", group: "State", people: "10.41 cr", children: "1.91 cr", urban: "11%" },
  { id: "chhattisgarh", name: "Chhattisgarh", group: "State", people: "2.55 cr", children: "37 lakh", urban: "23%" },
  { id: "goa", name: "Goa", group: "State", people: "15 lakh", children: "1.4 lakh", urban: "62%" },
  { id: "gujarat", name: "Gujarat", group: "State", people: "6.04 cr", children: "78 lakh", urban: "43%" },
  { id: "haryana", name: "Haryana", group: "State", people: "2.54 cr", children: "34 lakh", urban: "35%" },
  { id: "himachal-pradesh", name: "Himachal Pradesh", group: "State", people: "69 lakh", children: "7.8 lakh", urban: "10%" },
  { id: "jharkhand", name: "Jharkhand", group: "State", people: "3.30 cr", children: "54 lakh", urban: "24%" },
  { id: "karnataka", name: "Karnataka", group: "State", people: "6.11 cr", children: "72 lakh", urban: "39%" },
  { id: "kerala", name: "Kerala", group: "State", people: "3.34 cr", children: "35 lakh", urban: "48%" },
  { id: "madhya-pradesh", name: "Madhya Pradesh", group: "State", people: "7.26 cr", children: "1.08 cr", urban: "28%" },
  { id: "maharashtra", name: "Maharashtra", group: "State", people: "11.24 cr", children: "1.33 cr", urban: "45%" },
  { id: "manipur", name: "Manipur", group: "State", people: "29 lakh", children: "3.8 lakh", urban: "29%" },
  { id: "meghalaya", name: "Meghalaya", group: "State", people: "30 lakh", children: "5.7 lakh", urban: "20%" },
  { id: "mizoram", name: "Mizoram", group: "State", people: "11 lakh", children: "1.7 lakh", urban: "52%" },
  { id: "nagaland", name: "Nagaland", group: "State", people: "20 lakh", children: "2.9 lakh", urban: "29%" },
  { id: "odisha", name: "Odisha", group: "State", people: "4.20 cr", children: "53 lakh", urban: "17%" },
  { id: "punjab", name: "Punjab", group: "State", people: "2.77 cr", children: "31 lakh", urban: "37%" },
  { id: "rajasthan", name: "Rajasthan", group: "State", people: "6.85 cr", children: "1.06 cr", urban: "25%" },
  { id: "sikkim", name: "Sikkim", group: "State", people: "6.1 lakh", children: "64,111", urban: "25%" },
  { id: "tamil-nadu", name: "Tamil Nadu", group: "State", people: "7.21 cr", children: "74 lakh", urban: "48%" },
  { id: "telangana", name: "Telangana", group: "State", people: "3.50 cr", children: "39 lakh", urban: "39%" },
  { id: "tripura", name: "Tripura", group: "State", people: "37 lakh", children: "4.6 lakh", urban: "26%" },
  { id: "uttar-pradesh", name: "Uttar Pradesh", group: "State", people: "19.98 cr", children: "3.08 cr", urban: "22%" },
  { id: "uttarakhand", name: "Uttarakhand", group: "State", people: "1.01 cr", children: "14 lakh", urban: "30%" },
  { id: "west-bengal", name: "West Bengal", group: "State", people: "9.13 cr", children: "1.06 cr", urban: "32%" },
  { id: "andaman-nicobar-islands", name: "Andaman & Nicobar Islands", group: "Union Territory", people: "3.8 lakh", children: "40,878", urban: "38%" },
  { id: "chandigarh", name: "Chandigarh", group: "Union Territory", people: "11 lakh", children: "1.2 lakh", urban: "97%" },
  { id: "dadra-nagar-haveli-and-daman-diu", name: "Dadra & Nagar Haveli and Daman & Diu", group: "Union Territory", people: "5.9 lakh", children: "77,829", urban: "58%" },
  { id: "delhi", name: "Delhi", group: "Union Territory", people: "1.68 cr", children: "20 lakh", urban: "98%" },
  { id: "jammu-kashmir", name: "Jammu & Kashmir", group: "Union Territory", people: "1.23 cr", children: "20 lakh", urban: "27%" },
  { id: "ladakh", name: "Ladakh", group: "Union Territory", people: "2.7 lakh", children: "31,944", urban: "23%" },
  { id: "lakshadweep", name: "Lakshadweep", group: "Union Territory", people: "64,473", children: "7,255", urban: "78%" },
  { id: "puducherry", name: "Puducherry", group: "Union Territory", people: "12 lakh", children: "1.3 lakh", urban: "68%" },
];

export const DEFAULT_STATE_ID = "andhra-pradesh";
