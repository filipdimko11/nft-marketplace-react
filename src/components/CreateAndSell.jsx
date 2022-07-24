import React from 'react'
import styled from "styled-components";
import sell1 from "../assets/sell1.png";
import sell2 from "../assets/sell2.png";
import sell3 from "../assets/sell3.png";
import Button from "./Button";

const CreateAndSell = () => {
    const data = [
      {
        image: sell1,
        title: "Create your collection",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
        buttonText: "Create",
      },
      {
        image: sell2,
        title: "Add your NFTs",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
        buttonText: "Add NFT",
      },
      {
        image: sell3,
        title: "List them for sale",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.",
        buttonText: "Sell Now",
      },
    ];
  return (
    <Section>
        <div className="title">
            <h2>
                Create and Sell Your NFTs
            </h2>
        </div>
        <div className="container">
            <div className="ellipse">
                <div className="content">
                    {
                        data.map(({image, description, title, buttonText}, index) => {
                            return (
                                <div className="createAndSell" key={index}>
                                    <img src={image} alt="Create and sell" />
                                <h3>
                                    {title}
                                </h3>
                                <p>
                                    {description}
                                </p>
                                <Button text={buttonText} blue={index === 1}>

                                </Button>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    margin: 0 6rem;
    margin-bottom: 5rem;
    .title {
        text-align: center;
        h2 {
            font-size: 3rem;
            margin-bottom: 4rem;
        }
    }
    .container {
        background-color: #232835;
        padding: 5rem;
        border-radius: 1rem;
        /* position: relative; */
        .content {
            display: flex;
            gap: 3rem;
            /* margin-bottom: 1rem; */
            .createAndSell {
                background-color: #ffffff34;
                padding: 2rem;
                /* display: flex; */
                /* flex-direction: column; */
                border-radius: 1rem;
                img {
                    /* margin-left: 50%; */
                    background-color: #2d69fd;
                    padding-left: 45%;
                    padding-top: 1rem;
                    padding-bottom: 1rem;
                    padding-right: 45%;
                    width: auto;
                    border-radius: 1rem;
                    margin-bottom: 1rem;
                }
                h3 {
                    color: white;
                }
                p {
                    color: #c8c4cf;
                    margin-bottom: 1rem;
                }
            }
        }
    }

`;

export default CreateAndSell