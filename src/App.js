import { Button, Container, Form, Grid, Header, Icon, Segment, Statistic } from 'semantic-ui-react';
import './App.css';
import ButtonSaveOrCancel from './components/ButtonSaveOrCancel';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLine from './components/EntryLine';
import MainHeader from './components/MainHeader';
import NewEntryForm from './components/NewEntryForm';

function App() {
  return (
    <Container>
      <MainHeader
        title="Budget"
      />

      <DisplayBalance title="Your Balance" value="2550.544" color="green" size="small" />


      <DisplayBalances />
      <MainHeader title="History" type="h3" />


      <EntryLine description="income" value="10.00" />
      <EntryLine description="expense" value="10.00" isExpense />
      <EntryLine description="income" value="10.00" />
      <EntryLine description="expense" value="10.00" isExpense />
      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );

}

export default App;
