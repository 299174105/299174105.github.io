import React, {useState} from "react";
import "./about.css"
import {Grid, Header, Icon, Image, Menu, Segment, Sidebar} from "semantic-ui-react";

const About = ()=> {
	  const [visible, setVisible] = useState(false)
	const [iconType,setIconType] = useState('list')
		return (
				/*<div className="about">
				</div>*/
			  <Grid columns={1}>
      <Grid.Column>
		  <Icon link name={iconType}
		  onClick={()=>
		  { setIconType(iconType==='list'?'x':'list')
		  	setVisible(!visible)
		  }}
		  />
      </Grid.Column>

      <Grid.Column>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='push'
            icon='labeled'
            inverted
            onHide={() => setVisible(false)}
            vertical
            visible={visible}
            width='thin'
          >
            <Menu.Item as='a'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher >
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/images/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Grid.Column>
    </Grid>
			
		)
	
}

export default About;