import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function BasicExample(props) {
    const closeQ = () => {
        let copyInfo = {...props.QInfo}
        delete copyInfo[props.hostInput]
        props.setQInfo(copyInfo)
        props.setHostInput("")
    }

  return (
    <ButtonGroup aria-label="Basic example">
      <Button variant="primary" 
        onClick={()=>[props.setQInfo({...props.QInfo
            , [props.hostInput]:{}}),props.setHostInput("")]}>Open</Button>
      <Button variant="secondary" onClick={()=>closeQ()}>Close</Button>
    </ButtonGroup>
  );
}

export default BasicExample;