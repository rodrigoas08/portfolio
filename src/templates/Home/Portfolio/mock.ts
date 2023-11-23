import Ecbporto from 'assets/portfolios/ecbporto.webp';
import GitHubApi from 'assets/portfolios/github-api.webp'

export const CardList = [
  {
    title: 'ecbporto',
    background: `${Ecbporto}`,
    description:
      'É uma Landing Page criada para a empresa Ecbporto que ofereçe diversos tipos de soluções para realização de projetos...',
    stack: ['React', 'Typescript', 'Styled Components'].join(' • '),
    repository: 'teste',
    link: 'http://www.ecbporto.com'
  },
  {
    title: 'Perfil Github',
    background: `${GitHubApi}`,
    description:
      'Sistema criado a partir de um desafio que usa a API do GitHub para buscar perfis e listar repsitórios públicos...',
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
  }
];
