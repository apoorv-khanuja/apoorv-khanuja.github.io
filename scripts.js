// You can add any JavaScript code for interactivity if necessary

const projects = [
  {
    title: "Energy Efficiency Measure NLP Analysis",
    description: "Analyzed Energy Efficiency Measure names using NLP techniques to better understand and categorize them.",
    imgSrc: "project1.jpg",
    repoLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Energy Efficiency Measure NLP Analysis",
    description: "Analyzed Energy Efficiency Measure names using NLP techniques to better understand and categorize them.",
    imgSrc: "project1.jpg",
    repoLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Energy Efficiency Measure NLP Analysis",
    description: "Analyzed Energy Efficiency Measure names using NLP techniques to better understand and categorize them.",
    imgSrc: "project1.jpg",
    repoLink: "https://github.com/yourusername/project1"
  },
  {
    title: "Energy Efficiency Measure NLP Analysis",
    description: "Analyzed Energy Efficiency Measure names using NLP techniques to better understand and categorize them.",
    imgSrc: "project1.jpg",
    repoLink: "https://github.com/yourusername/project1"
  },
  // Add the remaining projects in a similar format
];

const projectsSection = document.getElementById("projects");

projects.forEach((project) => {
  const projectCard = `
    <div class="project-card">
      <img src="${project.imgSrc}" alt="${project.title}">
      <div>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.repoLink}" target="_blank">View on GitHub</a>
      </div>
    </div>
  `;
  projectsSection.innerHTML += projectCard;
});
