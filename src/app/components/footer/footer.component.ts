import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <a href="#" class="logo-text">PVM</a>
            <p class="footer-tagline">Building the web, one pixel at a time.</p>
          </div>
          
          <div class="footer-links">
            <div class="link-group">
              <h3>Navigation</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h3>Services</h3>
              <ul>
                <li><a href="#">Web Development</a></li>
                <li><a href="#">UI/UX Design</a></li>
                <li><a href="#">Mobile Development</a></li>
                <li><a href="#">Consultation</a></li>
              </ul>
            </div>
            
            <div class="link-group">
              <h3>Connect</h3>
              <ul>
                <li><a href="https://www.linkedin.com/in/pvmahesh09/">LinkedIn</a></li>
                <li><a href="https://github.com/pvmahesh139">GitHub</a></li>
                <li><a href="mailto:pvmahesh79@gmail.com">Mail</a></li>
                <li><a href="#">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Venkata Mahesh Pedavegula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      background-color: var(--neutral-800);
      color: var(--neutral-300);
      padding: var(--space-7) 0 var(--space-4) 0;
    }
    
    .footer-content {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
      margin-bottom: var(--space-6);
    }
    
    .footer-logo .logo-text {
      font-size: 2rem;
      font-weight: 700;
      color: white;
    }
    
    .footer-tagline {
      margin-top: var(--space-2);
      color: var(--neutral-400);
    }
    
    .footer-links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: var(--space-5);
    }
    
    .link-group h3 {
      color: white;
      font-size: 1.1rem;
      margin-bottom: var(--space-3);
    }
    
    .link-group ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .link-group li {
      margin-bottom: var(--space-2);
    }
    
    .link-group a {
      color: var(--neutral-400);
      transition: color var(--transition-fast);
    }
    
    .link-group a:hover {
      color: white;
    }
    
    .footer-bottom {
      padding-top: var(--space-4);
      border-top: 1px solid var(--neutral-700);
      text-align: center;
      color: var(--neutral-500);
      font-size: 0.9rem;
    }
    
    @media (min-width: 768px) {
      .footer-content {
        flex-direction: row;
        justify-content: space-between;
      }
      
      .footer-logo {
        flex: 1;
      }
      
      .footer-links {
        flex: 2;
        justify-content: flex-end;
      }
    }
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}