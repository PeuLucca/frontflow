import type { EventNarrativeKey, EventType } from "../../modules/game/game.types";
import type { NarrativeParams, Strings } from "./strings";

type EventNarrativeTable = Record<
  EventType,
  Record<EventNarrativeKey, (params: NarrativeParams) => string>
>;

const EVENT_NARRATIVE: EventNarrativeTable = {
  paris_fashion_week: {
    event_player_win: ({ playerName, rivalOwner }) =>
      `${playerName} dominou as passarelas de Paris - e ${rivalOwner} anotou o nome em algum lugar.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `Paris pertenceu à ${rivalName}. ${rivalOwner} recebeu os aplausos como quem já esperava por eles.`,
    event_draw: ({ playerName, rivalName }) =>
      `Paris não revelou uma favorita: ${playerName} e ${rivalName} dividiram as manchetes da semana de moda.`,
  },
  milan_fashion_week: {
    event_player_win: ({ playerName, rivalName }) =>
      `Em Milão, a alfaiataria impecável da ${playerName} roubou a cena - e a ${rivalName} ficou só com a ousadia.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `A ousadia italiana favoreceu a ${rivalName} em Milão. ${rivalOwner} sorriu como quem já sabia o resultado.`,
    event_draw: ({ playerName, rivalName }) =>
      `Milão terminou em empate técnico - ${playerName} e ${rivalName} saíram da passarela com o mesmo número de flashes.`,
  },
  met_gala: {
    event_player_win: ({ playerName, rivalOwner }) =>
      `A noite mais importante da moda foi de ${playerName}. Pela primeira vez, ${rivalOwner} não foi a manchete do Met Gala.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `No Met Gala, a ${rivalName} continua imbatível. ${rivalOwner} subiu a escadaria como quem já é dona do tapete.`,
    event_draw: ({ playerName, rivalName }) =>
      `O Met Gala terminou dividido: ${playerName} e ${rivalName} compartilharam os holofotes da noite mais vigiada do ano.`,
  },
  cannes: {
    event_player_win: ({ playerName, rivalName }) =>
      `No tapete vermelho de Cannes, ${playerName} virou assunto em todos os tabloides - e a ${rivalName} não teve resposta.`,
    event_rival_win: ({ playerName, rivalName }) =>
      `Cannes pertenceu à ${rivalName}. Os paparazzi nem perceberam que a ${playerName} também estava lá.`,
    event_draw: ({ playerName, rivalName }) =>
      `Cannes não definiu uma favorita: ${playerName} e ${rivalName} dividiram a primeira página da croisette.`,
  },
  vogue_cover: {
    event_player_win: ({ playerName, rivalName, rivalOwner }) =>
      `${playerName} estampou a capa da Vogue - o selo que ${rivalOwner} jurava ser só da ${rivalName}.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `A capa da Vogue foi, mais uma vez, da ${rivalName}. ${rivalOwner} já tem o exemplar emoldurado.`,
    event_draw: ({ playerName, rivalName }) =>
      `A Vogue não conseguiu escolher: a edição saiu com capas variantes de ${playerName} e ${rivalName}.`,
  },
  social_media_moment: {
    event_player_win: ({ playerName, rivalName }) =>
      `Um momento viral colocou ${playerName} em todas as telas - e a ${rivalName} só pôde assistir aos números subirem.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `O momento viral da noite foi da ${rivalName}. ${rivalOwner} não usa redes sociais, mas até ela viu esse.`,
    event_draw: ({ playerName, rivalName }) =>
      `O momento viral dividiu a internet: ${playerName} e ${rivalName} trendaram ao mesmo tempo.`,
  },
  fashion_awards: {
    event_player_win: ({ playerName, rivalName }) =>
      `${playerName} subiu ao palco da premiação de moda - e a ${rivalName} aplaudiu por obrigação.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `A ${rivalName} levou mais um prêmio para casa. ${rivalOwner} já nem finge surpresa.`,
    event_draw: ({ playerName, rivalName }) =>
      `A noite de premiação terminou em empate - ${playerName} e ${rivalName} dividiram os aplausos da plateia.`,
  },
  luxury_campaign: {
    event_player_win: ({ playerName, rivalOwner }) =>
      `Uma grife de prestígio escolheu ${playerName} para sua nova campanha - e ${rivalOwner} exigiu explicações da equipe de marketing.`,
    event_rival_win: ({ rivalName, rivalOwner }) =>
      `A campanha de luxo da temporada estampa o rosto da ${rivalName}. ${rivalOwner} não aceita menos que isso.`,
    event_draw: ({ playerName, rivalName }) =>
      `A campanha de luxo saiu com duas versões - uma com ${playerName}, outra com ${rivalName}. Ninguém soube dizer qual é a principal.`,
  },
};

