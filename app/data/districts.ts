import { District } from "@/app/lib/types";

// District-level rows are illustrative placeholders for the MVP UI.
// Production version should pull district figures from provincial
// EMIS census data. Province-level numbers in provinces.ts are the
// verified, cited figures for this assignment.
export const districts: District[] = [
  { id: "lahore", name: "Lahore", provinceId: "punjab", note: "Lower rate, urban" },
  { id: "rajanpur", name: "Rajanpur", provinceId: "punjab", note: "Higher rate, rural south" },
  { id: "karachi-east", name: "Karachi East", provinceId: "sindh", note: "Mixed urban" },
  { id: "tharparkar", name: "Tharparkar", provinceId: "sindh", note: "High rate, rural" },
  { id: "peshawar", name: "Peshawar", provinceId: "kp", note: "Provincial capital" },
  { id: "tank", name: "Tank", provinceId: "kp", note: "High rate, remote" },
  { id: "quetta", name: "Quetta", provinceId: "balochistan", note: "Provincial capital" },
  { id: "kharan", name: "Kharan", provinceId: "balochistan", note: "Highest rate, remote" },
  { id: "islamabad", name: "Islamabad", provinceId: "ict", note: "Federal territory" },
];
