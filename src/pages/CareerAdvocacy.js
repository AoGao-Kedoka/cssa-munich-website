import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/careerCover.jpg"
import leftCardImage1 from "../resources/images/careerCover1.jpeg";
import rightCardImage1 from "../resources/images/careerCover2.png";
import leftCardImage2 from "../resources/images/careerCover3.jpeg";
import rightCardImage2 from "../resources/images/careerCover4.jpeg";

const CareerAdvocacyPage = () => {
    return (
        <dir>
            <Pinned
                bigCardTitle="亮道智能分享会&CEO圆桌论坛成功举办" bigCardDate="2022-06-22" bigCardImage={bigCardImage}
                leftCardTitle1="之江实验室空中宣讲会圆满结束" leftCardDate1="2022-06-22" leftCardImage1={leftCardImage1}
                rightCardTitle1="投行就业指导讲座圆满结束" rightCardDate1="2022-05-14" rightCardImage1={rightCardImage1}
                leftCardTitle2="2021年慕尼黑学联职业养成训练营第1期圆满完成！" leftCardDate2="2021-03-17" leftCardImage2={leftCardImage2}
                rightCardTitle2="华为慕尼黑站线下“圆桌派”圆满结束" rightCardDate2="2021-11-28" rightCardImage2={rightCardImage2}/>
            />
            <Events type="CareerAdvocacy"/>
        </dir>
    );
};

export default CareerAdvocacyPage;
