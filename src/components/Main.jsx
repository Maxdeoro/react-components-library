import Button from './Button';
import Modal from './Modal';

function Main({isModalOpen,setIsModalOpen,onClick,openModal,closeModal,goTo}) {

    return (
    <>
      <h1 className="title">Universal Modal Component</h1>
      <Button isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              onClick={openModal}
      >
        Open Modal
      </Button>

      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} goTo={goTo} 
               closeModal={closeModal} title='Confirm your action'
               content='Are you sure you want to proceed? This action cannot be undone.'
        />
      )}
    </>
    )
};

export default Main;