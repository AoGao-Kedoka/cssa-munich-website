import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/serviceCover.jpg";
import leftCardImage from "../resources/images/serviceCover.jpg";
import rightCardImage from "../resources/images/serviceCover.jpg";

function StudentServicesPage() {
  return (
    <dir>
      <Pinned
          bigCardTitle="慕尼黑学联首届法律援助圆满举办" bigCardDate="2022-05-16" bigCardImage={bigCardImage}
          leftCardTitle="之江实验室空中宣讲会圆满结束" leftCardDate="2022-06-22" leftCardImage={leftCardImage} leftCardText=""
          rightCardTitle="亮道智能分享会&CEO圆桌论坛成功举办" rightCardDate="2022-06-22" rightCardImage={rightCardImage} rightCardText=""/>
      <Events type="StudentService"/>
    </dir>
  );
}

export default StudentServicesPage;
