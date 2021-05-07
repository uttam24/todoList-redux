import React,{useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import fetchUsers from './store/actions/userActions'
const Users =()=>{
	const {users} = useSelector(state => state.users);
	const abc = useSelector(state =>  state.api);
	const dispatch = useDispatch();
	console.log("api user:" , abc)
	useEffect(()=>{
		dispatch(fetchUsers());
	}, [])

	return(
		<div>
			{users ? users.map(user => (
				<div className="row" key={user.id}>
					<div className='name'>{user.name}</div>
					<div className='address'>{user.address}</div>
					<div className="user-btn">
					<button className="btn btn-danger" onClick={()=>dispatch({type:'DELETE_USER', id:user.id})}>Delete</button>
					</div>
				</div>
				)) : ''}
		</div> 
	)
}

export default Users;