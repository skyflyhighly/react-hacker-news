export const storyCount = 10;

export const formatTimestamp = (timeStamp: number): string => {
  const date = new Date(timeStamp * 1000);
  return date.toLocaleString();
};

export const getRandomItems = (array: number[], count: number): number[] => {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
