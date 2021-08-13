import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.authService = new AuthService(this.http)
  }

  ngOnInit(): void {
    this.messages.push(new Message("Welcome to local food service! I am your bot", true))
  }

  messages: Message[] = [];
  authService: AuthService

  async sendMessage(messageBody: any) {
    this.messages.push(new Message(messageBody["message"], false))
    messageBody
    await new Promise(f => setTimeout(f, 1500));
    if (messageBody["message"].toLowerCase().includes("order")) {
      this.messages.push(new Message("You can place order after logging in", true))
    }
    else if (messageBody["message"].toLowerCase().includes("forgot password")) {
      this.messages.push(new Message("No worries! You can reset your password by entering registered email", true))
      this.messages.push(new Message("Just click on forgot password below login button", true))
    }
    else if (messageBody["message"].toLowerCase().includes("hi") || messageBody["message"].toLowerCase().includes("hello")) {
      this.messages.push(new Message("Hey there! Ask me a question", true))
    }
    else if (messageBody["message"].toLowerCase().includes("cart")) {
      this.messages.push(new Message("You can access your cart from the navbar", true))
    }
    else if (messageBody["message"].toLowerCase().includes("reset password")) {
      this.messages.push(new Message("Reset/update password from profile section easily!", true))
    }
    else if (messageBody["message"].toLowerCase().includes("thank you") || messageBody["message"].toLowerCase().includes("ok")) {
      this.messages.push(new Message("Thanks for visiting Local Food Service! Ping me anytime 😉", true))
    }
    else {
      this.messages.push(new Message("Sorry I could not understand that", true))
    }
  }
}

export class Message {
  text: string;
  sentByBot: boolean;
  constructor(text: string, sentByBot: boolean) {
    this.text = text;
    this.sentByBot = sentByBot;
  }
}