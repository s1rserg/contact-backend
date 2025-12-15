import { ContactRequest } from '../types';

export const toContactRequestMapper = <T extends ContactRequest>(
  requestLike: T,
): ContactRequest => ({
  id: requestLike.id,
  email: requestLike.email,
  name: requestLike.name,
  message: requestLike.message,
  createdAt: requestLike.createdAt,
});
