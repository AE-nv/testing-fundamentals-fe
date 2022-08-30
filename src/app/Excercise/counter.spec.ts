import {Counter} from './counter';
import {Api} from './api';
import { Observable, of } from 'rxjs';

describe('Counter2', () => {
var counter;

var api  = new Api();
api.getMessage = jest.fn().mockImplementation(() => of("Hello"));

beforeEach(() => {counter = new Counter(api); })

test('Newly created counter starts with 0', async () => {
   await expect(counter.getCounter()).resolves.toEqual(0);
});

test('Newly created counter starts with 0', async () => {
   await counter.increase();
   await counter.increase();
   await counter.increase();
   await expect(counter.getCounter()).resolves.toEqual(3);
   expect(api.getMessage).toBeCalledTimes(3);

});
});

