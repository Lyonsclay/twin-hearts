import React, { Component } from 'react'
import Rebase from 're-base'
import { Button, Modal } from 'semantic-ui-react'
import NewDiscussionInput from './_NewDiscussionInput'

const base = Rebase.createClass({
  apiKey: "AIzaSyBNWUr-vspSKICVT1842U2xge8-UdIyvOs",
  authDomain: "twin-hearts.firebaseapp.com",
  databaseURL: "https://twin-hearts.firebaseio.com",
  storageBucket: "twin-hearts.appspot.com",
})
var authHandler = function(error) {
  if(error) console.log(error);
  // noop if redirect is successful
  return;
}
let user = {}
/* var onRedirectBack = function(error, authData){
 *   if(error) console.log(error);
 *   if(authData.user){
 *     console.log('authData.user   ::   ', authData.user)
 *     var { displayName, email, photoURL } = authData.user
 *     user = { displayName, email, photoURL }
 *   } else {
 *     base.authWithOAuthRedirect('facebook', authHandler);
 *   }
 * }
 * 
 * base.authGetOAuthRedirectResult(onRedirectBack)
 * */
export default class NewDiscussionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      size: "small",
      threads: [],
    }
  }

  show = () => this.setState({ open: true, user })
  close = () => this.setState({ open: false })

  componentDidMount() {
    base.syncState('threads', {
      context: this,
      state: 'threads',
      asArray: true
    })
    base.syncState('user', {
      context: this,
      state: 'user',
      asArray: true
    })
  }

  addThread(thread) {
    this.setState({
      threads: [thread, ...this.state.threads]
    })
  }

  handleSubmit(thread) {
    this.addThread(thread)
  }

  

  render() {
    
    const { open, size } = this.state
    return (
      <div>
        <Button
          onClick={this.show}
          className="big ui inverted button"
        >
          Start a New Discussion
        </Button>

        <Modal size={size} open={open} onClose={this.close}>
          <Modal.Header>
            Start a New Discussion
          </Modal.Header>

          <Modal.Content>
            <h4>user.displayName</h4>
            <img src={user.photoURL} />
            <NewDiscussionInput
              onSubmit={this.close}
              handleSubmit={this.handleSubmit.bind(this)}
            />
          </Modal.Content>
        </Modal>
        {this.state.threads.map(thread => <p>{thread.topic}</p>)}
      </div>
    )
  }
}
