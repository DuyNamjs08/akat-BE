import { Request, Response } from 'express';
import { errorResponse, successResponse } from '../helpers/response';
import { httpStatusCodes } from '../helpers/statusCodes';
import axios from 'axios';

interface NominatimPlace {
  place_id: number | string;
  lat: string; // Vĩ độ
  lon: string; // Kinh độ
  display_name: string;
  type?: string;
  importance?: number;
  address?: {
    [key: string]: string;
  };
}

const MapController = {
  getCoordinates: async (req: Request, res: Response): Promise<void> => {
    const query = req.query.q as string;
    try {
      const response = await axios.get<NominatimPlace[]>(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1`,
        {
          headers: {
            'User-Agent': 'AkaMedia/1.0 (akamedia@gmail.com)',
          },
        },
      );
      successResponse(res, 'Success', response.data[0]);
    } catch (error: any) {
      errorResponse(
        res,
        error?.message,
        error,
        httpStatusCodes.INTERNAL_SERVER_ERROR,
      );
    }
  },

  getLocationName: async (req: Request, res: Response): Promise<void> => {
    try {
      const { lat, lon } = req.query;
      const response = await axios.get(
        'https://nominatim.openstreetmap.org/reverse',
        {
          params: {
            lat,
            lon,
            format: 'json',
          },
          headers: {
            'User-Agent': 'AkaMedia/1.0 (akamedia@gmail.com)',
          },
        },
      );
      successResponse(res, 'Success', response.data);
    } catch (error: any) {
      res.status(500).json({ error: 'lay vi tri hien tai failed' });
    }
  },
};

export default MapController;
