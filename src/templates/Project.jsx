import React from 'react'
import {graphql} from 'gatsby'

const Project = props =>{
    const {data} = props
    const {contentfulChrisProjectPage} = data
    const {title, body} = contentfulChrisProjectPage
    return(
        <div>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}} />
        </div>
    )
}
export const query = graphql`
    query projectQuery($slug: String!){
        contentfulChrisProjectPage(slug: {eq: $slug}){
            title
            body {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`
export default Project