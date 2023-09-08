const baseURL = location.origin;

// для локальной разработки нужно использовать оригинальный урл бэка:
// const baseURL = 'http://185.105.88.18:8081';

export const baseRefetchInterval = 3 * 60 * 1000;

export const baseLimit = 15;

export const getNFTsInfo = async (address) => {
  const res = await fetch(`${baseURL}/nft/${address}`);

  if (!res.ok) throw new Error('Cannot get NFTs for address');

  return await res.json();
};

export const getOwners = async (page) => {
  const res = await fetch(`${baseURL}/get_owners?limit=${baseLimit}&page=${page}`);

  if (!res.ok) throw new Error('Cannot get owners');

  return await res.json();
};

export const getWBGL = async () => {
  const res = await fetch(`${baseURL}/get_wbgl`);

  if (!res.ok) throw new Error('Cannot get WBGL');

  return await res.json();
};

export const getRoundNumber = async () => {
  const res = await fetch(`${baseURL}/get_round`);

  if (!res.ok) throw new Error('Cannot get round');

  return await res.json();
};

export const getLastPayment = async () => {
  const res = await fetch(`${baseURL}/get_last_trade`);

  if (!res.ok) throw new Error('Cannot get last payment');

  return await res.json();
};

export const getLastLucky = async () => {
  const res = await fetch(`${baseURL}/get_lucky_hash`);

  if (!res.ok) throw new Error('Cannot get last lucky');

  return await res.json();
};

export const getLastWinners = async () => {
  const res = await fetch(`${baseURL}/get_last_winners`);

  if (!res.ok) throw new Error('Cannot get last winners');

  return await res.json();
};

export const getBlockchainData = async () => {
  const res = await fetch(`${baseURL}/get_blockchain_data`);

  if (!res.ok) throw new Error('Cannot get blockchain data');

  return await res.json();
};

export const getTickets = async () => {
  const res = await fetch(`${baseURL}/get_tickets`);

  if (!res.ok) throw new Error('Cannot get tickets');

  return await res.json();
};

export const getTicketsCount = async () => {
  const res = await fetch(`${baseURL}/get_tickets_count`);

  if (!res.ok) throw new Error('Cannot get tickets count');

  return await res.json();
};

export const getPagesCount = async () => {
  const res = await fetch(`${baseURL}/get_pages/${baseLimit}`);

  if (!res.ok) throw new Error('Cannot get pages count');

  return await res.json();
};

export const searchOwner = async (address) => {
  const res = await fetch(`${baseURL}/get_owners?search=${address}`);

  if (!res.ok) throw new Error('Cannot get owners');

  return await res.json();
};
