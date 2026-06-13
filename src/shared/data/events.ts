import type { SeasonEvent } from "../../modules/game/game.types";

export const EVENTS: SeasonEvent[] = [
  {
    id: "paris-fashion-week",
    name: "Paris Fashion Week",
    type: "paris_fashion_week",
    description:
      "The world's biggest names descend on Paris for the most-watched runway season of the year.",
  },
  {
    id: "met-gala",
    name: "Met Gala",
    type: "met_gala",
    description:
      "Fashion's biggest night. Every look is a headline, every entrance is a statement.",
  },
  {
    id: "cannes",
    name: "Cannes Film Festival",
    type: "cannes",
    description:
      "Red carpets, paparazzi, and a fight for the most talked-about look on the croisette.",
  },
  {
    id: "vogue-cover",
    name: "Vogue Cover Shoot",
    type: "vogue_cover",
    description:
      "Landing the cover is the ultimate stamp of relevance - and agencies will do anything for it.",
  },
  {
    id: "social-media-moment",
    name: "Social Media Moment",
    type: "social_media_moment",
    description: "A viral moment can make - or break - a season overnight.",
  },
  {
    id: "fashion-awards",
    name: "Fashion Awards Night",
    type: "fashion_awards",
    description:
      "The industry gathers to crown its favorites - and agencies battle for bragging rights.",
  },
];
