import axios from 'axios';
import { photographersData } from '../data/photographers';
import { videographersData } from '../data/videographers';

// Placeholder API instance structured for future Node.js/Express connectivity
const API = axios.create({
  baseURL: 'https://api.photonest.com/v1',
  headers: { 'Content-Type': 'application/json' }
});

export const getPhotographers = async () => {
  const localSaved = JSON.parse(localStorage.getItem('photonest_photographers'));
  return localSaved || photographersData;
};

export const getPhotographerById = async (id) => {
  const list = await getPhotographers();
  return list.find((p) => p.id === id);
};

export const getVideographers = async () => {
  const localSaved = JSON.parse(localStorage.getItem('photonest_videographers'));
  return localSaved || videographersData;
};

export const getVideographerById = async (id) => {
  const list = await getVideographers();
  return list.find((v) => v.id === id);
};

export const registerProfessional = async (formData) => {
  const newPro = {
    id: `pro_${Date.now()}`,
    verified: false,
    rating: 5.0,
    reviewCount: 0,
    portfolio: [],
    reviews: [],
    ...formData
  };

  if (formData.profession === 'Videographer') {
    const list = await getVideographers();
    localStorage.setItem('photonest_videographers', JSON.stringify([newPro, ...list]));
  } else {
    const list = await getPhotographers();
    localStorage.setItem('photonest_photographers', JSON.stringify([newPro, ...list]));
  }
  return newPro;
};

export default API;