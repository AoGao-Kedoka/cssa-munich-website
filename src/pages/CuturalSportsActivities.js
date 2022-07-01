import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/culturalCover.jpeg";
import leftCardImage from "../resources/images/culturalCover.jpeg";
import rightCardImage from "../resources/images/ski.png";

const CulturalSportsActivities = () => {
	return (
    <dir>
      <Pinned
          bigCardTitle="521 “May I love U” 线下活动总结！" bigCardDate="2022-06-20" bigCardImage={bigCardImage}
          leftCardTitle="之江实验室空中宣讲会圆满结束" leftCardDate="2022-06-22" leftCardImage={leftCardImage} leftCardText=""
          rightCardTitle=" 慕尼黑学联滑雪活动圆满结束" rightCardDate="2022-03-31" rightCardImage={rightCardImage} rightCardText=""
      />
      <Events type="CulturalSportsActivities"/>
    </dir>
  );
}

export default CulturalSportsActivities;