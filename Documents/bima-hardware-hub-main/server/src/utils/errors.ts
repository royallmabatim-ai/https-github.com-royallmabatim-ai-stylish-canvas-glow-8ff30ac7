export const createError = (message: string, statusCode: number = 400): Error => {
  const error = new Error(message);
  (error as any).statusCode = statusCode;
  return error;
};

export const handleAsyncErrors = (fn: Function) => {
  return (...args: any[]) => Promise.resolve(fn(...args)).catch(args[args.length - 1]);
};
