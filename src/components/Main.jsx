import Button from './Button';
import Modal from './Modal';

function Main({isModalOpen,setIsModalOpen,onClick,openModal,closeModal}) {

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
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} 
               closeModal={closeModal}
        />
      )}
    </>
    )
};

export default Main;