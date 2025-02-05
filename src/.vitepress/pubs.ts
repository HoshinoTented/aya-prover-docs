import type { Publications, Author } from "./interface"

const teslaZhang: Author = {
  name: 'Tesla Zhang',
  link: 'http://personal.psu.edu/yqz5714/'
};
export const publications: Publications = [
  {
    type: 'Papers',
    items: [
      {
        title: 'A simpler encoding of indexed types',
        venue: 'TyDe 2021',
        authors: [teslaZhang],
        links: [
          ['arxiv', '2103.15408'],
          ['doi', '10.1145/3471875.3472991'],
          ['conference', 'https://personal.psu.edu/yqz5714/gadt-cr.pdf'],
          ['online', 'https://personal.psu.edu/yqz5714/gadt.pdf']
        ],
      },
    ],
  },
  {
    type: 'Notes',
    items: [
      {
        title: 'A tutorial on implementing De Morgan cubical type theory',
        authors: [teslaZhang],
        links: [['arxiv', '2210.08232']],
      },
      {
        title: 'Elegant elaboration with function invocation',
        authors: [teslaZhang],
        links: [['arxiv', '2105.14840'], ['online', 'https://personal.psu.edu/yqz5714/defcall.pdf']],
      },
    ],
  }
]
