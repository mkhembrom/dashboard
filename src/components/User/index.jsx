import './user.css'
import avatar from '../../img/avatar.jpg';


export const User = ({item}) => {
    return (
       
            <div className="team_box">
                <div className='team_info'>
                    <img className='avatar asm' src={avatar} alt="avatar" />
                    <div className='team_role'>
                        <p className="team_name">{item.name}</p>
                        <p className="team_designation">{item.designation}</p>
                    </div>
                </div>
                <div className='mood_slider'>
                    <img className='emo' style={{ left: `calc(${item.strength}% - 10%)` }} src={item.emo} alt="" />
                </div>
            </div>
       
    );
}