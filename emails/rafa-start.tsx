import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface YelpRecentLoginEmailProps {
  name?: string;
  startDate?: Date;
  location?: string;
}

const imageUrl =
  "https://github.com/Maduki-tech/Mail-sender/blob/main/emails/static/image.jpeg?raw=true";

export const YelpRecentLoginEmail = ({
  name,
  startDate,
  location,
}: YelpRecentLoginEmailProps) => {
  const formattedDate = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(startDate);

  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>Willkommen zur Schnitzeljagd!</Preview>
        <Container>
          <Section style={content}>
            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  style={{
                    fontSize: 32,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "#ff0088",
                  }}
                >
                  Hi {name},
                </Heading>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Willkommen zu{" "}
                  <span
                    style={{ color: "#ff0088", textDecoration: "underline" }}
                  >
                    deiner
                  </span>{" "}
                  eigenen Schnitzeljagd!
                </Heading>

                <Text
                  style={{
                    ...paragraph,
                    textAlign: "center",
                  }}
                >
                  Wo und wann findet diese Jagd statt?
                </Text>

                <Text style={paragraph}>
                  <b>Uhrzeit: </b>
                  {formattedDate}
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  <b>Startort: </b>
                  {location}
                </Text>

                <Text style={paragraph}>
                  Im Rahmen der Jagd musst du einige Rätsel lösen.
                  <br />
                  Solltest du nicht weiterkommen, wirst du Informationen von mir
                  bekommen.
                </Text>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  Zeil ist es, alle Rätsel zu lösen, und am Ende der Jagd deine
                  <b> Belohnung</b> zu erhalten.
                </Text>
                <Heading as="h3">Hiermit startet die Jagd:</Heading>
              </Column>
            </Row>
            <Row style={{ padding: "20px" }}>
              <Column style={{ ...buttonContainer, width: "100%" }}>
                <Button style={button} href={imageUrl} target="_blank">
                  Zeit für eine Jagd!
                </Button>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

YelpRecentLoginEmail.PreviewProps = {
  name: "Rafaella",
  startDate: new Date("March 23, 2025, 12:00 pm"),
  location: "In deinem Zimmer",
} as YelpRecentLoginEmailProps;

export default YelpRecentLoginEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const button = {
  backgroundColor: "#ff0088",
  color: "#fff",
  fontSize: 16,
  padding: "10px 20px",
  textDecoration: "none",
  borderRadius: "3px",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "80%",
  margin: "0 auto",
};

const boxInfos = {
  padding: "20px",
};
