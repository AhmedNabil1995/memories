import {ADD_COMMENT,DELETE_COMMENT,FETCH_COMMENTS} from '../constant'
const intialState = {comments:[]};

const commnetReducer = (state=intialState,action)=>{
    switch(action.type){
        case FETCH_COMMENTS : 
            return {comments:action.payload};
        case ADD_COMMENT : 
            return {comments: [action.payload,...state.comments]};
        case DELETE_COMMENT :
            return {comments: state.comments.filter(comment=>{
                    return comment._id !== action.payload._id;
            })}
        default:
            return state;
    }
}

export default commnetReducer;