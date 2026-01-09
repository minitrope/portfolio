import projects from "./projects.js";

export default function () {
    const skillIndex = new Map();

    for (const project of projects) {
        for (const skill of project.skills) {
            if (skillIndex.has(skill) == false) {
                skillIndex.set(skill, 1);
            }
        }
    }

    return Array.from(skillIndex.keys());
}