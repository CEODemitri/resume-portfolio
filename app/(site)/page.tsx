import { getProjects } from "@/sanity/sanity-utils";
import { getContacts } from "@/sanity/sanity-utils";
import { getSkills } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { CardDefault, CodingCard, GraphicsCard } from "../(site)/components/MaterialTailwindComponents";
import { DefaultSpeedDial } from "./components/MaterialTailwindComponents";

export default async function Home() {
  const projects = await getProjects();
  const contacts = await getContacts();

  return (
    <div>

      <DefaultSpeedDial/> 
      {/* hero section */}
      <div className="h-[340px]">
        {/* <Image src="/me.jpg" alt="hard work" width={500} height={450}/> */}
      </div>
      <h1 className="text-7xl font-extrabold">
        Hallo ich bin{" "}
        <span className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent">
          Demitri!
        </span>
      </h1>
      <p className="mt-3 text-xl text-blue-600">
        A Skillfull <span className="text-red-300 underline">Full Stack</span>{" "}
        <span className="italic">Developer</span>
      </p>

      <div className="flex mt-6 justify-around">
        {contacts.map((contact) => (
          <Link
            href={`${contact.url}`}
            key={contact._id}
            className="p-1 hover:scale-115 border:border-purple-600 transition mb-24"
          >
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
      <p className="text-black text-lg">These are two of my favorite projects I feel display my current skills.</p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border border-sky-400 rounded-lg p-1 hover:scale-105 border:border-purple-600 transition mb-24"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.name}
                width={650}
                height={100}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent text-2xl">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
      <div>

      </div>
      <h2 className="mt-12 font-bold text-gray-700 text-3xl">All Works</h2>
        <section className="project-categories flex flex-col flex-wrap md:flex-row lg:flex-nowrap justify-around gap-4">
          <Link href={'https://google.com'}>
            <CardDefault />
          </Link>

          <Link href={'https://google.com'}>
            <CodingCard/>
          </Link>
        
          <Link href={'https://google.com'}>
            <GraphicsCard />
          </Link>
        
        </section>

    </div>
  );
}
