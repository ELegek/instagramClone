import { api } from '../../api';
import {
	getPhotosFailed,
	getPhotosStarted,
	getPhotosSuccess,
	setPhotosTotal,
} from '../actionCreators/photos';

export const getPhotos = (page = 0) => {
	return async (dispath) => {
		try {
			dispath(getPhotosStarted);
			const response = await api.photos.getPhotos({
				params: {
					_page: page,
					_limit: 5,
				},
			});

			dispath(setPhotosTotal(response.headers['x-total-count']));
			dispath(getPhotosSuccess(response.data));
		} catch (error) {
			dispath(getPhotosFailed(error));
		}
	};
};
