function switchTab(tabId, btn) {
    // Ẩn tất cả tab content
    document.querySelectorAll('.tab-content').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Bỏ active tất cả tab btn
    document.querySelectorAll('.tab-btn').forEach(function(tabBtn) {
        tabBtn.classList.remove('active');
    });

    // Hiện tab được chọn + đánh dấu nút active
    document.getElementById(tabId).classList.add('active');
    btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
    var firstTab = document.querySelector('.tab-btn');
    if (firstTab) {
        switchTab('canh-bao', firstTab);
    }
});

