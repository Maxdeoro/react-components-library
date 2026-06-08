function Button({isModalOpen,setIsModalOpen}) {
    return (
      <button className="button" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </button>
    );
};

export default Button;