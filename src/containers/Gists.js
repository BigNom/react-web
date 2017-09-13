import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Gists extends Component {

  state = {
    gists: null
  }
componentDidMount() {
  fetch('https://api.github.com/gists')
  .then(res => res.json())
  .then(gists => {
    this.setState({ gists })
  })
}

render() {
  const { gists } = this.state
  return (
    <Root>
      <Sidebar>
        {gists ? (
          gists.map(gist => (
            <SidebarItem key={gist.id}>
              <Link to={`/g/${gist.id}`}>
                {gist.description || '[no description]'}
              </Link>
            </SidebarItem>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Sidebar>
      <Main>
        <Route exact={true} path="/" render={() => (
          <h1>Welcome</h1>
        )}/>
        {gists && (
        <Route path="/g/:gistId" render={({ match }) => (
          <Gist gist={gists.find(g => g.id === match.params.gistId )}/>
        )} />
        )}
      </Main>
    </Root>
  )
}
}

const Gist = ({ gist }) => {
  console.log(gist)
  return (
    <div>
      <h1>{gist.description || 'No Description'}</h1>
      <ul>
        {Object.keys(gist.files).map(key => (
          <li>
            <b>{key}</b>
            <Loadfile url={gist.files[key].raw_url}>
              {(text) => (
                <pre>{text}</pre>
              )}
            </Loadfile>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Root = (props) => (
  <div style={{
    display: 'flex'
  }} {...props}/>
)

const Sidebar = (props) => (
  <div style={{

  }} {...props} />
)

const SidebarItem = (props) => (
  <div style={{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis'
  }} {...props} />
)

const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }}>
  <div style={{ padding: '20px' }} {...props} />
  </div>
)

class Loadfile extends Component {
  render() {
    return(
      <div></div>
    )
  }
}



export default Gists





