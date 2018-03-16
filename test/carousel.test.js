"use strict";

const carousel = require("./carousel");

describe("carousel implementation", () => {
    beforeEach(() => {
        document.body.innerHTML =
            '<div class="carousel">' +
            '<div class="carousel-content">' +
            '    <a class="carousel-item" style="transform:translateX(-440px); z-index:-2" id="1">' +
            '        <img src="assets/socia1.png">Lorem Ipsum is simply dummy text of the printing' +
            '    </a>' +
            '    <a class="carousel-item" style="transform:translateX(-220px); z-index:-1" id="2">' +
            '        <img src="assets/socia2.png">Lorem Ipsum is simply dummy text of the printing' +
            '    </a>' +
            '    <a class="active carousel-item" style="transform:translateX(0px); z-index:1" id="3">' +
            '        <img src="assets/socia3.png">Lorem Ipsum is simply dummy text of the printing' +
            '    </a>' +
            '    <a class="carousel-item" style="transform:translateX(220px); z-index:-1" id="4">' +
            '        <img src="assets/socia4.png">Lorem Ipsum is simply dummy text of the printing' +
            '    </a>' +
            '    <a class="carousel-item" style="transform:translateX(440px); z-index:-1" id="5">' +
            '        <img src="assets/socia5.png">Lorem Ipsum is simply dummy text of the printing' +
            '    </a>' +
            '</div>' +
            '</div>';
    });

    describe("carousel moving to right", () => {
        it("Move slides images to right when calling moveRight funcation", function () {
            carousel.moveRight();
            expect(document.getElementsByClassName("active")[0].getAttributeNode("id").value).toBe("2");
            carousel.moveRight();
            expect(document.getElementsByClassName("active")[0].getAttributeNode("id").value).toBe("1");
        });
    });


    describe("carousel moving to left", () => {
        it("Move slides images to left when calling moveLeft funcation", function () {
            carousel.moveLeft();
            expect(document.getElementsByClassName("active")[0].getAttributeNode("id").value).toBe("4");
            carousel.moveLeft();
            expect(document.getElementsByClassName("active")[0].getAttributeNode("id").value).toBe("5");
        });
    });
});