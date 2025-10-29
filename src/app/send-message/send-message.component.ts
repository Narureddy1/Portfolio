
import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  formData = {
    title: '',
    name: '',
    time: '',
    from_email: '',
    subject: '',
    message: '',
    email: ''
  };

  buttonText: string = 'Send Email';
  loading: boolean = false;

  sendEmail() {
    this.loading = true;
    this.buttonText = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_r2sspgi';
    const publicKey = 'ndj093Q_OqOmviFXX'; // your EmailJS public key

    emailjs.init(publicKey);

    emailjs.send(serviceID, templateID, this.formData)
      .then(() => {
        this.loading = false;
        this.buttonText = 'Send Email';
        alert('Message Sent!');
        this.formData = { title: '', name: '', time: '', from_email: '', subject: '', message: '', email: '' };
      }, (err: EmailJSResponseStatus) => {
        this.loading = false;
        this.buttonText = 'Send Email';
        alert(JSON.stringify(err));
      });
  }
}
