// header S
    // 모바일 메뉴 S
    function depth1(idx) {
        // 모바일
        if ($(window).width() > 1200) return;

        var $depth1 = $('.menuOpenbottom .depth1Menu > li').eq(idx);

        if ($depth1.hasClass("active")) {
            $depth1.removeClass('active');
            $depth1.find('.depth2Menu').stop().slideUp(200);
        } else {
            $('.menuOpenbottom .depth1Menu > li').removeClass('active');
            $depth1.addClass('active');
            $('.menuOpenbottom .depth2Menu').stop().slideUp(200);
            $depth1.find('.depth2Menu').stop().slideDown(200);
        }
    }

    // 창 크기 변경 시 메뉴 초기화 (옵션)
    $(window).on('resize', function() {
        if ($(window).width() > 1200) {
            $('.menuOpenbottom .depth1Menu > li').removeClass('active');
            $('.menuOpenbottom .depth2Menu').stop().slideUp(0);
        }
    });

    function btnMenuOpen(){
        $('.menuOpen').addClass('active');
    }

    function btnMenuClose(){
        $('.menuOpen').removeClass('active');
    }
    // 모바일 메뉴 E

    // 로그인 팝업 S
    function loginPop(){
        $('.loginPopWrap').addClass('active');
    }

    function btnClose(){
        $('.loginPopWrap').removeClass('active');
    }

    // input 창 focus
    $(function(){
        $(".idInput").on('focusin', function() {
            $(this).addClass('focus');
        })
        $(".idInput").on('focusout', function() {
            $(this).removeClass('focus');
        })
    });

    $(function(){
        $(".passwordInput").on('focusin', function() {
            $(this).addClass('focus');
        })
        $(".passwordInput").on('focusout', function() {
            $(this).removeClass('focus');
        })
    });   

    const searchBox = document.querySelector('.loginPopCont');

    // 바깥 클릭 시 닫기
    document.addEventListener('click', (e) => {
        // searchBox 영역 안을 클릭한 경우는 무시
        if (!searchBox.contains(e.target)) {
        searchBox.classList.remove('active');
        }
    });
    // 로그인 팝업 E    


    // 피시 메뉴 S
    if ($(window).width() >= 1200) {
        $('.nav').hover(
            function() {
                if ($(window).width() >= 1200) {
                    // 마우스 인
                    $(this).addClass('on');
                }
            },
            function() {
                if ($(window).width() >= 1200) {
                    // 마우스 아웃
                    $(this).removeClass('on');
                }
            }
        );
    }


    const nav = document.querySelector('#header .nav');
    const header02 = document.querySelector('#header');

    const observer = new MutationObserver(() => {
        if (nav.classList.contains('on')) {
            header02.classList.add('on');
        } else {
            header02.classList.remove('on');
        }
    });

    observer.observe(nav, { attributes: true, attributeFilter: ['class'] });
    // 피시 메뉴 E



    // 반응형 사이즈에 따른메뉴 클릭 S
    document.querySelectorAll('.depth1Menu li a').forEach(a => {
        a.addEventListener('click', function(e) {
            if (window.innerWidth < 1200) {
                e.preventDefault(); // 1200px 미만에서는 링크 작동 막기
            }
        });
    });
    // 반응형 사이즈에 따른 메뉴 클릭 E
// header E


// footer S
    // 주소 복사하기 S
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.btnCopy').forEach(btn => {
            btn.addEventListener('click', async () => {
            const box = btn.closest('.addressBox');
            if (!box) return;

            // on 클래스 1초 유지
            box.classList.add('on');
            clearTimeout(box._onTimer);
            box._onTimer = setTimeout(() => box.classList.remove('on'), 1000);

            // 주소 복사 (해당 박스 기준)
            const addrEl = box.querySelector('.address');
            if (addrEl) {
                await navigator.clipboard.writeText(addrEl.textContent.trim());
            }
            });
        });
    });
    // 주소 복사하기 E


    // btnQuick S
        function btnQuick(){
            $('.fixBottomMenu').toggleClass('active')
        }
    // btnQuick E
// footer S


