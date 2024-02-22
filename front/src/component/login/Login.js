
import {
  Form,
  Field,
  FormElement,
  FieldWrapper,
} from "@progress/kendo-react-form";
import { Error } from "@progress/kendo-react-labels";
import { Input } from "@progress/kendo-react-inputs";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);


function Login(){

  
useEffect(()=>{
  if(localStorage.getItem('login')){
    navigate('/dashboard');
  }

},[])
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

const handleSubmit =  (async (dataItem) => {
  try{
      const response =await fetch(process.env.REACT_APP_API_URL+'/login',{
        method : "POST",
        body : JSON.stringify(dataItem),
        headers:{
            "Content-Type":"application/json"
        }
      });
      const body = await response.json();
      if(response.status===200){
        localStorage.setItem('login',JSON.stringify(body));
        navigate('/dashboard');
      }else{
         alert(body.message);
      }

}catch(err){
  console.log(err);
}

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
                 Login
                </legend>
                <FieldWrapper>
                  <Field
                    name={"username"}
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
                  Login
                </button>
                <Link to="/register">Register Here</Link>
              </div>
            </FormElement>
          )}
        />
      );

}
export default Login;
