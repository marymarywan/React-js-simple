export const Input = ({ label, type, id, placeholder }) => {
    return (
        <div>
            <label htmlFor={id} className="col-form-label">{label}</label>
            <input className='form-control' id={id} placeholder={placeholder} type={type} />
        </div>
    )
}