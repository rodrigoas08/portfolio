import {
  HtmlIcon,
  CssIcon,
  JSIcon,
  ReactIcon,
  TSIcon,
  GitIcon,
  VueIcon,
  VSCodeIcon,
  NpmIcon,
  VuetifyIcon,
  GithubIcon,
  StyledCompIcon
} from 'components/Icons';

interface ISkillCard {
  icon: JSX.Element;
  title: string | null;
  description: string | null;
}

export const ListSkillCards: ISkillCard[] = [
  {
    icon: <HtmlIcon />,
    title: 'HTML',
    description:
      'Hyper Text Markup Language é uma linguagem de marcação hipertexo utilizada na construção de páginas web sendo responsável pela estrutura dos elementos.'
  },
  {
    icon: <CssIcon />,
    title: 'CSS',
    description:
      'Cascading Style Sheet é uma linguagem de folha de estilo utilizada ma criação de páginas web junto com HTML sendo responsável pela parte visual.'
  },
  {
    icon: <JSIcon />,
    title: 'JavaScript',
    description:
      'JavaScript é uma linguagem de programação orientada a objetos capaz de criar aplicações dinâmicas sendo responsável pela interatividade.'
  },
  {
    icon: <ReactIcon />,
    title: 'React',
    description:
      'React.js é uma biblioteca JavaScript para construir interfaces de usuário.'
  },
  {
    icon: <TSIcon />,
    title: 'TypeScript',
    description:
      'TypeScript é um superset do JavaScript, com ele temos possibilidade de aplicar uma tipagem estática juntamente com interfaces em um sistema construído com JavaScript.'
  },
  {
    icon: <StyledCompIcon />,
    title: 'Styled Components',
    description:
      'Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript.'
  },
  {
    icon: <VueIcon />,
    title: 'Vue',
    description:
      'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de aplicações SPA(Single Page Applications) e possibilita criar aplicações de forma reativa.'
  },
  {
    icon: <VuetifyIcon />,
    title: 'Vuetify',
    description:
      'O Vuetify é um framework responsivo em Vue, baseado no Material Design.'
  },
  {
    icon: <GitIcon />,
    title: 'Git',
    description:
      'Git é um sistema de controle de versões distribuído, usado para controlar histórico de alterações de arquivos. '
  },
  {
    icon: <GithubIcon />,
    title: 'GitHub',
    description:
      'GitHub é uma plataforma feita para gerenciar seu código, compartilhar entre os desenvolvedores e utiliza o Git como controle de versões.'
  },
  {
    icon: <NpmIcon />,
    title: 'Node Package Manager',
    description:
      'NPM é uma ferramenta do Node.js para o gerenciamento de pacotes. Ele permite instalar, desinstalar e atualizar dependências em uma aplicação.'
  },
  {
    icon: <VSCodeIcon />,
    title: 'VS Code',
    description:
      'O Visual Studio Code é um editor de código-fonte (ou editor de texto) desenvolvido pela Microsoft.'
  }
];
