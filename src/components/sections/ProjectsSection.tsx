"use client"

import { projects } from "../../data/projects"
import { ProjectCard } from "../projects/ProjectCard"

export function ProjectsSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
