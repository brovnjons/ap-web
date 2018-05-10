import React from 'react'
import styled from 'styled-components'

const Markdown = styled.div`
  h1,
  h2 {
    margin-top: 2em;
    margin-bottom: 1em;
  }

  .container {
    margin-right: auto;
    margin-left: auto;
    max-width: 960px;
    padding-right: 1em;
    padding-left: 1em;
  }

  .full-width {
    position: relative;
    width: 100vw;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
  }

  .dark-section {
    background-color: #f6f6f6;
    margin-top: 4em;
    padding-top: 1px;
    padding-bottom: 4em;
  }

  .custom-block-left {
    @media (min-width: 640px) {
      float: left;
      width: 16rem;
      max-width: 100%;
      margin-right: 2rem;
    }
  }

  .custom-block-right {
    @media (min-width: 640px) {
      float: right;
      width: 16rem;
      max-width: 100%;
      margin-left: 2rem;
    }
  }

  .gatsby-resp-image-wrapper {
    transition: transform 0.3s;

    &:hover {
      transform: scale(1.06);
    }
  }

  .gatsby-resp-image-background-image {
    background-image: none !important;
  }

  .gatsby-resp-image-image {
    box-shadow: none !important;
  }
`

export default ({ content, className }) => (
  <Markdown className={className}>{content}</Markdown>
)
export const HTMLContent = ({ content, className }) => (
  <Markdown
    className={className}
    dangerouslySetInnerHTML={{ __html: content }}
  />
)
