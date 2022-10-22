const Validation = (values) =>{
    let errors={}
    if(!values.password){
        errors.password="Password is required."
    }else if(values.password.length<5){
        errors.password="password must be more than five characters"
    }
    if(!values.email){
        errors.email="Email is required."
    }else if(!/\w+@\w+\.\w/.test(values.email)){
        errors.email="Email is invalid."
    }
    return errors;
}
export default Validation