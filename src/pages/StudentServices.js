import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/serviceCover3.png";
import leftCardImage1 from "../resources/images/serviceCover1.png";
import leftCardImage2 from "../resources/images/serviceCover.jpg";
import rightCardImage1 from "../resources/images/serviceCover2.png";
import rightCardImage2 from "../resources/images/serviceCover4.jpeg";

function StudentServicesPage() {
    return (
        <dir>
            <Pinned
                bigCardTitle="2022届慕尼黑学联全体大会总结" bigCardDate="2022-05-19" bigCardImage={bigCardImage}
                leftCardTitle1="“遇见初夏”新生烧烤派对圆满举办" leftCardDate1="2022-05-17" leftCardImage1={leftCardImage1}
                rightCardTitle1="2021冬季学期领航计划圆满结束！" rightCardDate1="2022-01-26" rightCardImage1={rightCardImage1}
                leftCardTitle2="慕尼黑学联首届法律援助圆满举办" leftCardDate2="2022-05-16" leftCardImage2={leftCardImage2}
                rightCardTitle2="2022夏季学期学联纳新圆满收官" rightCardDate2="2022-05-12" rightCardImage2={rightCardImage2}/>
            <Events type="StudentService"/>
        </dir>
    );
}

export default StudentServicesPage;
