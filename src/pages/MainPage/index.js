import EventBanner from './EventBanner';
import ski from '../../resources/images/ski.png';
import basketball from '../../resources/images/basketball.png';

import { Container } from "react-bootstrap";
import CardElement from "./CardElement";

const MainPage = () => {
	return (
        <div>
            <div>
                <EventBanner 
                    image={ski} 
                    title="2022慕尼黑学联滑雪活动" 
                    link="/culture_and_sports"
                    position="top" 
                />
                <EventBanner 
                    image={basketball} 
                    title="慕尼黑学联“正青春”篮球友谊赛" 
                    link="/culture_and_sports"
                    position="bottom"	
                />
            </div>
            <Container>
                <CardElement title="职业宣讲"/>
            </Container>
        </div>
    )
}

export default MainPage;
