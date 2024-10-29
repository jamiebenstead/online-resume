export interface Responsibility {
  heading: string;
  description: string;
}

export interface Job {
  company: string;
  title: string;
  dates: string;
  responsibilities: Responsibility[];
}

export const workHistoryData: Job[] = [
  {
    company: "Sidney Sussex College, Cambridge",
    title: "Web Developer",
    dates: "March 2024 - August 2024",
    responsibilities: [
      {
        heading: "User-Focused Development",
        description:
          "Conducted requirement-gathering sessions to align project objectives with the college's needs, ensuring a tailored approach to development.",
      },
      {
        heading: "Streamlined Workflows",
        description:
          "Implemented modern source control practices, enhancing team collaboration and improving deployment efficiency.",
      },
      {
        heading: "Intranet Redesign",
        description:
          "Rebuilt the college intranet using Laravel and Filament, delivering a user-friendly interface with enhanced functionality.",
      },
    ],
  },
  {
    company: "Fluent, Cambridge",
    title: "Software Developer",
    dates: "April 2021 - January 2024",
    responsibilities: [
      {
        heading: "Feature Enhancements:",
        description:
          "Revamped a customer web app with a redesign that added new front-end functionality and ensured comprehensive test coverage",
      },
      {
        heading: "Streamlining the Backend",
        description:
          "Upgraded Strapi to a major version, optimising GraphQL queries to enhance both performance and functionality.",
      },
      {
        heading: "API Development",
        description:
          "Created and optimised API endpoints, meeting diverse client business needs and enhancing application performance.",
      },
      {
        heading: "Comprehensive Support",
        description:
          "Provided maintenance and support for existing solutions, improving performance and user satisfaction through effective case triage and documentation.",
      },
      {
        heading: "Agile Collaboration",
        description:
          "Engaged fully in Agile practices, playing a key role in sprint planning and retrospectives that boosted team productivity.",
      },
    ],
  },
  {
    company: "Jesus College, Cambridge",
    title: "Junior Software Developer",
    dates: "May 2018 - April 2021",
    responsibilities: [
      {
        heading: "Innovative Problem Solving",
        description:
          "Developed a digital archiving system with advanced search and data-cleaning capabilities, making historical data easy to access and research.",
      },
      {
        heading: "Rapid COVID-19 Adaptation",
        description:
          "Developed a mobile booking app to support social distancing, helping the college comply with health protocols and ensure user safety.",
      },
      {
        heading: "Proactive Maintenance",
        description:
          "Handled regular server updates, notably upgrading applications from ExtJS 5 to 7, which improved performance, security and compatibility.",
      },
      {
        heading: "Optimising Daily Processes",
        description:
          "Developed multiple applications, including a refreshments request system, an automated Alert Cascade updater, and an interactive message board, significantly enhancing staff efficiency and communication.",
      },
    ],
  },
  {
    company: "Nuffield Health, Cambridge",
    title: "Personal Trainer/Duty Manager",
    dates: "May 2012 - May 2018",
    responsibilities: [],
  },
];
