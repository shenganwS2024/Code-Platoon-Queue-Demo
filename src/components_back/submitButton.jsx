import Button from 'react-bootstrap/Button';

function BasicExample(props) {
    const insertStudent = (qName) => {

        let stateCopy = {...props.QCollection};
        if (stateCopy[qName]) {
          stateCopy[qName][props.studentName] = {"comment":[props.studentComment],"location":[props.studentLocation],"time":[props.studentTime]}
        }
        else{
          stateCopy[qName]= {[props.studentName]:{"comment":[props.studentComment],"location":[props.studentLocation],"time":[props.studentTime]}};
        }
        
        props.setQCollection(stateCopy)
    
        props.setName("")
        props.setComment("")
        props.setLocation("")
        props.setTime("")
      }


    return (
        <Button id={"submit"+props.idx} variant="primary" style={{display:'none',margin:'auto'}}
         onClick={()=>[props.changeVisibility(props.idx),insertStudent(props.item,props.idx)]}>Submit</Button>

    );
}
export default BasicExample;