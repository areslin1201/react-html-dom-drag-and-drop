import React, { useState } from 'react';
import { List, Col, Row } from 'antd';
import styled from 'styled-components';

const initItems = [
  "one",
  "two",
  "three",
  "four",
  "five"
];

function App() {
  const [dragItem, setDragItem] = useState();
  const [items, setItems] = useState(initItems);

  const handleDragStart = (index) => {
    setDragItem(index);
  };

  const handleDragEnter = (e, index) => {
    e.target.style.backgroundColor = "#fafafa";
    const newList = [...items];
    const item = newList[dragItem];
    newList.splice(dragItem, 1);
    newList.splice(index, 0, item);
    setDragItem(index);
    setItems(newList);
  };

  const handleDragLeave = (e) => {
    e.target.style.backgroundColor = "#fff";
  };

  const handleDrop = (e) => {
    e.target.style.backgroundColor = "#fff";
  };

  return (
    <StyledRow>
      <Col span={24}>
        <p>check this: https://zh-hant.reactjs.org/docs/events.html</p>
        <List
          header={<div>List Drag and Drop</div>}
          bordered
          dataSource={items}
          renderItem={(item, index) => (
            <List.Item
              // actions={[<a key="list-loadmore-edit">edit</a>]}
              draggable //sets the list item draggle property to true.
              key={index}
              onDragStart={() => handleDragStart(index)} //triggered when starts drag
              onDragEnter={(e) => handleDragEnter(e, index)} //triggered when a drag DOM enter a valid drop target
              onDragLeave={(e) => handleDragLeave(e)} //triggered when a drag DOM leave a valid drop target
              onDrop={(e) => handleDrop(e)} //triggered when a dragDOM is drop on a valid drop target
              onDragOver={(e) => e.preventDefault()} //prevents ghosting when the list item is dropped
              onSortStart={() => (document.body.className = 'grabbing')}
            >
              {item}
            </List.Item>
          )}
        />
      </Col>
    </StyledRow>
  );
}

const StyledRow = styled(Row)`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
`

export default App;