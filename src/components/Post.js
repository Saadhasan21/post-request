import React, { Component, useState } from "react";
import axios from "axios";


const Post = () => {


	const [userId, setUserId] = useState();
	const [title, setTitle] = useState();
	const [body, setBody] = useState();


	const changeHandlerUserId = (e) => {

		setUserId(e.target.value)
	}

	const changeHandlerTitle = (e) => {

		setTitle(e.target.value)
	}

	const changeHandlerBody = (e) => {

		setBody(e.target.value)
	}

	const submitHandler = e => {
		e.preventDefault();



		const newData = { userId: userId, id: 101, title: title, body: body }
		const abc =
			axios
				.post("https://jsonplaceholder.typicode.com/posts", newData);
		console.log(newData, abc);
	}


	return (
		<div>
			<form onSubmit={submitHandler}>
				<div className="mb-3 mx-5">
					<label for="UserId" className="form-label">User Id</label>
					<input type="text" className="form-control" id="exampleInputEmail1" name="title"value={userId} onChange={changeHandlerUserId}/>
				</div>
				<div className="mb-3 mx-5">
					<label for="Title" className="form-label">Title</label>
					<input type="text" className="form-control" id="exampleInputPassword1" name="title" value={title} onChange={changeHandlerTitle}/>
				</div>
				<div className="mb-3 mx-5">
					<label for="Body" className="form-label">Body</label>
					<input type="text" className="form-control" id="exampleInputPassword1" name="title" value={body} onChange={changeHandlerBody}/>
				</div>
				
				<button type="submit" className="btn btn-success">Submit</button>
			</form>
		</div>
	)
}

export default Post;