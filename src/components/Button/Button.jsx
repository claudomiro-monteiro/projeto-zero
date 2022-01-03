import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Botao = styled.button`
      min-width: 10rem;
      width: 80%;
      padding: 0.8rem 2rem;
      margin-bottom: 1rem;
      border-radius: 5rem;
      border: none;
      background: var(--goldenrod);
      color: var(--color);
      /* font-size: 1.4rem; */
      /* font-weight: 600; */
      cursor: pointer;
      font: var(--roboto) ;

      &&:hover {
          color: var(--colorwhite);
          box-shadow: 0 0 0.3rem var(--color);
          transition: all 0.3s ease-in-out;
      }

      @media (max-width: 768px) {
          font-size: 1.4rem;
      }
`;

const Button = () => {

    // const [showModal, setShowModal] = useState(false)
    // const openModal = () => {
    //     setShowModal(prev => !prev)
    // }
    
    return (
        <>
            <Container>
                <Botao>Saiba + </Botao>
                {/* <Modal showModal={showModal} setShowModal={setShowModal} card={card} /> */}
            </Container>
        </>
    )
}

export default Button