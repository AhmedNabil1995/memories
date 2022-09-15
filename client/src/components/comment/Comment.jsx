import { useSelector } from 'react-redux';
import './comment.css';

const Comment = ({comment,deleteComment}) => {
    let {user} = useSelector(state=>state.auth);
  return (
    <div className='comment'>
        <div>
        <span className='creator'>{comment?.creator?.name}</span>
        {user._id === comment.creator._id&&<span className='delete' onClick={()=>deleteComment(comment?._id)}>delete</span>}
        </div>
        <p>{comment?.comment}</p>
    </div>
  )
}

export default Comment