import Card from "./components/Card";

function App() {
  return (
    <Card>
      <Card.Header>
        <span>Card Title</span>
      </Card.Header>
      <Card.Body>Card body</Card.Body>
      <Card.Footer>
        <p>this is the footer</p>
      </Card.Footer>
    </Card>
  );
}
// we do not have to use all card children, we can remove card.footer or others if we want
// we can also reorder the children, for example the Card.header can be bellow Card.body or Card.Footer

export default App;
