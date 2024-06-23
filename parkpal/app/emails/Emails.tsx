import { Button, Html, Body, Hr, Head, Heading, Container, Section, Text, Preview, Img, Tailwind } from "@react-email/components";
import * as React from "react";

type EmailFormProps = {
  firstName: string;
  lastName: string;
  senderEmail: string;
  message: string;
}

export default function Emails({firstName, lastName, senderEmail, message}:EmailFormProps) {
  return (
    <Html>
      <Head />
      <Preview>New email from ParkPal website</Preview>
      <Tailwind>
        <Body>
          <Container>
            {/* <Img src="parkpal/public/logo.png" alt="logo" width="50" height="50"/> */}
            <Section className="h-auto w-full px-4 pb-4 bg-gray-100 rounded-md">
              <Heading>You recieved the following message:</Heading>
              <Section className="p-6 border-4 border-solid border-blue-900 bg-white rounded-md">
                <Text>Sender email: {senderEmail}</Text>
                <Text>Sender: {lastName}, {firstName}</Text>
                <Hr />
                <Text>{message}</Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}