const React = require('react');

class Keypad extends React.Component {
  constructor() {
    super();
    this.typing = this.typing.bind(this)
  }
  typing() {
    console.log('Entering password...')
  }
  render() {
    return (
      <div>
        <form>
          <input type="password" onKeyUp={this.typing} />
        </form>
      </div>
    )
  }
}

module.exports = Keypad;
