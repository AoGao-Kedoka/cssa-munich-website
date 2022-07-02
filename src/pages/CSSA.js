import Pinned from "../components/Pinned";
import Events from "../components/Events";
import bigCardImage from "../resources/images/CSSACover.jpeg";
import leftCardImage1 from "../resources/images/CSSACover1.jpeg";
import rightCardImage1 from "../resources/images/CSSACover2.jpeg";
import leftCardImage2 from "../resources/images/CSSACover3.gif";
import rightCardImage2 from "../resources/images/CSSACover4.jpeg";

const CSSAPage = () => {
    return (
        <dir>
            <Pinned
                bigCardTitle="Das chinesische Neujahrsfest" bigCardDate="2022-02-03" bigCardImage={bigCardImage}
                leftCardTitle1="“Dein Weihnachtsmann ist da | Zusammenfassung der Veranstaltung: Es ist erfreulicher zu teilen als zu bekommen" leftCardDate1="2022-01-07" leftCardImage1={leftCardImage1}
                rightCardTitle1="CSSA X AES丨Kulturaustauschtreffen zwischen China und Europa erfolgreich abgeschlossen" rightCardDate1="2021-12-27" rightCardImage1={rightCardImage1}
                leftCardTitle2="„Light up, the way to love“: Zusammenfassung der Veranstaltung „die CP Woche“ in München + Berlin" leftCardDate2="2022-05-16" leftCardImage2={leftCardImage2}
                rightCardTitle2="2022夏季学期学联纳新圆满收官" rightCardDate2="2022-05-12" rightCardImage2={rightCardImage2}/>
            />
            <Events type="CSSA"/>
        </dir>
    );
}

export default CSSAPage;