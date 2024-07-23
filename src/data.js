import { RiHomeSmile2Line } from "react-icons/ri";
import { TbUserSquareRounded, TbDeviceProjector } from "react-icons/tb";
import { BiMessageSquareDetail } from "react-icons/bi";
import react1 from "./images/react1.png"
import node1 from "./images/node.png"
import java1 from "./images/JavaScript-logo1.png"
import git1 from "./images/github1.png"
import tail1 from "./images/tailwind1.jpg"
import html1 from "./images/html1.png"

const link = [
    {
        id: 1,
        icon: <RiHomeSmile2Line />,
        path: "/",
        name: "Home",
    },
    {
        id: 2,
        icon: <TbUserSquareRounded />,
        path: "/about",
        name: "About",
    },
    {
        id: 3,
        icon: <TbDeviceProjector/>,
        path: "/project",
        name: "Project",
    },
    {
        id: 4,
        icon: <BiMessageSquareDetail />,
        path: "/contact",
        name: "Contact"
    }
]

export const expert = [
    {id: 1,image: react1,name: "React"},
    {id: 2,image: node1,name: "Node Js"},
    {id:3,image: java1,name: "Javascript"},
    {id:4,image: git1,name: "Github"},
    {id:5,image: tail1,name: "Tailwind"},
    {id: 6,image: html1,name: "HTML"}
]

export {link}