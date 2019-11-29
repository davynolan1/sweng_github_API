import React from 'react';
import '../style.css';

const Form = (props) => {
  return (

    <div class="form">
      <form onSubmit={(event) => props.handleUserFormSubmit(event)}>
        <label>
          <input class="input-box"name="username"
            type="text"
            placeholder="GitHub username"
            required
            value={props.formData.username}
            onChange={props.handleFormChange}
          />
        </label>
        <div>
          <input
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>

  )
};

export default Form;