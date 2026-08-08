import { Province } from "@/app/lib/types";

// Source: UNICEF Pakistan, "Education" (unicef.org/pakistan/education), 2026
// Ages 5-16. Verified, cited in Part 1 of the project PRD.
export const provinces: Province[] = [
  {
    id: "punjab",
    name: "Punjab",
    outOfSchoolChildren: 9_700_000,
    outOfSchoolRate: 27,
    ageCohort: 35_900_000,
  },
  {
    id: "sindh",
    name: "Sindh",
    outOfSchoolChildren: 7_400_000,
    outOfSchoolRate: 44,
    ageCohort: 16_800_000,
  },
  {
    id: "kp",
    name: "Khyber Pakhtunkhwa",
    outOfSchoolChildren: 4_500_000,
    outOfSchoolRate: 34,
    ageCohort: 13_200_000,
  },
  {
    id: "balochistan",
    name: "Balochistan",
    outOfSchoolChildren: 3_500_000,
    outOfSchoolRate: 69,
    ageCohort: 5_100_000,
  },
  {
    id: "ict",
    name: "Islamabad Capital Territory",
    outOfSchoolChildren: 90_000,
    outOfSchoolRate: 15,
    ageCohort: 600_000,
  },
];

export const nationalSummary = {
  totalOutOfSchool: provinces.reduce((s, p) => s + p.outOfSchoolChildren, 0),
  source: "UNICEF Pakistan, Education overview, 2026",
  sourceUrl: "https://www.unicef.org/pakistan/education",
};
