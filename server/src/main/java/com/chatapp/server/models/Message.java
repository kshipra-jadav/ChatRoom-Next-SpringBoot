package com.chatapp.server.models;

import java.util.Date;

public class Message {
	private String userName;
	private String message;
	private Date timeStamp;

	public Message(String userName, String message, Date timeStamp) {
		this.userName = userName;
		this.message = message;
		this.timeStamp = timeStamp;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Date getTimeStamp() {
		return timeStamp;
	}

	public void setTimeStamp(Date timeStamp) {
		this.timeStamp = timeStamp;
	}
}
