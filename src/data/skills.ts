export interface SkillGroup {
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "PHP", "C", "HTML", "CSS"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Angular",
      "MUI",
      "Bootstrap",
      "Vite",
      "Nx monorepos",
      "Component libraries",
      "Playwright",
      "React Testing Library",
      "ESLint",
    ],
  },
  {
    label: "Backend & data",
    items: [
      "Node.js (Koa)",
      "REST and SOAP APIs",
      "Microservices",
      "PostgreSQL",
      "MySQL",
      "DynamoDB",
      "GORM",
      "Hibernate",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "AWS (Lambda, Cognito, API Gateway, DynamoDB)",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Snyk",
      "Git",
    ],
  },
];
