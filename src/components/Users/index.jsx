import './users.css'
import {userData} from '../../data';
import { User } from '../User';

export const Users = () => {
    return (
        <div className='team'>
            <h1 className='team_mood'>Team Mood</h1>
            {
                userData.map((item) => {
                    return <User key={item.id} item={item} />
                })
            }
        </div>
    );
}