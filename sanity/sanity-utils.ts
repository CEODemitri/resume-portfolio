import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/page";
import { Contact } from "@/types/Contact";
import { Skill } from "@/types/Skill";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
            content
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current
        }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            content
        }`,
    { slug }
  );
}

export async function getContacts(): Promise<Contact[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact"]{
            _id,
            _createdAt,
            title,
            "slug": slug.current,
            "image": image.asset->url,
            url
        }`
  );
}

export async function getContact(slug: string): Promise<Contact> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "contact" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            url,
        }`,
    { slug }
  );
}

export async function getSkills(): Promise<Skill[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill"]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            rating
        }`
  );
}

export async function getSkill(slug: string): Promise<Skill> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "skill" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            rating
        }`,
    { slug }
  );
}
