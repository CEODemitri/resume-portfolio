import { getProjects } from "@/sanity/sanity-utils"
import { getContacts } from "@/sanity/sanity-utils"
import { getSkills } from "@/sanity/sanity-utils"
import Image from 'next/image';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core'

export default async function Home() {

  const projects = await getProjects();
  const contacts = await getContacts();
  const skills = await getSkills();

  return (
    <div>
      {/* hero section */}
      <div className="h-48"></div>
      <h1 className="text-7xl font-extrabold">Hallo ich bin <span className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent">Demitri</span>!</h1>
      <p className="mt-3 text-xl text-sky-600">A Skillfull <span className="text-red-300 underline">Full Stack</span> <span className="italic">Developer</span></p>
      
      <div className="flex mt-6 space-x-7">
      {contacts.map((contact) => (
            <Link href={`${contact.url}`} key={contact._id} className="p-1 hover:scale-115 border:border-purple-600 transition mb-24">
              {contact.image && (
                <Image 
                src={contact.image}
                alt={contact.name}
                width={40}
                height={50}
                className="object-cover"
              />
              )}
            </Link>
          ))}
      </div>
      
      <h2 className="mt-12 font-bold text-gray-700 text-3xl">Mein Projects</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} key={project._id} className="border border-sky-400 rounded-lg p-1 hover:scale-105 border:border-purple-600 transition mb-24">
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
      <section className="">
        <h2 className="font-bold text-3xl text-gray-700">Skills</h2>
        <div className="">
          <section className="w-full h-1/3 bg-green-400 rounded-md">
            {skills.map((skill) => (
              <>
              {skill.image && (
                  <Image 
                    src={skill.image}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                )}
                <div className="mt-2 font-extrabold bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-green-700">
                {skill.rating}
              </div>
              </>
            ))}
          </section>
          <section className="w-full h-1/3 bg-blue-200">
             
          </section>

          <section className="w-full h-1/3 bg-purple-200">
             
          </section>
          
        </div>
        <a className="h-10 w-36 text-white text-xl font-semibold px-6 py-1 justify-center bg-gradient-to-l from-slate-800 to-slate-300 hover:from-purple-500 hover:to-blue-400 flex m-auto mt-14 rounded-md hover:animate-bounce">Resume</a>
     </section>

  </div>
  );
}
