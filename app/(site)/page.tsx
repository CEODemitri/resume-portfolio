import { getProjects } from "@/sanity/sanity-utils";
import { getContacts } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";
import {
  CardDefault,
  CodingCard,
  GraphicsCard, DefaultSpeedDial
} from "./components/MaterialTailwindComponents";
import { LiveSites } from "@/components/live-sites";

export default async function Home() {
  const projects = await getProjects();
  const contacts = await getContacts();

  return (
    <div>
      {/* place this at the bottom of screen */}
      <DefaultSpeedDial/>
      {/* hero section */}
      {/* fix the lazy fix of white text */}
      <h1 className="text-7xl font-extrabold text-black md:text-white md:mt-10">
        Hallo ich bin{" "}
        <span className="bg-gradient-to-r from-green-500 via-blue-300 to-purple-500 bg-clip-text text-transparent">
          Demitri!
        </span>
      </h1>
      <p className="mt-3 text-xl text-cyan-600 font-semibold">
        A Skillfull <span className="text-deep-orange-300 underline">Full Stack</span>{" "}
        <span className="italic">Developer</span>
      </p>

      <Image src={"/me.jpg"} height={300} width={400} alt="lazy fix to get my image to appear on the page" className="md:invisible m-auto" />

      <div className="relative top-10 md:top-5 flex justify-around">
        {contacts.map((contact) => (
          <Link
            href={`${contact.url}`}
            key={contact._id}
            className="p-1 hover:scale-115 border:border-purple-600 transition mb-44 md:bg-orange-100/40 rounded-2xl shadow-lg shadow-blue-gray-400 md:shadow-blue-gray-700"
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

      <div className=" bg-black/70 px-5 py-2 rounded-xl shadow-lg shadow-blue-gray-400">
        <h2 className="mt-6 font-bold text-white text-3xl">
          Mein Featured Projects
        </h2>
        <p className="text-gray-500 text-lg">
          These are two of my favorite projects I feel display my current
          skills. I have explored many different languages and libraries all to find my own way.
        </p>
      </div>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div>
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
            {/* add description from cms */}
            <p className="text-black p-2">Eligendi beatae ea repudiandae! Deleniti aliquam provident quia! Quis libero consequuntur iure cumque perspiciatis illo debitis, esse similique, ut facilis sed ducimus!</p>
            <div className="flex gap-5 pl-5">
              <button className="bg-indigo-800/80 px-5 py-1 rounded-md"> View Code</button>
              <button className="bg-deep-orange-600 px-5 py-1 rounded-md"> View Code</button>
            </div>
          </div>

        ))}

      </div>

      {/* why hire me? Skills? Tech Stack */}
      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <div className="flex items-center gap-4">
            <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
            </span>
            <div>
              <h2 className="text-2xl font-bold">Demitri</h2>
              <p className="text-gray-500 dark:text-gray-400">Software Developer</p>
            </div>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Passionate about coding and always eager to learn new technologies.
          </p>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-xl font-bold mb-2">Hobbies</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>Reading</li>
            <li>Philosophy</li>
            <li>Painting</li>
          </ul>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-xl font-bold mb-2">Skills</h3>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
            <li>JavaScript</li>
            <li>Ruby</li>
            <li>Svelte</li>
          </ul>
        </section>
        <section className="bg-gray-100 p-6 rounded-lg shadow-md dark:bg-gray-800">
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <ul className="space-y-2 text-gray-600 dark:text-gray-400">
            <li>Email: johndoe@example.com</li>
            <li>Phone: +1 234 567 890</li>
            <li>LinkedIn: linkedin.com/in/johndoe</li>
          </ul>
        </section>
      </div>
      
      {/* i will take this omponet and place it in the speedial....somehow */}
      <LiveSites/>
    </div>
  );
}
