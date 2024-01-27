import './Input.css';

const Input = (props)=>{
    return <div className='input div'>
        <label htmlFor={props.input.id} className='Label'>{props.label}</label>
        <input {...props.input} className='Input'/>
    </div>
};

export default Input;