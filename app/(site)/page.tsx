import { getProjects } from "@/sanity/sanity-utils"
import Image from 'next/image';
import Link from "next/link";

export default async function Home() {

  const projects = await getProjects();

  return (
    <div>
      <h1 className="text-7xl font-extrabold">Hallo ich bin <span className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent">Demitri</span>!</h1>
      <p className="mt-3 text-xl text-sky-600">Check out My Projects bitte.</p>
      
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">Mein Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project._id} className="border border-sky-400 rounded-lg p-1 hover:scale-105 border:border-purple-600 transition">
              {project.image && (
                <Image 
                src={project.image}
                alt={project.name}
                width={650}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
              )}
              <div className="mt-2 font-extrabold bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent">
                {project.name}
              </div>
            </Link>
          ))}
       </div>
    
  {/* Skills Section */}
      <section className="h-96 mt-8">
        <h2 className="font-bold text-3xl">Skills</h2>
        <div className="h-72 flex flex-col-reverse gap-8 m-5">
          <article className="w-full h-1/3 bg-green-400">Beginner</article>
          <article className="w-full h-1/3 bg-blue-200">Average</article>
          <article className="w-full h-1/3 bg-purple-400">Proficient</article>
        </div>
        <a className="h-10 w-36 text-white text-xl font-semibold px-6 py-1 justify-center bg-gradient-to-l from-slate-800 to-slate-300 hover:from-purple-500 hover:to-blue-400 flex m-auto mt-14 rounded-md hover:animate-bounce">Resume</a>
     </section>

  </div>
  );
}
