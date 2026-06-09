function Button({isModalOpen,setIsModalOpen,children,variant='button',onClick}) {
    return (
      <button className={`${variant}`} onClick={onClick}>
        {children}
      </button>
    );
};

export default Button;