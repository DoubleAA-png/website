// ========== ALL PLUMBING COMPANY - MAIN APPLICATION ==========
(function() {
  'use strict';

  console.log("ALL Plumbing - Enhanced Script Loaded");

  // DOM Elements
  const preloader = document.getElementById('preloader');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');
  const bookTriggers = document.querySelectorAll('.book-trigger');
  const bookingModal = document.getElementById('bookingModal');
  const closeModalBtn = document.querySelector('.close-modal');
  const toastMsgDiv = document.getElementById('toastMsg');
  const contactForm = document.getElementById('contactForm');
  const bookingForm = document.getElementById('bookingForm');
  const shareBtn = document.getElementById('shareBtn');
  const saveBtn = document.getElementById('saveBtn');
  const sendToPhoneBtn = document.getElementById('sendToPhoneBtn');
  const loadMoreReviewsBtn = document.getElementById('loadMoreReviews');

  // Page Sections
  const sections = {
    home: document.getElementById('home-page'),
    services: document.getElementById('services-page'),
    whyus: document.getElementById('whyus-page'),
    reviews: document.getElementById('reviews-page'),
    about: document.getElementById('about-page'),
    contact: document.getElementById('contact-page')
  };

  // Data
  const servicesList = [
    { name: 'Water Heater Repair', icon: 'fas fa-water', desc: 'Tank & tankless experts, fast diagnosis' },
    { name: 'Drain Cleaning', icon: 'fas fa-broom', desc: 'Hydro-jetting and snaking for clogged drains' },
    { name: 'Pipe Replacement', icon: 'fas fa-ruler-combined', desc: 'Copper, PEX, repiping solutions' },
    { name: 'Toilet Installation', icon: 'fas fa-toilet', desc: 'Efficient, leak-free toilet install' },
    { name: 'Sump Pump Services', icon: 'fas fa-water', desc: 'Basement protection & repair' },
    { name: 'Leak Detection', icon: 'fas fa-search', desc: 'Advanced electronic leak detection' },
    { name: 'Gas Line Plumbing', icon: 'fas fa-fire', desc: 'Safe gas line installation and repair' },
    { name: 'Emergency Plumbing', icon: 'fas fa-truck', desc: '24/7 rapid response team' }
  ];

  const whyData = [
    { icon: 'fas fa-clock', title: 'Same-Day Service', text: 'We arrive within hours, not days.' },
    { icon: 'fas fa-dollar-sign', title: 'Upfront Pricing', text: 'No hidden fees, ever.' },
    { icon: 'fas fa-users', title: 'Family Owned', text: 'Local Charleston experts since 1998.' },
    { icon: 'fas fa-medal', title: 'Certified Pros', text: 'Licensed, insured, background-checked.' }
  ];

  // Reviews Data - 48 total reviews
  const reviewsData = [
    { name: "Megan Varn", rating: 5, text: "Zack did an outstanding job on my water heater. Showed up on time, explained everything, and left the area spotless.", response: "Thank you Megan! We're thrilled Zack provided excellent service.", date: "4 months ago" },
    { name: "Morgan Jose", rating: 5, text: "I recently had Tim come out to fix a stubborn leak. He was professional, knowledgeable, and fixed it quickly.", response: "We appreciate your 5-star rating, Morgan!", date: "3 months ago" },
    { name: "Jay Carter", rating: 5, text: "Emergency on a Sunday. They arrived within an hour and saved the day!", response: "We're always here for emergencies.", date: "3 months ago" },
    { name: "Paul David Santana", rating: 5, text: "First time using ALL Plumbing and I'm impressed. Their communication was excellent.", response: "Welcome to the ALL Plumbing family!", date: "2 months ago" },
    { name: "Tawanna Davis", rating: 5, text: "Shawn and Thomas were courteous, wore shoe covers, and explained everything.", response: "Thank you for your kind review!", date: "3 months ago" },
    { name: "Jennifer Buchanan", rating: 5, text: "Thomas installed a new kitchen faucet. Fast, clean, and reasonably priced.", response: "Glad you're happy with the installation!", date: "3 months ago" },
    { name: "Brandy Williams", rating: 5, text: "Came in lower than the competition. Great work and saved me money!", response: "Fair, competitive pricing always!", date: "2 months ago" },
    { name: "Joni Molyneaux", rating: 5, text: "Tim Kylie & Cain fixed our main water line issue. Professional and efficient.", response: "The team appreciates your kind words!", date: "5 months ago" },
    { name: "Sara Ackerman", rating: 5, text: "Bathroom remodel went smoothly. Highly recommend!", response: "Remodels are our specialty!", date: "3 months ago" },
    { name: "Bryon Horner", rating: 5, text: "Thomas did a great job on our drain cleaning. Fast, friendly, and effective.", response: "Thomas is a drain cleaning expert!", date: "4 months ago" },
    { name: "Tricia", rating: 5, text: "Tim and Cain repaired our toilet quickly. Friendly and explained everything.", response: "Glad the toilet repair went smoothly!", date: "5 months ago" },
    { name: "Andrea Short", rating: 5, text: "Helped with plumbing emergency on a holiday. True lifesavers!", response: "Always here, even on holidays!", date: "6 months ago" },
    { name: "Rick Johnson", rating: 5, text: "Plumbing emergency! They arrived in 45 minutes and fixed it within an hour.", response: "Rapid response is our specialty!", date: "4 months ago" },
    { name: "Brian Amara", rating: 5, text: "The only plumber I will call from now on. Honest, fair pricing.", response: "Honored to be your go-to plumber!", date: "3 months ago" },
    { name: "Greg Koroshec", rating: 5, text: "Rental property work was amazing. Tenants were very happy.", response: "Property managers love our reliable service!", date: "5 months ago" },
    { name: "Lisa Thigpen", rating: 5, text: "Quick response and professional work. Will recommend to everyone.", response: "Word-of-mouth is our best advertising!", date: "3 months ago" },
    { name: "Brooks Burdette", rating: 5, text: "From office staff to technicians, everyone was professional.", response: "Teamwork makes the dream work!", date: "9 months ago" },
    { name: "Kelly Hibbs", rating: 5, text: "Thomas diagnosed the issue quickly and fixed it before I knew it.", response: "Thomas appreciates your kind words!", date: "4 months ago" },
    { name: "Ethan Janik", rating: 5, text: "Fixed slab leak without tearing up the whole floor. Knowledgeable and friendly.", response: "Slab leaks require expertise!", date: "9 months ago" },
    { name: "Abs", rating: 5, text: "Went above and beyond. Cleaned up extra debris from previous plumber!", response: "Leaving it better than we found it!", date: "9 months ago" },
    { name: "Maria Fuhrman", rating: 5, text: "Robert explained everything and gave us options. Fantastic!", response: "Robert is a great asset to our team!", date: "2 months ago" },
    { name: "Charles Basford", rating: 5, text: "Quick, clean, and fair. Highly recommend for any plumbing needs.", response: "Thanks for your recommendation!", date: "9 months ago" },
    { name: "Abagail Otto", rating: 5, text: "Madi set up my appointment. Tech arrived on time and fixed everything.", response: "Madi and the team appreciate it!", date: "9 months ago" },
    { name: "David Moore", rating: 5, text: "Fit me in the same day. Great service from start to finish.", response: "Same-day service is our promise!", date: "a year ago" },
    { name: "Paige Wallace", rating: 5, text: "Professional, courteous, and reasonably priced. Great experience!", response: "Glad you had a great experience!", date: "a year ago" },
    { name: "Amelia Nathanson", rating: 5, text: "Bathroom renovation. Plumbing works perfectly, respectful of our home.", response: "Renovations are our specialty!", date: "9 months ago" },
    { name: "David Dennis", rating: 5, text: "Replaced toilet fill valve in no time. Great service, fair price.", response: "Quick fixes are our specialty!", date: "8 months ago" },
    { name: "Mary Stiebler", rating: 5, text: "Tim Kiley handled pipe replacement. Professional and efficient.", response: "Tim K. is a master plumber!", date: "a year ago" },
    { name: "Giselle Nicart", rating: 5, text: "Installed customer supplied toilet. Quick and fair price.", response: "Happy to install customer-supplied fixtures!", date: "a year ago" },
    { name: "Mary Teague", rating: 5, text: "Several plumbing jobs over the years. Consistent quality and fair pricing.", response: "Loyal customers make our business great!", date: "a year ago" },
    { name: "Matt Webber", rating: 5, text: "Honest, which is hard to find these days. Highly recommend.", response: "Honesty is our foundation!", date: "a year ago" },
    { name: "KC Newton", rating: 5, text: "On time, professional, and the work was perfect.", response: "Thanks for choosing us!", date: "3 months ago" },
    { name: "Bryan Neill", rating: 5, text: "Thomas diagnosed in minutes and fixed shortly after. Great!", response: "Thomas is a diagnostic wizard!", date: "4 months ago" },
    { name: "Jennings King", rating: 5, text: "Hard to find dependable service, but Tim and team delivered.", response: "Dependability is what we're known for!", date: "2 months ago" },
    { name: "Scott Wilson", rating: 4, text: "Tech was polite. Cost was fair and work was done well.", response: "We appreciate your business!", date: "3 months ago" },
    { name: "Mr Adams", rating: 4, text: "Good work but took a bit longer than expected.", response: "Working on improving our speed!", date: "2 years ago" },
    { name: "Brenda Carr", rating: 4, text: "Faucet fixed quickly. Price was reasonable.", response: "Quick fixes are our specialty!", date: "11 months ago" },
    { name: "Dusty Goodyear", rating: 4, text: "Helpful on the phone. Good work but communication could improve.", response: "Always improving, thanks for feedback!", date: "a year ago" },
    { name: "Patrick Murray", rating: 4, text: "Revised review after they made things right. Stands behind work.", response: "We always make things right!", date: "a year ago" },
    { name: "Megan McGraw Mozingo", rating: 5, text: "Excellent from first phone call to final invoice.", response: "Strive for excellence every day!", date: "a year ago" },
    { name: "Bill OShea", rating: 5, text: "Roger was friendly, knowledgeable, and efficient.", response: "Roger is a team favorite!", date: "5 months ago" },
    { name: "Pauline Bryant", rating: 5, text: "Fast and efficient repair on outdoor spigot.", response: "Outdoor spigots are tricky but we've got them covered!", date: "a year ago" },
    { name: "Sharon Reardon", rating: 5, text: "Kitchen sink leaking on Sunday. Came right out and fixed it.", response: "Sunday emergencies are what we do best!", date: "a year ago" },
    { name: "Jas Star", rating: 5, text: "Flooded basement turned around. Great service!", response: "Glad we could turn your day around!", date: "a year ago" },
    { name: "Denny Watson", rating: 5, text: "Joe fixed water heater fast and explained everything.", response: "Joe is a water heater wizard!", date: "4 months ago" },
    { name: "Damel Bryant", rating: 5, text: "Andrew and Mark did amazing repipe. Better water pressure now!", response: "Repipes are a big job, glad it went smoothly!", date: "10 months ago" },
    { name: "Brenda Struk", rating: 5, text: "Quick response on holiday weekend. No extra charge for holiday.", response: "No holiday surcharges, ever!", date: "3 months ago" },
    { name: "Rebecca Russell", rating: 5, text: "Same day service. Tech fixed clogged drain fast.", response: "Same-day service is our promise!", date: "2 years ago" },
    { name: "Dan Weindling", rating: 5, text: "Stopped up toilet cleared in minutes. Great price too.", response: "Toilet clogs are no match for our augers!", date: "4 months ago" },
    { name: "Terry Bryant", rating: 5, text: "Tim Kiley quick to show up and fix leak. Will use again.", response: "Tim K. is one of our fastest technicians!", date: "a year ago" }
  ];

  let currentPage = 'home';
  let countersStarted = false;
  let reviewsLoaded = 9;
  let isLoadingMore = false;
  let scrollObserver = null;
  let countersObserver = null;

  // Helper Functions
  function getStarHtml(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
      html += i <= rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
    }
    return html;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
      if (m === '&') return '&amp;';
      if (m === '<') return '&lt;';
      if (m === '>') return '&gt;';
      return m;
    });
  }

  function generateReviewHTML(review, idx) {
    const stars = getStarHtml(review.rating);
    const responseId = 'resp-' + Date.now() + '-' + idx;
    return '<div class="review-card animate-on-scroll">' +
      '<div class="stars">' + stars + '</div>' +
      '<strong>' + escapeHtml(review.name) + '</strong>' +
      '<p>' + escapeHtml(review.text.substring(0, 180)) + (review.text.length > 180 ? '…' : '') + '</p>' +
      '<button class="owner-response-btn" data-target="' + responseId + '" aria-label="View owner response">' +
      '<i class="fas fa-reply"></i> View owner response</button>' +
      '<div id="' + responseId + '" class="owner-response-content">' +
      '<div class="owner-response-text"><i class="fas fa-building"></i> ' + escapeHtml(review.response || "No response yet") + '</div>' +
      '</div>' +
      '<small>' + escapeHtml(review.date) + '</small>' +
      '</div>';
  }

  // Response Toggle
  document.addEventListener('click', function(e) {
    var btn = e.target.closest('.owner-response-btn');
    if (!btn) return;
    var targetId = btn.getAttribute('data-target');
    var contentDiv = document.getElementById(targetId);
    if (contentDiv) {
      contentDiv.classList.toggle('show');
      btn.innerHTML = contentDiv.classList.contains('show') ? '<i class="fas fa-reply"></i> Hide response' : '<i class="fas fa-reply"></i> View owner response';
    }
  });

  function getRatingDistribution() {
    var dist = {5:0, 4:0, 3:0, 2:0, 1:0};
    for (var i = 0; i < reviewsData.length; i++) {
      var r = reviewsData[i];
      if (r.rating >= 1 && r.rating <= 5) dist[r.rating]++;
    }
    return dist;
  }

  function renderAllReviews() {
    var container = document.getElementById('allReviewsList');
    if (!container) return;
    var initial = reviewsData.slice(0, reviewsLoaded);
    var html = '';
    for (var i = 0; i < initial.length; i++) {
      html += generateReviewHTML(initial[i], i);
    }
    container.innerHTML = html;
    
    var ratingBarsDiv = document.getElementById('ratingBars');
    if (ratingBarsDiv) {
      var dist = getRatingDistribution();
      var total = reviewsData.length;
      ratingBarsDiv.innerHTML = 
        '<div><strong>5 ★</strong> <progress value="' + dist[5] + '" max="' + total + '"></progress> ' + Math.round((dist[5]/total)*100) + '% (' + dist[5] + ' reviews)</div>' +
        '<div><strong>4 ★</strong> <progress value="' + dist[4] + '" max="' + total + '"></progress> ' + Math.round((dist[4]/total)*100) + '% (' + dist[4] + ' reviews)</div>' +
        '<div><strong>3 ★</strong> <progress value="' + dist[3] + '" max="' + total + '"></progress> ' + Math.round((dist[3]/total)*100) + '% (' + dist[3] + ' reviews)</div>' +
        '<div><strong>2 ★</strong> <progress value="' + dist[2] + '" max="' + total + '"></progress> ' + Math.round((dist[2]/total)*100) + '% (' + dist[2] + ' reviews)</div>' +
        '<div><strong>1 ★</strong> <progress value="' + dist[1] + '" max="' + total + '"></progress> ' + Math.round((dist[1]/total)*100) + '% (' + dist[1] + ' reviews)</div>';
    }
    
    if (loadMoreReviewsBtn) {
      loadMoreReviewsBtn.classList.toggle('hidden', reviewsLoaded >= reviewsData.length);
    }
    
    var totalCountSpan = document.getElementById('totalReviewCount');
    if (totalCountSpan) totalCountSpan.innerText = reviewsData.length;
    
    triggerScrollAnimations();
  }

  function loadMoreReviews() {
    if (isLoadingMore) return;
    if (reviewsLoaded >= reviewsData.length) {
      showToast('All reviews loaded');
      if (loadMoreReviewsBtn) loadMoreReviewsBtn.classList.add('hidden');
      return;
    }
    
    isLoadingMore = true;
    var container = document.getElementById('allReviewsList');
    if (!container) {
      isLoadingMore = false;
      return;
    }
    
    var nextBatch = reviewsData.slice(reviewsLoaded, reviewsLoaded + 6);
    for (var i = 0; i < nextBatch.length; i++) {
      container.insertAdjacentHTML('beforeend', generateReviewHTML(nextBatch[i], reviewsLoaded + i));
    }
    reviewsLoaded += nextBatch.length;
    
    if (loadMoreReviewsBtn && reviewsLoaded >= reviewsData.length) {
      loadMoreReviewsBtn.classList.add('hidden');
    }
    
    showToast(nextBatch.length + ' more reviews loaded');
    isLoadingMore = false;
    triggerScrollAnimations();
  }

  if (loadMoreReviewsBtn) {
    loadMoreReviewsBtn.addEventListener('click', loadMoreReviews);
  }

  function showPage(pageId) {
    if (!sections[pageId]) return;
    for (var key in sections) {
      if (sections[key]) sections[key].classList.remove('active-page-section');
    }
    sections[pageId].classList.add('active-page-section');
    for (var i = 0; i < navLinks.length; i++) {
      var link = navLinks[i];
      var linkPage = link.getAttribute('data-page');
      if (linkPage === pageId) {
        link.classList.add('active-page');
      } else {
        link.classList.remove('active-page');
      }
    }
    currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (pageId === 'home') {
      triggerCountersAndStars();
    }
    if (pageId === 'reviews') {
      renderAllReviews();
    }
    triggerScrollAnimations();
  }

  // Navigation
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
      e.preventDefault();
      var page = this.getAttribute('data-page');
      if (page) showPage(page);
      if (mainNav) mainNav.classList.remove('active');
      if (mobileOverlay) mobileOverlay.classList.remove('active');
      if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  }

  var dataPageBtns = document.querySelectorAll('[data-page]');
  for (var i = 0; i < dataPageBtns.length; i++) {
    dataPageBtns[i].addEventListener('click', function() {
      var page = this.getAttribute('data-page');
      if (page) showPage(page);
    });
  }

  // Mobile Menu
  if (hamburgerBtn && mainNav) {
    hamburgerBtn.addEventListener('click', function() {
      var isExpanded = mainNav.classList.contains('active');
      mainNav.classList.toggle('active');
      if (mobileOverlay) mobileOverlay.classList.toggle('active');
      hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    });
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', function() {
      mainNav.classList.remove('active');
      mobileOverlay.classList.remove('active');
      if (hamburgerBtn) hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  }

  // Preloader
  if (preloader) {
    window.addEventListener('load', function() {
      setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';
        setTimeout(function() {
          if (preloader) preloader.style.display = 'none';
        }, 500);
      }, 800);
    });
  }

  // Counters
  function triggerCountersAndStars() {
    if (!countersStarted) {
      countersStarted = true;
      var statCards = document.querySelectorAll('.stat-card');
      for (var i = 0; i < statCards.length; i++) {
        var card = statCards[i];
        var target = parseInt(card.getAttribute('data-target'), 10);
        var numSpan = card.querySelector('.stat-number');
        if (target && numSpan && !numSpan.dataset.animated) {
          numSpan.dataset.animated = 'true';
          var current = 0;
          var duration = 1500;
          var stepTime = 20;
          var steps = duration / stepTime;
          var increment = target / steps;
          var interval = setInterval(function(numSpan, target, increment) {
            return function() {
              current += increment;
              if (current >= target) {
                numSpan.innerText = target;
                clearInterval(interval);
              } else {
                numSpan.innerText = Math.floor(current);
              }
            };
          }(numSpan, target, increment), stepTime);
        }
      }
      
      var starFill = document.querySelector('.stars-filled');
      if (starFill && !starFill.dataset.filled) {
        starFill.dataset.filled = 'true';
        setTimeout(function() { starFill.style.width = '92%'; }, 200);
      }
    } else {
      var statCards = document.querySelectorAll('.stat-card');
      for (var i = 0; i < statCards.length; i++) {
        var card = statCards[i];
        var target = parseInt(card.getAttribute('data-target'), 10);
        var numSpan = card.querySelector('.stat-number');
        if (target && numSpan && numSpan.innerText !== target.toString()) {
          numSpan.innerText = target;
        }
      }
    }
  }

  var statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    countersObserver = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !countersStarted) {
        triggerCountersAndStars();
        if (countersObserver) countersObserver.disconnect();
      }
    }, { threshold: 0.3 });
    countersObserver.observe(statsSection);
  }

  // Render Functions
  function renderServicesPreview() {
    var grid = document.getElementById('servicesPreviewGrid');
    if (grid) {
      var html = '';
      for (var i = 0; i < 4; i++) {
        var s = servicesList[i];
        html += '<div class="service-card animate-on-scroll">' +
          '<i class="' + s.icon + '"></i>' +
          '<h3>' + s.name + '</h3>' +
          '<p>' + s.desc + '</p>' +
          '<button class="btn-outline book-trigger">Book Now</button>' +
          '</div>';
      }
      grid.innerHTML = html;
    }
  }

  function renderFullServices() {
    var fullGrid = document.getElementById('fullServicesList');
    if (fullGrid) {
      var html = '';
      for (var i = 0; i < servicesList.length; i++) {
        var s = servicesList[i];
        html += '<div class="service-card animate-on-scroll">' +
          '<i class="' + s.icon + '"></i>' +
          '<h3>' + s.name + '</h3>' +
          '<p>' + s.desc + '</p>' +
          '<button class="btn-outline book-trigger">Book Now</button>' +
          '</div>';
      }
      fullGrid.innerHTML = html;
    }
  }

  function renderWhyPreview() {
    var grid = document.getElementById('whyPreviewGrid');
    if (grid) {
      var html = '';
      for (var i = 0; i < whyData.length; i++) {
        var w = whyData[i];
        html += '<div class="why-card animate-on-scroll">' +
          '<i class="' + w.icon + '"></i>' +
          '<h3>' + w.title + '</h3>' +
          '<p>' + w.text + '</p>' +
          '</div>';
      }
      grid.innerHTML = html;
    }
  }

  function renderFeaturedReviews() {
    var container = document.getElementById('featuredReviews');
    if (container) {
      var html = '';
      for (var i = 0; i < 3; i++) {
        html += generateReviewHTML(reviewsData[i], i);
      }
      container.innerHTML = html;
    }
  }

  // Modal
  function openModal() {
    if (bookingModal) {
      bookingModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      var firstInput = bookingModal.querySelector('input');
      if (firstInput) firstInput.focus();
    }
  }

  function closeModal() {
    if (bookingModal) {
      bookingModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && bookingModal && bookingModal.style.display === 'flex') {
      closeModal();
    }
  });

  for (var i = 0; i < bookTriggers.length; i++) {
    bookTriggers[i].addEventListener('click', openModal);
  }
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', function(e) { if (e.target === bookingModal) closeModal(); });

  if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var submitBtn = document.getElementById('bookingSubmitBtn');
      if (submitBtn) {
        var originalText = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        setTimeout(function() {
          showToast('Booking request sent! We\'ll call you ASAP.');
          closeModal();
          bookingForm.reset();
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 1000);
      }
    });
  }

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var nameInput = contactForm.querySelector('input[placeholder="Full name"]');
      var emailInput = contactForm.querySelector('input[placeholder="Email address"]');
      
      if (!nameInput.value.trim()) {
        showToast('Please enter your name');
        nameInput.focus();
        return;
      }
      
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        showToast('Please enter a valid email address');
        emailInput.focus();
        return;
      }
      
      showToast('Message sent! A plumber will reply within 1 hour.');
      contactForm.reset();
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener('click', function() {
      if (navigator.share) {
        navigator.share({ title: 'ALL Plumbing Company', text: 'Charleston\'s best plumbers! 24/7 service.', url: 'https://allplumbingcompany.com' }).catch(function() { showToast('Share cancelled'); });
      } else {
        navigator.clipboard.writeText('ALL Plumbing Company - (843) 761-8002');
        showToast('Copied to clipboard!');
      }
    });
  }

  if (saveBtn) {
    saveBtn.addEventListener('click', function() {
      localStorage.setItem('saved_plumber', 'ALL Plumbing - (843) 761-8002');
      showToast('Contact saved to browser!');
    });
  }

  if (sendToPhoneBtn) {
    sendToPhoneBtn.addEventListener('click', function() {
      window.location.href = 'sms:?body=ALL Plumbing Company, Charleston: (843) 761-8002';
    });
  }

  function triggerScrollAnimations() {
    if (scrollObserver) {
      scrollObserver.disconnect();
    }
    var elements = document.querySelectorAll('.service-card, .why-card, .review-card, .stat-card, .team-card');
    scrollObserver = new IntersectionObserver(function(entries) {
      for (var i = 0; i < entries.length; i++) {
        if (entries[i].isIntersecting) {
          entries[i].target.classList.add('visible');
        }
      }
    }, { threshold: 0.15 });
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('animate-on-scroll');
      scrollObserver.observe(elements[i]);
    }
  }

  function showToast(message, duration) {
    if (!toastMsgDiv) return;
    duration = duration || 3000;
    toastMsgDiv.innerText = message;
    toastMsgDiv.style.opacity = '1';
    setTimeout(function() {
      if (toastMsgDiv) toastMsgDiv.style.opacity = '0';
    }, duration);
  }

  function init() {
    console.log("Initializing ALL Plumbing...");
    renderServicesPreview();
    renderFullServices();
    renderWhyPreview();
    renderFeaturedReviews();
    renderAllReviews();
    triggerScrollAnimations();
    showPage('home');
    console.log("Initialization complete. Total reviews: " + reviewsData.length);
  }

  init();
})();