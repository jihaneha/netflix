import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from 'next';
import prismadb from '@/lib/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      return res.status(405).end();
    }

    const { email, password } = req.body;

    const existingUser = await prismadb.user.findUnique({
      where: {
        email
      }
    })

    if (!existingUser) {
      return res.status(422).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    return res.status(200).json({ success: true, user: existingUser });

  } catch (error) {
    return res.status(400).json({ error: `Something went wrong: ${error}` });
  }
}
