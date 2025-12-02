// 立即定义全局函数，确保在任何时候都可用
window.scrollToSection = function(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return true;
    } else {
        console.warn('Section not found:', sectionId);
        return false;
    }
};

// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    try {
        initNavigation();
    } catch(e) {
        console.error('导航初始化失败:', e);
    }

    try {
        initScrollEffects();
    } catch(e) {
        console.error('滚动效果初始化失败:', e);
    }

    try {
        initCounters();
    } catch(e) {
        console.error('计数器初始化失败:', e);
    }

    try {
        initRobotAnimations();
    } catch(e) {
        console.error('机器人动画初始化失败:', e);
    }

    try {
        initCopyButtons();
    } catch(e) {
        console.error('复制按钮初始化失败:', e);
    }

    try {
        initScrollAnimations();
    } catch(e) {
        console.error('滚动动画初始化失败:', e);
    }

    try {
        initTypingEffect();
    } catch(e) {
        console.error('打字机效果初始化失败:', e);
    }

    try {
        initParallaxEffects();
    } catch(e) {
        console.error('视差效果初始化失败:', e);
    }

    try {
        initLanguageSwitcher();
    } catch(e) {
        console.error('语言切换器初始化失败:', e);
    }
});

// 导航栏功能
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // 滚动时导航栏效果
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 15, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 255, 204, 0.2)';
        } else {
            navbar.style.background = 'rgba(10, 10, 15, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // 移动端菜单切换
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // 点击导航链接关闭菜单
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// 平滑滚动效果
function initScrollEffects() {
    // 函数已在全局定义，这里不需要重复定义

    // 滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    document.querySelectorAll('.feature-card, .use-case-card, .step-card').forEach(card => {
        observer.observe(card);
    });
}

// 数字计数器动画
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    console.log('初始化计数器，找到', counters.length, '个统计数字');

    if (counters.length === 0) {
        console.warn('未找到任何计数器元素！');
        return;
    }

    // 检查每个计数器的data-target属性
    counters.forEach((counter, index) => {
        const target = counter.getAttribute('data-target');
        console.log(`计数器 ${index + 1}: target=${target}, 当前值=${counter.innerText}`);
    });

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 10);
        } else {
            counter.innerText = target;
            console.log('计数完成:', target);
        }
    };

    // 立即开始计数（调试用）
    console.log('立即开始所有计数器...');
    counters.forEach((counter, index) => {
        setTimeout(() => {
            console.log(`开始计数器 ${index + 1}:`, counter.getAttribute('data-target'));
            countUp(counter);
        }, index * 500); // 每个计数器延迟500ms开始
    });

    // 备用方案：Intersection Observer
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                console.log('Intersection Observer触发计数:', entry.target.getAttribute('data-target'));
                countUp(entry.target);
            }
        });
    }, { threshold: 0.1 }); // 极低阈值

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// 机器人动画效果
function initRobotAnimations() {
    const robotHead = document.querySelector('.robot-head');
    const robotEyes = document.querySelectorAll('.robot-eye');

    if (robotHead && robotEyes.length > 0) {
        // 鼠标跟随效果
        document.addEventListener('mousemove', (e) => {
            const eyes = robotEyes;
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            eyes.forEach((eye, index) => {
                const eyeRect = eye.getBoundingClientRect();
                const eyeCenterX = eyeRect.left + eyeRect.width / 2;
                const eyeCenterY = eyeRect.top + eyeRect.height / 2;

                const angle = Math.atan2(mouseY - eyeCenterY, mouseX - eyeCenterX);
                const distance = Math.min(5, Math.hypot(mouseX - eyeCenterX, mouseY - eyeCenterY) / 50);

                const pupilX = Math.cos(angle) * distance;
                const pupilY = Math.sin(angle) * distance;

                eye.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
            });
        });

        // 点击机器人时的互动效果
        robotHead.addEventListener('click', function() {
            this.style.animation = 'none';
            setTimeout(() => {
                this.style.animation = 'robot-head-bounce 0.6s ease-in-out';
            }, 10);

            // 创建粒子效果
            createParticleEffect(robotHead);
        });
    }
}

