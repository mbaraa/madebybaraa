import config from "$lib/config";
import type ProjectGroup from "$lib/models/ProjectGroup";
import Requests from "./Requests";

export default class ProjectRequests {
    static async getProjectGroups(): Promise<ProjectGroup[]> {
        return [
            {
                name: "College Related",
                description: "Stuff I made for my faculty",
                projects: [
                    {
                        name: "Sheev 2",
                        description:
                            "The second enhanced version of Sheev, which will have full form automation, instead of just printing papers.",
                        startYear: "2022",
                        imagePath: `/images/sheev2.png`,
                    },
                    {
                        name: "Ross 2",
                        description:
                            "My biggest project yet, Ross is a university contest manager, it manages and automates all contest registration and closure routines.",
                        startYear: "2021",
                        endYear: "2022",
                        website: "https://ross2.co",
                        sourceCode: "https://github.com/mbaraa/ross2",
                        imagePath: `/images/ross2.png`,
                    },
                    {
                        name: "Sheev",
                        description:
                            "Form to image genrator, I made this project because of the lack of digitized forms in my university.",
                        startYear: "2021",
                        endYear: "2021",
                        website: "https://sheev.vercel.app",
                        sourceCode: "https://github.com/mbaraa/sheev",
                        imagePath: `/images/sheev.png`,
                    },
                ],
            },
            {
                name: "Early Web",
                description: "Projects I created when I started learning web.",
                projects: [
                    {
                        name: "Shorts Ninja",
                        description:
                            "My second web project, I was exploring web and I decided to go with the classic hello web project i.e. a URL Shortner.",
                        startYear: "2021",
                        endYear: "2021",
                        sourceCode: "https://github.com/mbaraa/shortsninja",
                        imagePath: `/images/shortsninja.png`,
                    },
                    {
                        name: "GDSC Logo Generator",
                        description:
                            "My first web project, my Google Developer Student Clubs chapter's lead thought it would be a great idea if we had a logo generator that every other GDSC chapters can use it, so that every GDSC logos look the same in a neat way.",
                        startYear: "2020",
                        endYear: "2021",
                        website: "https://logogen.dscasu.com",
                        sourceCode:
                            "https://github.com/GDSC-ASU/logo_generator",
                        imagePath: `/images/gdg.png`,
                    },
                ],
            },
            {
                name: "Terminal Games",
                description: "Some games to play in the terminal",
                projects: [
                    {
                        name: "Snek",
                        description:
                            "Funny story, I saw a snake screen saver, and thought to myself, it would be great if I made a snake game, soon it'll solve itself!",
                        startYear: "2022",
                        endYear: "2022",
                        sourceCode:
                            "https://github.com/mbaraa/console_games/tree/master/Snek",
                        imagePath: `/images/snek.png`,
                    },
                    {
                        name: "Tic Tac Toe",
                        description: "I was boared again :)",
                        startYear: "2021",
                        endYear: "2021",
                        sourceCode:
                            "https://github.com/mbaraa/console_games/tree/master/TicTacToe",
                        imagePath: `/images/ttt.png`,
                    },
                    {
                        name: "Tetris",
                        description:
                            "Terminal based tetris game, this is my fist Go project ever, I made it because I had nothing else to do.",
                        startYear: "2020",
                        endYear: "2020",
                        sourceCode:
                            "https://github.com/mbaraa/console_games/tree/master/TheTetrisProject",
                        imagePath: `/images/tetris.png`,
                    },
                ],
            },
        ]
    }
}
