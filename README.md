# wanted-pre-onboarding-frontend-challenge-19

## 과제 공통 세팅

- cra로 과제를 수행하기 위해서는 node.js와 npm이 설치 되어있어야 합니다.
- 폴더 구조는 가능한 아래 양식을 맞춰주세요.
- 스타일은 tailwind, styled-component, scss등 자유롭게 설정하시면 됩니다.
- 아래 폴더와 파일은 필수 요소입니다. 나머지는 자유롭게 설정해주세요.

```
/src
  /components
    /List
  /store
  App.tsx
  index.tsx
```

## 과제 1 todo list 만들기

Add와 Delete 기능 2 가지를 만듭니다.

1. input 창에 list1을 입력 후 Add 버튼을 누르면 input 창 하단에 list1 컴포넌트가 뜹니다.
2. 각 list의 delete 버튼을 누르면 해당 list 컴포넌트가 삭제됩니다.

<img src="https://github.com/PMtHk/wanted-pre-onboarding-frontend-challenge-19/blob/main/todoListAssignment.png" width="500" >

- 디자인은 자유롭게 해도 됩니다. 위의 2가지 버튼과 그에 따른 기능이 있으면 됩니다.
- 가능하면 컴포넌트를 만듭니다. (작은 단위라도 좋습니다.)
- 전역상태를 관리해주세요.(가능한 Redux나 Redux-toolkit을 이용해주세요.)

## 과제 2

질문을 읽고 답해주세요. 본인이 알고 있는 만큼 답변해주시면 됩니다.

1. DOM과 Virtual DOM을 설명해주세요.

   > DOM이란 HTML로 작성된 웹페이지를 브라우저에 표시하고, 이벤트에 반응한 등의 기능을 수행할 객체들로 이루어진 것입니다.  
   > Virtual DOM은 DOM 조작의 비효율성을 개선하기 위해 만들어진 가상의 DOM 입니다.

2. 리액트의 특징을 설명해주세요.
   > 리액트는 자바스크립트 라이브러리로 가상 DOM을 활용해 효율적으로 UI를 업데이트 할 수 있습니다. 또한 컴포넌트 기반의 아키텍쳐로 재사용성이 높고, 단방향 데이터 흐름으로 예측이 가능한 상태관리를 제공합니다.
3. flux 패턴에 대하여 설명해주세요.
   > flux 패턴이란 단방향의 데이터 흐름을 아키텍처로 대규모 어플리케이션에서 데이터 흐름을 일관성 있게 관리할 수 있도록 도와줍니다.
4. 상태관리에 대하여 설명해주세요.
   > 우선 상태는 컴포넌트 내에서 관리되는 데이터를 의미합니다. 이 데이터는 UI와 제공되는 기능 및 동작에 영향을 줍니다. 이러한 상태를 관리함으로써 어플리케이션의 동적인 부분을 제어하고 사용자와 소통할 수 있습니다. 상태관리를 하는데 useState와 같은 내장함수나 Redux 등의 외부 라이브러리를 활용할 수 있습니다.
5. 궁금한 것에 대하여 알려주세요.
   > 현업에서 신입에게 기대하는 최소한의 역량에 대해 궁금합니다.
