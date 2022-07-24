import React from 'react'
import styled from "styled-components";
import choose from "../assets/choose.png";
import Button from './Button';

const ChooseUs = () => {
  return (
    <Section>
        <div className="img">
            <img src={choose} alt="choose" />
        </div>
        <div className="content">
            <h2>
                Why Choose Our NFT Marketplace?
            </h2>
            <p>
                Lorem ipsum dolor sit ament ipsum dolor sit amentipsum dolor sit amentipsum dolor sit ament ipsum dolor sit ament ipsum dolor sit ament
                Lorem ipsum dolor sit ament ipsum dolor sit amentipsum dolor sit amentipsum dolor sit ament ipsum dolor sit ament ipsum dolor sit ament
                Lorem ipsum dolor sit ament ipsum dolor sit amentipsum dolor sit amentipsum dolor sit ament ipsum dolor sit ament ipsum dolor sit ament
                Lorem ipsum dolor sit ament ipsum dolor sit amentipsum dolor sit amentipsum dolor sit ament ipsum dolor sit ament ipsum dolor sit ament
                Lorem ipsum dolor sit ament ipsum dolor sit amentipsum dolor sit amentipsum dolor sit ament ipsum dolor sit ament ipsum dolor sit ament
            </p>
            <Button text="Read More" blue/>
        </div>
    </Section>
  )
}

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 0 9rem;
    margin-bottom: 5rem;
    .content {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 3rem;
        h2 {
            font-size: 4rem;
        }
        p {
            color: #7b7e86;
            line-height: 2rem;
        }
    }
`;

export default ChooseUs