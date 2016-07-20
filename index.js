'use strict';

var wpi = require('wiring-pi');

/**
 * Controls single digit 7-segment display
 * @param {number} configA
 * @param {number} configB
 * @param {number} configC
 * @param {number} configD
 * @param {number} configE
 * @param {number} configF
 * @param {number} configG
 * @param {number} configDP
 */
var draw = function(configA, configB, configC, configD, configE, configF, configG, configDP) {
    wpi.setup('wpi');

    var ledOn = 1;
    var ledOff = 0;

    wpi.pinMode(configA, wpi.OUTPUT);
    wpi.pinMode(configB, wpi.OUTPUT);
    wpi.pinMode(configC, wpi.OUTPUT);
    wpi.pinMode(configD, wpi.OUTPUT);
    wpi.pinMode(configE, wpi.OUTPUT);
    wpi.pinMode(configF, wpi.OUTPUT);
    wpi.pinMode(configG, wpi.OUTPUT);
    wpi.pinMode(configDP, wpi.OUTPUT);

    var drawReset = function() {
        wpi.digitalWrite(configA, ledOff);
        wpi.digitalWrite(configB, ledOff);
        wpi.digitalWrite(configC, ledOff);
        wpi.digitalWrite(configD, ledOff);
        wpi.digitalWrite(configE, ledOff);
        wpi.digitalWrite(configF, ledOff);
        wpi.digitalWrite(configG, ledOff);
        wpi.digitalWrite(configDP, ledOff);
    };

    this.rotate = function() {
        var i = 0;

        setInterval(function() {
            drawReset();

            if (i == 0) {
                wpi.digitalWrite(configA, ledOn);
            } else if (i == 1) {
                wpi.digitalWrite(configB, ledOn);
            } else if (i == 2) {
                wpi.digitalWrite(configC, ledOn);
            } else if (i == 3) {
                wpi.digitalWrite(configD, ledOn);
            } else if (i == 4) {
                wpi.digitalWrite(configE, ledOn);
            } else if (i == 5) {
                wpi.digitalWrite(configF, ledOn);
                i = -1;
            }

            i++;
        }, 200);
    }

    this.display = function(number) {
        drawReset();

        if (number == '0') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configE, ledOn);
            wpi.digitalWrite(configF, ledOn);
        } else if (number == '1') {
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
        } else if (number == '2') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configE, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '3') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '4') {
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configF, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '5') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configF, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '6') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configE, ledOn);
            wpi.digitalWrite(configF, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '7') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
        } else if (number == '8') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configE, ledOn);
            wpi.digitalWrite(configF, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '9') {
            wpi.digitalWrite(configA, ledOn);
            wpi.digitalWrite(configB, ledOn);
            wpi.digitalWrite(configC, ledOn);
            wpi.digitalWrite(configD, ledOn);
            wpi.digitalWrite(configF, ledOn);
            wpi.digitalWrite(configG, ledOn);
        } else if (number == '.') {
            wpi.digitalWrite(configDP, ledOn);
        }
    };
};

module.exports = draw;