import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>
      My name is Anton.
    </p>
    <img
      alt="anton's face"
      src='https://media.licdn.com/dms/image/C4D03AQG59FrFHV1Oyw/profile-displayphoto-shrink_200_200/0?e=1543449600&v=beta&t=7rypCT2VGNLO6DHyf_rD4dnFziMz023xLzTyCT4MtcY'
    />
    <p>
      I am a Fullstack Javascript Developer and I am super excited to hack some stuff with freecodecamp folks.
    </p>
    <p>You can find me:</p>
    <ul>
      <li>
        <a href='https://www.linkedin.com/in/anton-rublev/'>
          On LinkedIn
        </a>
      </li>
      <li>
        <a href='https://github.com/AntonRublev360'>
          On GitHub
        </a>
      </li>
      <li>
        <a href='https://www.npmjs.com/~antonrublev'>
          On npmJs
        </a>
      </li>
    </ul>
  </Layout>
)

export default IndexPage
