import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/CSSACover.jpeg";
import leftCardImage1 from "../resources/images/CSSACover1.jpeg";
import rightCardImage1 from "../resources/images/CSSACover2.jpg";
import leftCardImage2 from "../resources/images/CSSACover3.jpeg";
import rightCardImage2 from "../resources/images/culturalCover2.jpg";

const CSSAPage = () => {
    return (
        <dir>
            <Pinned
                bigCardTitle="如何在慕尼黑延长学生签证" bigCardDate="2022-04-28" bigCardImage={bigCardImage}
                leftCardTitle1="“9欧月票”已开放购买！你想知道的全在这里！" leftCardDate1="2022-05-24" leftCardImage1={leftCardImage1}
                rightCardTitle1="慕尼黑HPV疫苗超全接种攻略~" rightCardDate1="2022-06-12" rightCardImage1={rightCardImage1}
                leftCardTitle2="新鲜出炉的德国驾照攻略！" leftCardDate2="2022-05-27" leftCardImage2={leftCardImage2}
                rightCardTitle2="'Cool Young' Basketball-Freundschaftsspiel der CSSA München erfolgreich abgeschlossen"
                rightCardDate2="2022-04-08" rightCardImage2={rightCardImage2}/>
            <Events type="CSSA"/>
        </dir>
    );
}

export default CSSAPage;