import type { Strings } from "./strings";

export const ptBR: Strings = {
  home: {
    eyebrow: "Uma Rivalidade de Agências de Moda",
    title: "Front Row",
    subtitle:
      "Monte seu elenco. Supere a Velvet House. Domine a temporada.",
    startButton: "Começar Temporada",
  },
  intro: {
    title: "A Temporada Começa",
    story: (rivalName, playerName) =>
      `${rivalName} domina as passarelas há uma década. ${playerName} está pronta para mudar isso.`,
    continueButton: "Iniciar Draft",
  },
  agencyIntro: {
    eyebrow: "Sua Agência",
  },
  rivalIntro: {
    eyebrow: "Sua Rival",
    role: (agencyName) => `CEO da ${agencyName}`,
  },
  draft: {
    title: (agencyName) => `Quem se junta à ${agencyName}?`,
    chooseButton: "Escolher",
    progress: (current, total) => `Rodada ${current} de ${total}`,
    categories: {
      wag: "Patroa",
      model: "Modelo",
      influencer: "Influenciadora",
      actress: "Atriz",
      rising_star: "Promessa",
      fashion_icon: "Ícone da Moda",
    },
  },
  season: {
    title: "A Temporada",
    nextEventButton: "Próximo Evento",
    finalResultButton: "Ver Resultado Final",
    vs: "x",
    narrative: (key, { eventName, playerName, rivalName }) => {
      switch (key) {
        case "event_player_win":
          return `${playerName} roubou a cena em ${eventName}.`;
        case "event_rival_win":
          return `${rivalName} dominou ${eventName}.`;
        case "event_draw":
          return `${eventName} terminou em empate - as duas agências dividiram os holofotes.`;
      }
    },
  },
  result: {
    eyebrow: "Resultado Final",
    headline: (winner, playerName, rivalName) => {
      switch (winner) {
        case "player":
          return `${playerName} Vence a Temporada`;
        case "rival":
          return `${rivalName} Vence a Temporada`;
        default:
          return "A Temporada Termina em Empate";
      }
    },
    subline: (winner, rivalOwner) => {
      switch (winner) {
        case "player":
          return "Agora as câmeras estão em você.";
        case "rival":
          return `${rivalOwner} sorri. Por enquanto.`;
        default:
          return "Nenhuma agência conquistou a coroa.";
      }
    },
    score: (playerWins, rivalWins, draws) => {
      if (draws === 0) return `${playerWins} - ${rivalWins}`;
      const label = draws === 1 ? "empate" : "empates";
      return `${playerWins} - ${rivalWins} (${draws} ${label})`;
    },
    restartButton: "Jogar de Novo",
  },
};
