import './project.css'

export const Project = ({ id, icon, name, number }) => {
    return (
        <div>
            {
                id === 4 ?
                    <div className="project red">
                        <div className="icon">{icon}</div>
                        <p className='number red'>{number}</p>
                        <p className='name red'>{name}</p>
                    </div> :
                    <div className="project">
                        <div className="icon">{icon}</div>
                        <p className='number'>{number}</p>
                        <p className='name'>{name}</p>
                    </div>
            }
        </div>
    );
}