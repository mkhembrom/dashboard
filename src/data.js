import { AiOutlineAppstore } from 'react-icons/ai';
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {IoWarningOutline} from 'react-icons/io5'
import {HiRefresh, HiOutlineUsers} from 'react-icons/hi';

import sad from './img/sad.png';
import angry from './img/angry.png';
import confused from './img/confused.png';
import emoji from './img/emoji.png';
import smile from './img/smile.png';

export const dashboardLinks = [
    { id: 1, link: '#', text: 'Dashboard' },
    { id: 2, link: '#', text: 'Projects' },
    { id: 3, link: '#', text: 'Team' },
    { id: 4, link: '#', text: 'Clients' },
    { id: 5, link: '#', text: 'Time' },
    { id: 6, link: '#', text: 'Reports' },
];

export const projectData = [
    {id: 1, number: 5, name: 'Total Projects', icon: <AiOutlineAppstore size={40} color="#00DCC6" />},
    {id: 2, number: 1, name: 'Completed', icon: <IoMdCheckmarkCircleOutline size={40} color="#00DCC6" />},
    {id: 3, number: 3, name: 'Ongoing', icon: <HiRefresh size={40} color="#00DCC6" />},
    {id: 4, number: 1, name: 'Delayed', icon: <IoWarningOutline size={40} color="red" />},
    {id: 5, number: 5, name: 'Employees', icon: <HiOutlineUsers size={40} color="#00DCC6" />},
];

export const projectListData = [
    {id: 1, strength: 100, name: 'Insurance App', owner: "Verti", totalBudget: 70000, profitability: -2500, soldHour: '100 hours over the Budget!', bg: '#E50000' },
    {id: 2, strength: 40, name: 'Neo', owner: "Bankia", totalBudget: 70000, profitability: 4000, soldHour: '1000 sold hours', bg: '#FFE9B1' },
    {id: 3, strength: 60, name: 'VR Website', owner: "Barca", totalBudget: 70000, profitability: 4000, soldHour: '2000 sold hours', bg: '#C5E7E3' },
    {id: 4, strength: 100, name: 'VR Website', owner: "Barca", totalBudget: 70000, profitability: 4000,  soldHour: '1100 sold hours', bg: '#C5E7E3'},
];

export const userData = [
    { id: 1, name: 'Andrea', designation: 'UX Junior', emo: sad, strength: 40 },
    { id: 2, name: 'Alvaro', designation: 'Back end developer', emo: emoji, strength: 100 },
    { id: 3, name: 'Juan', designation: 'UX Senior', emo: smile, strength: 80 },
    { id: 4, name: 'Jose', designation: 'Marketing', emo: angry, strength: 10 },
    { id: 5, name: 'Maria', designation: 'UX Junior', emo: confused, strength: 50 },
]
