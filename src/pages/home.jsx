import './home.css';
import { Header } from '../components/Header'
import { Projects } from '../components/Projects';
import { Graphs } from '../components/Graphs';
import { ProjectData } from '../components/ProjectData';
import { Footer } from '../components/Footer';
import { Users } from '../components/Users';

export const Home = () => {
    return (
       <div className="home">
            <Header />
            <div className='grid'>
                <div className='projects'>
                    <Projects />
                </div>
                <div className='graphs'>
                    <Graphs />
                </div>
                <div className='users'>
                    <Users />
                </div>
            </div>
            <ProjectData />
            <Footer />
        </div>
    );
}