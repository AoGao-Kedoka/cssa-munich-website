import EventBanner from './EventBanner';
import ski from '../../resources/images/ski.png';
import basketball from '../../resources/images/basketball.png';

import { Container } from "react-bootstrap";
import CardElement from "./CardElement";

const MainPage = () => {
    const content ="职业宣讲擦客家话反倒是丽江阿大葱is案例库存吉林省考定价策略考试的会计师的好成绩实力坑爹从克里斯案件受刺激克里斯丁" 
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
                <CardElement logo="./images/职业宣讲logo.png" title="职业宣讲" text= { content }/>
            </Container>
        </div>
    )
}

export default MainPage;
