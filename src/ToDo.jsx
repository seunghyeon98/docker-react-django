import React from "react";
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;

    // update 추가
    this.update = props.update;
  }

  offReadOnlyMode = (e) => {
    this.setState({ readOnly: false });
  };

  enterKeyEventHandler = (e) => {
    if (e.key === "Enter") {
      this.setState({ readOnly: true });
      this.update(this.state.item);
    }
  };

  editEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.title = e.target.value;
    this.setState({ item: thisItem });
    this.update(this.state.item);
  };

  checkboxEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.done = e.target.checked;
    this.setState({ item: thisItem });
    this.update(this.state.item);
  };

  deleteEventHandler = (e) => {
    this.delete(this.state.item);
    this.update(this.state.item);
  };

  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
        <ListItemText>
          <InputBase
            inputProps={{
              "aria-label": "naked",
              readOnly: this.state.readOnly,
            }}
            type="text"
            id={item.id}
            name={item.id}
            value={item.title}
            multiline={true}
            fullwidth={true}
            onClick={this.offReadOnlyMode}
            onKeyPress={this.enterKeyEventHandler}
            onChange={this.editEventHandler}
          />
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            aria-label="Delete Todo"
            onClick={this.deleteEventHandler}
          >
            <DeleteOutlined />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

export default ToDo;
