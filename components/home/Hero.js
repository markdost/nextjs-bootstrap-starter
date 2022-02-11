import Link from "next/link";
import Image from "next/image";

import { Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="space-lg-3 space-2">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>
              Lorem ipsum dolor <br /> sit amet consectetur
            </h1>
            <p className="py-4">
              Porro vel et officia, blanditiis omnis aperiam quas dicta
              exercitationem voluptatem esse ducimus maiores possimus quibusdam?
              <br />
              Rem earum suscipit veniam eaque culpa.
            </p>
            <Link href="#!">
              <a className="btn btn-lg btn-primary px-4">Contact</a>
            </Link>
            <Link href="#!">
              <a className="btn btn-lg btn-outline-primary px-4 ms-3">
                Read More
              </a>
            </Link>
          </Col>
          <Col md={6} className="mt-md-0 mt-4">
            <Image
              src="/img-placeholder.svg"
              alt="Image Description"
              layout="responsive"
              objectFit="cover"
              width={750}
              height={600}
              blurDataURL="/img-placeholder.svg"
              priority
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
