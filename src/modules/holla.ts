import buildRequest from '../helpers/buildRequest';

export default async (event: any) => {
  const data = {
    message: 'Holla Que tal!',
  };

  return buildRequest({ data });
};
