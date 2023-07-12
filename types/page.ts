import { PortableTextBlock } from "sanity";

export type page = {
    -id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[];
}