import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient

interface Message {
  name: string;
  email: string;
  subject: string;
  messageContent: string;
}

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  message: Message = {
    name: '',
    email: '',
    subject: '',
    messageContent: ''
  };
  formStatus: 'success' | 'error' | null = null;

  constructor(private http: HttpClient) { } // Inject HttpClient

  sendMessage() {
    // This is where you would send the message data to your backend server.
    // Replace 'YOUR_BACKEND_API_ENDPOINT' with the actual URL of your backend.
    const backendUrl = 'http://localhost:3000/send-email'; // Example backend URL

    this.http.post(backendUrl, this.message).subscribe({
      next: (response) => {
        console.log('Message sent successfully!', response);
        this.formStatus = 'success';
        // Optionally, reset the form after successful submission
        this.message = { name: '', email: '', subject: '', messageContent: '' };
      },
      error: (error) => {
        console.error('Error sending message:', error);
        this.formStatus = 'error';
      }
    });
  }
}