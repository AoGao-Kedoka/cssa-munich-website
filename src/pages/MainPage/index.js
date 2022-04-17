import EventBanner from './EventBanner';
import ski from '../../resources/images/ski.png';
import basketball from '../../resources/images/basketball.png';

import logo_career from "../../resources/images/logo/职业宣讲logo.png";
import logo_aboutUs from "../../resources/images/logo/关于我们logo.png";
import logo_academic from "../../resources/images/logo/学术论坛logo.png";
import logo_cssa from "../../resources/images/logo/学联专栏logo.png";
import logo_cuturalSport from "../../resources/images/logo/文体活动logo.png";
import logo_studentService from "../../resources/images/logo/学生服务logo.png";

import { Container, Row, Col } from "react-bootstrap";
import CardElement from "./CardElement";

const MainPage = () => {
	const logo = [logo_career, logo_academic, logo_cuturalSport, logo_studentService, logo_cssa, logo_aboutUs];
	const title = ["职业宣讲", "学术论坛", "文体活动", "学生服务", "学联专栏", "关于我们"];
	const content = "职业宣讲擦客家话反倒是丽江阿大葱is案例库存吉林省考定价策略考试的会计师的好成绩实力坑爹从克里斯案件受刺激克里斯丁";
	const link = ["career", "academic", "culture_and_sports", "student", "cssa", "about_us"]
	
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
			<div style={{"padding-top": 44}}>
				<Container>
					<Row xs={1} md={3} className="g-4">
						{Array.from({ length: 6 }).map((_, idx) => (
							<Col>
								<CardElement link={link[idx]} logo={logo[idx]} title={title[idx]} text={content} />
							</Col>
						))}
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default MainPage;
