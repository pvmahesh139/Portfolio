import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="contact">
      <div class="container">
        <h2 class="section-title">Get In Touch</h2>
        <p class="section-subtitle">Have a project in mind? Let's work together!</p>
        
        <div class="contact-container">
          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div class="info-content">
                <h3>Email</h3>
                <p><a href="mailto:hello&#64;johndoe.com">pvmahesh79&#64;gmail.com</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div class="info-content">
                <h3>Phone</h3>
                <p><a href="tel:+1234567890">+91 9052506680</a></p>
              </div>
            </div>
            
            <div class="info-item">
              <div class="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="info-content">
                <h3>Location</h3>
                <p>Hyderabad</p>
              </div>
            </div>
            
            <div class="social-links">
              <a href="https://www.linkedin.com/in/pvmahesh09/" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/>
                </svg>
              </a>
              <a href="https://github.com/pvmahesh139" class="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
             <a target="_blank" href="mailto:pvmahesh79@gmail.com" class="social-link">
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
             <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
             </svg>
             </a>
            </div>
          </div>
          
          <div class="contact-form">
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
              <div class="form-group">
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name" 
                  [class.invalid]="name?.invalid && (name?.dirty || name?.touched)">
                <div class="error" *ngIf="name?.invalid && (name?.dirty || name?.touched)">
                  <span *ngIf="name?.errors?.['required']">Name is required</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  [class.invalid]="email?.invalid && (email?.dirty || email?.touched)">
                <div class="error" *ngIf="email?.invalid && (email?.dirty || email?.touched)">
                  <span *ngIf="email?.errors?.['required']">Email is required</span>
                  <span *ngIf="email?.errors?.['email']">Please enter a valid email</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  formControlName="subject"
                  [class.invalid]="subject?.invalid && (subject?.dirty || subject?.touched)">
                <div class="error" *ngIf="subject?.invalid && (subject?.dirty || subject?.touched)">
                  <span *ngIf="subject?.errors?.['required']">Subject is required</span>
                </div>
              </div>
              
              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5" 
                  formControlName="message"
                  [class.invalid]="message?.invalid && (message?.dirty || message?.touched)"></textarea>
                <div class="error" *ngIf="message?.invalid && (message?.dirty || message?.touched)">
                  <span *ngIf="message?.errors?.['required']">Message is required</span>
                </div>
              </div>
              
              <button 
                type="submit" 
                class="btn submit-btn" 
                [disabled]="contactForm.invalid || isSubmitting">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
              
              <div class="success-message" *ngIf="submitted">
                Your message has been sent successfully!
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .contact {
      background-color: white;
    }
    
    .contact-container {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
      margin-top: var(--space-6);
    }
    
    .contact-info {
      flex: 1;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: var(--space-4);
    }
    
    .info-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      background-color: var(--primary-50);
      color: var(--primary-500);
      border-radius: 50%;
      margin-right: var(--space-3);
      flex-shrink: 0;
    }
    
    .info-content h3 {
      font-size: 1.1rem;
      margin-bottom: var(--space-1);
    }
    
    .info-content p {
      color: var(--neutral-600);
      margin: 0;
    }
    
    .info-content a {
      color: var(--neutral-600);
      transition: color var(--transition-fast);
    }
    
    .info-content a:hover {
      color: var(--primary-500);
    }
    
    .social-links {
      display: flex;
      gap: var(--space-3);
      margin-top: var(--space-5);
    }
    
    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: var(--neutral-100);
      color: var(--neutral-700);
      border-radius: 50%;
      transition: background-color var(--transition-fast), color var(--transition-fast), transform var(--transition-fast);
    }
    
    .social-link:hover {
      background-color: var(--primary-500);
      color: white;
      transform: translateY(-3px);
    }
    
    .contact-form {
      flex: 1;
      background-color: var(--neutral-50);
      padding: var(--space-5);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    }
    
    .form-group {
      margin-bottom: var(--space-4);
    }
    
    label {
      display: block;
      font-weight: 500;
      margin-bottom: var(--space-1);
      color: var(--neutral-700);
    }
    
    input, textarea {
      width: 100%;
      padding: var(--space-2) var(--space-3);
      border: 1px solid var(--neutral-300);
      border-radius: var(--radius-md);
      font-family: inherit;
      font-size: 1rem;
      transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
    }
    
    input:focus, textarea:focus {
      border-color: var(--primary-500);
      box-shadow: 0 0 0 2px var(--primary-100);
      outline: none;
    }
    
    input.invalid, textarea.invalid {
      border-color: var(--error-500);
    }
    
    .error {
      color: var(--error-500);
      font-size: 0.85rem;
      margin-top: var(--space-1);
    }
    
    .submit-btn {
      width: 100%;
      padding: var(--space-3);
      margin-top: var(--space-2);
      font-weight: 500;
    }
    
    .submit-btn:disabled {
      background-color: var(--neutral-400);
      cursor: not-allowed;
    }
    
    .success-message {
      margin-top: var(--space-3);
      padding: var(--space-3);
      background-color: var(--success-500);
      color: white;
      border-radius: var(--radius-md);
      text-align: center;
      font-weight: 500;
      animation: fadeIn var(--transition-normal);
    }
    
    @media (min-width: 768px) {
      .contact-container {
        flex-direction: row;
      }
    }
  `
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitted = false;
  
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  
  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
  
  onSubmit() {
    if (this.contactForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    
    // Simulate form submission
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted = true;
      this.contactForm.reset();
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        this.submitted = false;
      }, 5000);
    }, 1500);
  }
}