import React, { Component } from "react";
import { Fade } from "react-reveal";
import Button from "../../components/button/Button.js";
import Footer from "../../components/footer/Footer.js";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard.js";
import Header from "../../components/header/Header.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard.js";
import TopButton from "../../components/topButton/TopButton.js";
import {
  contactPageData,
  greeting,
  opensourceProjects,
  opensourcesHeader,
  publications,
  publicationsHeader,
} from "../../portfolio.js";
import "./Opensource.css";
import ProjectsImg from "./ProjectsImg.js";

const blogSection = contactPageData.blogSection;
class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {opensourcesHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {opensourcesHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {opensourceProjects.data.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        {/* Publications  */}
        {publications.data.length > 0 ? (
          <div className="basic-projects" style={{ marginTop: 200 }}>
            <Fade bottom duration={2000} distance="40px">
              <div className="publications-heading-div">
                <div className="publications-heading-text-div">
                  <h1
                    className="publications-heading-text"
                    style={{ color: theme.text }}
                  >
                    {publicationsHeader.title}
                  </h1>
                  <p
                    className="projects-header-detail-text subTitle"
                    style={{ color: theme.secondaryText }}
                  >
                    {publicationsHeader["description"]}
                  </p>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}

        <div className="repo-cards-div-main">
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={theme} />;
          })}
        </div>

        {/* <div className="blogsite-btn-div project-button">
          <Button
            text="Visit My Blog"
            newTab={true}
            href={blogSection.link}
            theme={theme}
          />
        </div> */}

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
