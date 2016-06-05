import React from 'react'
import { Link } from 'react-router'

export default class Start extends React.Component {
  render() {
    return (
      <div>
        <p>What would you like to practice?</p>

        <Link to="/scale-names-to-key-signatures">
          Scale names to key signatures
        </Link>
      </div>
    )
  }
}
