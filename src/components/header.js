import * as React from "react"
import { Link, withPrefix } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Container } from "react-bootstrap"

const HeaderSection = ({ siteTitle }) => (
  <Header>
    <Container>
      <div className="d-md-flex justify-content-around align-items-center text-center">
        <Link to={"/"}>
          <div className="row">
            <div className="col-3">
              <StaticImage
                src="../images/norway-grants.svg"
                width={50}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt={siteTitle}
                className="img-fluid mt-3"
              />
            </div>
            <div className="col-9">
              <StaticImage
                src="../images/borderscape.svg"
                width={250}
                quality={80}
                formats={["AUTO", "WEBP"]}
                alt={siteTitle}
                className="img-fluid"
              />
            </div>
          </div>
        </Link>
        <div className="lead ms-4">
          <strong>WebGIS</strong> State Formation and Settlement Patterns in the
          Ancient Egyptian Southern Border, 4th-3rd millennia BCE
        </div>
      </div>
    </Container>
  </Header>
)

const Header = styled.header`
  background-color: var(--project-color);
  color: #ffffff;
  margin-bottom: 5rem;
`

export default HeaderSection
