import {
    Form,
    Field,
    FormElement,
    FieldWrapper,
  } from "@progress/kendo-react-form";
  import { Error } from "@progress/kendo-react-labels";
  import { Input } from "@progress/kendo-react-inputs";
  import { useNavigate,Link } from "react-router-dom";
  const emailRegex = new RegExp(/\S+@\S+\.\S+/);
  

function Register(){

    const navigate=useNavigate();

    const emailValidator = (value) =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";
  const EmailInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
      <div className="k-form-field-wrap">
        <Input {...others} labelClassName={"k-form-label"} />
        {visited && validationMessage && <Error>{validationMessage}</Error>}
      </div>
    );
  };
  
  const passwordValidator = (value) =>
    value ? "" : "Please enter a valid password";
  const PasswordInput = (fieldRenderProps) => {
    const { validationMessage, visited, ...others } = fieldRenderProps;
    return (
      <div className="k-form-field-wrap">
        <Input {...others} labelClassName={"k-form-label"} />
        {visited && validationMessage && <Error>{validationMessage}</Error>}
      </div>
    );
  };


  const nameValidator = (value) =>
  value ? "" : "Please enter a valid name";
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
    dataItem['status']='1';
    fetch(process.env.REACT_APP_API_URL+'/register',{
        method : "POST",
        body : JSON.stringify(dataItem),
        headers:{
            "Content-Type":"application/json"
        }
    })
    .then((response)=> response.json() )
    .then((data)=>{
        navigate('/login');
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
                   Register
                  </legend>
                  <FieldWrapper>
                    <Field
                      name={"name"}
                      type={"text"}
                      component={nameInput}
                      label={"name"}
                      validator={nameValidator}
                    />
                  </FieldWrapper>
  
                  <FieldWrapper>
                    <Field
                      name={"email"}
                      type={"email"}
                      component={EmailInput}
                      label={"username"}
                      validator={emailValidator}
                    />
                  </FieldWrapper>
  
                  <FieldWrapper>
                    <div className="k-form-field-wrap">
                      <Field
                        name={"password"}
                        type={"password"}
                        component={PasswordInput}
                        labelClassName={"k-form-label"}
                        label={"password"}
                        validator={passwordValidator}
                      />
                    </div>
                  </FieldWrapper>
                </fieldset>
                <div className="k-form-buttons">
                  <button
                    type={"submit"}
                    className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                    disabled={!formRenderProps.allowSubmit}
                  >
                    Register
                  </button>
                  <Link to="/login">Login</Link>
                </div>
              </FormElement>
            )}
          />
        );

}
export default Register;
