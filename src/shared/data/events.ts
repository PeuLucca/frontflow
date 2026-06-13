import type { SeasonEvent } from "../../modules/game/game.types";

export const EVENTS: SeasonEvent[] = [
  {
    id: "paris-fashion-week",
    name: "Semana de Moda de Paris",
    type: "paris_fashion_week",
    description:
      "Os maiores nomes do mundo desembarcam em Paris para a temporada de desfiles mais assistida do ano.",
  },
  {
    id: "met-gala",
    name: "Gala do Met",
    type: "met_gala",
    description:
      "A noite mais importante da moda. Cada look é uma manchete, cada entrada é uma declaração.",
  },
  {
    id: "cannes",
    name: "Festival de Cannes",
    type: "cannes",
    description:
      "Tapetes vermelhos, paparazzi e a disputa pelo look mais comentado da croisette.",
  },
  {
    id: "vogue-cover",
    name: "Capa da Vogue",
    type: "vogue_cover",
    description:
      "Estampar a capa é o selo máximo de relevância - e as agências fazem de tudo por isso.",
  },
  {
    id: "social-media-moment",
    name: "Momento Viral",
    type: "social_media_moment",
    description:
      "Um momento viral pode fazer - ou destruir - uma temporada da noite para o dia.",
  },
  {
    id: "fashion-awards",
    name: "Noite da Premiação de Moda",
    type: "fashion_awards",
    description:
      "A indústria se reúne para coroar seus favoritos - e as agências disputam o direito de se exibir.",
  },
  {
    id: "milan-fashion-week",
    name: "Semana de Moda de Milão",
    type: "milan_fashion_week",
    description:
      "Alfaiataria impecável e ousadia italiana dividem a passarela - só os looks mais marcantes saem com as manchetes.",
  },
  {
    id: "luxury-campaign",
    name: "Campanha de Luxo",
    type: "luxury_campaign",
    description:
      "Uma grife de prestígio escolhe o rosto da nova campanha - e essa escolha pode definir o rumo de toda a temporada.",
  },
];
