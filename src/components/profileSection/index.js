import React from "react";
import "./ProfileStyle";
import Animation from "../Animation";
import {
  UserContainer,
  ProfileBg,
  UserLeftContainer,
  Img,
  UserRightContainer,
  UserInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./ProfileStyle";
import profileImg from "../../assets/images/user-profile.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../utils/constants";

const ProfileSection = () => {
  return (
    <div id="about">
      <UserContainer>
        <ProfileBg>
          <Animation />
        </ProfileBg>
        <UserInnerContainer>
          <UserLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="display">
              Check Resume
            </ResumeButton>
          </UserLeftContainer>

          <UserRightContainer id="Right">
            <Img src={profileImg} alt="User-image" />
          </UserRightContainer>
        </UserInnerContainer>
      </UserContainer>
    </div>
  );
};

export default ProfileSection;
