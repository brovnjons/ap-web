import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styled from 'styled-components'

import {
  Title,
  Section,
  Button,
  Centered,
  Right,
  Subtitle,
  Container,
} from '../layouts/style'
import { theme } from '../layouts'
import Testimonials from '../components/Testimonials'
import Employees from '../components/Employees'
import ContactForm from '../components/ContactForm'

import { ReactComponent as Eris } from '../img/eris-logo.svg'
import { ReactComponent as LifeRing } from '../img/life-ring.svg'
import suva from '../img/suva-300.png'
import sanagate from '../img/sanagate-300x65.png'
import maxon from '../img/maxonmotor-300x45.png'
import insel from '../img/insel-gruppe-logo-300x70.png'
import hostettler from '../img/hostettler-300x70.png'
import energie360 from '../img/energie360-300x72.png'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import SEO from '../components/SEO'

const ColList = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -0.5em 2em;
  padding: 0;
  list-style: none;
`
const ImgStyled = styled(Img)`
  transition: transform 0.3s;
`
const ErisLogo = styled(Eris)`
  width: 90%;
  margin: 2.6em auto;
`
const SupportLogo = styled(LifeRing)`
  color: ${p => p.theme.color.orange};
  max-height: 8rem;
  margin-top: 1em;
  margin-bottom: 1em;
}
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 1 12rem;
  margin: 0 0.5em 1em;
  border: 1px solid lightgray;
  border-radius: 0.2em;
  text-align: ${props => (props.align ? props.align : 'center')};

  a {
    flex: 1 1 auto;
    padding: ${props => (props.full ? 0 : '1em')};
    color: ${props => props.theme.color.text};
    background-color: ${props => props.theme.color.bg};
    overflow: hidden;

    svg {
      color: ${props =>
        props.color ? props.color : props.theme.color.primary};
      transition: transform 0.3s;
    }

    &:hover {
      color: ${props => props.theme.color.bg};
      background-color: ${props => props.theme.color.primary};

      ${ImgStyled}, svg {
        transform: scale(1.06);
        color: ${props => props.theme.color.bg};
      }
    }
  }

  h2,
  h3,
  h4 {
    margin: 0.1em ${props => (props.full ? '1rem' : 0)};
  }
  h3 {
    font-size: 1em;
    font-weight: 300;
  }
  h4 {
    font-size: 0.8em;
    font-weight: 300;
  }

  ${ImgStyled} {
    margin-top: ${props => (props.full ? 0 : '1rem')};
    margin-bottom: ${props => (props.full ? '.6rem' : 0)};
  }

  p {
    line-height: 1.2;
    margin: 1em ${props => (props.full ? '1rem' : 0)};
  }
`
const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  margin: 1em -1em;
  img {
    flex: 0 1 6em;
    width: 100%;
    max-width: 6em;
    height: 100%;
    padding: 1em;
  }
`
const Blockquote = styled.blockquote`
  margin-top: 4em;
  padding-bottom: 1em;
`

