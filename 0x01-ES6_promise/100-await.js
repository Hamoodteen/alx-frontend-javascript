import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  return Promise
    .all([uploadPhoto(), createUser()])
    .then();
}
