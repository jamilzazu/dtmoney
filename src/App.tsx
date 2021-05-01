import Modal from 'react-modal';
import { useState } from 'react';

import { Dashboard } from "./componentes/Dashboard ";
import { Header } from "./componentes/Header";
import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransctionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransctionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransitionModal={handleOpenNewTransctionModal} />
      <Dashboard />
      <Modal isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransctionModal}>
        <h2>Cadastrar Transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}