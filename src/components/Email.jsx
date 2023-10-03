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

export const Email = ({ preview }) => (
    <Html>
        <Head>
            <Font
                fontFamily="Helvetica"
                fallbackFontFamily="Sans-serif"
                fontWeight={[300, 400, 500, 600, 700, 800]}
                fontStyle="normal"
            />
        </Head>
        <Preview>{preview}</Preview>
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


                <SpaceSeparator />

                <Text style={{
                    ...TEXT_STYLE.h1,
                    textAlign: 'center',
                    lineHeight: "62px"
                }}>
                    Hi, <br />
                    my name is David
                </Text>

                <SpaceSeparator />

                <Section>
                    <Row>

                        <MeritColumn
                            highlight={"MSc"}
                            text="in sport science"
                        />

                        <MeritColumn
                            highlight={"6 years"}
                            text="of experience"
                        />

                        <MeritColumn
                            highlight={">100"}
                            text="clients"
                            textAlign="end"
                        />

                    </Row>


                    <Row>
                        <Img
                            alt='photos of clients'
                            src='https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/NRG%20&%20Damirov%20Pricing%20background.png?updatedAt=1696333812398'
                        />
                    </Row>

                </Section>

                <SpaceSeparator />

                <Section style={{
                    ...card,
                    height: "370px",
                    textAlign: "center",
                    padding: "10px",
                }}>
                    <Heading style={{
                        ...TEXT_STYLE.h1,
                        marginBottom: "40px"
                    }}>First session</Heading>
                    <Text style={{
                        ...TEXT_STYLE.textLg,
                        marginBottom: "40px",
                    }}>Start with One 55-min training session. Get the important knowledge.</Text>
                    <PriceButton
                        price="15"
                        text="Find a time"
                        backgroundColor={PALLET.green["500"]}
                        color="white"
                        marginTop="-25px"
                        href={" https://tidycal.com/damirov5/induction-training-session-at-nrg"}
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
                <br />

                <Section >
                    <Row>
                        <Row>
                            <Heading
                                style={{
                                    ...TEXT_STYLE.h2,
                                    fontWeight: "400",
                                    textAlign: "center",
                                    margin: "0 auto",
                                    fontWeight: "bold"
                                }}
                            >
                                Online training plan
                            </Heading>
                        </Row>


                        <br />

                        <Row style={{
                            margin: "0 auto",
                        }}>
                            <Column style={{
                                textAlign: "center",
                            }}>
                                <Text style={{ ...TEXT_STYLE.text }}>
                                    New training plan every month
                                </Text>

                                <Text style={{ ...TEXT_STYLE.text }}>
                                    1x 30-min video call
                                </Text>

                                <Text style={{ ...TEXT_STYLE.text }}>
                                    Access to chat with David
                                </Text>
                            </Column>
                        </Row>
                        <br />
                        <Row>
                            <Text style={{ ...TEXT_STYLE.h2, fontWeight: "400", textAlign: "center", color: PALLET.green["500"] }}>
                                £50/month
                            </Text>
                            <CustomLink
                                href="https://buy.stripe.com/14k3dP3se8Ub9Y44gi"
                                marginTop="36px"
                                padding="18px 80px"
                            >Book a call</CustomLink>
                        </Row>
                    </Row>
                    <br />

                    <LineSeparator />
                    <br />
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
                                    WhatsApp me at <Link
                                        href='https://wa.me/447534580009'
                                        style={{
                                            fontWeight: "bold"
                                        }}>07534580009</Link> or press
                                    the button below

                                </Text>
                                <ButtonLink >Contact</ButtonLink>
                                <ButtonLink
                                    href="https://damirov.com#rec539368327"
                                    marginLeft="25px">Reviews</ButtonLink>
                            </Column>

                        </Row>
                        <Row style={{
                            marginTop: "50px"
                        }}>

                            <Column>
                                <Img
                                    src='https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/David%20Avatar.png?updatedAt=1696333812451'
                                    width={"90px"}
                                    height={"90px"}
                                    alt="Photo of David"
                                    style={{
                                        marginRight: "-28px",
                                        marginTop: "-20px"
                                    }}
                                />
                            </Column>
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
                        <Row>
                            <Link>
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="55px" width="55px" xmlns="http://www.w3.org/2000/svg"><path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"></path></svg>
                            </Link>
                        </Row>
                    </Section>
                </Section>


            </Container>
        </Body>
    </Html >
);

