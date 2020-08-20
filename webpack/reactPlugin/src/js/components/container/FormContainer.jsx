import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from '../presentational/Input.jsx';
import txt from './1.txt';
import icon from './icon.png';
import './style.css'

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    const { seo_title } = this.state;
    return (
      <div className={'wrap'}>
        <h2>Org title</h2>
        <h3>txt: {txt}</h3>
        <img src={icon} />
        <form id="article-form">
          <Input
            text="SEO title"
            label="seo_title"
            type="text"
            id="seo_title"
            value={ seo_title }
            handleChange={ this.handleChange }
          />
        </form>
      </div>
    );
  }
}

export default FormContainer;
