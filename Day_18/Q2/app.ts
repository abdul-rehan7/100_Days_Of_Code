// Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.

let programmerSkills = {
  languages: ["JavaScript", "TypeScript", "Python"],
  frameworks: ["React.js", "Next.js", "Tailwind"],
  tools: ["Git", "VS Code", "Docker"],
};

let { languages, frameworks, tools } = programmerSkills;

console.log(
  `The Programmer Works in ${languages[1]} language and uses ${frameworks[0]} framework using ${tools[1]} Tool`
);
