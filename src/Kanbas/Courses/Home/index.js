import Modules from '../Modules';
import CourseTools from '../CourseTools';

function Home() {
    return (
        <div className='col d-flex'>
            <Modules />
            <CourseTools />
        </div>
    );
}

export default Home;