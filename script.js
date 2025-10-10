// ========================================
// ハンバーガーメニュー
// ========================================

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

// メニューリンクをクリックしたらメニューを閉じる
const navLinks = document.querySelectorAll('.nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});

// ========================================
// スムーススクロール
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// スクロールアニメーション
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象要素を設定
const animateElements = document.querySelectorAll('.feature-card, .mama-content, .info-item, .price-card');

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// ヘッダーのスクロール時の背景変更
// ========================================

const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ========================================
// 電話番号クリックの処理（モバイルのみ）
// ========================================

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (!isMobile) {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('お電話でのお問い合わせ: ' + link.textContent);
        });
    });
}

// ========================================
// ページ読み込み時のアニメーション
// ========================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ========================================
// 外部クリック時にメニューを閉じる
// ========================================

document.addEventListener('click', (e) => {
    if (nav.classList.contains('active')) {
        if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
        }
    }
});

// ========================================
// スライドショー機能
// ========================================

class Slideshow {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.indicators = document.querySelectorAll('.indicator');
        this.prevBtn = document.querySelector('.slide-btn.prev');
        this.nextBtn = document.querySelector('.slide-btn.next');
        this.currentSlide = 0;
        this.autoPlayInterval = null;
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.init();
    }

    init() {
        if (!this.slides.length) return;

        // ボタンのイベントリスナー
        this.prevBtn.addEventListener('click', () => this.prevSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // インジケーターのイベントリスナー
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // タッチイベント（スワイプ対応）
        const wrapper = document.querySelector('.slideshow-wrapper');
        wrapper.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        });

        wrapper.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        // マウスドラッグ対応（PC用）
        let isDragging = false;
        let dragStartX = 0;

        wrapper.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragStartX = e.clientX;
        });

        wrapper.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
        });

        wrapper.addEventListener('mouseup', (e) => {
            if (!isDragging) return;
            isDragging = false;
            const dragEndX = e.clientX;
            const diff = dragStartX - dragEndX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.nextSlide();
                } else {
                    this.prevSlide();
                }
            }
        });

        wrapper.addEventListener('mouseleave', () => {
            isDragging = false;
        });

        // 自動再生
        this.startAutoPlay();

        // ホバーで自動再生を停止
        const container = document.querySelector('.slideshow-container');
        container.addEventListener('mouseenter', () => this.stopAutoPlay());
        container.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    handleSwipe() {
        const diff = this.touchStartX - this.touchEndX;

        // 50px以上のスワイプで反応
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                // 左スワイプ - 次へ
                this.nextSlide();
            } else {
                // 右スワイプ - 前へ
                this.prevSlide();
            }
        }
    }

    goToSlide(n) {
        this.slides[this.currentSlide].classList.remove('active');
        this.indicators[this.currentSlide].classList.remove('active');

        this.currentSlide = n;

        this.slides[this.currentSlide].classList.add('active');
        this.indicators[this.currentSlide].classList.add('active');
    }

    nextSlide() {
        let next = this.currentSlide + 1;
        if (next >= this.slides.length) {
            next = 0;
        }
        this.goToSlide(next);
    }

    prevSlide() {
        let prev = this.currentSlide - 1;
        if (prev < 0) {
            prev = this.slides.length - 1;
        }
        this.goToSlide(prev);
    }

    startAutoPlay() {
        this.stopAutoPlay(); // 既存のタイマーをクリア
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // 5秒ごとに自動切り替え
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }
}

// スライドショーを初期化
document.addEventListener('DOMContentLoaded', () => {
    new Slideshow();
});
