(function (w) {
    function Swiper(selector, setting) {
        this.ele = document.querySelector(selector);
        this.setting = Object.assign({
            loop: false,
            pagination: false,
            autoPlay: false,
        }, setting);
        this.count = 0;
        this.w = this.ele.children[0].offsetWidth;
        this.init();
    }

    Swiper.prototype = {
        init() {
            this.initWidth();
            this.initArrow()
            if (this.setting.pagination) {
                this.initPagination();
            }
        },
        // 初始化宽度
        initWidth() {
            var childArr = this.ele.children;
            if (this.setting.loop) {
                this.ele.appendChild(childArr[0].cloneNode(true));
            }
            this.ele.style.width = childArr.length * 100 + "%";
            for (var i = 0; i < childArr.length; i++) {
                childArr[i].style.width = 100 / childArr.length + "%";
            }
            this.w = childArr[0].offsetWidth;
        },
        // 初始化箭头
        initArrow() {
            var str = `<div class="arrow left"><</div><div class="arrow">></div>`
            this.ele.insertAdjacentHTML("afterEnd", str);
            var arrows = document.querySelectorAll(".arrow");
            var that = this;
            console.log(that);

            // left
            arrows[0].onclick = function () {
                if (that.count == 0) {
                    if (that.setting.loop) {
                        that.count = that.ele.children.length - 1;
                        that.ele.style.left = that.count * -that.w + "px"
                    } else {
                        that.count = that.ele.children.length;
                    }
                }
                that.count--;
                that.doThings()
            }
            // right
            arrows[1].onclick = function () {
                if (that.count == that.ele.children.length - 1) {
                    if (that.setting.loop) {
                        that.count = 0;
                        that.ele.style.left = "0px";
                    } else {
                        that.count = -1;
                    }
                }
                that.count++;
                that.doThings();
            }
        },
        doThings() {
            document.querySelector(".pagination .act").classList.remove("act");
            var index = this.count == this.ele.children.length - 1 && this.setting.loop ? 0 : this.count;
            document.querySelectorAll(".pagination li")[index].classList.add("act");
            this.move()
        },
        // 初始化小点
        initPagination() {
            length = this.ele.children.length;
            length = this.setting.loop ? length - 1 : length;
            var str = `<ul class="pagination">`;
            for (var i = 0; i < length; i++) {
                str += `<li data-index="${i}"  class="${i == 0 ? "act" : ""}"></li>`;
            }
            str += `</ul>`;
            this.ele.insertAdjacentHTML("afterEnd", str);
            var dot = document.querySelector(".pagination");
            var that = this;
            dot.onclick = function () {
                if (event.target.tagName == "LI") {
                    that.count = event.target.dataset.index;
                    that.doThings();
                }
            }
        },
        // 运动函数
        move() {
            var ele = this.ele,
                target = -this.count * this.w;
            if (ele.timer) {
                clearInterval(ele.timer);
            }
            ele.timer = setInterval(function () {
                var start = ele.offsetLeft;
                var step = (target - start) / 10;
                if (Math.abs(step) < 1) {
                    step = step > 0 ? 1 : Math.floor(step);
                }
                ele.style.left = start + step + "px";
                if (start + step === target) {
                    clearInterval(ele.timer);
                }
            }, 1000 / 60);
        }
    },

        w.Swiper = Swiper;
})(window)