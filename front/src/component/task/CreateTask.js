import {
    Form,
    Field,
    FormElement,
    FieldWrapper,
  } from "@progress/kendo-react-form";
  import { Error } from "@progress/kendo-react-labels";
  import { Input } from "@progress/kendo-react-inputs";
  import { useNavigate } from "react-router-dom";
  import { DatePicker } from "@progress/kendo-react-dateinputs";
  import { useState } from "react";

  

function CreateTask(){

    const [assgin, setAValue] = useState();
    const [complete, setCValue] = useState();
  const assignDate = (event) => {
    setAValue(event.value);
  };

  const completeDate = (event) => {
    setCValue(event.value);
  };

    const navigate=useNavigate();

  const nameValidator = (value) =>
  value ? "" : "Please enter a valid value";
const nameInput = (fieldRenderProps) => {
  const { validationMessage, visited, ...others } = fieldRenderProps;
  return (
    <div className="k-form-field-wrap">
      <Input {...others} labelClassName={"k-form-label"} />
      {visited && validationMessage && <Error>{validationMessage}</Error>}
    </div>
  );
};
  
  const handleSubmit = ((dataItem) =>{
    const login= JSON.parse(localStorage.getItem('login'));
    dataItem['assign_date']=assgin;
    dataItem['complete_date']=complete;
    dataItem['status']='todo';
    dataItem['user_id']=login._id;
    dataItem['name']=login.name;

    console.log(JSON.stringify(dataItem));
    
    fetch(process.env.REACT_APP_API_URL+'/createTask',{
        method : "POST",
        body : JSON.stringify(dataItem),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response)=> response.json() )
    .then((data)=>{
        navigate('/dashboard');
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    })
  
   
  });
 

  
      return (
          <Form
            onSubmit={handleSubmit}
            render={(formRenderProps) => (
              <FormElement
                style={{
                  maxWidth: 1200,
                  paddingLeft : 500
                }}
              >
                <fieldset className={"k-form-fieldset"}>
                  <legend className={"k-form-legend"}>
                   Create task
                  </legend>
                  <FieldWrapper>
                    <Field
                      name={"task_name"}
                      type={"text"}
                      component={nameInput}
                      label={"name"}
                      validator={nameValidator}
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <Field
                      name={"task_desc"}
                      type={"text"}
                      component={nameInput}
                      label={"Task Description"}
                      validator={nameValidator}
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                  <fieldset>
                  <DatePicker placeholder="Choose a assign date..."  onChange={assignDate}  value={assgin}/>
                </fieldset>
                </FieldWrapper>



                <FieldWrapper>
                  <fieldset>
                  <DatePicker placeholder="Choose a complete date..."  onChange={completeDate}  value={complete}/>
                </fieldset>
                </FieldWrapper>


    
                </fieldset>
                <div className="k-form-buttons">
                  <button
                    type={"submit"}
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                    disabled={!formRenderProps.allowSubmit}
                  >
                    Submit
                  </button>
            
                </div>
              </FormElement>
            )}
          />
        );

}
export default CreateTask;
