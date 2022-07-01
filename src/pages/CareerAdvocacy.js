import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/careerCover.jpg"
import leftCardImage from "../resources/images/careerCover2.jpeg"
import rightCardImage from "../resources/images/careerCover2.jpeg"
const CareerAdvocacyPage = () => {
  return (
    <dir>
      <Pinned
          bigCardTitle="亮道智能分享会&CEO圆桌论坛成功举办" bigCardDate="2022-06-22" bigCardImage={bigCardImage}
          leftCardTitle="之江实验室空中宣讲会圆满结束" leftCardDate="2022-06-22" leftCardImage={leftCardImage} leftCardText=""
          rightCardTitle="亮道智能分享会&CEO圆桌论坛成功举办" rightCardDate="2022-06-22" rightCardImage={rightCardImage} rightCardText=""
      />
      <Events type="CareerAdvocacy" />
    </dir>
  );
};

export default CareerAdvocacyPage;
