import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/academicCover.jpeg";
import leftCardImage1 from "../resources/images/academicCover1.png";
import rightCardImage1 from "../resources/images/academicCover2.jpeg";
import leftCardImage2 from "../resources/images/academicCover3.png";
import rightCardImage2 from "../resources/images/academicCover4.png";


const AcademicForumPage = () => {
    return (
        <dir>
            <Pinned
                bigCardTitle="谈笑有鸿儒，往来无白丁。第一界学术下午茶圆满收官！" bigCardDate="2022-05-28" bigCardImage={bigCardImage}
                leftCardTitle1="“AI视觉浅谈-第六届学术论坛圆满收官！" leftCardDate1="2021-12-31" leftCardImage1={leftCardImage1}
                rightCardTitle1="欲诚其意者，先致其知，致知再格物——第五届学术论坛圆满收官！！" rightCardDate1="2022-12-08"
                rightCardImage1={rightCardImage1}
                leftCardTitle2="想了解关于Title的故事吗？一起来看看博士们的日常！第四届慕尼黑学术论坛小结" leftCardDate2="2021-11-10"
                leftCardImage2={leftCardImage2}
                rightCardTitle2="2021德国留学论坛成功举办" rightCardDate2="2021-09-23" rightCardImage2={rightCardImage2}/>
            <Events type="AcademicForum"/>
        </dir>
    );
}

export default AcademicForumPage