const IndexPage = ({ testimonials, posts, employees, images }) => (
  <div>
    <SEO />
    <Hero image={images.heroImage.sizes} />
    <Navbar location="root" />
    <Section id="dienstleistungen">
      <Container>
        <Title>Dienst&shy;leistungen</Title>
        <ColList>
          <ListItem>
            <Link to="/individuelle-entwicklung/">
              <h3>Individuelle Entwicklung</h3>
              <h2>App-Lösungen</h2>
              <h4>Mobile und Desktop</h4>
              <ImgStyled
                style={{ width: '100%' }}
                sizes={{
                  ...images.appsImage.sizes,
                  base64: images.appsImage.sqip.dataURI,
                }}
                alt="Apps"
              />
            </Link>
          </ListItem>
          <ListItem>
            <Link to="/dashboard-notaufnahme/">
              <h3>Apptiva</h3>
              <h2>Dashboard</h2>
              <h4>für die Notaufnahme</h4>
              <ErisLogo />
            </Link>
          </ListItem>
          <ListItem color={theme.color.orange}>
            <Link to="/unterstuetzung/">
              <h3>Erstklassige</h3>
              <h2>Unterstützung</h2>
              <SupportLogo />
            </Link>
          </ListItem>
        </ColList>
        <Blockquote>
          <h3>Unsere Spezialität</h3>
          <p>
            Das Erstellen von individuellen Softwarelösungen ist unsere
            Spezialität. Wir unterstützen Sie bei der digitalen Transformation
            Ihres Unternehmens und beschleunigen Ihre Geschäftsprozesse. Dazu
            setzen wir modernste Methoden und Technologien ein und liefern
            schlanke und passgenaue Lösungen: „Lean Enterprise Apps“. Unsere
            Apps füllen die Lücken, die Standardsoftware nicht füllen kann.
          </p>
          <Right>
            <Button to="/unsere-kompetenzen">Unsere Kompetenzen</Button>
          </Right>
        </Blockquote>
      </Container>
    </Section>

    <Section dark>
      <Container>
        <ImageList>
          <img src={sanagate} alt="sanagate" />
          <img src={insel} alt="Insel Gruppe" />
          <img src={energie360} alt="Energie 360° AG" />
          <img src={suva} alt="suva" />
          <img src={hostettler} alt="hostettler" />
          <img src={maxon} alt="maxon motor" />
        </ImageList>
      </Container>
    </Section>

    <Testimonials testimonials={testimonials} />

    <Employees employees={employees} />

    <Section id="blog">
      <Container>
        <Title>Blog</Title>
        <Subtitle>Aktuelle News rund um die Apptiva</Subtitle>

        <ColList>
          {posts.map(({ node: post }) => (
            <ListItem key={post.id} full align="left">
              <Link to={`/${post.frontmatter.path}`}>
                <ImgStyled
                  style={{ width: '100%' }}
                  resolutions={{
                    ...post.frontmatter.image.childImageSharp.resolutions,
                    base64: post.frontmatter.image.childImageSharp.sqip.dataURI,
                  }}
                  alt="Post image"
                />
                <h2>{post.frontmatter.title}</h2>
                <h4>{post.frontmatter.date}</h4>
                <p>{post.excerpt}</p>
              </Link>
            </ListItem>
          ))}
        </ColList>
        <Centered>
          <Button to="/blog/">Zum Apptiva Blog</Button>
        </Centered>
      </Container>
    </Section>
    <Section id="kontakt" dark>
      <Container>
        <Title>Kontakt</Title>
        <Subtitle>Wir freuen uns, von Ihnen zu hören.</Subtitle>
        Möchten Sie uns kennenlernen oder haben Sie Fragen zu unseren
        Dienstleistungen? <br />Zögern Sie nicht und nehmen Sie mit uns Kontakt
        auf!
        <ContactForm />
      </Container>
    </Section>
    <Section style={{ padding: 0, marginBottom: '-4rem' }}>
      <iframe
        title="Google Maps"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://maps.google.com/maps?q=Apptiva AG, Neuenkirchstrasse 19, Sempach Station&amp;hl=de&amp;geocode=+&amp;hnear=Apptiva AG+Neuenkirchstrasse 19,+Sempach Station&amp;t=m&amp;z=10&amp;iwloc=A&amp;output=embed"
        width="100%"
        height="550px"
        frameBorder="0"
      />
    </Section>
  </div>
)

export default ({ data }) => {
  const { edges: posts } = data.blogs
  return (
    <IndexPage
      testimonials={data.testimonials}
      posts={posts}
      employees={data.employees}
      images={data}
    />
  )
}

export const indexPageQuery = graphql`
  query IndexPage {
    testimonials: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "testimonial-data" } } }
    ) {
      edges {
        node {
          id
          ...Testimonial_details
        }
      }
    }
    employees: allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___name] }
      filter: { frontmatter: { templateKey: { eq: "employee-page" } } }
    ) {
      edges {
        node {
          id
          ...Employee_details
        }
      }
    }
    blogs: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          fields {
            slug
          }
          frontmatter {
            title
            path
            image {
              childImageSharp {
                resolutions(height: 150, width: 300) {
                  ...GatsbyImageSharpResolutions_withWebp_noBase64
                }
                sqip(numberOfPrimitives: 8, blur: 6) {
                  dataURI
                }
              }
            }
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
    appsImage: imageSharp(id: { regex: "/apps.png/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes_withWebp_noBase64
      }
      sqip(numberOfPrimitives: 16, blur: 6) {
        dataURI
      }
    }
    heroImage: imageSharp(id: { regex: "/solution-collage.png/" }) {
      sizes(
        maxWidth: 1800
        traceSVG: { background: "#ffffff", color: "#aaaaaa", threshold: 140 }
      ) {
        ...GatsbyImageSharpSizes_withWebp_tracedSVG
      }
    }
  }
`
