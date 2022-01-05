import React, {useRef} from 'react'
import styled from 'styled-components';
// import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: var(--backgroundrgba);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 3;
`;

const Container = styled.div`
    background-color: var(--colorwhite);
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    position: relative;
    width: 90%;
    height: 80%;
    color: var(--color);
    border-radius: 0.5rem;
`;

const ModalWrapper = styled.div`
    background-color: var(--colorwhite);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;
    overflow: auto;
`;

const ModalImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        width: 35rem;
        height: 100%;
        width: 100%;
        /* border-radius: 0.5rem; */
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: var(--color);
    margin: 1rem 5rem;

    p {
        margin-bottom: 0.5rem;
        text-align: center;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

// const CloseModalButton = styled(MdClose)`
//     cursor: pointer;
//     margin: 1rem;
//     margin-left: auto;
//     width: 3.2rem;
//     height: 3.2rem;
//     padding: 0;
//     z-index: 10;
// `;

const Modal = ({ showModal, setShowModal, card }) => {
    const modalRef = useRef()

    // const closeModal = () => {
    //     setShowModal((prev) => !prev);
    //   };

    const closedModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
      };

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closedModal}>
                    <Container>
                        {card.modal.map((modal, id) => {
                            return (
                                <ModalWrapper showModal={showModal} key={id}>
                                    <ModalImg>
                                        <img src={modal.img} alt="" />
                                    </ModalImg>
                                    <ModalContent>
                                        <p>{modal.title}</p>
                                        {/* <p>{modal.descricao}</p> */}
                                        <p>{modal.composicao}</p>
                                        <p>{modal.tamanho}</p>
                                        {/* <p>{modal.descricao}</p> */}
                                    </ModalContent>
                                </ModalWrapper>
                            )
                        })}
                        {/* <CloseModalButton aria-label='Close Modal' onClick={closeModal} /> */}
                    </Container>
                </Background>
            ) : null}
        </>
    )
}

export default Modal
