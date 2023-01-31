import type { NextApiRequest, NextApiResponse } from 'next';

import { searchPostsQuery} from './../../../utils/queries';
import { client } from '../../../utils/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const { id }: any = req.query;
    
        const videoQueries = searchPostsQuery(id);
        const data = await client.fetch(videoQueries)
    
        res.status(200).json(data);
      }
}