import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about">
      <div class="container">
        <h2 class="section-title">About Me</h2>
        <p class="section-subtitle">Here's a brief introduction about myself and my journey</p>
        <div class="about-content">
          <div class="about-image">
            <img src="https://img.freepik.com/premium-photo/serious-businessman-working-inside-office-work-mature-boss-business-suit-sitting-computer_321831-14169.jpg" alt="About John Doe" />
          </div>
          <div class="about-text">
            <h3>Who am I?</h3>
            <p>
           I'm a passionate Frontend Developer with 8 months of hands-on experience crafting exceptional digital experiences. 
           I specialize in building responsive web applications using HTML, CSS, JavaScript, and frameworks like Angular and 
           Ionic, with a strong focus on performance, API integration, and user experience.
            </p>
            
            <h3>My Journey</h3>
            <p>
              My journey in web development began during college where I discovered my passion for creating beautiful interfaces.
              Since then, I've worked with various technologies and frameworks, constantly learning and improving my skills.
            </p>
            
            <h3>Why work with me?</h3>
            <p>
              I build responsive, user-focused web applications using Angular, Ionic, HTML, CSS, and JavaScript.
              I'm collaborative, quick to learn, and committed to delivering high-performance digital experiences.
            </p>
            
            <div class="stats">
              <div class="stat-item">
                <span class="stat-number">0.8+</span>
                <span class="stat-label">Years of Experience</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">5+</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span class="stat-number">10+</span>
                <span class="stat-label">Happy Clients</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .about {
      background-color: var(--neutral-100);
    }
    
    .about-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
      margin-top: var(--space-6);
    }
    
    .about-image {
      flex: 1;
    }
    
    .about-image img {
      width: 100%;
      border-radius: var(--radius-lg);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      transition: transform var(--transition-normal);
    }
    
    .about-image img:hover {
      transform: scale(1.02);
    }
    
    .about-text {
      flex: 1;
    }
    
    .about-text h3 {
      color: var(--primary-500);
      margin-top: var(--space-4);
      margin-bottom: var(--space-2);
    }
    
    .about-text h3:first-child {
      margin-top: 0;
    }
    
    .stats {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-4);
      margin: var(--space-5) 0;
    }
    
    .stat-item {
      flex: 1;
      min-width: 120px;
      background-color: white;
      padding: var(--space-3);
      border-radius: var(--radius-md);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      text-align: center;
      transition: transform var(--transition-fast);
    }
    
    .stat-item:hover {
      transform: translateY(-5px);
    }
    
    .stat-number {
      display: block;
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-500);
      margin-bottom: var(--space-1);
    }
    
    .stat-label {
      display: block;
      font-size: 0.9rem;
      color: var(--neutral-600);
    }
    
    @media (min-width: 768px) {
      .about-content {
        flex-direction: row;
      }
      
      .about-image, .about-text {
        flex: 1;
      }
      
      .about-image {
        flex: 0.8;
      }
    }
  `
})
export class AboutComponent {}