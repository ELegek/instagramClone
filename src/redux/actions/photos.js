import { api } from '../../api';
import { getPhotosFailed, getPhotosStarted, getPhotosSuccess } from '../actionCreators/photos';

export const getPhotos = () => {
	return async (dispath) => {
		try {
			dispath(getPhotosStarted);
			const response = api.photos.getPhotos({
				params: {
					_page: 0,
					_limit: 5,
				},
			});
			dispath(getPhotosSuccess(response.data));
		} catch (error) {
			dispath(getPhotosFailed(error));
		}
	};
};
