import React, { useState, FormEvent } from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import api from "../../services/api";
import logo from "../../assets/img/logo.png";

import { Form, Error, Image, Logo } from "./styles";

interface FormatImage {
  id: string;
  title: string;
  farm: number;
  server: string;
  secret: string;
}

interface Image {
  id: string;
  alt: string;
  url: string;
}

const Home: React.FC = () => {
  const [photos, setPhotos] = useState<Image[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [inputError, setInputError] = useState("");

  const keyApi = process.env.REACT_APP_KEY_API;
  const flickerApi = process.env.REACT_APP_FLICKER_API;

  const formatImageData = (img: FormatImage) => {
    return {
      id: img.id,
      alt: img.title,
      url: `//farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`,
    };
  };

  async function handleAddImages(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    if (!searchValue) {
      setInputError("Search for an image");
      return;
    }

    try {
      const {
        data: {
          photos: { photo },
        },
      } = await api.get(`${flickerApi}api_key=${keyApi}&text=${searchValue}`);

      const photosTmp = photo.map((img: FormatImage) => formatImageData(img));

      setPhotos(photosTmp);

      setInputError("");
    } catch (error) {
      setInputError("Search error");
    }
  }

  return (
    <>
      <Logo src={logo} alt="logo pitang" />
      <Form
        data-testid="search-form"
        hasError={!!inputError}
        onSubmit={handleAddImages}
      >
        <input
          id="search-input"
          type="text"
          placeholder="Search image"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <Button type="submit">Search</Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Container data-testid="image-list" fluid>
        <Row>
          <Col xs={12} md={4}>
            {photos.map((photo) => (
              <Image key={photo.id} src={photo.url} alt={photo.alt} />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
