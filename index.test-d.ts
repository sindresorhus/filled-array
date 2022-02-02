import {expectType} from 'tsd';
import filledArray from '.';

expectType<string[]>(filledArray('x', 3));
expectType<number[]>(filledArray(0, 3));

expectType<string[]>(filledArray(index => `Hey ${(index as number)}`, 3));
