import React, {Component} from 'react'
import {render} from 'react-dom'

import Flex, {Box} from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <Flex>
        <Box style={{border : "1px solid red", padding : "10px"}}>Laboratoire name</Box>
        <Box style={{border : "1px solid red", padding : "10px"}}> Welcome Message</Box>
        <Box style={{border : "1px solid red", padding : "10px"}}> UserName Input</Box>
        <Box style={{border : "1px solid red", padding : "10px"}}> Password Input</Box>
        <Box style={{border : "1px solid red", padding : "10px"}}> Button Submit</Box>
        <Box style={{border : "1px solid red", padding : "10px"}}> list Forget Password </Box>
        <Box style={{border : "1px solid red", padding : "10px"}}> S'Enregistrer </Box>
      </Flex>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
