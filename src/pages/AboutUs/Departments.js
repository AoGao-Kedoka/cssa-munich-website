import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DepartmentText from '../../assets/jsons/departments.json';

import './index.css';

const Departments = () => {
    let chunkedIntros = [];
    for (let i = 0; i < DepartmentText.length; i += 2) {
        chunkedIntros.push(DepartmentText.slice(i, i+2));
    }
    return (
        <div className="topic-panel white" style={{ paddingLeft: 0, paddingRight: 0 }}>
            <h1 className='topic-title' style={{background: '#ffffff'}}>
                21/22 届部门介绍
            </h1>
            <Container fluid>
                { chunkedIntros.map((elem) => (
                    <Row>
                        <DepartmentIntro direction="ltr" {...elem[0]} />
                        { elem[1] && <DepartmentIntro direction="rtl" {...elem[1]} /> }
                    </Row>
                )) }
            </Container>
        </div>
    )
}

const DepartmentIntro = (props) => {
    const blockStyle = {
        direction: props.direction,
        ...(props.direction === 'rtl' && { marginLeft: '10px' }),
        ...(props.direction === 'ltr' && { marginRight: '10px' }),
    };
    return (
        <Col className="department-block" style={ blockStyle }>
            <div className="vertical-title-block">
                {props.title}
            </div>
            <div className="text-block">
                <p>{props.text}</p>
                {props.footnotes.map((elem) => (
                    <p className="footnote-block">{elem}</p>
                ))}
            </div>
        </Col> 
    )
}

export default Departments;