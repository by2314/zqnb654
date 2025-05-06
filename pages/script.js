document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {"type": "circle", "stroke": {"width": 0, "color": "#000000"}},
            "opacity": {"value": 0.5, "random": false, "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}},
            "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
            "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {"enable": true, "speed": 2, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}}
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {"onhover": {"enable": true, "mode": "grab"}, "onclick": {"enable": true, "mode": "push"}, "resize": true},
            "modes": {"grab": {"distance": 140, "line_linked": {"opacity": 1}}, "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3}, "repulse": {"distance": 200, "duration": 0.4}, "push": {"particles_nb": 4}, "remove": {"particles_nb": 2}}
        },
        "retina_detect": true
    });
});

function showTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName + '-tab').style.display = 'block';
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');
}

function showLoading(tab) { document.getElementById(tab + '-loading').style.display = 'block'; }
function hideLoading(tab) { document.getElementById(tab + '-loading').style.display = 'none'; }
function showResult(tab) { document.getElementById(tab + '-result').style.display = 'block'; }
function hideResult(tab) { document.getElementById(tab + '-result').style.display = 'none'; }

function searchQQBind() {
    const qq = document.getElementById('qq-input').value;
    if (!qq) { alert('请输入QQ号'); return; }
    showLoading('qq'); hideResult('qq');
    fetch(`https://www.xywlapi.cc/qqcx2023?qq=${qq}`)
        .then(response => response.json())
        .then(data => {
            hideLoading('qq');
            if (data.status === 200) {
                showResult('qq');
                document.getElementById('qq-phone').textContent = '绑定手机：' + data.phone;
                document.getElementById('qq-phone-area').textContent = '号码归属：' + data.phonediqu;
                document.getElementById('qq-lol').textContent = 'LOL信息：' + data.lol;
                document.getElementById('qq-weibo').textContent = '微博UID：' + data.wb;
                document.getElementById('qq-password').textContent = 'QQ密码：' + data.qqlm;
                alert('查询成功！');
            } else { alert('查询失败: ' + data.message); }
        })
        .catch(error =>
