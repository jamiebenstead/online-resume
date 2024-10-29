export interface Skill {
  category: string;
  items: string;
}

export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: "JavaScript, TypeScript, PHP, C#, SQL, CSS, HTML",
  },
  {
    category: "Frameworks & Libraries",
    items: "React, Angular, Next.js, Ionic, ExtJS, Laravel, Tailwind, I18N",
  },
  {
    category: "Backend, Database, & CMS Tools",
    items: "Node.js, GraphQL, MySQL, Strapi, Filament",
  },
  {
    category: "Testing & Validation",
    items: "Jest, Yup, React Testing Library, Postman",
  },
  {
    category: "Other Tools",
    items: "Git, Jira, Trello",
  },
];
