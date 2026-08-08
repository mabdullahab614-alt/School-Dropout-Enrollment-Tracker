export type Province = {
  id: string;
  name: string;
  outOfSchoolChildren: number; // absolute count
  outOfSchoolRate: number; // percent, 0-100
  ageCohort: number; // total school-age population
};

export type School = {
  id: string;
  name: string;
  district: string;
  province: string;
  level: "Primary" | "Middle" | "Secondary";
  type: "Government" | "Subsidized";
};

export type District = {
  id: string;
  name: string;
  provinceId: string;
  note: string; // context for this district
};
