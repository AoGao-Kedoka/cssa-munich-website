import { Nav } from "react-bootstrap";
import { BsChevronDoubleRight } from "react-icons/bs"
import { Link } from "react-router-dom";
import './EventBanner.css';

const EventBanner = (props) => {

    const { image, title, link, position } = props;

    // two kinds of styles of how to position the title
    // see prototype for design
    const bgClass = position === 'top'
        ? 'bg-top'
        : 'bg-bottom';

    const titleClass = position === 'top'
        ? 'event-title-top'
        : 'event-title-bottom';

    const bgStyle = {
        background: `linear-gradient(rgba(0, 0, 0, 0.25),
                                    rgba(0, 0, 0, 0.25)),
                                    url(${image})`,
        backgroundSize: 'cover',
    };

    const linkStyle = position === 'top' 
                        ? '' : 'link-bottom';

    return (
        <div className={`event-bg ${bgClass}`} style={bgStyle}>
            <div className={`${titleClass}`}>
                <h1 className={`event-title`}> {title} </h1>
                <Nav.Link className={`event-link ${linkStyle}`} as={Link} to={link}>
                    <span>探索更多</span>
                    <BsChevronDoubleRight size={14} />
                </Nav.Link>
            </div>
        </div>
    )
}

export default EventBanner;