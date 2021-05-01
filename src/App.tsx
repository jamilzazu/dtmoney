import Modal from 'react-modal';
import { useState } from 'react';

import { Dashboard } from "./componentes/Dashboard ";
import { Header } from "./componentes/Header";
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './componentes/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransctionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransctionModal} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}