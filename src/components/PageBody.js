import React from 'react'
import styled from '@emotion/styled'
require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  h1,
  h2,
  h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 3em 0 2rem 0;
    text-transform: capitalize;
  }

  h1 {
    font-size: 1.5em;
  }
  h2 {
    font-size: 1.8em;
    margin: 3em 0 1.5em;
    padding-left: 1em;
    border-left: 4px solid; 
  }
  h3 {
    font-size: 1.5em;
    border-bottom: 1px solid #efefef;
    padding-bottom: 10px;
  }

  p {
    line-height: 1.7;
    margin: 0 0 2em 0;
  }

  a {
    transition: 0.2s;
    color: ${props => props.theme.colors.text};
    &:hover {
      color: ${props => props.theme.colors.highlight};
    }
  }

  del {
    text-decoration: line-through;
  }
  strong {
    font-weight: 600;
  }
  em {
    font-style: italic;
  }

  ul,
  ol {
    margin: 0 0 2em 0;
    padding: 20px 20px 20px 30px;
    background: #efefef;
    border-radius: 10px;
  }

  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.7;
      &:last-child {
        margin: 0;
      }
    }
  }

  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }

  hr {
    border-style: solid;
    border-color: ${props => props.theme.colors.secondary};
    margin: 0 0 2em 0;
  }

  blockquote {
    font-style: italic;
    border-left: 4px solid ${props => props.theme.colors.secondary};
    padding: 0 0 0 0.5em;
  }

  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${props => props.theme.colors.secondary} !important;
    span {
      background: inherit !important;
    }
  }
`

const PageBody = props => {
  return (
    <Body
      dangerouslySetInnerHTML={{ __html: props.body?.childMarkdownRemark.html }}
    />
  )
}

export default PageBody
