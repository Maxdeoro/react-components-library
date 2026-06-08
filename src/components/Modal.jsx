function Modal({isModalOpen, setIsModalOpen}) {

        {isModalOpen && (
        <div className="overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={() => setIsModalOpen(false)}>
              &times;
            </button>
            <h2 className="modalHeader">Confirm Your Action</h2>
            <div className="modalBody">
              Are you sure you want to proceed? This action cannot be undone.
            </div>
            <div className="modalFooter">
              <button onClick={() => setIsModalOpen(false)} className="secondaryButton">
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
      )}
};

export default Modal;