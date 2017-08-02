import React from 'react';
import * as actions from '../actions/searchActions';

test('searchRepositoriesRequest is a function', () => {
	expect(typeof actions.searchRepositoriesRequest).toBe('function');
});
test('searchRepositoriesRequest returns an object', () => {
	expect(typeof actions.searchRepositoriesRequest()).toBe('object');
});

test('searchRepositoriesSuccess is a function', () => {
	expect(typeof actions.searchRepositoriesSuccess).toBe('function');
});

test('searchRepositoriesSuccess returns an object', () => {
	expect(typeof actions.searchRepositoriesSuccess()).toBe('object');
});

test('searchRepositoriesSuccess returns data passed as paramater', () => {
	const repos = [1, 2, 3];
	const test1 = actions.searchRepositoriesSuccess(repos);
	expect(test1.data).toEqual([1, 2, 3]);
})

test('searchRepositoriesError is a function', () => {
	expect(typeof actions.searchRepositoriesError).toBe('function');
});

test('searchRepositoriesError returns an object', () => {
	expect(typeof actions.searchRepositoriesError()).toBe('object');
});
