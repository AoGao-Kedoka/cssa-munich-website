import Intro from './Intro';
import Departments from './Departments';
import Accounts from './Accounts';

const AboutUsPage = () => {
	return (
        <div style={{textAlign: 'center'}}>
            <Intro />
            <Departments />
            <Accounts />
        </div>
    )
}

export default AboutUsPage;