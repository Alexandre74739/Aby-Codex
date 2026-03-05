export interface Concept {
  id: string
  name: string
  author: string
  definition: string
  quote: string
}

export interface SortWord {
  id: string
  word: string
  correct: 'conscient' | 'inconscient'
  explanation: string
}

export const concepts: Concept[] = [
  {
    id: 'ombre',
    name: "L'Ombre",
    author: 'C.G. Jung',
    definition: "La partie de la personnalité que le Moi refuse de reconnaître. Tout ce que nous nions en nous-mêmes — la violence, la honte, le désir inavouable — s'y accumule. L'horreur la plus pure naît du moment où l'Ombre remonte à la surface.",
    quote: "On n'éclaire pas l'obscurité en imaginant des figures de lumière, mais en rendant l'obscurité consciente.",
  },
  {
    id: 'persona',
    name: 'Le Persona',
    author: 'C.G. Jung',
    definition: "Le masque social que nous portons pour nous adapter au monde extérieur. À force de le porter, nous finissons par confondre le masque avec le visage. Les monstres de fiction sont souvent des Persona brisés — des êtres dont le masque a craqué.",
    quote: "Le Persona est ce que nous paraissons, mais non ce que nous sommes.",
  },
  {
    id: 'pulsion-mort',
    name: 'La Pulsion de Mort',
    author: 'Sigmund Freud',
    definition: "Thanatos, la pulsion qui pousse vers la destruction, la répétition et le retour au calme absolu. Freud y voyait le contrepoids d'Éros. Dans l'horreur, Thanatos s'incarne dans les personnages qui cherchent leur propre fin autant que celle des autres.",
    quote: "Le but de toute vie est la mort.",
  },
  {
    id: 'volonte-puissance',
    name: 'La Volonté de Puissance',
    author: 'Friedrich Nietzsche',
    definition: "Non pas la domination des autres, mais le dépassement de soi. Le monstre nietzschéen n'est pas mauvais — il refuse simplement la morale du troupeau. Il crée ses propres valeurs là où les autres obéissent. C'est l'archétype du villain philosophique.",
    quote: "Ce qui ne me détruit pas me rend plus fort.",
  },
  {
    id: 'mauvaise-foi',
    name: 'La Mauvaise Foi',
    author: 'Jean-Paul Sartre',
    definition: "Le refus de la liberté. Se convaincre que l'on n'avait pas le choix, que les circonstances nous ont forcé la main. Les personnages tragiques de l'horreur vivent souvent dans la mauvaise foi — ils commettent l'irréparable en niant leur propre responsabilité.",
    quote: "L'existence précède l'essence.",
  },
]

export const sortWords: SortWord[] = [
  { id: '1',  word: 'La peur',          correct: 'conscient',   explanation: "La peur est une émotion ressentie consciemment face à une menace identifiée." },
  { id: '2',  word: "L'angoisse",       correct: 'inconscient', explanation: "L'angoisse est diffuse, sans objet clair — elle vient de l'inconscient." },
  { id: '3',  word: 'Le rêve',          correct: 'inconscient', explanation: "Freud voyait le rêve comme la voie royale vers l'inconscient." },
  { id: '4',  word: 'Le refoulement',   correct: 'inconscient', explanation: "Le refoulement est le mécanisme qui enfouit les désirs dans l'inconscient." },
  { id: '5',  word: 'La raison',        correct: 'conscient',   explanation: "La raison est le propre du Moi conscient selon la psychanalyse." },
  { id: '6',  word: "L'Ombre",          correct: 'inconscient', explanation: "L'Ombre jungienne vit dans les couches profondes de l'inconscient." },
  { id: '7',  word: 'Le langage',       correct: 'conscient',   explanation: "Lacan disait que l'inconscient est structuré comme un langage, mais le langage lui reste conscient." },
  { id: '8',  word: 'Le désir interdit',correct: 'inconscient', explanation: "Les désirs refoulés et interdits migrent vers l'inconscient selon Freud." },
  { id: '9',  word: 'La mémoire',       correct: 'conscient',   explanation: "La mémoire déclarative appartient au domaine du conscient." },
  { id: '10', word: 'Le trauma',        correct: 'inconscient', explanation: "Le trauma non traité s'enfouit et agit en silence depuis l'inconscient." },
  { id: '11', word: 'Le choix moral',   correct: 'conscient',   explanation: "Le jugement moral implique une délibération consciente." },
  { id: '12', word: 'Le lapsus',        correct: 'inconscient', explanation: "Pour Freud, le lapsus révèle ce que l'inconscient cherche à exprimer." },
]