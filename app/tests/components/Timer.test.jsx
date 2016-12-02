import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import Timer from 'Timer';

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    it('should start timer on started status time', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange("started");



        setTimeout(() => {
            expect(timer.state.timerStatus).toBe('started');
            expect(timer.state.count).toBe(3);
            done();
        }, 3001);
    });
    it('should pause timer on paused status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);
        timer.handleStatusChange("started");

        setTimeout(() => {
            timer.handleStatusChange('paused');
            expect(timer.state.count).toBe(2);
            expect(timer.state.timerStatus).toBe('paused');
            done();
        }, 2001);
    });
    it('should stop timer on stopped status', (done) => {
        let timer = TestUtils.renderIntoDocument(<Timer/>);

        setTimeout(() => {
            timer.handleStatusChange('stopped');
            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('stopped');
            done();
        }, 1001);
    });

});
