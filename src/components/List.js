import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import SearchAppBar from './SearchAppBar';
import AlignItemsList from './AlignItemsList';

const serverUri = process.env.SERVER_URI || 'http://localhost:8080/api/boards/'

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [{
        name: 'Scott Adams',
        job: 'CEO and President',
        description: 'I\'m a pirate.',
        img: 'https://raw.githubusercontent.com/mui-org/material-ui/master/static/images/avatar/1.jpg'
      },
      {
        name: 'Ali Connors',
        job: 'Vice President',
        description: 'Extreme gamer.',
        img: 'https://raw.githubusercontent.com/mui-org/material-ui/master/static/images/avatar/2.jpg'
      },
      {
        name: 'Jennifer Blond',
        job: 'Product Manager',
        description: 'Just looking around.',
        img: 'https://raw.githubusercontent.com/mui-org/material-ui/master/static/images/avatar/3.jpg'
      }]
    }
  }

  componentDidMount() {
    fetch(serverUri, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => this.setState({
        users: data
      }))
  }

  render () {
    return (
      <div>
        <SearchAppBar />
        <AlignItemsList users={this.state.users}/>
      </div>
    )
  }
}

export default List;