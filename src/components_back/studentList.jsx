import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

function BasicExample(props) {
    const deleteStudent = (qName,studentName) => {
        let stateCopy = {...props.QCollection}
        delete stateCopy[qName][studentName]
        props.setQCollection(stateCopy)
        props.setAnswered(studentName)
    }

    return (
        <ol> 
        {
            Object.keys(props.QCollection[props.item]).map((name,idx)=>(
            <li key={idx}>{name + "  " + props.QCollection[props.item][name].comment + "  " + 
            props.QCollection[props.item][name].location + " " + props.QCollection[props.item][name].time}
            <Button variant='secondary' className="border-2 border-green-600 py-0" onClick={()=>deleteStudent(props.item,name)}>Remove</Button>
            </li>
            ))
        }
        </ol>
        
    );
}   
export default BasicExample;