import React, {Component} from 'react'
import Input from 'src/components/Input'
import {observable} from 'mobx'
import {observer} from 'mobx-react'

@observer
class LoginForm extends Component {
  @observable.ref repo = ''
  @observable.ref token = ''
  onSubmit (e) {
    e.preventDefault()
  }
  render () {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <Input value={this.repo} onChange={value => this.repo = value}>
          Repo
        </Input>
        <Input value={this.token} onChange={value => this.token = value}>
          Token
        </Input>
      </form>
    )
  }
}

export default LoginForm
