import { Form, FormGroup, Input, Label } from "reactstrap";
import "./App.css";

function App() {

  return 
  (
    <>
      <Form>
        <FormGroup>
          <Label for="ad">ad</Label>
          <Input
            id="ad"
            name="ad"
            placeholder="Adınızı girin"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="soyad">soyad</Label>
          <Input
            id="soyad"
            name="soyad"
            placeholder="Soyadınızı girin"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Emailinizi eksiksiz girin"
            type="email"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Şifre giriniz"
            type="password"
          />
        </FormGroup>
        </>
        )
}

export default App;
