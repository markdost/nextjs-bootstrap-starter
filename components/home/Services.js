import Image from "next/image";
import { Col, Container, Row, Card } from "react-bootstrap";

const Services = () => {
  return (
    <section className="services space-2 bg-soft-primary">
      <Container>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col md={4} key={idx}>
              <Card className="shadow-sm">
                <div className="card-img-top">
                  <Image
                    src="/img-placeholder.svg"
                    alt="Image Description"
                    layout="responsive"
                    objectFit="cover"
                    width={160}
                    height={100}
                    blurDataURL="/img-placeholder.svg"
                  />
                </div>
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
