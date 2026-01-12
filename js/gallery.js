/* ============================================
   Sebastian Spa Retreat - Gallery JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  initGalleryFilters();
  initLightbox();
});

/**
 * Gallery Filter Functionality
 */
function initGalleryFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (!filterButtons.length || !galleryItems.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      // Get filter category
      const filter = this.dataset.filter;

      // Filter gallery items
      galleryItems.forEach(item => {
        const category = item.dataset.category;

        if (filter === 'all' || category === filter) {
          item.style.display = 'block';
          item.style.animation = 'fadeIn 0.5s ease';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Lightbox Functionality
 */
function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');

  if (!galleryItems.length || !lightbox) return;

  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  let visibleItems = [];

  // Update visible items based on filter
  function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(item => {
      return item.style.display !== 'none';
    });
  }

  // Open lightbox
  galleryItems.forEach((item, index) => {
    item.addEventListener('click', function() {
      updateVisibleItems();
      currentIndex = visibleItems.indexOf(item);

      const img = item.querySelector('img');
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;

      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Navigate lightbox
  function showImage(index) {
    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    currentIndex = index;
    const img = visibleItems[currentIndex].querySelector('img');

    lightboxImg.style.opacity = '0';
    setTimeout(() => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxImg.style.opacity = '1';
    }, 150);
  }

  lightboxPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    showImage(currentIndex - 1);
  });

  lightboxNext.addEventListener('click', function(e) {
    e.stopPropagation();
    showImage(currentIndex + 1);
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!lightbox.classList.contains('active')) return;

    switch (e.key) {
      case 'Escape':
        closeLightbox();
        break;
      case 'ArrowLeft':
        showImage(currentIndex - 1);
        break;
      case 'ArrowRight':
        showImage(currentIndex + 1);
        break;
    }
  });

  // Touch swipe support
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        showImage(currentIndex + 1);
      } else {
        showImage(currentIndex - 1);
      }
    }
  }
}

// Add CSS animation keyframe
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  .lightbox-image {
    transition: opacity 0.15s ease;
  }
`;
document.head.appendChild(style);
