import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/culturalCover.jpeg";
import leftCardImage1 from "../resources/images/culturalCover1.jpeg";
import rightCardImage1 from "../resources/images/culturalCover3.jpeg";
import leftCardImage2 from "../resources/images/culturalCover2.jpg";
import rightCardImage2 from "../resources/images/ski.png";

const CulturalSportsActivities = () => {
    return (
        <dir>
            <Pinned
                bigCardTitle="521 “May I love U” 线下活动总结" bigCardDate="2022-06-20" bigCardImage={bigCardImage}
                leftCardTitle1="““觅乐慕城” K歌大赛圆满成功" leftCardDate1="2022-06-8" leftCardImage1={leftCardImage1}
                rightCardTitle1="祥虎贺岁，恭迎新春——2022年“开元•慕城之春”慕尼黑学联春节联欢晚会纪实" rightCardDate1="2022-02-03"
                rightCardImage1={rightCardImage1}
                leftCardTitle2="慕尼黑学联“正青春”篮球友谊赛圆满结束" leftCardDate2="2022-04-08" leftCardImage2={leftCardImage2}
                rightCardTitle2=" 慕尼黑学联滑雪活动圆满结束" rightCardDate2="2022-03-31" rightCardImage2={rightCardImage2}/>
            <Events type="CulturalSportsActivities"/>
        </dir>
    );
}

export default CulturalSportsActivities;