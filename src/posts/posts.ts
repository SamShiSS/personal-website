export interface Post {
  title: string;
  createdAt: {
    year: number;
    month: number;
    day: number;
  };
  tags: string[];
  synopsis: string;
}

export default {
  website_launch_and_intro: {
    title: "Website Launch and Intro",
    createdAt: {
      year: 2018,
      month: 6,
      day: 27,
    },
    tags: [
      "blogging",
      "immigrant life",
      "intro",
      "personal growth",
      "running",
      "writing",
    ],
    synopsis:
      "Launched my personal website and blog today! In my opening blog post, I discussed why I started this blog, what I hope to achieve through it, and what I plan to write about.",
  },
  okay_living_with_stutter: {
    title: "I Have a Stutter, and I’ve Become Okay Living with it",
    createdAt: {
      year: 2018,
      month: 7,
      day: 14,
    },
    tags: [
      "stuttering",
      "disability",
      "courage",
      "resilience",
      "running",
      "reflection",
      "self advocacy",
    ],
    synopsis:
      "Most of my friends know that I have a stutter. For many years I couldn’t find the courage to live a normal life; however, recent life experiences have changed my attitude. In this blog post, I opened up and shared my reflections and lessons learned.",
  },
  asme_conference_recap: {
    title: "ASME IDETC/CIE Conference Recap",
    createdAt: {
      year: 2018,
      month: 9,
      day: 10,
    },
    tags: [],
    synopsis:
      "A recap of my recent experience at the ASME IDETC/CIE Conference in Quebec City",
  },
  career_transition_after_uni: {
    title: "How I transitioned into a career in tech after university",
    createdAt: {
      year: 2019,
      month: 12,
      day: 17,
    },
    tags: [],
    synopsis:
      "One year ago, I completed a career change, landing my first job as a software developer after learning to code on my own. Here is my blog post recounting and reflecting upon this arduous but worthwhile journey.",
  },
} as Record<string, Post>;
