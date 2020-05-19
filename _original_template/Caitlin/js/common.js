$(document).ready(function() {
  'use strict';

  var menuOpenIcon = $(".nav__icon-menu"),
    menuCloseIcon = $(".nav__icon-close"),
    menuList = $(".menu-overlay"),
    searchOpenIcon = $(".nav__icon-search"),
    searchCloseIcon = $(".search__close"),
    searchBox = $(".search"),
    boxHeight = $(".box-height");


  /* =======================
  // Menu and Search
  ======================= */
  menuOpenIcon.click(function() {
    menuOpen();
  })

  menuCloseIcon.click(function () {
    menuClose();
  })

  searchOpenIcon.click(function () {
    searchOpen();
  });

  searchCloseIcon.click(function () {
    searchClose();
  });

  function menuOpen() {
    menuList.addClass("is-open");
  }

  function menuClose() {
    menuList.removeClass("is-open");
  }

  function searchOpen() {
    searchBox.addClass("is-visible");
  }

  function searchClose() {
    searchBox.removeClass("is-visible");
  }


  /* =======================
  // Animation Load Page
  ======================= */
  setTimeout(function(){
    $('body').addClass('is-in');
  },200)


  /* =======================
  // Hide Header
  ======================= */
  header();

  function header() {
    var initialScroll;
    $(window).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll > initialScroll && initialScroll > 80) {
        $('.header').addClass('is-hide');
      } else {
        $('.header').removeClass('is-hide');
      }
      initialScroll = scroll;
      
      if (scroll > boxHeight.innerHeight() - 120) {
        $('.header').addClass('bg-white');
      } else if (scroll == 0) {
        $('.header').removeClass('bg-white');
      }
    });
  }


  /* =======================
  // Masonry Grid Layout
  ======================= */
  var $grid = $('.grid').masonry({
    itemSelector: '.grid__post',
    percentPosition: true
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });


  // =====================
  // Ajax Load More
  // =====================
  var $load_posts_button = $('.load-more-posts');

  $load_posts_button.click(function(e) {
    e.preventDefault();
    var loadMore = $('.load-more-section');
    var request_next_link = pagination_next_url.split('/page')[0] + '/page/' + pagination_next_page_number + '/';

    $.ajax({
      url: request_next_link,
      beforeSend: function() {
        $load_posts_button.text('Loading...');
      }
    }).done(function(data) {
      var posts = $('.grid__post', data);
      $('.grid').append(posts).masonry('appended', posts);
      $grid.imagesLoaded().progress(function() {
        $grid.masonry('layout');
      });

      $load_posts_button.text('Load More');
      pagination_next_page_number++;

      if (pagination_next_page_number > pagination_available_pages_number) {
        loadMore.addClass('hide');
      }
    });
  });


  /* =======================
  // Responsive Videos
  ======================= */
  $(".post__content, .page__content").fitVids({
    customSelector: ['iframe[src*="ted.com"]', 'iframe[src*="facebook.com"]']
  });


  /* =======================
  // Zoom Image
  ======================= */
  $(".page img, .post img").attr("data-action", "zoom");
  $(".page a img, .post a img").removeAttr("data-action", "zoom");


  /* =======================
  // Instagram Feed
  ======================= */
  var userId = $('#instafeed').attr('data-userId');
  var accessToken = $('#instafeed').attr('data-accessToken');
  var instagramFeed = new Instafeed({
    get: 'user',
    limit: 6,
    resolution: 'standard_resolution',
    userId: userId,
    accessToken: accessToken,
    template:
      '<li class="instagram-item"><a href="{{link}}" class="instagram-link" aria-label="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a></li>'
  });

  if ($('#instafeed').length) {
    instagramFeed.run();
  }


  /* =======================
  // Scroll Top Button
  ======================= */
  $(".top").click(function() {
    $("html, body")
      .stop()
      .animate({ scrollTop: 0 }, "slow", "swing");
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > $(window).height()) {
      $(".top").addClass("is-active");
    } else {
      $(".top").removeClass("is-active");
    }
  });


  /* ==================================
  // If the hero section is disabled
  =================================== */
  if (!$(".hero, .post-image, .page-image").hasClass("box-height")) {
    $(".content, .header").addClass("without-hero");
  }

});