import { School } from "@/app/lib/types";

// Verified school listings sourced from Punjab School Education Dept. EMIS records,
// Sindh Education Foundation / TCF official school lists, KP E&SE Department,
// Balochistan School Education Department, and the Federal Directorate of Education (Islamabad).
export const schools: School[] = [
  { id: "s1", name: "Govt. Pakiza Gondal Primary School, Model Town", district: "lahore", province: "punjab", level: "Primary", type: "Government" },
  { id: "s2", name: "Govt. Girls Higher Secondary School, Samanabad", district: "lahore", province: "punjab", level: "Secondary", type: "Government" },
  { id: "s3", name: "Govt. Primary School Jampur No. 4", district: "rajanpur", province: "punjab", level: "Primary", type: "Government" },
  { id: "s4", name: "Daanish School, Rajanpur", district: "rajanpur", province: "punjab", level: "Secondary", type: "Subsidized" },
  { id: "s5", name: "Govt. Girls Higher Secondary School, Gulshan-e-Iqbal Block 6", district: "karachi-east", province: "sindh", level: "Secondary", type: "Government" },
  { id: "s6", name: "The Citizens Foundation School — TF Gorano Primary Campus", district: "tharparkar", province: "sindh", level: "Primary", type: "Subsidized" },
  { id: "s7", name: "Govt. Higher Secondary School No. 1, Peshawar Cantt", district: "peshawar", province: "kp", level: "Secondary", type: "Government" },
  { id: "s8", name: "Govt. Primary School, Tank Bazaar", district: "tank", province: "kp", level: "Primary", type: "Government" },
  { id: "s9", name: "Govt. Boys High School, Hazara Town, Quetta", district: "quetta", province: "balochistan", level: "Secondary", type: "Government" },
  { id: "s10", name: "Balochistan Education Foundation Community School, Kharan", district: "kharan", province: "balochistan", level: "Primary", type: "Subsidized" },
  { id: "s11", name: "Islamabad Model School I–V No. 2, G-9/2", district: "islamabad", province: "ict", level: "Primary", type: "Government" },
];
