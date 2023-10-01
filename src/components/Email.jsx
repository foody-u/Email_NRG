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
    Font
} from '@react-email/components';
import * as React from 'react';

import { FIRST_ROW_DATA, SECOND_ROW_DATA } from '@/data';

export const Email = () => (
    <Html>
        <Head>
            <Font
                fontFamily="Helvetica"
                fallbackFontFamily="Sans-serif"
                fontWeight={[300, 400, 500, 600, 700, 800]}
                fontStyle="normal"
            />
        </Head>
        <Preview>Get your order summary, estimated delivery date and more</Preview>
        <Body style={main}>
            <Container style={container}>
                <Section style={{
                    paddingTop: "50px"
                }}>
                    <Column style={{
                        align: "start"
                    }}>
                        <Img
                            src={`https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/NRG%20Logo.png?updatedAt=1695915876172`}
                            width="205"
                            height="65"
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
                            height="65"
                            alt="Damirov coaching"
                        />
                    </Column>
                </Section>


                <LineSeparator />

                <Section style={{
                    ...card,
                    height: "370px",
                }}>
                    <Heading style={{
                        ...TEXT_STYLE.h1,
                        marginBottom: "25px"
                    }}>First session</Heading>
                    <Text style={{
                        ...TEXT_STYLE.textLg,
                    }}>Start with One 55-min training session. Get the important knowledge.</Text>
                    <PriceButton
                        price="15"
                        text="Find time"

                    />
                </Section>



                <LineSeparator />


                <Section>
                    <Row>
                        {FIRST_ROW_DATA.map((data, i) => {
                            return <SecondaryCard
                                key={data.sessionNum}
                                {...data}
                            />
                        })}
                    </Row>
                    <Row style={{
                        marginTop: "25px"
                    }}>
                        {SECOND_ROW_DATA.map((data, i) => {

                            return <SecondaryCard
                                key={data.sessionNum}
                                {...data}
                            />

                        })}
                    </Row>
                </Section>

                <LineSeparator />

                <Section>
                    <Row style={{
                        textAlign: "center"
                    }}>
                        <Row>
                            <Heading
                                style={{
                                    ...TEXT_STYLE.h1,
                                    fontWeight: "400",
                                    textAlign: "center",
                                    margin: "0 auto"
                                }}
                            >
                                Monthly
                                {" "}
                                <span style={{
                                    fontWeight: "bold"
                                }}>Online</span>
                                <br />
                                Training program
                            </Heading>
                        </Row>


                        <br />

                        <Row style={{
                            width: "340px",
                            margin: "0 auto",
                        }}>
                            <Column style={{
                                textAlign: "start",
                            }}>
                                <Text style={{ ...TEXT_STYLE.textLg }}>
                                    - New training plan every month
                                </Text>
                                <br />

                                <Text style={{ ...TEXT_STYLE.textLg }}>
                                    - 1x 30-min video call
                                </Text>
                                <br />

                                <Text style={{ ...TEXT_STYLE.textLg }}>
                                    - Access to chat with David
                                </Text>
                            </Column>
                        </Row>
                        <br />
                        <Row >
                            <Text style={{ ...TEXT_STYLE.h2 }}>
                                £50/m
                            </Text>
                            <CustomLink
                            >Book a call</CustomLink>
                        </Row>
                    </Row>
                    <LineSeparator />


                    <Section style={{
                    }}>
                        <Row>
                            <Column style={{
                            }}>
                                <Heading style={{
                                    ...TEXT_STYLE.h2,
                                    fontWeight: "Bold"
                                }}>
                                    Any questions?
                                </Heading>
                                <Text style={{
                                    ...TEXT_STYLE.textSm,
                                    textAlign: "start",
                                }}>
                                    WhatsApp: <Link
                                        href='https://wa.me/07534580009'
                                        style={{
                                            fontWeight: "bold"
                                        }}>07534580009</Link>
                                </Text>
                            </Column>

                        </Row>
                        <Row>
                            <Column style={{
                            }}>
                                <Text style={{
                                    ...TEXT_STYLE.h2
                                }}>David Damirov</Text>
                                <Text style={{
                                    ...TEXT_STYLE.textSm
                                }}>Sport Nutritionist</Text>
                                <Text style={{
                                    ...TEXT_STYLE.textSm
                                }}>Personal trainer</Text>
                            </Column>
                        </Row>
                    </Section>
                </Section>


            </Container>
        </Body>
    </Html>
);


function SecondaryCard({
    sessionNum,
    text,
    price,
}) {

    const firstPart = text.split(" ").slice(0, 3).join(" ");
    const lastPart = text.split(" ").slice(3, text.length).join(" ");

    return (
        <Column style={{
            paddingRight: "5px",
        }}>
            <Column style={{
                ...cardSecondary,
                width: "450px"
            }}>
                <Text style={{
                    ...TEXT_STYLE.h2,
                }}>{sessionNum}</Text>
                <Text style={{
                    ...TEXT_STYLE.h2
                }}>
                    Training {sessionNum > 1 ? "sessions" : "session"}
                </Text>
                <Text style={{
                    ...TEXT_STYLE.text,
                    marginTop: "50px",
                    height: "85px"
                }}>{text}</Text>
                <Row style={{
                    marginTop: "auto"
                }}></Row>
                <PriceButton
                    small
                    price={price}
                    text="Find time"

                />
            </Column>
        </Column >
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
                ...TEXT_STYLE.h3,
                marginBottom: "15px",
                fontWeight: 300,
            }}>£{price}</Text>
            <CustomLink
                small>{text}</CustomLink>
        </Row>
    )
}


function CustomLink({ children, href, small, ...styles }) {
    return (
        <Link
            href={href ? href : "#"}
            style={{
                color: COLOR_PRIMARY["500"],
                padding: small ? "12px 50px" : "12px 120px",
                borderRadius: "5px",
                fontSize: "19px",
                textAlign: "center",
                display: "block",
                background: "#5dd95d",
                boxShadow: "4px 3px 8px 0px rgba(34, 60, 80, 0.2)",
                ...styles
            }}
        >{children}</Link>
    )
}

function LineSeparator() {
    return (
        <>
            <br />
            <br />
            <hr />
            <br />
            <br />
        </>
    )
}

const main = {
    background: "#2F2F2F",
};

const TEXT_STYLE = {
    h1: {
        fontSize: "48px",
        fontWeight: "bold",
        lineHeight: "",
        color: "white"
    },
    h2: {
        fontSize: "38px",
        fontWeight: "bold",
        lineHeight: "",
        color: "white"
    },
    h3: {
        fontSize: "32px",
        fontWeight: "semi-bold",
        lineHeight: "",
        color: "white"
    },
    text: {
        fontSize: "25px",
        fontWeight: 400,
        color: "white"
    },
    textLg: {
        fontSize: "26px",
        fontWeight: 400,
        color: "white"
    },
    textSm: {
        fontSize: "20px",
        fontWeight: 400,
        color: "white"
    }

}

const card = {
    textAlign: "center",
    width: "100%",
    borderRadius: '10px',
    padding: "20px",
    // border: "1px solid white",
    // borderColor: "white",
}

const cardSecondary = {
    ...card,
    height: "480px",
    backgroundColor: "#292525c4"
}


const COLOR_PRIMARY = {
    500: "#2F2F2F",
}

const container = {
    backgroundColor: '#2F2F2F',
    margin: "50px auto",
    padding: "10px",
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



