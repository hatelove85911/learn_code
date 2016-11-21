import React from 'react';
import ReactDOM from 'react-dom'

let mixin = (InnerComponent) => {
  return class extends React.Component{
    constructor () {
      super()
      this.state = {
        count: 0
      }

      this.update = this.update.bind(this)
    }
    update () {
      this.setState({
        count: ++this.state.count
      })
    }
    componentWillMount() {
      console.log("will mount");
    }
   render() {
     console.log("rendering");
     return (
       <InnerComponent update={this.update} {...this.state} {...this.props}></InnerComponent>
     )
   }
    componentDidMount() {
      this.inc = setInterval(this.update, 1000)
    }
    componentWillUnmount() {
      clearInterval(this.inc)
    }
  }
}

const app = (props) => {
  return <button onClick={props.update}>{props.count}</button>
}
let AppMixed = mixin(app)

const label = (props) => {
  return <label for="" onmouseover={props.update}>{props.count}</label>
}

let LabelMixed = mixin(label)
ReactDOM.render( <div>
  <AppMixed/>
  <LabelMixed/>
</div>, document.getElementById('app') )
