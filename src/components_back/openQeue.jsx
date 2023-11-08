function OpenQueue(props) {

    return (
        <>
            <label>Host name: &nbsp; </label>
            <input className="border-2 border-green-600" value={props.inputName} list="QHost_names" onChange={(e)=>props.parentCallback(e.target.value)} />
            <datalist id="QHost_names">
                {
                    props.HostNames.map((name,idx)=>(
                        <option value={name} key={idx}></option>
                    ))
                }
            </datalist>
            
        </>
        
    );
  }
  
  export default OpenQueue;