function ButtonLink({ children, href, ...styles }) {
    return (
        <Link
            style={{
                ...TEXT_STYLE.text,
                ...styles
            }}
            href={href ? href : "#"} >
            {children}
        </Link >
    )
}

function MeritColumn({ highlight, text, ...styles }) {
    return (
        <Column style={{
            ...TEXT_STYLE.text,
            paddingBottom: "20px",
            ...styles
        }}>
            <span style={{
                fontWeight: "bold"
            }}>{highlight}</span>
            <br />
            <span style={{
                fontWeight: 300,
                ...TEXT_STYLE.textSm
            }}>
                {text}
            </span>
        </Column >
    )
}


function SecondaryCard({
    sessionNum,
    price,
    oldPrice,
    href
}) {


    return (
        <Column style={{
            paddingRight: "5px",
            textAlign: "start"
        }}>
            <Column style={{
                ...cardSecondary,
                width: "450px"
            }}>
                <Text style={{
                    ...TEXT_STYLE.h1,
                    fontSize: "72px",
                    marginBottom: "50px"
                }}>{sessionNum}</Text>
                <Text style={{
                    ...TEXT_STYLE.h2
                }}>
                    Training {sessionNum > 1 ? "sessions" : "session"}
                </Text>
                <Row style={{
                    height: oldPrice ? "80px" : "125px"
                }}></Row>
                <PriceButton
                    href={href}
                    small
                    price={price}
                    oldPrice={oldPrice}
                    text="Find a time"

                />
            </Column>
        </Column >
    )
}

function PriceButton({
    price,
    oldPrice,
    text,
    small,
    href,
    ...styles
}) {
    return (
        <Row style={{
            marginTop: "50px"
        }}>
            <Text style={{
                ...TEXT_STYLE.h2,
                fontWeight: 300,
                color: PALLET.green['500'],
                padding: 'none',
                marginBottom: !oldPrice ? "47px" : "",
            }}>
                £{price}
                {oldPrice && <>
                    <Text style={{
                        ...TEXT_STYLE.textSm,
                        marginTop: "-20px",
                        marginBottom: "30px",
                        padding: 'none'
                    }}>
                        <strike>£{oldPrice}</strike>
                        {" "}· you save £{oldPrice - price}
                    </Text>
                </>}
            </Text>

            <CustomLink
                href={href}
                small
                {...styles}
            >{text}</CustomLink>
        </Row >
    )
}


function CustomLink({ children, href, small, ...styles }) {
    return (
        <Link
            href={href ? href : "#"}
            style={{
                maxWidth: "300px",
                margin: "0 auto",
                color: "black",
                padding: small ? "14px 50px" : "14px 120px",
                borderRadius: "10px",
                fontSize: "25px",
                textAlign: "center",
                display: "block",
                background: "white",
                boxShadow: "4px 3px 8px 0px rgba(34, 60, 80, 0.2)",
                fontWeight: "bold",
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
            <hr style={{
                background: "white"
            }} />
            <br />
            <br />
        </>
    )
}


function SpaceSeparator() {
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    )
}

const PALLET = {
    green: {
        500: "#00C16B"
    }
}


const main = {
    background: "#2F2F2F",

};

const TEXT_STYLE = {
    h1: {
        fontSize: "48px",
        fontWeight: "bold",
        color: "white"
    },
    h2: {
        fontSize: "38px",
        fontWeight: "bold",
        lineHeight: "45px",
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
        fontWeight: 300,
        color: "white",
        lineHeight: '35px'
    },
    textSm: {
        fontSize: "20px",
        fontWeight: 400,
        color: "white"
    }

}

const card = {
    width: "100%",
    borderRadius: '10px',
    padding: "20px",
    // border: "1px solid white",
    // borderColor: "white",
}

const cardSecondary = {
    ...card,
    height: "500px",
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



