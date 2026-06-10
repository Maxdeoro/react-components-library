import Button from './Button';

function Modal({isModalOpen, setIsModalOpen,closeModal,title,content,
                showCancelButton=true,goTo}) {
      return (
        <div className="overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Button variant='closeButton'
                    onClick={closeModal}
            >
              &times;
            </Button>
            <h2 className="modalHeader">{title}</h2>
            <div className="modalBody">
              {content}
            </div>
            <div className="modalFooter">
              {showCancelButton && <Button onClick={closeModal} 
                                           variant="secondaryButton"
                                    >
                Cancel
              </Button>}
              <Button
                variant="primaryButton"
                onClick={() => {
                  alert("Ok");
                  goTo();
                  closeModal();
                }}
              >
                Yes, Continue
              </Button>
            </div>
          </div>
        </div>
      
    )
};

export default Modal;