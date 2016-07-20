7-Segment Display
=========

A small library that controls a single digit 7-segment display.

## Installation
    `npm install 7-segment`

## Wiring

![7 segement display](https://upload.wikimedia.org/wikipedia/commons/0/02/7_segment_display_labeled.svg "Example 7-segment display.")
![7 segement wiring](https://raw.githubusercontent.com/sketchthat/7-segment-node/master/assets/7-segment_bb.png "Example wiring for 7-segment display.")

## Usage

    var segment = require('7-segment');

    var draw = new segment(0, 7, 5, 4, 1, 2, 3, 6); // OR your own wiring options

    draw.display('0'); // will display 0 on the 7-segment display
    draw.display('9'); // will display 9 on the 7-segment display
    draw.display('.'); // will display . on the 7-segment display

## Contributing

Open for improvements, create a pull request on GitHub.