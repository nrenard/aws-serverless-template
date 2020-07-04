import buildRequest from '../helpers/buildRequest';

export default async (event: any) => {
  const data = {
    message: 'Hello Que tal!',
  };

  return buildRequest({ data });
};
