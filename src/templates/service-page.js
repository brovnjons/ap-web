import React from 'react'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import * as FontAwesome from 'react-icons/lib/fa'

import Content, { HTMLContent } from '../components/Content'
import { Centered, Container } from '../layouts/style'
import config from '../config'
import SEO from '../components/SEO'

const HeadArea = styled.div``

const HeaderTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  text-align: center;

  @media (min-width: 381px) {
    font-size: 4rem;
  }
`
const faName = string => {
  const faPrefix = `Fa-${string}`
  const str = faPrefix.replace(/-([a-z])/g, g => g[1].toUpperCase())
  return str
}

const icons = icon => React.createElement(FontAwesome[faName(icon)])

const ListTitle = styled.div`
  margin: 5em 0 3em;
  text-align: center;
  * {
    margin: 0;
  }
`
const ItemList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1rem;
  padding: 0;
  list-style: none;
`
const Item = styled.li`
  display: flex;
  margin: 1rem;
  flex: 1 1 18rem;
`
const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 auto;
  height: 1.8em;
  width: 1.8em;
  font-size: 1.4em;
  margin-right: 0.6em;
  color: ${props => props.theme.color.bg};
  border-radius: 50%;
  background-color: ${props => props.theme.color.secondary};
`
const ItemContent = styled.div`
  h2 {
    margin: 0.2em 0;
  }
  p {
    margin: 0.2em 0;
  }
`

const Header = ({ title, image, subtitle }) => (
  <HeadArea>
    <HeaderTitle dangerouslySetInnerHTML={{ __html: title }} />
    {subtitle && (
      <h2>
        {subtitle.text} {subtitle.swaps && subtitle.swaps[0]}
      </h2>
    )}
    {image && (
      <Img
        style={{ width: '80%', margin: '2rem auto' }}
        sizes={image.childImageSharp.sizes}
      />
    )}
  </HeadArea>
)

export const ServicePageTemplate = ({
  content,
  contentComponent,
  metaData,
}) => {
  const PostContent = contentComponent || Content
  const { title, image, subtitle, description, bulletGroups } = metaData
  const seoImage =
    metaData.image &&
    metaData.image.childImageSharp.resize &&
    metaData.image.childImageSharp.resize.src

  return (
    <section>
      <Helmet title={`${title} - ${config.company}`} />
      <SEO metaData={metaData} postImage={seoImage} />
      <Container>
        <Centered>
          <Header title={title} image={image} subtitle={subtitle} />
        </Centered>
        {!subtitle &&
          description && (
            <Centered>
              <p>{description}</p>
            </Centered>
          )}
        {bulletGroups &&
          bulletGroups.map(group => (
            <div key={group.title}>
              <ListTitle>
                <h1>{group.title}</h1>
                {/* eslint-disable-next-line react/no-danger */}
                <p dangerouslySetInnerHTML={{ __html: group.description }} />
              </ListTitle>
              <ItemList>
                {group.bulletList.map(item => (
                  <Item key={item.title}>
                    <Icon>{icons(item.icon)}</Icon>
                    <ItemContent>
                      <h2>{item.title}</h2>
                      {/* eslint-disable-next-line react/no-danger */}
                      <p dangerouslySetInnerHTML={{ __html: item.text }} />
                    </ItemContent>
                  </Item>
                ))}
              </ItemList>
            </div>
          ))}
        <PostContent content={content} />
      </Container>
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <ServicePageTemplate
      content={post.html}
      contentComponent={HTMLContent}
      metaData={post.frontmatter}
    />
  )
}

export const pageQuery = graphql`
  query ServicePageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        image {
          childImageSharp {
            sizes {
              ...GatsbyImageSharpSizes_withWebp
            }
            resize(width: 1200, height: 630, cropFocus: ENTROPY) {
              src
            }
          }
        }
        subtitle {
          text
          swaps
        }
        description
        bulletGroups {
          title
          description
          bulletList {
            icon
            title
            text
          }
        }
      }
    }
  }
`
