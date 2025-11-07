/**
 * Mobile sidebar swipe functionality
 * Handles touch gestures for opening/closing sidebars on mobile devices
 */

export class MobileSidebarManager {
  constructor() {
    this.leftSidebar = null;
    this.rightSidebar = null;
    this.overlay = null;
    this.mainContent = null;

    // Touch tracking variables
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.touchEndX = 0;
    this.touchEndY = 0;
    this.minSwipeDistance = 50;
    this.maxVerticalDistance = 100;

    this.init();
  }

  init() {
    // Wait for DOM elements to be available (React may not have mounted yet)
    this.waitForElements();
  }

  waitForElements() {
    this.leftSidebar = document.querySelector('.sidebar-left');
    this.rightSidebar = document.querySelector('.sidebar-right');
    this.overlay = document.getElementById('sidebar-overlay');
    this.mainContent = document.querySelector('.main-content');

    if (!this.leftSidebar || !this.rightSidebar || !this.overlay || !this.mainContent) {
      // Retry after a short delay
      setTimeout(() => this.waitForElements(), 100);
      return;
    }

    // Only initialize on mobile devices
    if (window.innerWidth > 768) return;

    this.initialized = true;
    this.addTouchListeners();
    this.addToggleButtons();
  }

  addTouchListeners() {
    // Touch start
    document.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
      this.touchStartY = e.touches[0].clientY;
    }, { passive: false });

    // Touch move - prevent scrolling during horizontal swipes
    document.addEventListener('touchmove', (e) => {
      if (!this.isHorizontalSwipe(e)) return;

      const currentX = e.touches[0].clientX;
      const deltaX = currentX - this.touchStartX;

      // If it's a significant horizontal swipe, prevent default scrolling
      if (Math.abs(deltaX) > 30) {
        e.preventDefault();
      }
    }, { passive: false });

    // Touch end
    document.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].clientX;
      this.touchEndY = e.changedTouches[0].clientY;
      this.handleSwipe();
    }, { passive: false });
  }

  isHorizontalSwipe(e) {
    const deltaX = Math.abs(e.touches[0].clientX - this.touchStartX);
    const deltaY = Math.abs(e.touches[0].clientY - this.touchStartY);
    return deltaX > deltaY && deltaX > 10;
  }

  handleSwipe() {
    const deltaX = this.touchEndX - this.touchStartX;
    const deltaY = Math.abs(this.touchEndY - this.touchStartY);

    // Ignore if vertical movement is too large
    if (deltaY > this.maxVerticalDistance) return;

    // Determine swipe direction and distance
    if (Math.abs(deltaX) < this.minSwipeDistance) return;

    // Left edge swipe - open left sidebar
    if (this.touchStartX < 50 && deltaX > 0) {
      this.openLeftSidebar();
    }
    // Right edge swipe - open right sidebar
    else if (this.touchStartX > window.innerWidth - 50 && deltaX < 0) {
      this.openRightSidebar();
    }
  }

  openLeftSidebar() {
    if (!this.leftSidebar || !this.overlay) return;
    this.leftSidebar.classList.add('active');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  openRightSidebar() {
    if (!this.rightSidebar || !this.overlay) return;
    this.rightSidebar.classList.add('active');
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeSidebars() {
    if (this.leftSidebar) this.leftSidebar.classList.remove('active');
    if (this.rightSidebar) this.rightSidebar.classList.remove('active');
    if (this.overlay) this.overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  addToggleButtons() {
    // Add toggle buttons to sidebars if they don't exist
    if (this.leftSidebar && !this.leftSidebar.querySelector('.sidebar-toggle')) {
      const leftToggle = document.createElement('button');
      leftToggle.className = 'sidebar-toggle';
      leftToggle.innerHTML = '☰';
      leftToggle.onclick = () => this.openLeftSidebar();
      this.leftSidebar.insertBefore(leftToggle, this.leftSidebar.firstChild);
    }

    if (this.rightSidebar && !this.rightSidebar.querySelector('.sidebar-toggle')) {
      const rightToggle = document.createElement('button');
      rightToggle.className = 'sidebar-toggle';
      rightToggle.innerHTML = '☰';
      rightToggle.onclick = () => this.openRightSidebar();
      this.rightSidebar.insertBefore(rightToggle, this.rightSidebar.firstChild);
    }

    // Add close button to overlay
    if (this.overlay && !this.overlay.querySelector('.sidebar-close')) {
      this.overlay.onclick = () => this.closeSidebars();
    }
  }
}

// Initialize on page load
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      window.mobileSidebarManager = new MobileSidebarManager();
    });
  } else {
    window.mobileSidebarManager = new MobileSidebarManager();
  }
}

