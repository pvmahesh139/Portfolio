import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content">
          <span class="intro-text">Hello, I'm</span>
          <h1 class="name">Venkata Mahesh Pedavegula</h1>
          <h2 class="title">Frontend Web Developer</h2>
          <p class="description">
            I build exceptional digital experiences with modern technologies.
            Focused on creating elegant and performant web applications.
          </p>
          <div class="cta-buttons">
            <a href="#projects" class="btn">View My Work</a>
            <a href="#contact" class="btn btn-outline">Contact Me</a>
          </div>
        </div>
        <div class="hero-image">
          <div class="image-container">
            <img src="https://dineshkumarreddyoggu.vercel.app/assets/image-CrY8FUoG.png" alt="John Doe" />
          </div>
        </div>
      </div>
      <div class="scroll-indicator">
        <span>Scroll Down</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </section>
  `,
  styles: `
    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding-top: 60px;
    }
    
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
    .hero-content {
      max-width: 600px;
      animation: fadeIn 0.8s ease forwards, slideUp 0.8s ease forwards;
      z-index: 10;
    }
    
    .intro-text {
      display: inline-block;
      font-size: 1.2rem;
      font-weight: 500;
      color: var(--primary-500);
      margin-bottom: var(--space-2);
    }
    
    .name {
      font-size: 3.5rem;
      font-weight: 700;
      letter-spacing: -0.5px;
      margin-bottom: var(--space-2);
      background: linear-gradient(135deg, var(--primary-500), var(--primary-700));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
    
    .title {
      font-size: 1.8rem;
      color: var(--neutral-700);
      margin-bottom: var(--space-3);
      font-weight: 500;
    }
    
    .description {
      font-size: 1.1rem;
      line-height: 1.6;
      color: var(--neutral-600);
      margin-bottom: var(--space-4);
    }
    
    .cta-buttons {
      display: flex;
      gap: var(--space-3);
      justify-content: center;
      margin-top: var(--space-3);
    }
    
    .btn {
      padding: var(--space-2) var(--space-4);
    }
    
    .hero-image {
      margin-top: var(--space-6);
      animation: fadeIn 1s ease 0.3s forwards;
      opacity: 0;
    }
    
    .image-container {
      width: 280px;
      height: 280px;
      border-radius: 50%;
      overflow: hidden;
      border: 4px solid white;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
    
    .image-container img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .scroll-indicator {
      position: absolute;
      bottom: var(--space-5);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      animation: bounce 2s infinite;
      color: var(--neutral-600);
      font-size: 0.9rem;
    }
    
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0) translateX(-50%);
      }
      40% {
        transform: translateY(-10px) translateX(-50%);
      }
      60% {
        transform: translateY(-5px) translateX(-50%);
      }
    }
    
    @media (min-width: 768px) {
      .container {
        flex-direction: row;
        text-align: left;
        justify-content: space-between;
      }
      
      .hero-content {
        margin-right: var(--space-6);
      }
      
      .cta-buttons {
        justify-content: flex-start;
      }
      
      .name {
        font-size: 4rem;
      }
      
      .hero-image {
        margin-top: 0;
      }
      
      .image-container {
        width: 320px;
        height: 320px;
      }
    }
  `
})
export class HeroComponent {}