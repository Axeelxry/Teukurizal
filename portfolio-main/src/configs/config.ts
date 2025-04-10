export const siteConfig: {
  baseUrl: string;
  domain: string;
  author: string;
  author_surname: string;
  titlePrefix: string;
  profile_image: string;
  form_id: string;
  github_org_name: string;
  country: string;
  social: {
    kofi: string;
    sponsor: string;
    email: string;
    twitter: string;
    github: string;
    linkedin: string;
    blog: string;
    medium: string;
    dev: string;
    hashnode: string;
    discord: string;
    github_organisation: string;
    daily_dev: {
      username: string;
      card: string;
    };

  };
  other: {
    hacktoberfest: string;
    codsoft: string;
    github_snake: string;
  };
  chatbot: {
    rateLimit: number;
  };
  contact: {
    debug: boolean;
    rateLimit: number;
  };
  metadata: {
    description: string;
    keywords: string;
    type: string;
  };
} = {
  baseUrl: 'https://teukurizal.com',
  domain: 'Teukurizal.com',
  author: 'Teuku Rizal',
  author_surname: 'Rizal',
  titlePrefix: 'Teuku Rizal',
  github_org_name: 'Danteee Technologies',
  country: 'Indonesia',
  profile_image:
    'https://avatars.githubusercontent.com/u/170259305?v=4',
  form_id: 'https://formspree.io/f/myzynpbr',
  social: {
    kofi: 'https://ko-fi.com/axeeelyn',
    sponsor: 'https://github.com/Axeelxry',
    email: 'rizalteuku12@gmail.com',
    twitter: '',
    github: 'AxeelXry',
    linkedin: 'https://www.linkedin.com/in/teuku-rizal-adi-pangestu-30a6b6334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
    blog: '',
    medium: '',
    dev: 'https://dev.to/axeeelyn',
    hashnode: '',
    discord: '',
    github_organisation: 'https://github.com/Axeelxry',
    daily_dev: {
      username: 'axeeelyn',
      card: 'https://api.daily.dev/devcards/v2/boFfZnQ4h76DTlSSuL9Nh.png?type=wide&r=9ab"'
    },

  },
  metadata: {
    description: `Hi! I'm Teuku Rizal, a Web developer passionate about building apps, exploring AI and ML, and collaborating on exciting projects. Let's connect!`,
    keywords:
      'Teuku Rizal, Full Stack Developer, Teuku Rizal portfolio, Teuku Rizal GitHub, Web Development, Mobile Applications, Machine Learning, Artificial Intelligence, Programming Languages, Open Source Developer, App Development',
    type: 'website'
  },
  chatbot: {
    rateLimit: 10
  },
  contact: {
    debug: true,
    rateLimit: 10
  },
  other: {
    hacktoberfest: 'https://hacktoberfest.com/',
    codsoft: 'https://www.codsoft.in/',
    github_snake:
      'https://raw.githubusercontent.com/muhammad-fiaz/muhammad-fiaz/output/github-contribution-grid-snake.svg'
  }
};
