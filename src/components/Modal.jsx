import Button from './Button';

function Modal({isModalOpen, setIsModalOpen,closeModal}) {
      return (
        <div className="overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <Button variant='closeButton'
                    onClick={closeModal}
            >
              &times;
            </Button>
            <h2 className="modalHeader">Confirm Your Action</h2>
            <div className="modalBody">
              Are you sure you want to proceed? This action cannot be undone.
            </div>
            <div className="modalFooter">
              <button onClick={closeModal} className="secondaryButton">
                Cancel
              </button>
              <button
                className="primaryButton"
                onClick={() => {
                  alert("Ok");
                  setIsModalOpen(false);
                }}
              >
                Yes, Continue
              </button>
            </div>
          </div>
        </div>
      
    )
};

export default Modal;