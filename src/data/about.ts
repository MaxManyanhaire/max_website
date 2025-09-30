/**
 * About section data configuration
 * Update your story and timeline here
 */

export interface TimelineItem {
  id: string
  title: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    id: "today",
    title: "TODAY",
    description:
      "My Design Journey Began At Uncommon.Org's Bootcamp In 2022-2023, Where I Was Introduced To UI/UX And Discovered How Design Can Transform Ideas Into Tools People Actually Enjoy Using.",
  },
  {
    id: "childhood",
    title: "CHILDHOOD",
    description:
      "My Design Journey Began At Uncommon.Org's Bootcamp In 2022-2023, Where I Was Introduced To UI/UX And Discovered How Design Can Transform Ideas Into Tools People Actually Enjoy Using.",
  },
  {
    id: "growth",
    title: "GROWTH",
    description:
      "My Design Journey Began At Uncommon.Org's Bootcamp In 2022-2023, Where I Was Introduced To UI/UX And Discovered How Design Can Transform Ideas Into Tools People Actually Enjoy Using.",
  },
  {
    id: "goal",
    title: "GOAL",
    description:
      "My Design Journey Began At Uncommon.Org's Bootcamp In 2022-2023, Where I Was Introduced To UI/UX And Discovered How Design Can Transform Ideas Into Tools People Actually Enjoy Using.",
  },
]

export const aboutImages = [
  {
    id: "img-1",
    src: "/about-image-1.jpg",
    alt: "Maxwell portrait 1",
    className: "col-span-2 row-span-2",
  },
  {
    id: "img-2",
    src: "/about-image-2.jpg",
    alt: "Maxwell portrait 2",
    className: "col-span-2 row-span-2",
  },
  {
    id: "img-3",
    src: "/about-image-3.jpg",
    alt: "Maxwell portrait 3",
    className: "col-span-2 row-span-1",
  },
  {
    id: "img-4",
    src: "/about-image-4.jpg",
    alt: "Maxwell portrait 4",
    className: "col-span-2 row-span-1",
  },
]
