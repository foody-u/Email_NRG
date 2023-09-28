import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Button,
} from '@react-email/components';
import * as React from 'react';

export const Email = () => (
    <Html>
        <Head />
        <Preview>Get your order summary, estimated delivery date and more</Preview>
        <Body style={main}>
            <Section style={container}>
                <Section style={{
                    paddingTop: "50px"
                }}>
                    <Column style={{
                        align: "start"
                    }}>
                        <Img
                            src={`https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/NRG%20Logo.png?updatedAt=1695915876172`}
                            width="256"
                            height="95"
                            alt="NRG logo"
                        />
                    </Column>
                    <Column style={{
                        width: "100%"
                    }}>
                    </Column>
                    <Column style={{
                        align: "end"
                    }}>
                        <Img
                            src={`https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/Damirov.com%20logo.png?updatedAt=1695915897955`}
                            width="226"
                            height="85"
                            alt="Damirov coaching"
                        />
                    </Column>
                </Section>
                <Section style={{
                    ...card
                }}>
                    <Heading style={{
                        ...TEXT_STYLE.h1,
                        marginBottom: "25px"
                    }}>First session</Heading>
                    <Text style={{
                        ...TEXT_STYLE.text,
                        marginBottom: "25px"
                    }}>Start with one 55-min training session. Get the important knowledge.</Text>
                    <PriceButton
                        price="15"
                        text="Find time"

                    />
                </Section>
                <Section>
                    <Row>
                        {FIRST_ROW_DATA.map((data, i) => {
                            return <SecondaryCard
                                key={data.sessionNum}
                                {...data}
                            />
                        })}
                    </Row>
                    <Row>
                        {SECOND_ROW_DATA.map((data, i) => {

                            return <SecondaryCard
                                key={data.sessionNum}
                                {...data}
                            />

                        })}
                    </Row>
                </Section>
                <Section>
                    <Row style={{
                        textAlign: "center"
                    }}>
                        <Column>
                            <Heading
                                style={{ ...TEXT_STYLE.h2 }}
                            >
                                Monthly
                            </Heading>
                            <Text style={{ ...TEXT_STYLE.h2 }}>
                                Training program
                            </Text>
                        </Column>
                        <Column>
                            <Text style={{ ...TEXT_STYLE.textSm }}>
                                New training plan every month
                            </Text>
                            <Text style={{ ...TEXT_STYLE.textSm }}>
                                1x 30-min video call

                            </Text>
                            <Text style={{ ...TEXT_STYLE.textSm }}>
                                Access to chat with David
                            </Text>
                        </Column>
                        <Column>
                            <Text style={{ ...TEXT_STYLE.textSm }}>
                                $50/m
                            </Text>
                            <CustomLink
                            >Book a call</CustomLink>
                        </Column>
                    </Row>
                </Section>
                <Section style={{
                    textAlign: "center"
                }}>
                    <Column>
                        <Heading>
                            Any questions?
                        </Heading>
                        <Text>
                            WhatsApp me at 07534580009 or by
                            pressing the button below
                        </Text>
                        <Text>
                            Contact
                        </Text>
                    </Column>
                    <Column style={{
                        width: "100%"
                    }}></Column>
                    <Column>
                        <Text>David Damirov</Text>
                        <Text>Sport Nutritionist</Text>
                        <Text>Personal trainer</Text>
                    </Column>
                </Section>
            </Section>

        </Body>
    </Html>
);

const FIRST_ROW_DATA = [
    {
        type: "card",
        sessionNum: 1,
        text: "one 55-min training session",
        price: 42,
    },

    {
        type: "card",
        sessionNum: 4,
        text: "Keep on track of your fitness journey",
        price: 160,
    },
]

const SECOND_ROW_DATA = [
    {
        sessionNum: 8,
        text: "Learn and improve with the optimal rate",
        price: 300,
    },
    {
        sessionNum: 12,
        text: "Reach your goals as fast as possible",
        price: 420,
    }
]

function SecondaryCard({
    sessionNum,
    text,
    price,
}) {
    return (
        <Column style={{
            padding: "10px"
        }}>
            <Column style={{
                ...card,
                width: "400px",
                marginLeft: "15px",
            }}>
                <Text style={{
                    ...TEXT_STYLE.h1,

                }}>{sessionNum}</Text>
                <Text style={{
                    ...TEXT_STYLE.h1
                }}>
                    Training sessions
                </Text>
                <Text style={{
                    ...TEXT_STYLE.text,
                    marginTop: "50px"
                }}>{text}</Text>
                <PriceButton
                    small
                    price={price}
                    text="Find time"

                />
            </Column>
        </Column>
    )
}

function PriceButton({
    price,
    text,
    small
}) {
    return (
        <Row style={{
            marginTop: "50px"
        }}>
            <Text style={{
                ...TEXT_STYLE.text,
                marginBottom: "45px"
            }}>${price}</Text>
            <CustomLink
                small>{text}</CustomLink>
        </Row>
    )
}


function CustomLink({ children, href, small }) {
    return (
        <Link
            href={href ? href : "#"}
            style={{
                backgroundColor: "green",
                color: COLOR_PRIMARY["500"],
                padding: small ? "12px 50px" : "12px 120px",
                borderRadius: "10px",
                fontSize: "24px",
                textAlign: "center",
                display: "block",
            }}
        >{children}</Link>
    )
}

const main = {
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
    backgroundColor: "red",
};

const TEXT_STYLE = {
    h1: {
        fontSize: "46px",
        fontWeight: "semi-bold",
        lineHeight: "",
    },
    h1: {
        fontSize: "36px",
        fontWeight: "semi-bold",
        lineHeight: "",
    },
    text: {
        fontSize: "24px",
        fontWeight: 400,
    },
    textSm: {
        fontSize: "px",
        fontWeight: 400,
    }

}

const card = {
    textAlign: "center",
    width: "100%",
    height: "550px",
    borderRadius: '10px',
    margin: "50px 0",
    padding: "0px 30px",
    border: "1px solid",
    borderColor: "white"
}


const COLOR_PRIMARY = {
    500: "black",
}

const container = {
    backgroundColor: '#2F2F2F',
    margin: "50px auto",
    padding: "10px 50px",
    color: 'white',
};

const track = {
    container: {
        padding: '22px 40px',
    },
    number: {
        margin: '12px 0 0 0',
        fontWeight: 500,
        lineHeight: '1.4',
        color: '#6F6F6F',
    },
};

const message = {
    padding: '40px 74px',
    textAlign: 'center',
};