// 创建粒子效果
function createParticleEffect(element) {
    const rect = element.getBoundingClientRect();
    const particles = 8;

    for (let i = 0; i < particles; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: var(--primary-color);
            border-radius: 50%;
            left: ${rect.left + rect.width / 2}px;
            top: ${rect.top + rect.height / 2}px;
            pointer-events: none;
            z-index: 9999;
        `;

        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / particles;
        const velocity = 100 + Math.random() * 100;

        particle.animate([
            {
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 1
            },
            {
                transform: `translate(${Math.cos(angle) * velocity - 50}px, ${Math.sin(angle) * velocity - 50}px) scale(0)`,
                opacity: 0
            }
        ], {
            duration: 600,
            easing: 'cubic-bezier(0, .9, .57, 1)'
        }).onfinish = () => particle.remove();
    }
}

// 复制代码功能
function initCopyButtons() {
    window.copyCode = function(button) {
        const codeBlock = button.nextElementSibling || button.previousElementSibling;
        const code = codeBlock.querySelector('code');
        const text = code.textContent;

        navigator.clipboard.writeText(text).then(() => {
            const originalText = button.textContent;
            button.textContent = '已复制!';
            button.style.background = 'rgba(0, 255, 204, 0.3)';

            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = 'rgba(0, 255, 204, 0.1)';
            }, 2000);
        }).catch(err => {
            console.error('复制失败:', err);
            button.textContent = '复制失败';
            setTimeout(() => {
                button.textContent = '复制';
            }, 2000);
        });
    };
}

// 滚动动画效果
function initScrollAnimations() {
    // 添加CSS动画类
    const style = document.createElement('style');
    style.textContent = `
        .feature-card, .use-case-card, .step-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }

        .feature-card.visible, .use-case-card.visible, .step-card.visible {
            opacity: 1;
            transform: translateY(0);
        }

        @keyframes robot-head-bounce {
            0%, 100% { transform: scale(1) rotate(0deg); }
            25% { transform: scale(1.1) rotate(-5deg); }
            75% { transform: scale(0.9) rotate(5deg); }
        }
    `;
    document.head.appendChild(style);
}

// 打字机效果
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid var(--primary-color)';

        let charIndex = 0;
        const typeWriter = () => {
            if (charIndex < text.length) {
                heroTitle.textContent += text.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 30); // 从100ms减少到30ms，显示更快
            } else {
                heroTitle.style.borderRight = 'none';
            }
        };

        setTimeout(typeWriter, 500); // 从2000ms减少到500ms，更快开始
    }
}

// 视差滚动效果
function initParallaxEffects() {
    const cyberGrid = document.querySelector('.cyber-grid');
    const particles = document.querySelector('.particles');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        if (cyberGrid) {
            cyberGrid.style.transform = `translateY(${scrolled * 0.5}px)`;
        }

        if (particles) {
            particles.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
}

// 性能优化：节流函数
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// 优化滚动事件
window.addEventListener('scroll', throttle(function() {
    // 这里可以添加其他滚动相关的事件
}, 100));

// 添加键盘导航
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // ESC键关闭移动端菜单
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        if (navMenu && hamburger) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
});

// 添加触摸滑动支持
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');

        if (navMenu && hamburger) {
            if (diff > 0 && navMenu.classList.contains('active')) {
                // 向左滑动，关闭菜单
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        }
    }
}

// 页面可见性API - 优化性能
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // 页面隐藏时暂停动画
        document.querySelectorAll('.particles, .cyber-grid').forEach(el => {
            el.style.animationPlayState = 'paused';
        });
    } else {
        // 页面显示时恢复动画
        document.querySelectorAll('.particles, .cyber-grid').forEach(el => {
            el.style.animationPlayState = 'running';
        });
    }
});

// 懒加载图片（如果有的话）
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面错误:', e.error);
    // 可以在这里添加错误上报逻辑
});


// Language switching functionality
function initLanguageSwitcher() {
    // Store current scroll position before language switch
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Store the current scroll position and hash
            const scrollPosition = window.scrollY;
            const currentHash = window.location.hash;

            // Navigate to the new language page
            window.location.href = this.href + currentHash;

            // Store scroll position in sessionStorage for the new page to use
            sessionStorage.setItem('languageSwitchScroll', scrollPosition);
        });
    });

    // Restore scroll position if coming from language switch
    const storedScrollPosition = sessionStorage.getItem('languageSwitchScroll');
    if (storedScrollPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(storedScrollPosition));
            sessionStorage.removeItem('languageSwitchScroll');
        }, 100);
    }
}

// 添加加载完成动画
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});