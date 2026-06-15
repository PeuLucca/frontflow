import type { EventNarrativeKey, EventType } from "../../modules/game/game.types";
import type { NarrativeParams, Strings } from "./strings";
import { pickRandom } from "../utils/random";

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

const MIRANDA_DRAFT_TAUNTS = [
  "Hm. Essa foi uma decisão.",
  "Você realmente pensou nisso?",
  "Corajosa. Não necessariamente no bom sentido.",
  "Interessante. Eu não teria feito isso.",
  "Tem certeza?",
  "Vou fingir que entendi sua estratégia.",
  "Isso certamente surpreendeu alguém.",
  "Eu esperava algo... diferente.",
  "Você gosta de correr riscos, vejo.",
  "Essa escolha tem personalidade. Pelo menos isso.",
  "Não era minha primeira opção. Nem a segunda.",
  "Vamos torcer para que você saiba algo que eu não sei.",
  "Audaciosa.",
  "Bem... agora não dá mais para voltar atrás.",
  "Se isso funcionar, eu ficarei impressionada."
];

const MIRANDA_STAR_PICK_TAUNTS = [
  "Eu sabia que você escolheria ela.",
  "Originalidade nunca foi um requisito, suponho.",
  "Uma escolha óbvia. Mas eficaz.",
  "Difícil ignorar uma estrela dessas.",
  "Ela ganha temporadas. Às vezes.",
  "Admito, essa foi uma boa escolha.",
  "Ela costuma causar problemas para minhas agências.",
  "Eu teria feito o mesmo. Infelizmente.",
  "Agora a temporada ficou um pouco mais complicada.",
  "Nem todo mundo teria percebido o valor dela."
];

const MIRANDA_STAR_APPEARS_TAUNTS = [
  "Ah...",
  "Agora estamos falando de gente séria.",
  "Ela pode mudar uma temporada inteira.",
  "Espero que você saiba o que está vendo.",
  "Algumas oportunidades aparecem uma vez só.",
  "Essa costuma atrair muita atenção.",
  "Nem eu gosto de enfrentar ela.",
  "Interessante... muito interessante.",
  "A temporada acabou de ficar mais perigosa.",
  "Poucas conseguem entrar nesse grupo."
];

const MIRANDA_EVENT_WIN_TAUNTS = [
  "Como esperado.",
  "A experiência ainda faz diferença.",
  "Você foi bem. Para uma iniciante.",
  "A Velvet House agradece pela participação.",
  "Algumas coisas simplesmente seguem a ordem natural.",
  "Não se preocupe. Nem todo mundo nasce para vencer.",
  "Você teve suas chances.",
  "A temporada continua exatamente onde deveria estar.",
  "Elegância não se improvisa.",
  "Eu quase fiquei preocupada.",
  "Quase.",
  "Há uma diferença entre aparecer e dominar.",
  "A passarela foi generosa com você hoje. Não o suficiente.",
  "Isso foi divertido. Para mim.",
  "Ainda estamos jogando ligas diferentes.",
  "Seu esforço é admirável.",
  "Seu resultado, nem tanto.",
  "Acho que aprendemos algo hoje.",
  "Ou pelo menos eu aprendi.",
  "Você ainda está tentando me alcançar.",
  "Continue tentando.",
  "A multidão adora uma azarã.",
  "Mas o espetáculo sempre termina igual.",
  "Eu já vi temporadas inteiras decididas por menos.",
  "E nenhuma delas terminou bem para a outra agência.",
  "Você tem potencial.",
  "É uma pena que eu tenha mais.",
  "Se servir de consolo, você perdeu para a melhor.",
  "A confiança é importante.",
  "Mas resultados são mais importantes.",
  "Foi uma boa tentativa.",
  "Vou arquivar junto das outras."
];

const MIRANDA_EVENT_LOSS_TAUNTS = ["...", "Sorte.", "Isso não muda nada."];

export const ptBR: Strings = {
  common: {
    close: "Fechar",
    credits: "Powered by: Pedro L",
  },
  header: {
    wordmark: "Front Row",
    tagline: "Monte · Desfile · Vença",
    rulesButton: "Como Funciona?",
  },
  rules: {
    title: "Como Funciona a Pontuação",
    intro:
      "Cada temporada tem 8 eventos de moda. Em cada um, a sua agência enfrenta a Velvet House - e quem pontuar mais, vence o evento.",
    sections: [
      {
        title: "Qualidades em destaque",
        body: "Cada evento valoriza duas qualidades em dobro. Uma it girl elegante e na tendência, por exemplo, brilha mais em Paris do que em um evento que valorize fama e contatos.",
      },
      {
        title: "Especialidades",
        body: "Quando a especialidade de uma personagem combina com o evento, ela ganha um bônus extra de pontuação para a sua agência.",
      },
      {
        title: "As 3 melhores entram em cena",
        body: "Em cada evento, só as 3 integrantes do seu elenco com as melhores notas para aquele evento representam a agência - monte um elenco versátil.",
      },
      {
        title: "Um toque de sorte",
        body: "Cada evento tem uma dose de imprevisibilidade - mesmo o elenco perfeito pode ser surpreendido numa noite.",
      },
    ],
    closing: "Vença mais eventos que a Velvet House e a temporada é sua.",
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
      wag: "Mulher de jogador",
      model: "Modelo",
      influencer: "Influenciadora",
      actress: "Atriz",
      rising_star: "Estrela em ascensão",
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
    rosterLabel: (count, total) => `Elenco: ${count}/${total}`,
    toggleScores: (name, expanded) =>
      expanded ? `Ocultar pontuação de ${name}` : `Ver pontuação de ${name}`,
    starBadge: "Personagem estrela",
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
    duel: {
      vs: "VS",
      winnerLabel: (characterName) => `🏆 ${characterName} venceu o duelo.`,
      drawLabel: "Empate no duelo.",
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
    titles: {
      eyebrow: "Hall da Fama",
      caption: "Temporadas conquistadas por cada agência.",
      count: (count) => (count === 1 ? "1 título" : `${count} títulos`),
    },
    restartButton: "Jogar de Novo",
    shareButton: "Compartilhar Resultado",
    shareTitle: "Front Row",
    shareText: (headline, score, narrative, titlesLine) =>
      `✨ ${headline}\nPlacar: ${score}\n\n${narrative}\n\n${titlesLine}\n\nJogue Front Row e supere a Velvet House!`,
    titlesShareLine: (playerName, playerTitles, rivalName, rivalTitles) =>
      `👑 Hall da Fama: ${playerName} ${playerTitles} x ${rivalTitles} ${rivalName}`,
    shareCopied: "Resultado copiado para a área de transferência!",
  },
  miranda: {
    draftReaction: () => pickRandom(MIRANDA_DRAFT_TAUNTS),
    starPickReaction: () => pickRandom(MIRANDA_STAR_PICK_TAUNTS),
    starAppearsReaction: () => pickRandom(MIRANDA_STAR_APPEARS_TAUNTS),
    eventWinReaction: () => pickRandom(MIRANDA_EVENT_WIN_TAUNTS),
    eventLossReaction: () => pickRandom(MIRANDA_EVENT_LOSS_TAUNTS),
    toggleBubble: (collapsed) =>
      collapsed ? "Mostrar mensagem da Miranda" : "Ocultar mensagem da Miranda",
  },
};
