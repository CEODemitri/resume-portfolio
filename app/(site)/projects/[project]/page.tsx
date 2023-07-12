import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from '@portabletext/react';
import Image from "next/image";

type Props = {
  params: { project: string }
}

export default async function Project({ params }: Props) {
  const slug = params.project;
  const project = await getProject(slug);

  return (
    <div>
        <header className="flex justify-between">
            <h1 className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent text-5xl drop-shadow font-extrabold">{project.name}</h1>
            <a 
                href={project.url} 
                title="View Project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-50 rounded-lg text-purple-400 font-bold py-3 px-4 whitespace-nowrap
                hover:bg-teal-400 hover:text-blue-100"
            >
                View Project
            </a>
        </header>

        <div className="text-lg text-blue-500 mt-5">
            <PortableText value={project.content} />
        </div>

        <Image
            src={project.image}
            alt={project.name}
            width={1920}
            height={1080}
            className="mt-10 border-2 border-purple-700 object-cover rounded-xl"
        />
    </div>
  )
} 