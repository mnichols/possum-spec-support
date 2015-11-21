'use strict';

import test from 'blue-tape'
import possum from 'possum'
import specSupport from '../src'

test('[spec-support] inputs should be tracked',(assert) => {
    let sut = specSupport()
    sut.handle('foo',{arg: 1})
    assert.equal(sut.handled['foo'].length,1)
    assert.deepEqual(sut.handled['foo'][0], {arg: 1})
    assert.end()
})
test('[spec-support] transitions should be tracked',(assert) => {
    let sut = specSupport()
    sut.transition('foo')
    sut.transition('bar')
    assert.equal(sut.transitioned.length,2)
    assert.deepEqual(sut.transitioned[0],{toState: 'foo',fromState: 'UNDEFINED'})
    assert.deepEqual(sut.transitioned[1],{toState: 'bar',fromState: 'UNDEFINED'})
    assert.end()

})
