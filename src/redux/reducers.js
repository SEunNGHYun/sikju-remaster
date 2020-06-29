import {test} from "./action";
//액션 타입 변수들 가져오기

const initialState = {
  fe : 'dad',
  value: true
};
//기본 지정 state

const reducer = (state = initialState , action) => {
  switch (action.type){
    case test :
      return {
        value: !state.value
      }
    default : return state
  }
}
//case의 타입에 따라 값을 변경

export default reducer;
//default로 내보내기