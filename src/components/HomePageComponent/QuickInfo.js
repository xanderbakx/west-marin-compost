import React, { Component } from 'react'
import { Section, Title, SectionButton } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { styles } from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you" title="our mission" />
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu luctus leo. Morbi auctor, diam nec iaculis rutrum, ipsum leo aliquam erat, eget tempus leo leo non erat. Vivamus enim sapien, volutpat eget iaculis eu, vehicula sed risus. Donec luctus, ante at laoreet pharetra, turpis justo pulvinar arcu, et hendrerit mi tellus in dolor. Suspendisse congue est in pharetra laoreet.          </p>
          <Link to="/about" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  max-width: 992px;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`