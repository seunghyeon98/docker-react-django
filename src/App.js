import "./App.css";
import React from "react";
import ToDo from "./ToDo";
import AddToDo from "./AddToDo";
import { Paper, List, Container } from "@material-ui/core";

import { call } from "./service/ApiService";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // componentDidMount() {
  //   console.log("Console Log Console");
  //   const requestoptions = {
  //     method: "GET",
  //     headers: { "Content-Type": "application/json" },
  //   };

  //   fetch("http://localhost:8000/todo", requestoptions)
  //     .then((response) => response.json())
  //     .then(
  //       (response) => {
  //         this.setState({ items: response.list });
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );
  // }

  // 컴포넌트가 메모리할당을 한후 출력하기 전에 호출되는 메서드
  componentDidMount() {
    call("/todo", "GET", null).then((response) =>
      this.setState({ items: response.list })
    );
  }
  add = (item) => {
    item.userid = "havi";
    call("/todo", "POST", item).then((response) =>
      this.setState({ items: response.list })
    );
  };
  delete = (item) => {
    item.userid = "havi";
    // 삭제 delete
    call("/todo", "DELETE", item).then((response) =>
      this.setState({ items: response.list })
    );
  };

  //데이터를 수정하는 함수
  update = (item) => {
    item.userid = "havi";
    call("/todo", "PUT", item).then((response) =>
      this.setState({ items: response.list })
    );
  };

  // add = (item) => {
  //   const thisItems = this.state.items;
  //   item.id = "ID-" + thisItems.length;
  //   item.done = false;
  //   thisItems.push(item);
  //   this.setState({ items: thisItems });
  // };

  // delete = (item) => {
  //   const thisItems = this.state.items;
  //   const newItems = thisItems.filter((e) => e.id !== item.id);
  //   this.setState({ items: newItems }, () => {
  //     console.log(item.id + " is deleted.");
  //   });
  // };

  render() {
    var allItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List>
          {this.state.items.map((item, idx) => (
            <ToDo
              item={item}
              key={item.id}
              delete={this.delete}
              update={this.update}
            />
          ))}
        </List>
      </Paper>
    );

    return (
      <div className="App">
        <Container maxWidth="md">
          <AddToDo add={this.add} />
          {allItems}
        </Container>
      </div>
    );
  }
}

export default App;
