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
                        marginTop="25px"
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

                    <Section style={{
                    }}>
                        <Column style={{
                            height: "250px"
                        }}>
                            <Column>
                                <div style={{
                                }}>
                                    <Heading style={{
                                        ...TEXT_STYLE.h3,
                                        fontWeight: "Bold",
                                    }}>
                                        Any questions?
                                    </Heading>
                                </div>


                                <div style={{
                                    height: "80px"
                                }}>
                                    <Text style={{
                                        ...TEXT_STYLE.textSm,
                                        textAlign: "start",
                                        width: "200px"
                                    }}>
                                        WhatsApp me at <Link
                                            href='https://wa.me/447534580009'
                                            style={{
                                                fontWeight: "bold"
                                            }}>07534580009</Link> or press
                                        the button below

                                    </Text>
                                </div>

                                <div style={{
                                    height: "20px"
                                }}></div>
                                <div style={{
                                    height: "60px"
                                }}>
                                    <ButtonLink
                                        padding="13px 20px"
                                        background="#545454"
                                        borderRadius="5px"
                                        href='https://wa.me/447534580009'>Contact</ButtonLink>
                                    <ButtonLink
                                        padding="13px 20px"
                                        background="#545454"
                                        borderRadius="5px"
                                        href="https://damirov.com#rec539368327"
                                        marginLeft="25px">Reviews</ButtonLink>

                                </div>
                            </Column>

                        </Column>

                        <Row>

                            <Column style={{
                                width: "110px"
                            }}>
                                <div style={{
                                }}>
                                    <Text style={{
                                        ...TEXT_STYLE.h3,
                                        fontWeight: "bold",
                                        lineHeight: "35px",
                                        margin: 0
                                    }}>David Damirov</Text>
                                </div>

                                <div style={{
                                    height: "80px"
                                }}>
                                    <Text style={{
                                        ...TEXT_STYLE.textSm
                                    }}>
                                        Sport Nutritionist
                                        <br />
                                        Personal Trainer
                                    </Text>
                                </div>


                                <Row>
                                    <div style={{
                                        height: "60px"
                                    }}>

                                        <Link

                                            href="http://instagram.com/damirov">
                                            <Img
                                                style={{
                                                    display: "inline"
                                                }}
                                                width={"30px"}
                                                height={"30px"}
                                                src='https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/instagram.png?updatedAt=1696415422946'
                                            />
                                        </Link>

                                        <Link
                                            href="https://damirov.com">
                                            <Img
                                                style={{
                                                    display: "inline",
                                                    marginLeft: "20px"
                                                }}
                                                width={"30px"}
                                                height={"30px"}
                                                src='https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/web%20icon.png?updatedAt=1696415433712'
                                            />
                                        </Link>
                                    </div>
                                </Row>


                            </Column>

                            <Column style={{
                                width: "120px"
                            }}>
                                <Img
                                    src='https://ik.imagekit.io/foodyuapp/NRG%20&%20Damirov/David%20avatar.png?updatedAt=1696415451399'
                                    width={"125px"}
                                    height={"125px"}
                                    alt="Photo of David"
                                    style={{
                                        marginTop: "-20px",
                                        borderRadius: "999px"
                                    }}
                                />

                            </Column>




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
                width: "450px",
            }}>
                <Text style={{
                    ...TEXT_STYLE.h1,
                    fontSize: "63px",
                    marginBottom: "50px"
                }}>{sessionNum}</Text>
                <Text style={{
                    ...TEXT_STYLE.h2,
                    whiteSpace: "break-spaces"
                }}>
                    Training
                    <br />
                    {sessionNum > 1 ? "sessions" : "session"}
                </Text>
                <Row style={{
                    height: "120px"
                }} />
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
        <Row>
            <Text style={{
                ...TEXT_STYLE.h2,
                fontWeight: 300,
                color: PALLET.green['500'],
                padding: 'none',
            }}>
                £{price}

                <div style={{
                    height: "50px"
                }}>
                    {oldPrice && <>
                        <Text style={{
                            ...TEXT_STYLE.textSm,
                            padding: 'none',
                            lineHeight: 0,
                        }}>
                            <strike>£{oldPrice}</strike>
                            {" "}· you save £{oldPrice - price}
                        </Text>
                    </>}
                </div>
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
        fontSize: "44px",
        fontWeight: "bold",
        color: "white"
    },
    h2: {
        fontSize: "34px",
        fontWeight: "bold",
        lineHeight: "45px",
        color: "white"
    },
    h3: {
        fontSize: "28px",
        fontWeight: "semi-bold",
        lineHeight: "",
        color: "white"
    },
    text: {
        fontSize: "22px",
        fontWeight: 400,
        color: "white"
    },
    textLg: {
        fontSize: "24px",
        fontWeight: 300,
        color: "white",
        lineHeight: '35px'
    },
    textSm: {
        fontSize: "18px",
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
    height: "400px",
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



