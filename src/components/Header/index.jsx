import './header.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { dashboardLinks } from '../../data';
import { Badge } from '@mui/material';
import avatar from '../../img/avatar.jpg';

const Logo = () => {
    return <p className="logo"><span>H</span>OUR</p>;
}

const Nav = () => {
    return (
        <nav className="nav">
            {
                dashboardLinks.map((item) => {
                    return <li className='list' key={item.id}><a className='links' href={item.link}>{item.text}</a></li>
                })
            }
        </nav>
    );
}

const User = ({name}) => {
    return (
        <div className="user">
            <Badge color='error' variant="dot">
                <NotificationsNoneIcon htmlColor='#fff' />
            </Badge>
            <img className='avatar' src={avatar} alt="avatar"/>
            <div className='info'>
                <p className='names'>{name}</p>
                <ExpandMoreIcon htmlColor='#fff' />
            </div>
        </div>
    );
}

export const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Logo />
                <Nav />
                <User name="Mario" />
            </div>
        </div>
    );
}