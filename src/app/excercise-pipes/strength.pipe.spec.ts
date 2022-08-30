import {StrengthPipe} from './strength.pipe';

describe('StrengthPipe', () => {

it('creates an instance',  () => {
    var pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
    });

it('expect 5 to be weak',  () => {
    var pipe = new StrengthPipe();
    expect(pipe.transform(5)).toEqual("5 (weak)");
    });
});
