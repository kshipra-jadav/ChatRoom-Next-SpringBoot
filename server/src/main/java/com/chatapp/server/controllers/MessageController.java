package com.chatapp.server.controllers;

import com.chatapp.server.models.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

	@MessageMapping("/message")
	@SendTo("/topic/public-chat")
	public Message getContent(@RequestBody Message message) {
		return message;
	}
}
