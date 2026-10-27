export interface Education {
  school: string;
  degree: string;
  detail?: string;
  period: string;
}

export const education: Education[] = [
  {
    school: "Georgia Institute of Technology",
    degree: "MS, Computer Science (part-time)",
    period: "Starting Jan 2027",
  },
  {
    school: "University of Waterloo",
    degree: "BASc, Computer Engineering",
    detail: "Honours, Co-operative Program, Graduated with Distinction",
    period: "2016 – 2022",
  },
];
