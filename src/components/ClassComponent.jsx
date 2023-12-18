import { Component } from "react";
import css from "./ClassComponent.module.css"

class ClassButton extends Component {
  render() {
    return (
      <div className={css.container}>
        <button className={css.button} onClick={this.props.action}>{this.props.buttonDesc}</button>
        <img src={this.props.src} className={css.img}/>
      </div>
    );
  }
}

export default ClassButton;