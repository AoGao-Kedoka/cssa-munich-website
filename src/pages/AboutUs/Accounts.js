import Chrome from '../../assets/images/chrome.png';
import Gmail from '../../assets/images/gmail.png';
import Wechat from '../../assets/images/wechat.png';
import Weibo from '../../assets/images/weibo.png';
import Red from '../../assets/images/red.png';
import QQ from '../../assets/images/qq.png';
import Bilibili from '../../assets/images/bilibili.png';
import Facebook from '../../assets/images/facebook.png';
import Youtube from '../../assets/images/youtube.png';

import './index.css';
import { Container, Col, Row } from 'react-bootstrap';

const Accounts = () => {
    return (
        <div className="topic-panel grey" style={{ display: 'grid', padding: '50px 120px' }}>
            <Container>
                <Row>
                    <Col md={true}>
                        <Item icon={Chrome} title="Website" href="https://www.cssa-munich.de" />
                    </Col>
                    <Col md={3}>
                        <Item icon={Wechat} title="微信号：cssamunich1" href="#" />
                    </Col>
                    <Col md={true}>
                        <Item icon={Weibo} title="慕尼黑学联CSSA" href="https://weibo.com/cssamunich" />
                    </Col>
                    <Col md={true}>
                        <Item icon={QQ} title="QQ" href="#" />                 
                    </Col>
                    <Col  md={3}>
                        <Item icon={Facebook} title="慕尼黑华人社区 Chinese in Munich" href="https://www.facebook.com/groups/cssamunich/about/" />
                    </Col> 
                </Row>
                <Row style={{marginTop: "10px"}}>
                    <Col md={true}>
                        <Item icon={Gmail} title="Email" href="mailto:chinese.muenchen@gmail.com" />
                    </Col>
                    <Col md={3}>
                        <Item icon={Wechat} title="公众号：慕尼黑学联CSSA" href="#" />
                    </Col>
                    <Col md={true}>
                        <Item icon={Red} title="CSSA慕尼黑学生会" href="https://www.xiaohongshu.com/user/profile/5feca55e000000000101eba4?xhsshare=CopyLink&appuid=5f8ee797000000000101d779&apptime=1653750877" />
                    </Col>
                    <Col md={true}>
                        <Item icon={Bilibili} title="慕村情报局" href="https://space.bilibili.com/1048497923?spm_id_from=333.337.0.0" />
                    </Col>
                    <Col md={3}>
                        <Item icon={Youtube} title="Munich Chinese Students and Scholars Association" href="https://www.youtube.com/channel/UCd02eUGfOOLXeLtPhBl08gA" />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

function Item(props) {
    return (
        <span style={{ display: "flex" }}>
            <img src={props.icon} style={{ width: "20px", height: "20px", marginRight: "5px" }} />
            <a href={props.href} >{props.title}</a>
        </span>
    )
}

export default Accounts;