import React from "react";

import { TextField, Paper, Button, Grid } from "@material-ui/core";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    // 입력받은 내뇽을 저장할 state를 생성
    this.state = { item: { title: "" } };

    // 넘겨준 데이터를 변수에 대입
    this.add = props.add;
  }

  // Event Handdling
  // 입력 내용이 변경될 때 title을 수정하는 메서드
  onInputChange = (e) => {
    // item 속성을 복제
    const thisItem = this.state.item;
    // 복제된 객체의 title의 값을 입력한 내용으로 수정
    thisItem.title = e.target.value;
    // 복제된 객체를 다시 item으로 복사
    this.setState({ item: thisItem });
  };

  // + 버튼을 누를 때, 호출되는 메서드
  onButtonClick = (e) => {
    this.add(this.state.item); // 데이터 추가
    this.setState({ item: { title: "" } }); // title을 clear - 입력 상자도 클리어
  };

  // 엔터키 입력됬을 때 호출되는 메서드
  enterKeyEnterHandler = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 입력됫을 경우, 정의한 onbuttonclick 호출.
      this.onButtonClick();
    }
  };
  // AddToDo 파일에서 이벤트와 이벤트 핸들러 연결.

  render() {
    // margin :  여백
    // padding :
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={11} md={11} item style={{ padding: 20 }}>
            <TextField
              placeholder="havi react"
              fullWidth
              value={this.state.item.title}
              // 이벤트와 이벤트 헨들러 연결
              onChange={this.onInputChange}
              onKeyPress={this.enterKeyEnterHandler}
            />
          </Grid>
          <Grid xs={1} md={1} item>
            <Button
              fullWidth
              color="primary"
              variant="outlined"
              onClick={this.onButtonClick}
            >
              Enter
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default AddToDo;