const RIVAL_PICK_COMMENTARY = [
  (characterName: string) =>
    `Miranda Voss escolheu ${characterName}, mais uma superestrela para a Velvet House.`,
  (characterName: string) =>
    `A Velvet House fechou com ${characterName} antes que a tinta do seu draft secasse.`,
  (characterName: string) =>
    `Enquanto você ainda comemorava sua escalação, ${characterName} já vestia Velvet House.`,
];

export const ptBR: Strings = {
  header: {
    wordmark: "Front Row",
    tagline: "Monte · Desfile · Vença",
  },
  home: {
    eyebrow: "Uma Rivalidade de Agências de Moda",
    title: "Front Row",
    subtitle:
      "Monte seu elenco. Supere a Velvet House. Domine a temporada.",
    startButton: "Começar Temporada",
  },
  intro: {
    step1: "A temporada começou.",
    step2: (rivalName) => `${rivalName} domina as passarelas há uma década.`,
    step3: "Agora uma nova agência entrou no jogo.",
    nextButton: "Continuar",
    continueButton: "Iniciar Draft",
  },
  profiles: {
    player: {
      role: (agencyName) => `Direção da ${agencyName}`,
      tagline: "A nova aposta da temporada.",
    },
    rival: {
      role: (agencyName) => `CEO da ${agencyName}`,
      tagline: "Fria, elegante e impossível de ignorar.",
    },
    matchupLabel: (playerOwner, rivalOwner) => `${playerOwner} x ${rivalOwner}`,
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
    attributes: {
      fame: "Fama",
      elegance: "Elegância",
      engagement: "Engajamento",
      networking: "Contatos",
      charisma: "Carisma",
      trend: "Tendência",
    },
    strengthsLabel: "Fortes",
    weaknessLabel: "Atenção",
    rosterLabel: (agencyName, count, total) =>
      `Elenco ${agencyName}: ${count}/${total}`,
  },
  rivalDraft: {
    title: "Enquanto Isso, na Velvet House...",
    subtitle: (rivalOwner) =>
      `${rivalOwner} também fechou sua escalação. E ela não foi gentil.`,
    pickCommentary: (characterName, variantIndex) =>
      RIVAL_PICK_COMMENTARY[variantIndex % RIVAL_PICK_COMMENTARY.length](
        characterName,
      ),
    continueButton: "Ver a Temporada",
    playerRosterTitle: "Sua Escalação",
    playerRosterSubtitle: (count) =>
      `${count} estrelas prontas para a temporada.`,
    rivalRosterTitle: "Escalação da Velvet House",
    rivalRosterSubtitle: "Algumas escolhas ainda estão sob sigilo.",
    hiddenCount: (count) => `+ ${count} nomes guardados a sete chaves`,
  },
  season: {
    title: "A Temporada",
    progress: (current, total) => `Evento ${current} de ${total}`,
    nextEventButton: "Próximo Evento",
    finalResultButton: "Ver Resultado Final",
    vs: "x",
    outcomeLabel: {
      player: "Vitória",
      rival: "Derrota",
      draw: "Empate",
    },
    narrative: (key, eventType, params) =>
      EVENT_NARRATIVE[eventType][key](params),
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
    narrative: (winner, { playerName, rivalName, rivalOwner }) => {
      switch (winner) {
        case "player":
          return `${rivalOwner} releu o resultado duas vezes. Por uma noite, o nome que circula nos bastidores da moda não é o da ${rivalName} - é o da ${playerName}.`;
        case "rival":
          return `${rivalOwner} nem precisou comemorar. Para a ${rivalName}, vencer é rotina - e a ${playerName} aprendeu, nesta temporada, a distância que ainda precisa percorrer.`;
        default:
          return `Nem ${playerName}, nem ${rivalName}. ${rivalOwner} chamou de "uma temporada sem graça" - mas, nos bastidores, todo mundo já fala da próxima.`;
      }
    },
    score: (playerWins, rivalWins, draws) => {
      if (draws === 0) return `${playerWins} - ${rivalWins}`;
      const label = draws === 1 ? "empate" : "empates";
      return `${playerWins} - ${rivalWins} (${draws} ${label})`;
    },
    restartButton: "Jogar de Novo",
    shareButton: "Compartilhar Resultado",
    shareTitle: "Front Row",
    shareText: (headline, score, narrative) =>
      `✨ ${headline}\nPlacar: ${score}\n\n${narrative}\n\nJogue Front Row e supere a Velvet House!`,
    shareCopied: "Resultado copiado para a área de transferência!",
  },
};
