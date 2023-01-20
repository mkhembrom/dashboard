import './projects.css'
import { projectData } from '../../data'
import { Project } from '../Project';

export const Projects = () => {
    return (
        <div className='projects'>
            {
                projectData.map((item) => {
                    return <Project 
                            key={item.id}
                            id={item.id} 
                            name={item.name}
                            number={item.number}
                            icon={item.icon}
                            />
                })
            }
        </div>
    );
}