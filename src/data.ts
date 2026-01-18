import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "YOUR_NAME",
  role: "YOUR_ROLE",
  introduction: "2nd Year Game Dev Student at MMU University. Aspiring to create fun & interesting games using Unity & Unreal Engine.",
  description: "Hi, I'm Danny! Gaming has always been a passion of mine and from the many experiences would love to create my own games for others to enjoy. I am within my 2nd year of University at MMU in Manchester, I have used both Unreal & Unity and I'm constantly exploring the many ways I can better myself in developing games. My aim is to create fun games within fun moving sandboxes and eventually join a company where I can deepen my passion and knowledge for gaming as a whole.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/killergremal1996",
    itchIO: "https://killergremal.itch.io",
    linkedIn: "www.linkedin.com/in/danny-chadbond-9a0661394",
  }
};

export const games: Game[] = [
  {
    name: "Robot_Runner",
    description: "A basic prototype of a 2D Side-Scrolling Platformer, where as time speeds up, so does your character.",
    genres: ["2D", "Side-Scroller", "Platformer"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/killergremal1996/Robot-Runner.git" },
      { source: LinkImageSource.ItchIo, url: "https://killergremal.itch.io/robot-runner" },
    ],
    media: [
      { source: "/images/games/Robot-Runner/Screenshot_1.png", type: MediaType.Image }
      /*{ source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },*/
    ],
  },
];