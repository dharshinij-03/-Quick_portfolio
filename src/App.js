import { useState } from "react";
import { saveAs } from "file-saver"; 

function App() {
  const [name, setName] = useState("Your Name");
  const [about, setAbout] = useState("Passionate developer learning React.");
  const [skills, setSkills] = useState("React, JavaScript, CSS");
  const [projects, setProjects] = useState("QuickPortfolio, MyWebsite");
  const [linkedin, setLinkedin] = useState("https://linkedin.com");

  const downloadPortfolio = () => {
    const portfolioHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${name}'s Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Poppins', sans-serif; margin: 40px; background: #f9fafb; color: #333; }
          h1 { color: #6b21a8; }
          h3 { color: #2563eb; margin-top: 20px; }
          a { color: #9333ea; text-decoration: none; }
          ul { margin-left: 20px; }
        </style>
      </head>
      <body>
        <h1>${name}</h1>
        <p>${about}</p>
        <h3>Skills</h3>
        <ul>
          ${skills
            .split(",")
            .map((skill) => `<li>${skill.trim()}</li>`)
            .join("")}
        </ul>
        <h3>Projects</h3>
        <ul>
          ${projects
            .split(",")
            .map((proj) => `<li>${proj.trim()}</li>`)
            .join("")}
        </ul>
        <p><a href="${linkedin}" target="_blank">LinkedIn Profile</a></p>
      </body>
      </html>
    `;

    const blob = new Blob([portfolioHTML], { type: "text/html;charset=utf-8" });
    saveAs(blob, `${name.replace(/\s+/g, "_")}_Portfolio.html`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-blue-100 p-5 flex flex-col md:flex-row">
      {/* Left Panel - Form */}
      <div className="md:w-1/3 w-full bg-white p-6 rounded-2xl shadow-xl mb-5 md:mb-0">
        <h2 className="text-2xl font-semibold text-purple-700 mb-5 text-center">
          Build Your Portfolio
        </h2>

        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
          placeholder="About Me"
          rows={3}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
          placeholder="Projects (comma separated)"
          value={projects}
          onChange={(e) => setProjects(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:border-purple-400"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />

        {/* Download Button */}
        <button
          onClick={downloadPortfolio}
          className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Download Portfolio
        </button>
      </div>

      {/* Right Panel - Live Portfolio Preview */}
      <div className="md:w-2/3 w-full md:ml-5 bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold text-purple-800">{name}</h1>
        <p className="mt-3 text-gray-700">{about}</p>

        <h3 className="mt-6 text-lg font-semibold text-blue-700">Skills</h3>
        <ul className="list-disc ml-6 text-gray-800">
          {skills.split(",").map((skill, i) => (
            <li key={i}>{skill.trim()}</li>
          ))}
        </ul>

        <h3 className="mt-6 text-lg font-semibold text-blue-700">Projects</h3>
        <ul className="list-disc ml-6 text-gray-800">
          {projects.split(",").map((proj, i) => (
            <li key={i}>{proj.trim()}</li>
          ))}
        </ul>

        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
        >
          Visit LinkedIn
        </a>
      </div>
    </div>
  );
}

export default App;
