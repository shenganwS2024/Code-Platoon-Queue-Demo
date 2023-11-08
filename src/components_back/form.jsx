function Form(props) {

    return (
        <>
            <form id={"form"+props.idx} className='studentForms' style={{display:'none'}} >

            <input id="name" type='text' value={props.studentName} list="student_names" onChange={(e)=>[props.setName(e.target.value)]}></input>
            <datalist id="student_names">
            {
                props.studentNames.map((name,idx)=>(
                    <option value={name} key={idx}></option>
                ))
            }
            </datalist>

            <input id="comment" type='text' value={props.studentComment} onChange={(e)=>props.setComment(e.target.value)}></input>
            <input id="location" type='text' value={props.studentLocation} onChange={(e)=>props.setLocation(e.target.value)}></input>

            </form>
            

        </>
        
    );
  }
  
  export default Form;