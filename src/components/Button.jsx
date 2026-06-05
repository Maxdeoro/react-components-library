import propTypes from 'prop-types';

function Button({text,icon,size='medium',variant='primary',
    fullWidth=false,isDisabled=false,onClick,children}){
    return (
        <button className={`button ${variant} ${size} 
                            ${isDisabled === true ? 'disabled' : ''}
                            ${fullWidth === true ? 'full-width' : ''}
                          `}
                onClick={onClick}
        >
            {icon && <span>{icon}</span>}
            {text}
            {children}
        </button>
    )
};

Button.propTypes = {
    text: propTypes.string,
    // text: propTypes.string.isRequired,
    icon: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large']),
    variant: propTypes.string,
    fullWidth: propTypes.bool,
    isDisabled: propTypes.bool,
    onClick: propTypes. func,
};

export default Button;