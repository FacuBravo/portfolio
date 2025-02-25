import type { Link } from "./Link"

export interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    links: Link[]
    aspectRatio: string
}