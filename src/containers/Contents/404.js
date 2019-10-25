import React from 'react'
import styled from 'styled-components'
import { Main } from 'components/Layout'

const SCMainFlex = styled('div')`
  display: flex;
  min-height: 200px;
  margin: 0 auto;
  align-items: center;
  text-align: center;
`

const Page404 = () => (
  <Main>
    <SCMainFlex>
      <p>
        La page que vous cherchez n’existe pas. <br />
        N’hésitez pas à nous contacter, nous nous ferons un plaisir de vous renseigner.
      </p>
    </SCMainFlex>
  </Main>
)

export default Page404
