const initialValue = {
  list: [],
};

const todoReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "add_todo":
      const { id, value } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            value: value,
          },
        ],
      };

    case "delete_todo":
      const newList = state.list.filter((i) => i.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case "clear_todo":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};
export default todoReducer;
