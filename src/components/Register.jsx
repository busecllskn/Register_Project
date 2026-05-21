import { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

const initialValues = {
    ad: "",
    soyad: "",
    email: "",
    password: "",
};

const errorMessages = {
    ad: "Adınızı en az 3 karakter giriniz",
    soyad: "Soyadınızı en az 3 karakter giriniz",
    email: "Geçerli bir email adresi giriniz",
    password: "En az 8 karakter, büyük harf, küçük harf, sembol ve rakam içermelidir",
};

export default function Register() {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({ 
    ad: false,
    soyad: false,
    email: false,
    password: false,
});
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if(name == "ad" || name == "soyad") {
        if(value.trim().length >= 3) {
            setFormData({ ...formData, [name]: false});
        } else {
            setFormData({ ...formData, [name]: true});
        }
    }
  };

  

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Card>
        <CardHeader>Kayıt Ol</CardHeader>
        <CardBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="ad">Ad:</Label>
              <Input
                id="ad"
                name="ad"
                placeholder="Adınızı girin"
                type="text"
                onChange={handleChange}
                value={formData.ad}
              />
            </FormGroup>

            <FormGroup>
              <Label for="soyad">Soyad:</Label>
              <Input
                id="soyad"
                name="soyad"
                placeholder="Soyadınızı girin"
                type="text"
                onChange={handleChange}
                value={formData.soyad}
              />
            </FormGroup>

            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                id="email"
                name="email"
                placeholder="Emailinizi eksiksiz girin"
                type="email"
                onChange={handleChange}
                value={formData.email}
              />
            </FormGroup>

            <FormGroup>
              <Label for="password">Password:</Label>
              <Input
                id="password"
                name="password"
                placeholder="Güçlü bir password seçiniz"
                type="password"
                onChange={handleChange}
                value={formData.password}
              />
            </FormGroup>
            <Button>Kayıt Ol</Button>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}
