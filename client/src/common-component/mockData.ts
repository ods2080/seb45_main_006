import { CATEGORY_NAME } from "@type/info/common";

export type IStack = {
    id: number;
    name: string;
};

export type IStacks = Array<IStack>;

export const stacks = [
    { id: 0, name: "JAVA" },
    { id: 1, name: "Android" },
    { id: 3, name: "iOS" },
    { id: 4, name: "Python" },
    { id: 5, name: "JSP" },
    { id: 6, name: "PHP" },
    { id: 7, name: "ASP" },
    { id: 8, name: "C" },
    { id: 9, name: "C#" },
    { id: 10, name: "C++" },
    { id: 11, name: "MFC" },
    { id: 12, name: ".Net" },
    { id: 13, name: "Node.js" },
    { id: 14, name: "Vue.js" },
    { id: 15, name: "React.js" },
    { id: 16, name: "JQuery" },
    { id: 17, name: "Javascript" },
    { id: 18, name: "Oracle" },
    { id: 19, name: "MMSQL" },
    { id: 20, name: "MySQL" },
    { id: 21, name: "MariaDB" },
    { id: 22, name: "MongoDB" },
    { id: 23, name: "PostgreSQL" },
    { id: 24, name: "HTML5" },
    { id: 25, name: "CSS" },
    { id: 26, name: "BootStrap" },
    { id: 27, name: "Typescript" },
    { id: 28, name: "Photoshop" },
    { id: 29, name: "Illustrator" },
    { id: 30, name: "Adobe XD" },
    { id: 31, name: "InDesign" },
    { id: 32, name: "Zeplin" },
    { id: 33, name: "Sketch" },
    { id: 34, name: "Spring Boot" },
];

export const defaultStack = [
    "JAVA",
    "Android",
    "iOS",
    "Python",
    "JSP",
    "PHP",
    "ASP",
    "C",
    "C#",
    "C++",
    "MFC",
    ".Net",
    "Node.js",
    "Vue.js",
    "React.js",
    "JQuery",
    "Javascript",
    "Oracle",
    "MMSQL",
    "MySQL",
    "MariaDB",
    "MongoDB",
    "PostgreSQL",
    "HTML5",
    "CSS",
    "BootStrap",
    "Typescript",
    "Photoshop",
    "Illustrator",
    "Adobe XD",
    "InDesign",
    "Zeplin",
    "Sketch",
    "Spring Boot",
];

export const defaultPosition = ["Front", "Back", "UI/UX", "디자이너"];

export const user = {
    profilePicture:
        "https://dszw1qtcnsa5e.cloudfront.net/community/20220519/453159ca-e328-429c-9b3f-460fc592d963/%EA%B7%80%EC%97%AC%EC%9A%B4%EB%AA%B0%EB%9D%BC%EB%AA%A8%EC%BD%94%EC%BD%94.png",
    nickname: "모코코",
    githubId: "Mococo",
    introduction: "update",
    listEnroll: true,
    position: ["FE", "BE"],
    stack: ["Javascript", "Typescript", "React.js", "Node.js", "Next.js", "BootStrap", "tailwindcss"],
    projectList: [
        {
            boardId: 1,
            title: "title",
            startDate: "1/1",
            deadline: "1/5",
            createdAt: "2023-09-04T13:21:41.883149",
            modifiedAt: null,
            recruitNum: 5,
            recruitStatus: false,
            viewCount: 0,
        },
        {
            boardId: 2,
            title: "title",
            startDate: "1/1",
            deadline: "1/5",
            createdAt: "2023-09-04T13:21:41.883149",
            modifiedAt: null,
            recruitNum: 5,
            recruitStatus: false,
            viewCount: 0,
        },
    ],
    studyList: [
        {
            studyId: 1,
            title: "title",
            startDate: "1/1",
            deadline: "1/5",
            createdAt: "2023-09-04T13:21:41.883149",
            modifiedAt: null,
            recruitNum: 5,
            recruitStatus: false,
            viewCount: 0,
        },
    ],
    infoBoardList: [],
    blockMemberList: ["test2"],
    modifiedAt: "2023-09-04T11:20:03.373275",
    oauthUser: false,
};

export const infoCategory: Array<CATEGORY_NAME> = ["기술 정보", "구직자 정보", "뉴스 레터", "부트캠프"];
