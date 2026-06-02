function Button({text='bla-bla',icon,size='medium',variant='primary',
    fullWidth=false,isDisabled=false,onClick}){
    return (
        <button className={`button ${variant} ${size} 
                            ${isDisabled === true ? 'disabled' : ''}
                            ${fullWidth === true ? 'full-width' : ''}
                          `}
                onClick={onClick}
        >
            {icon && <span>{icon}</span>}
            {text}
        </button>
    )
};

export default Button;