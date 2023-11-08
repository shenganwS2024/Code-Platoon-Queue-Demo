import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample(props) {
    
    const submitCheck = () => {
        
        if(!props.QHostNames.includes(props.QHost)){
          alert("Not a recognizable host name!");
        }
        else{
          if(!(props.QHost in props.QCollection)){
            let stateCopy= {...props.QCollection,[props.QHost]:{}};
            props.setQCollection(stateCopy)
          }
          else{
            alert("This host's queue has already been opened!");
          }
        }
        props.setQHost("")
      }
    
    const closeCheck = () => {
        if(!props.QHostNames.includes(props.QHost)){
            alert("Not a recognizable host name!");
          }
          else{
            if((props.QHost in props.QCollection)){
                let stateCopy = {...props.QCollection};
                delete stateCopy[props.QHost]
                props.setQCollection(stateCopy)
                props.setQCollection(stateCopy)
            }
            else{
              alert("This host is not hosting a queue at this moment!");
            }
          }
          props.setQHost("")
    } 

  
    return (
        <ButtonGroup aria-label="Basic example">
        <Button variant="primary" onClick={()=>submitCheck()}>Open</Button>
        <Button variant="secondary" onClick={()=>closeCheck()}>Close</Button>
        </ButtonGroup>
    );
}

export default BasicExample;