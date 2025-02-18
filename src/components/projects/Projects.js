import React, { useState, useEffect } from 'react'
import './Projects.css'
import { Fade } from 'react-reveal'
import ApolloClient, { gql } from 'apollo-boost'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { featured_projects } from '../../data/featured_projects.json'
import Project from '../project/Project'
import Section from '../section/Section'
import FeaturedProject from '../featuredProject/FeaturedProject'
import ProjectInfo from '../projectInfo/ProjectInfo'
import Modal from 'react-modal'
import disableScroll from 'disable-scroll'

const useStyles = makeStyles((theme) => ({
  moreProjects: {
    '&': {
      margin: '20px auto',
      backgroundColor: '#F09A00',
      boxShadow: 'none',
      '&:hover': {
        backgroundColor: '#A36B02',
        boxShadow: 'none',
      },
    },
    '& > *': {
      color: 'white',
      padding: 4,
      fontSize: '15px',
      fontWeight: '600',
    },
  },
}))

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    operation.setContext({
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
    })
  },
})

const queryInfo = {
  owner: 'scrambledfox',
  repositories: ['Euro-Truck-Simulator-Roof-Link', 'icc', 'portfolio'],
}

const query = gql`
  fragment repoProperties on Repository {
    name 
    description
    url
    id
    diskUsage
    languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
      nodes {
        name
        color
      }
    }
  }

  {
    user(login: "${queryInfo.owner}") {
      ${queryInfo.repositories
        .map(
          (repo, index) => `repo${index + 1}: repository(name: "${repo}") {
        ...repoProperties
      }`
        )
        .join('\n')}
    }
  }`

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState([])
  const [loadProjectsError, setLoadProjectsError] = useState(null)

  const [selectedProject, setSelectedProject] = useState(null)
  const [modalIsOpen, setIsModalOpen] = useState(false)

  const classes = useStyles()

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    try {
      const queryResult = await client.query({
        query,
      })
      setGithubProjects(queryResult.data.user)
      setLoadProjectsError(false)
    } catch (error) {
      console.log(error)
      setLoadProjectsError(true)
    }
  }

  useEffect(() => {
    if (selectedProject !== null) {
      openModal()
    }
  }, [selectedProject])

  const selectProject = (data) => {
    setSelectedProject(data)
  }

  const openModal = () => {
    setIsModalOpen(true)
    disableScroll.on()
  }

  const afterOpenModal = () => {}

  const closeModal = () => {
    setIsModalOpen(false)
    disableScroll.off()
  }

  const afterCloseModal = () => {
    setSelectedProject(null)
  }

  // if (loadProjectsError === false) {
  return (
    <Section title="Projects">
      <Modal
        id="project-modal"
        closeTimeoutMS={200}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onAfterClose={afterCloseModal}
        onRequestClose={closeModal}
        className="modal-wrapper"
        overlayClassName="overlay"
        contentLabel="Project Modal"
      >
        <ProjectInfo close={() => closeModal()} data={selectedProject} />
      </Modal>

      <div className="projects-content">
        <ul className="projects-list">
          {featured_projects.map((featuredProject) => {
            return (
              <li key={`featured-project-${featuredProject.id}`}>
                <Fade bottom duration={1000} distance="50px">
                  <FeaturedProject
                    projectData={featuredProject}
                    selectProject={selectProject}
                  />
                </Fade>
              </li>
            )
          })}
          {/* {Object.keys(githubProjects).map((repo) => {
              if (githubProjects[repo].name) {
                return (
                  <li key={githubProjects[repo].name}>
                    <Fade bottom duration={1000} distance="50px">
                      <Project project={githubProjects[repo]} type={'github'} />
                    </Fade>
                  </li>
                )
              } else {
                return null
              }
            })} */}
        </ul>
        <Fade bottom duration={1000} distance="50px">
          <div className="more-projects-wrapper">
            <a
              className="project-link"
              href={'https://github.com/ScrambledFox'}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={classes.moreProjects}
                type="button"
                variant="contained"
              >
                more projects
              </Button>
            </a>
          </div>
        </Fade>
      </div>
    </Section>
  )
  // } else {
  //   return null
  // }
}

Modal.setAppElement('#root')

export default Projects
