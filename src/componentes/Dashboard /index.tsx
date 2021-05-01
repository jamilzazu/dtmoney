import { Symmary } from '../Symmary';
import { TransactionsTable } from '../TransactionsTable';

import { Container } from './styles';

export function Dashboard() {
  return (
    <Container>
      <Symmary />
      <TransactionsTable />
    </Container >
  )
}