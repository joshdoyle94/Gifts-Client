import apiUrl from '../apiConfig'
import axios from 'axios'

export const giftCreate = (data, user) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/gifts',
		data: {
			gift: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const giftIndex = (user) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/gifts'
	})
}

export const giftShow = (user, id) => {
	return axios({
		method: 'GET',
		url: apiUrl + '/gifts/' + id
	})
}

export const giftUpdate = (data, user, id) => {
	return axios({
		method: 'PATCH',
		url: apiUrl + '/gifts/' + id,
		data: {
			gift: data,
		},
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

export const giftDelete = (user, id) => {
	return axios({
		method: 'DELETE',
		url: apiUrl + '/gifts/' + id,
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}