export type Profile = "abyssal" | "ombre" | "deterministe" | "existentialiste";

export const diagnosticQuestions = [
  {
    id: "q1",
    text: "Quand quelque chose vous fait peur, votre première réaction est de...",
    options: [
      {
        text: "Creuser l'origine de cette peur jusqu'à son noyau le plus primitif.",
        profile: "abyssal",
      },
      {
        text: "Chercher ce qu'elle dit de vous — une vérité que vous évitez.",
        profile: "ombre",
      },
      {
        text: "L'analyser froidement pour la neutraliser.",
        profile: "deterministe",
      },
      {
        text: "L'accepter sans chercher de sens — elle est, c'est tout.",
        profile: "existentialiste",
      },
    ],
  },
  {
    id: "q2",
    text: "Ce qui vous attire dans les figures de monstres ou de villains, c'est...",
    options: [
      {
        text: "Leur rapport à la douleur — ils la transforment en puissance.",
        profile: "abyssal",
      },
      {
        text: "Ce qu'ils révèlent de nous : le monstre est un miroir.",
        profile: "ombre",
      },
      {
        text: "Leur logique implacable — ils agissent selon leurs propres lois.",
        profile: "deterministe",
      },
      {
        text: "Leur liberté absolue — ils ont renoncé aux règles des autres.",
        profile: "existentialiste",
      },
    ],
  },
  {
    id: "q3",
    text: "Dans vos relations aux autres, vous avez tendance à...",
    options: [
      {
        text: "Ressentir les émotions des autres comme si elles étaient les vôtres.",
        profile: "abyssal",
      },
      {
        text: "Observer plus que vous ne participez — vous préférez comprendre.",
        profile: "ombre",
      },
      {
        text: "Établir des dynamiques claires, vous méfiez des ambiguïtés.",
        profile: "deterministe",
      },
      {
        text: "Vous sentir fondamentalement seul, même en groupe.",
        profile: "existentialiste",
      },
    ],
  },
  {
    id: "q4",
    text: "Face à une injustice que vous ne pouvez pas changer, vous...",
    options: [
      {
        text: "La ressentez physiquement, longtemps, comme une blessure ouverte.",
        profile: "abyssal",
      },
      {
        text: "Cherchez pourquoi une partie de vous l'a laissée arriver.",
        profile: "ombre",
      },
      {
        text: "Acceptez que certains systèmes fonctionnent ainsi et adaptez votre trajectoire.",
        profile: "deterministe",
      },
      {
        text: "Concluez que la justice est une convention humaine, donc relative.",
        profile: "existentialiste",
      },
    ],
  },
  {
    id: "q5",
    text: "Le mot qui décrit le mieux votre rapport au passé :",
    options: [
      {
        text: "Hantise — il revient toujours sous une autre forme.",
        profile: "abyssal",
      },
      {
        text: "Matière — une archive à décrypter pour se comprendre.",
        profile: "ombre",
      },
      {
        text: "Donnée — il explique le présent mais ne le détermine pas.",
        profile: "deterministe",
      },
      {
        text: "Illusion — il n'existe plus, seul l'instant compte.",
        profile: "existentialiste",
      },
    ],
  },
  {
    id: "q6",
    text: "Si vous pouviez tout recommencer, vous garderiez...",
    options: [
      {
        text: "Vos cicatrices — elles sont la seule preuve que vous avez vraiment vécu.",
        profile: "abyssal",
      },
      {
        text: "Vos zones d'ombre — elles sont la partie la plus honnête de vous.",
        profile: "ombre",
      },
      {
        text: "Vos erreurs — elles sont les données qui ont affiné votre logique.",
        profile: "deterministe",
      },
      {
        text: "Rien — recommencer c'est s'inventer entièrement.",
        profile: "existentialiste",
      },
    ],
  },
];

export const diagnosticResults = {
  abyssal: {
    sub: "FREUDISME RADICAL",
    title: "L'Analyste Abyssal",
    philosophy: "Sigmund Freud : La psychanalyse",
    desc: "Vous percevez le monde à travers le filtre de l'inconscient. Vos émotions ne sont jamais superficielles — elles pointent toujours vers quelque chose d'enfoui. Vous portez les blessures du passé non comme des fardeaux, mais comme des clefs. Freud vous dirait que vous êtes déjà à mi-chemin : vous savez que ce qui vous hante est en vous. Reste à le nommer.",
    traits: [
      "Hypersensibilité émotionnelle",
      "Mémoire affective forte",
      "Introspection profonde",
    ],
  },
  ombre: {
    sub: "JUNGISME OBSCUR",
    title: "L'Explorateur d'Ombres",
    philosophy: "C.G. Jung : La psychologie analytique",
    desc: "Vous observez plus que vous ne réagissez. Là où les autres fuient leur noirceur, vous la regardez en face, non par masochisme, mais par curiosité. Jung appelait cela l'individuation : le processus de devenir pleinement soi en intégrant sa propre Ombre. Vous êtes quelqu'un qui sait que le monstre et le héros partagent la même origine.",
    traits: [
      "Distance analytique",
      "Fascination pour le symbolique",
      "Quête d'authenticité",
    ],
  },
  deterministe: {
    sub: "BEHAVIORISME CLINIQUE",
    title: "Le Déterministe Froid",
    philosophy: "B.F. Skinner : Le comportementalisme",
    desc: "Vous faites confiance à la logique plus qu'à l'intuition. Pour vous, comprendre un système c'est pouvoir le maîtriser, y compris le système humain. Vous n'êtes pas insensible, vous êtes méthodique. Là où les autres se noient dans leurs émotions, vous cherchez le schéma. Votre horreur est celle de la perte de contrôle, pas de la mort.",
    traits: [
      "Pensée analytique",
      "Besoin de maîtrise",
      "Rationalisation des émotions",
    ],
  },
  existentialiste: {
    sub: "NIHILISME LUCIDE",
    title: "L'Existentialiste du Vide",
    philosophy: "Jean-Paul Sartre : L'existentialisme",
    desc: "Vous avez compris que le sens ne se trouve pas, il se fabrique. Cette liberté absolue est votre force et votre solitude. Sartre disait que l'existence précède l'essence : vous n'êtes pas né avec une nature, vous vous construisez par vos choix. L'horreur qui vous touche le plus n'est pas la mort, c'est la vie vécue par défaut, sans jamais se choisir.",
    traits: [
      "Indépendance radicale",
      "Inconfort face aux conventions",
      "Lucidité existentielle",
    ],
  },
};
