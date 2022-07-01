import Pinned from "../components/Pinned";
import Events from "../components/Events";
import leftCardImage from "../resources/images/academicCover.jpeg";
import rightCardImage from "../resources/images/academicCover.jpeg";
import bigCardImage from "../resources/images/academicCover.jpeg";


const AcademicForumPage = () => {
	return (
    <dir>
      <Pinned
          bigCardTitle="谈笑有鸿儒，往来无白丁。第一界学术下午茶圆满收官！" bigCardDate="2022-05-28" bigCardImage={bigCardImage}
          leftCardTitle="之江实验室空中宣讲会圆满结束" leftCardDate="2022-06-22" leftCardImage={leftCardImage} leftCardText=""
          rightCardTitle="亮道智能分享会&CEO圆桌论坛成功举办" rightCardDate="2022-06-22" rightCardImage={rightCardImage} rightCardText=""

      />
      <Events type="AcademicForum" />
    </dir>
  );
}

export default AcademicForumPage