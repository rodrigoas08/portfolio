import Ecbporto from 'assets/portfolios/ecbporto.webp';
import GitHubFinder from 'assets/portfolios/github-api.webp';

export const CardList = [
  {
    title: 'ecbporto',
    background: `${Ecbporto}`,
    description:
      'Esse trabalho foi a criação de uma Landing Page responsiva para a empresa Ecbporto.',
    stack: ['React', 'Typescript', 'Styled Components'].join(' • '),
    repository: 'teste',
    link: 'http://www.ecbporto.com'
  },
  {
    title: 'Github Finder',
    background: `${GitHubFinder}`,
    description:
      'Sistema criado a partir de um desafio que usa a API do GitHub para buscar perfis e listar repositórios públicos.',
    stack: ['Vue', 'TypeScript'].join(' • '),
    repository: 'https://github.com/rodrigoas08/github-api',
    link: 'https://github-api-rodrigoas08.vercel.app'
  },
  {
    title: '',
    background: '',
    description: '',
    stack: '',
    repository: '',
    link: ''
  },
  {
    title: '',
    background: '',
    description: '',
    stack: '',
    repository: '',
    link: ''
  },
  {
    title: '',
    background: '',
    description: '',
    stack: '',
    repository: '',
    link: ''
  }
];
