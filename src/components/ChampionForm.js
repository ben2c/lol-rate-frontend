import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateChampionFormData } from '../actions/championForm';
import { createChampion } from '../actions/champions';
import { Form, Divider } from 'semantic-ui-react';
import './Champion.css';



class ChampionForm extends Component {


  handleOnChange = event => {
    const { name, value } = event.target;
    const currentChampionFormData = Object.assign({}, this.props.championFormData, {
      [name]: value
    })

    this.props.updateChampionFormData(currentChampionFormData)
  }


  handleonSubmit = event => {
    event.preventDefault()
    //console.log(this.props.championFormData)

    const { createChampion, championFormData } = this.props;
    createChampion(championFormData);

  }

  render() {
    const { name, lane, url } = this.props.championFormData;
    return (
      <div>
      <Divider />
        <Form onSubmit={this.handleonSubmit}>
          <Form.Group widths='equal' >
            <Form.Input
              label='Name'
              onChange={this.handleOnChange}
              placeholder='Name'
              value={name}
              name='name'
            />
            <Form.Input
              label='Lane'
              onChange={this.handleOnChange}
              placeholder='Lane'
              value={lane}
              name='lane'
            />
            <Form.Input
              label='URL'
              onChange={this.handleOnChange}
              placeholder='Image URL'
              value={url}
              name='url'
            />

          </Form.Group>

          <button className="button button-add" type="submit" value="Add Champion Out" >Add Champion</button>
        </Form>

      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    championFormData: state.championFormData,
    //errors: state.errors
  }
}

export default connect(mapStateToProps, { updateChampionFormData, createChampion })(ChampionForm);