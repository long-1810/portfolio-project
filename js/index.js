const TYPING_SPEED = 80
const DELETE_SPEED = 50
const TYPE_DELAY = 4000


class AutoTyper {
    /**
     * @param {HTMLElement} element - Phần tử DOM hiển thị chữ
     * @param {Array<string>} words - Mảng các từ cần gõ
     * @param {Object} options - Cấu hình thêm (tốc độ gõ, xóa, thời gian chờ)
     */
    constructor(element, words, options = {}) {
        this.element = element;
        this.words = words;
        
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.delayBetween = options.delayBetween || 2000;

        this.wordIndex = 0;
        this.currentText = '';
        this.isDeleting = false;

        this.tick();
    }

    tick() {
        const currentWordIndex = this.wordIndex % this.words.length;
        const fullWord = this.words[currentWordIndex];

        if (this.isDeleting) {
            this.currentText = fullWord.slice(0, this.currentText.length - 1);
        } else {
            this.currentText = fullWord.slice(0, this.currentText.length + 1);
        }

        this.element.innerHTML = `${this.currentText}`;
        let dynamicSpeed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;

        if (!this.isDeleting && this.currentText === fullWord) {
            dynamicSpeed = this.delayBetween;
            this.isDeleting = true;
        } 
        else if (this.isDeleting && this.currentText === '') {
            this.isDeleting = false;
            this.wordIndex++;
            dynamicSpeed = 500;
        }

        setTimeout(() => this.tick(), dynamicSpeed);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const targetElement = document.getElementById('typing-text');
    
    if (targetElement) {
        const displayInfo = ["Sinh viên tại: ULIS-VNU", "Lớp: 25E6", "Mã số sinh viên: 25040135",];
        
        // Khởi tạo cực kỳ gọn gàng và dễ mở rộng
        new AutoTyper(targetElement, displayInfo, {
            typeSpeed: TYPING_SPEED,      // Gõ nhanh hơn một chút
            deleteSpeed: DELETE_SPEED,    // Xóa nhanh hơn
            delayBetween: TYPE_DELAY  // Chờ 1.5 giây rồi xóa
        });
    }
});